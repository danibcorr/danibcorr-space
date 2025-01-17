---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Herramientas necesarias para DevOps.
title: Kubernetes
toc_max_heading_level: 4
---

### 1. Introducción

<p align="center">
  <img src={require("../../../img/kubernetes-logo.png").default} width="500"/>
  <br />
  <em>Logo de Kubernetes</em>
</p>

La adopción de Kubernetes se motiva principalmente por la necesidad de
administrar de manera eficiente y escalable múltiples contenedores de Docker
distribuidos en diversos servidores. Kubernetes facilita la orquestación de
estos contenedores a través de una infraestructura declarativa. En este enfoque,
los usuarios definen la configuración deseada en un manifiesto, es decir, un
archivo de configuración, que se procesa mediante la API de Kubernetes.
Kubernetes asume la responsabilidad de distribuir la carga de trabajo entre los
nodos disponibles y de administrar los recursos requeridos por los contenedores.

Kubernetes también posibilita la construcción de pipelines ETL utilizando
herramientas como Spark o Airflow, y se emplea extensamente en el entrenamiento
de modelos de aprendizaje automático, como se evidencia en su uso en Kubeflow.
Al gestionar la infraestructura de cómputo, redes y almacenamiento, Kubernetes
simplifica la implementación y administración de aplicaciones en contenedores a
gran escala.

### 1.1. Componentes de Kubernetes

**Kubectl** es una interfaz de línea de comandos que facilita la interacción con
un clúster de Kubernetes, permitiendo la gestión de objetos como pods, servicios
y despliegues.

Para la creación de un clúster de Kubernetes en un entorno local, se utiliza
**Minikube**. Esta herramienta permite la ejecución de Kubernetes de manera
local para fines de prueba o desarrollo, creando un clúster con uno o varios
nodos virtualizados. Por defecto, Minikube crea un clúster que contiene un nodo.

Para inicializar el clúster de Minikube podemos utilizar el comando:

```bash
minikube start
```

Mientras que para verificar el estado del clúster, podemos utilizar el comando:

```bash
minikube status
```

#### 1.1.1. Nodo

Un nodo representa la unidad más pequeña dentro de un clúster de Kubernetes.
Este puede ser una máquina física o una máquina virtual donde se ejecutan las
aplicaciones. Kubernetes abstrae el hardware subyacente, permitiendo una gestión
eficiente de los requisitos de recursos. Si un nodo no puede proporcionar más
recursos o falla, Kubernetes redistribuye las cargas de trabajo a otros nodos
disponibles.

Existen diferentes tipos de nodos:

- **Nodos bajo demanda (On-Demand Nodes)**: Se crean cuando los recursos son
  elevados (CPU, GPU, RAM).
- **Nodos al mejor precio (Spot Nodes)**: Son nodos más económicos que pueden
  ser retirados en cualquier momento.

#### 1.1.2. Pod

Un pod es la unidad mínima de ejecución en Kubernetes y puede contener uno o más
contenedores que comparten los mismos recursos y red local. Todos los
contenedores dentro del mismo pod pueden comunicarse entre sí y comparten el
mismo entorno de red. Al escalar un pod, todos los contenedores dentro de él se
escalan conjuntamente.

#### 1.1.3. Clúster

Un clúster es un conjunto de nodos, también conocidos como workers, que se
ejecutan en Kubernetes. La relación entre las aplicaciones que se están
ejecutando en cada nodo es independiente. Por ejemplo, si se tiene un servidor
de Proxmox donde existen dos máquinas virtuales, VM1 y VM2, a pesar de que
cuenten con diferentes Pods, si todos están gestionados por Kubernetes, ambos
formarán parte del mismo clúster.

### 1.2. StatefulSet y volúmenes

Dado que no se puede garantizar el lugar de ejecución de una aplicación, el uso
del disco local para almacenar datos es inviable, siendo útil únicamente para
almacenamiento temporal de datos, como caché.

Kubernetes emplea volúmenes persistentes, que a diferencia de otros recursos
como la CPU, GPU y RAM, que son gestionados por los clústeres de Kubernetes,
deben ser adjuntados al propio clúster de Kubernetes desde unidades locales o en
la nube. Estos volúmenes no se asocian a un nodo en particular.

**StatefulSet** permite la creación de pods con volúmenes persistentes,
garantizando la integridad de los datos incluso si el pod se reinicia o se
elimina.

```yaml
# Versión de la API de Kubernetes que se está utilizando
apiVersion: apps/v1

# Tipo de recurso que se está creando
kind: StatefulSet

metadata:
  # Nombre del StatefulSet
  name: my-csi-app-set

spec:
  selector:
    matchLabels:
      # Etiqueta que debe coincidir para que un pod sea considerado parte
      # de este StatefulSet
      app: my-frontend

  # Nombre del servicio que se utilizará para este StatefulSet
  serviceName: "my-frontend"

  # Número de réplicas del pod que se mantendrán en ejecución
  replicas: 1

  # Plantilla que define los pods que se crearán
  template:
    metadata:
      labels:
        # Etiquetas para los pods que se crearán
        app: my-frontend

    spec:
      containers: # Lista de contenedores que se ejecutarán en cada pod
        - name: my-frontend # Nombre del contenedor
          image: busybox # Imagen del contenedor que se utilizará
          args:
            - sleep
            - infinity # Argumentos que se pasarán al contenedor
          volumeMounts: # Puntos de montaje de los volúmenes en el contenedor
            - name: data # Nombre del volumen
              mountPath: "/data" # Ruta en la que se montará el volumen

  # Plantillas para las solicitudes de volumen persistente
  volumeClaimTemplates:
    - metadata:
        # Nombre de la solicitud de volumen persistente
        name: csi-pvc

      spec:
        # Modos de acceso para el volumen
        accessModes: ["ReadWriteOnce"]

        resources:
          requests:
            # Cantidad de almacenamiento solicitado
            storage: 1Gi
```

Para verificar el estado de los volúmenes y los StatefulSets, se pueden utilizar
los siguientes comandos:

```bash
kubectl get pvc  # Para ver la asignación del volumen, capacidad, etc.
kubectl get sts  # Para ver los StatefulSets.
```

### 1.3. Manifiestos

Un manifiesto es un archivo en formato YAML o JSON que especifica cómo desplegar
una aplicación en un clúster de Kubernetes. Este archivo se conoce como un
registro de intención, donde se le indica a Kubernetes el estado deseado del
clúster.

Además, es importante definir lo que es un namespace, que es la división lógica
del clúster de Kubernetes, permitiendo separar la carga del clúster. Se pueden
crear políticas para separar tráfico entre namespaces. Por defecto, los datos de
un namespace se pueden ver desde otro namespace.

Para obtener el namespace del clúster podemos utilizar el comando:

```bash
kubectl get ns
```

Para obtener los pods de ese namespace podemos utilizar el siguiente comando,
que al añadir al final -o wide, obtenemos información de la IP del pod, nodo,
etc.

```bash
kubectl -n nombre_namespace get pods -o wide
```

Para eliminar un pod del namespace podemos utilizar el comando

```bash
kubectl -n nombre_namespace delete pod nombre_pod
```

Ejemplo de manifiesto para crear un Pod simple:

```yaml
# Versión de la API del recurso de Kubernetes, está asociado al tipo
# por lo que hay que mirar la documentación.
apiVersion: v1

# Tipo del manifiesto.
kind: Pod

# Nombre del Pod.
metadata:
  name: nginx

# Contenedores que se ejecutan dentro de este pod. Todos los contenedores
# que se ejecutan dentro de un Pod, tienen la misma IP.
spec:
  containers:
    - name: nginx
      image: nginx:alpine
```

Para aplicar el manifiesto:

```bash
kubectl apply -f nombre.yaml  # Aplica el manifiesto en el namespace por defecto
kubectl get pods  # Ver el estado del pod
```

Ejemplo de manifiesto para crear un Pod más complejo:

El siguiente manifiesto contiene variables de entorno, así como solicitudes y
límites de recursos, además de readiness probe y liveness probe.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx:alpine
      env:
        # Variables de entorno, al igual que en Docker. Esto es específico
        # de cada contenedor.
        - name: MI_VARIABLE
          value: "pelado"
        - name: MI_OTRA_VARIABLE
          value: "pelade"
        - name: DD_AGENT_HOST
          valueFrom:
            fieldRef:
              # Obtener la IP del Host a partir de la API de Kubernetes.
              fieldPath: status.hostIP
      resources:
        # Recursos garantizados siempre. La instancia debe tener esto, sino
        # no puede hacer el despliegue.
        requests:
          memory: "64Mi"
          # Medida en milicores, donde 1000 milicores es 1 core de CPU.
          cpu: "200m"
        # Límite que puede alcanzar el Pod, si usa más recursos, el kernel de
        # Linux mata el proceso y el pod se reinicia.
        limits:
          memory: "128Mi"
          cpu: "500m"
      # Manera de decirle a Kubernetes que el Pod está listo para recibir
      # tráfico
      readinessProbe:
        httpGet:
          path: /
          port: 80
        initialDelaySeconds: 5
        periodSeconds: 10
      # Manera de decirle a Kubernetes que el Pod está vivo y que no lo mate
      livenessProbe:
        tcpSocket:
          port: 80
        initialDelaySeconds: 15
        periodSeconds: 20
      # Exponer el puerto 80 para nginx.
      ports:
        - containerPort: 80
```

### 1.4. Despliegue y gestión de réplicas

Un despliegue permite declarar el número de réplicas, es decir, el número de
Pods, y asegurar que el estado deseado se mantenga, monitorizándolos.

```yaml
# Versión de la API del recurso de Kubernetes, está asociado al tipo
# por lo que hay que mirar la documentación.
apiVersion: apps/v1

# Tipo del manifiesto.
kind: Deployment

# Nombre del Despliegue.
metadata:
  name: nginx-deployment

spec:
  # Número de réplicas del pod que se mantendrán en ejecución.
  replicas: 3

  # Etiqueta que debe coincidir para que un pod sea considerado parte de este Despliegue.
  selector:
    matchLabels:
      app: nginx

  # Plantilla que define los pods que se crearán.
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:alpine
          ports:
            - containerPort: 80
```

### 1.5. DaemonSet

Un DaemonSet es una forma de hacer un despliegue de un Pod, pero este Pod va a
estar en todos los nodos del clúster. Un solo Pod en cada nodo. No se especifica
por tanto el número de réplicas, porque depende del número de nodos. Se suele
utilizar mucho para servicios de monitoreo.

```yaml
# Versión de la API del recurso de Kubernetes, está asociado al tipo
# por lo que hay que mirar la documentación.
apiVersion: apps/v1

# Tipo del manifiesto.
kind: DaemonSet

# Nombre del DaemonSet.
metadata:
  name: nginx-daemonset

spec:
  # Etiqueta que debe coincidir para que un pod sea considerado parte de este DaemonSet.
  selector:
    matchLabels:
      app: nginx

  # Plantilla que define los pods que se crearán.
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:alpine
```

### 1.6. Exponer aplicaciones

#### 1.6.1. Servicios en Kubernetes

Los servicios en Kubernetes permiten acceder a los pods desde dentro y fuera del
clúster. Un ejemplo de esto es el uso de un Load Balancer:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mi-servicio
spec:
  type: LoadBalancer
  selector:
    app: mi-aplicacion
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
```

#### 1.6.2. Ingress

Ingress administra el acceso externo a los servicios del clúster, típicamente
HTTP. Proporciona balanceo de carga y terminación SSL. Permite el acceso al
servicio mediante paths, y suele requerirse Ingress-Nginx controller que se
suele instalar por separado.

### 1.7. Networking y almacenamiento

#### 1.7.1. Pod Networking

Cada pod tiene su propia IP, y para comunicar pods en diferentes nodos se
utiliza el Cloud Cluster Networking Interface.

#### 1.7.2. Almacenamiento persistente

**etcd** es un almacén de datos clave-valor distribuido utilizado para guardar
datos de configuración, estado y metadatos.

### 1.8. Tipos de servicios

#### 1.8.1. Cluster IP

Cluster IP proporciona una forma de exponer aplicaciones que se ejecutan en un
conjunto de Pods a través de una dirección IP virtual única a nivel de clúster,
facilitando la comunicación y balanceo de carga entre Pods.

#### 1.8.2. Node Port

Node Port crea un puerto en cada nodo que va a recibir el tráfico y lo va a
mandar a los servicios (Pods) necesarios²⁶. Esto permite que la aplicación sea
accesible desde fuera del clúster. Suele utilizar puertos dentro del rango
30000-32767.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mi-servicio
spec:
  type: NodePort
  selector:
    app: mi-aplicacion
  ports:
    - port: 80
      targetPort: 9376
      nodePort: 30007
```

#### 1.8.3. Load Balancer

Load Balancer está más enfocado a proveedores de la nube para redireccionar el
tráfico en los Pods. Crea un balanceador de carga proporcionando una IP estable
para el servidor, lo que facilita su acceso desde internet.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mi-servicio
spec:
  type: LoadBalancer
  selector:
    app: mi-aplicacion
  ports:
    - port: 80
      targetPort: 80
```
