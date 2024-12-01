---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Herramientas necesarias para DevOps.
title: DevOps
toc_max_heading_level: 4
---

# Bibliografía

* [Aprende Docker ahora! curso completo gratis desde cero!](https://youtu.be/4Dko5W96WHg?si=pOAHHRxpPkqpQ2go)
* [Docker Docs](https://docs.docker.com/)
* [DevOps con Docker, Jenkins, Kubernetes, git, GitFlow CI y CD](https://www.udemy.com/course/devops-con-dockers-kubernetes-jenkins-y-gitflow-cicd/)
* [minikube Docs](https://minikube.sigs.k8s.io/docs/)
* [Kubernetes Tutorials](https://youtube.com/playlist?list=PLiMWaCMwGJXnHmccp2xlBENZ1xr4FpjXF&si=mxLcHpXxnZUhSGu3)
* [KUBERNETES De NOVATO a PRO! (CURSO COMPLETO EN ESPAÑOL)](https://youtu.be/DCoBcpOA7W4?si=KioSNJrOkZp-Dx5K)
  
## 1. Introducción a DevOps

<p align="center">
  <img src={require("../../img/devops-logo.png").default} width="500"/>
  <br />
  <em>Ciclo de vide de un proyecto DevOps</em>
</p>

**DevOps** es una filosofía y práctica que combina el desarrollo de software (Dev) con la operación de sistemas de IT (Ops) para mejorar la colaboración, la automatización y la entrega continua de software. Su objetivo principal es acortar el ciclo de vida de desarrollo de software, entregando aplicaciones de alta calidad de manera más rápida y eficiente.

Algunos de los conceptos clave en DevOps son:

* **Control de versiones**: Utiliza herramientas como **Git**, **GitHub** o **GitLab** para mantener un repositorio centralizado de código. Esto permite la colaboración, el seguimiento de cambios y la gestión eficiente del código fuente.
  
* **Integración Continua (CI)**: Implementa **pipelines de integración** usando herramientas como **Jenkins** o **GitLab CI/CD**. CI asegura que cada cambio en el código se compile y se pruebe automáticamente, identificando problemas de integración lo antes posible.

* **Entrega Continua (CD)**: Se refiere a la práctica de desplegar software de manera rápida y confiable en cualquier momento. Herramientas como **ArgoCD** y **GitOps** se utilizan para automatizar los despliegues y asegurar que el software esté siempre listo para ser puesto en producción.

* **Infraestructura como Código (IaC)**: Utiliza herramientas como **Terraform**  o **Ansible** para definir y gestionar la infraestructura a través de archivos de configuración basados en texto, generalmente de tipo **YAML**. IaC permite la automatización y reproducibilidad de entornos, reduciendo errores y acelerando la provisión de recursos.

Además DevOps también requiere de prácticas adicionales para optimizar todo el ciclo de vida del desarrollo, que incluyen:

* **Monitorización y registro**: Implementa soluciones como **Prometheus** o **Grafana** para recopilar métricas de rendimiento, monitorear sistemas, detectar fallos y facilitar la resolución de problemas en tiempo real.

* **Aprendizaje validado**: Medir el retorno de inversión (*Return Of Investment*, ROI) de las herramientas de automatización mediante **KPIs** (*Key Performance Indicators*) para evaluar la eficiencia del proceso y asegurar la mejora continua. Ejemplos de KPIs incluyen **Tiempo de ciclo de desarrollo**, **Frecuencia de despliegue**, **Tiempo medio de recuperación (MTTR)** y **Tasa de fallos en despliegues**.

## 2. Docker

<p align="center">
  <img src={require("../../img/docker-logo.png").default} width="500"/>
  <br />
  <em>Logo de Docker</em>
</p>

**Docker** es una plataforma de código abierto que facilita la creación, implementación y ejecución de aplicaciones mediante contenedores. Los contenedores permiten empaquetar una aplicación con sus dependencias y configuraciones en una unidad estandarizada para el desarrollo de software.

### 2.1. Características principales

- **Portabilidad**: Los contenedores Docker pueden ejecutarse en cualquier sistema que soporte Docker, independientemente del sistema operativo subyacente.
- **Ligereza**: Los contenedores comparten el kernel del sistema operativo host, lo que los hace más ligeros y rápidos de iniciar.
- **Consistencia**: Docker asegura que una aplicación se ejecute de la misma manera en cualquier entorno.
- **Aislamiento**: Cada contenedor opera de manera aislada, mejorando la seguridad y evitando conflictos entre aplicaciones.
- **Escalabilidad**: Docker facilita la creación y destrucción rápida de instancias de aplicaciones.

### 2.2. Diferencia entre un contenedor y una máquina virtual

Los contenedores y las máquinas virtuales son tecnologías de virtualización que permiten ejecutar múltiples aplicaciones en un solo servidor físico. Aunque comparten algunos objetivos, como la eficiencia del uso de recursos y el aislamiento de aplicaciones, difieren significativamente en su implementación, uso, y arquitectura subyacente.

#### 2.2.1. Contenedores

<p align="center">
  <img src="https://profile.es/wp-content/media/image-1-1024x266.png"/>
  <br />
  <em>Pasos para la creación de un contenedor de Docker</em>
</p>

Los **contenedores** son una forma de virtualización a nivel del sistema operativo, también conocida como "virtualización ligera". En lugar de virtualizar todo un sistema operativo (SO), los contenedores comparten el núcleo del SO del host y ejecutan aplicaciones en espacios de usuario completamente aislados. Esta configuración permite ejecutar múltiples contenedores de forma paralela y aislada, minimizando la interferencia entre ellos.

Cada contenedor incluye solo la aplicación y sus dependencias, como bibliotecas, archivos de configuración y variables de entorno, lo que lo hace extremadamente **portátil** y fácil de desplegar en diferentes entornos, desde la máquina de un desarrollador hasta un clúster en la nube.

##### Características de los Contenedores

- **Imágenes y Contenedores**: 
  - **Imágenes**: Paquetes inmutables que contienen la aplicación y sus dependencias necesarias para ejecutarla. Las imágenes son reutilizables y almacenadas en repositorios como [**Docker Hub**](https://hub.docker.com/).
  - **Contenedores**: Instancias de imágenes en ejecución que pueden crearse, detenerse y eliminarse rápidamente.

- **Aislamiento**: 
  - Utilizan características del kernel de Linux para aislar procesos, sistemas de archivos, redes, etc., proporcionando un entorno independiente por contenedor.
  - **Namespaces** (espacios de nombres) proporcionan aislamiento de recursos del sistema operativo:
    - `pid`: Aisla los identificadores de procesos.
    - `net`: Proporciona pilas de red separadas.
    - `mnt`: Aisla los puntos de montaje del sistema de archivos.
    - `ipc`: Aisla los recursos de comunicación entre procesos.
    - `uts`: Aisla nombres de host y dominios.
    - `user`: Aisla identificadores de usuarios y grupos.
  - **cgroups** (grupos de control) gestionan el uso de recursos como CPU, memoria y disco, garantizando que los contenedores no utilicen más recursos de los asignados.
  
- **Union Filesystem (UFS)**: Permite que los contenedores se construyan en capas. Las capas de solo lectura se utilizan para los archivos del sistema, mientras que las capas de escritura se mantienen en la parte superior, minimizando el uso de almacenamiento y facilitando el desarrollo iterativo.

- **Ligereza**: Los contenedores no incluyen un SO completo; se ejecutan como procesos en el SO del host, lo que los hace mucho más ligeros que las máquinas virtuales.

##### Casos de Uso de los Contenedores

Los contenedores son ideales para:

- **Desarrollo y pruebas**: Permiten a los desarrolladores trabajar en un entorno que replica exactamente el entorno de producción.
- **Microservicios**: Separan aplicaciones en componentes pequeños y desplegables, que pueden ser escalados de forma independiente.
- **Despliegue Continuo**: Facilitan CI/CD al permitir que las aplicaciones se empaqueten y desplieguen de manera uniforme.

#### 2.2.2. Máquinas Virtuales

**Máquinas virtuales (VMs)** son una tecnología de virtualización más tradicional que permite ejecutar múltiples sistemas operativos en un único servidor físico mediante un hipervisor, como **VMware** o **VirtualBox**.

##### Características de las Máquinas Virtuales

- **Hipervisor**: Un hipervisor se ejecuta directamente en el hardware del servidor (hipervisor de tipo 1) o sobre un sistema operativo (hipervisor de tipo 2). Este gestiona la creación y ejecución de múltiples VMs, asignando recursos de hardware de manera efectiva.
  
- **Sistema operativo completo**: Cada VM tiene su propio sistema operativo completo (por ejemplo, Linux, Windows) que se ejecuta de manera aislada, lo que significa que las VMs consumen más recursos de CPU, memoria y almacenamiento que los contenedores.

- **Aislamiento fuerte**: Debido a que cada VM tiene su propio kernel y SO, proporciona un aislamiento más fuerte que los contenedores. Esto es útil en casos donde la seguridad es crítica.

- **Rendimiento y uso de recursos**: Las VMs son más pesadas y tienen tiempos de inicio más largos comparados con los contenedores. Requieren más recursos debido a la necesidad de un sistema operativo completo y de un hipervisor.

##### Casos de Uso de las Máquinas Virtuales

Las máquinas virtuales son adecuadas para:

- **Aplicaciones monolíticas**: Donde el aislamiento del SO completo es necesario.
- **Entornos multi-SO**: Para ejecutar múltiples sistemas operativos en un solo servidor.
- **Cargas de trabajo heredadas**: Donde las aplicaciones antiguas o monolíticas necesitan ser ejecutadas en un entorno virtualizado.

#### 2.2.3. Soluciones en la Nube

En la nube, proveedores como **Google Cloud Platform (GCP)**, **Amazon Web Services (AWS)** y **Microsoft Azure** ofrecen servicios de contenedores y máquinas virtuales:

- **AWS ECS/Fargate, EKS, Azure Kubernetes Service (AKS), Google Kubernetes Engine (GKE)**: Para gestionar contenedores a gran escala.
- **EC2 (AWS), VM Instances (GCP), Azure Virtual Machines**: Para desplegar y gestionar máquinas virtuales.

#### 2.2.4. Herramientas de Gestión de Contenedores

**Docker Desktop**, **Docker CLI**, y **Docker Compose** son herramientas ampliamente utilizadas para desarrollar, gestionar y desplegar contenedores en entornos de desarrollo locales. Permiten a los desarrolladores crear aplicaciones de manera rápida, probarlas, y asegurar que se comportarán de la misma manera en producción.

### 2.3. Recopilación de comandos

| Comando | Uso/función |
|:-------:|:-----------:|
| **docker images** | Devuelve un listado de todas las imágenes descargadas en la máquina. |
| **docker pull nombre_imagen** | Descargar una imagen de Docker, podemos visitar https://hub.docker.com/. |
| **docker image rm nombre_imagen:tag** | Eliminar una imagen. |
| **docker create nombre_imagen** | Crear un contenedor con esa imagen, devuelve el ID del contenedor creado. |
| **docker create --name nombre_contenedor nombre_imagen** | Crear un contenedor con un nombre específico a partir de una imagen. |
| **docker start ID_contenedor_creado** | Iniciar el contenedor. |
| **docker start nombre_contenedor** | Iniciar un contenedor utilizando su nombre. |
| **docker ps** | Ver solo los contenedores activos. Devuelve una tabla con Container-ID, Image, Command, Created, Status, Ports, y Names. |
| **docker ps -a** | Ver los contenedores en el equipo, activos y no activos. |
| **docker stop nombre_contenedor** | Parar un contenedor utilizando su nombre. |
| **docker stop ID_contenedor** | Parar un contenedor utilizando su ID. |
| **docker rm nombre_contenedor** | Borrar un contenedor de Docker. |
| **docker run -d -p 8080:80 -i --name Debian debian:latest** | Crear un contenedor para alojar un servicio y publicarlo en un puerto del host para que sea accesible. <br /> - **Debian**: Nombre del contenedor <br /> - **debian:latest**: Imagen del contenedor <br /> - **8080**: Puerto del host <br /> - **80**: Puerto del contenedor <br /> - **-d**: Ejecuta el contenedor en segundo plano e imprime el ID del contenedor <br /> - **-p**: Publica el puerto(s) de un contenedor al host <br /> - **-i**: Mantiene el STDIN abierto aunque no esté conectado <br /> - **--name**: Asigna un nombre al contenedor |
| **docker exec -it nombre_contenedor bash** | Abrir un terminal de Linux en el contenedor. |
| **docker cp ruta_archivos_host nombre_contenedor:ruta_archivos_contenedor** | Pasar archivos del host al contenedor. |
| **docker stats nombre_contenedor** | Monitorizar el consumo de CPU, memoria y ancho de banda de un contenedor en ejecución. |
| **docker network ls** | Listar las redes disponibles en Docker. |
| **docker network inspect nombre_red** | Inspeccionar la red virtual de Docker, conocer la IP y ver qué contenedores pertenecen a esa red. |
| **docker update [OPTIONS] CONTAINER [CONTAINER...]** | Actualizar la configuración de uno o varios contenedores. [Documentación Docker Update](https://docs.docker.com/engine/reference/commandline/update/) |

### 2.4. Acceso a los contenedores por mapeo de puertos

El mapeo de puertos, o *Port Mapping*, asigna un puerto específico del host al puerto de un contenedor para aceptar peticiones. Esto facilita la comunicación entre contenedores y permite que las aplicaciones dentro de ellos sean accesibles desde el host o desde otros contenedores.

Por ejemplo, el siguiente comando crea un contenedor utilizando la imagen de MongoDB y mapea el puerto 27017 del host al puerto 27017 del contenedor:

```bash
docker container create -p 27017:27017 --name mongodb mongo
```

En este comando:

- `-p`: Publica el puerto especificado. El primer número es el puerto del host y el segundo es el puerto del contenedor.
- `mongodb`: Nombre asignado al contenedor.
- `mongo`: Imagen del contenedor utilizada.

Docker proporciona comandos para capturar los logs de los contenedores:

- `docker logs nombre_contenedor`: Muestra los logs del contenedor.
- `docker logs -f nombre_contenedor`: Muestra los logs de forma continua.

### 2.5. Crear e iniciar un contenedor con Docker Run

El comando `docker run` combina los comandos `docker create` y `docker start` y realiza los siguientes pasos:

1. Busca la imagen especificada; si no está disponible localmente, la descarga del repositorio.
2. Crea un contenedor a partir de la imagen.
3. Inicia el contenedor.

Ejemplo de comando que ejecuta un contenedor de MongoDB en segundo plano (utilizando `-d`), mapeando el puerto 27017 del host al contenedor:

```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

### 2.6. Variables de entorno en los contenedores

Para conectar una base de datos con una aplicación en Docker, se utilizan variables de entorno específicas de la imagen del contenedor.

Por ejemplo, para crear un contenedor de MongoDB con un nombre de usuario y una contraseña:

```bash
docker create -e MONGO_INITDB_ROOT_USERNAME=dani -e MONGO_INITDB_ROOT_PASSWORD=clave mongo
```

Estas variables configuran el usuario y la contraseña del administrador de la base de datos durante la inicialización del contenedor. Las variables de entorno varían según la imagen del contenedor. Por tanto, es recomendable consultar la documentación de la imagen correspondiente.

### 2.7. Construcción de imágenes mediante Dockerfile

Un `Dockerfile` es un archivo de texto con instrucciones para construir una imagen Docker, que luego puede usarse para crear contenedores. Cada imagen se basa en una imagen previa, ya sea oficial de Docker o personalizada.

Ejemplo de un `Dockerfile`:

```dockerfile
# Imagen base
FROM node:18  

# Crear carpeta para el código
RUN mkdir -p /home/app

# Copiar archivos del host al contenedor  
COPY . /home/app

# Exponer puerto 
EXPOSE 3000  

# Ejecutar aplicación
CMD ["node", "/home/app/index.js"]  
```

Para permitir la comunicación entre contenedores, es necesario agruparlos en una red interna. Docker proporciona comandos para gestionar estas redes:

- `docker network ls`: Lista todas las redes configuradas en Docker.
- `docker network create mi-nueva-red`: Crea una nueva red.

Los contenedores en la misma red pueden comunicarse entre sí utilizando el nombre del contenedor como dominio.

Para construir una imagen a partir de un `Dockerfile`:

```bash
docker build -t nombre-imagen:etiqueta ruta/dockerfile
```

Y para crear un contenedor en una red específica:

```bash
docker create -p 27017:27017 --name mongodb --network mi-nueva-red mongo
```

Modos de red en Docker:

- **Modo bridge**: Modo predeterminado; la red es reconocible solo dentro del host y el contenedor.
- **Red personalizada**: Permite especificar el rango de direcciones IP y otros parámetros.

### 2.8. Definición y gestión de múltiples contenedores mediante Docker Compose

Docker Compose permite definir y gestionar múltiples contenedores como un conjunto de servicios interconectados mediante un archivo `docker-compose.yml` en formato YAML.

Ejemplo de `docker-compose.yml`:

```yaml
# Define la versión del archivo de configuración de Docker Compose
version: "3.9"

# Define los servicios que se van a utilizar en esta configuración
services:
  
  # Servicio para la aplicación
  mi-app:
    
    # Especifica el contexto de construcción, en este caso el directorio actual
    build: .

    # Mapea el puerto 3000 del contenedor al puerto 3000 del host
    ports:
      - "3000:3000"

    # Define los enlaces de red entre los servicios
    links:
      # Establece un enlace con el servicio 'mongodb'
      - mongodb
  
  # Servicio para la base de datos MongoDB
  mongodb:
    
    # Usa la imagen oficial de MongoDB
    image: mongo

    # Mapea el puerto 27017 del contenedor al puerto 27017 del host
    ports:
      - "27017:27017"

    # Configura las variables de entorno para la inicialización de la base de datos
    environment:
      # Define el nombre de usuario raíz para MongoDB
      - MONGO_INITDB_ROOT_USERNAME=dani

      # Define la contraseña para el usuario raíz de MongoDB
      - MONGO_INITDB_ROOT_PASSWORD=clave
```

Para ejecutar los servicios definidos en `docker-compose.yml`:

```bash
docker compose up
```

Para detener y eliminar todos los servicios, incluyendo imágenes y contenedores:

```bash
docker compose down
```

### 2.9. Creación de volúmenes para la persistencia de datos

Los volúmenes en Docker permiten la persistencia de datos en los contenedores, conservando la información aunque se elimine un contenedor. Los datos se almacenan en el equipo anfitrión.

Tipos de volúmenes:

1. **Anónimo**: Se monta una ruta sin nombre, sin opción de referenciarla en otro contenedor.
2. **De anfitrión a host**: Se especifica qué carpeta montar y dónde.
3. **Nombrado**: Permite referenciar el volumen al crear otro contenedor.

Ejemplo de `docker-compose.yml` con volúmenes:

```yaml
# Define la versión del archivo de configuración de Docker Compose
version: "3.9"

# Define los servicios que se van a utilizar en esta configuración
services:
  
  # Servicio para la aplicación
  mi-app:
    
    # Especifica el contexto de construcción, en este caso el directorio actual
    build: .

    # Mapea el puerto 3000 del contenedor al puerto 3000 del host
    ports:
      - "3000:3000"

    # Define los enlaces de red entre los servicios
    links:
      # Establece un enlace con el servicio 'mongodb'
      - mongodb
  
  # Servicio para la base de datos MongoDB
  mongodb:
    
    # Usa la imagen oficial de MongoDB
    image: mongo

    # Mapea el puerto 27017 del contenedor al puerto 27017 del host
    ports:
      - "27017:27017"

    # Configura las variables de entorno para la inicialización de la base de datos
    environment:
      # Define el nombre de usuario raíz para MongoDB
      - MONGO_INITDB_ROOT_USERNAME=dani

      # Define la contraseña para el usuario raíz de MongoDB
      - MONGO_INITDB_ROOT_PASSWORD=clave
    
    # Monta un volumen para persistir los datos de MongoDB
    volumes:
      # Asocia el volumen 'mongo-data' al directorio '/data/db' en el contenedor
      - mongo-data:/data/db

# Define los volúmenes que se van a utilizar en esta configuración
volumes:
  
  # Declara un volumen llamado 'mongo-data' para almacenar datos persistentes
  mongo-data:
```

## 3. Kubernetes

<p align="center">
  <img src={require("../../img/kubernetes-logo.png").default} width="500"/>
  <br />
  <em>Logo de Kubernetes</em>
</p>

La adopción de Kubernetes se motiva principalmente por la necesidad de administrar de manera eficiente y escalable múltiples contenedores de Docker distribuidos en diversos servidores. Kubernetes facilita la orquestación de estos contenedores a través de una infraestructura declarativa. En este enfoque, los usuarios definen la configuración deseada en un manifiesto, es decir, un archivo de configuración, que se procesa mediante la API de Kubernetes. Kubernetes asume la responsabilidad de distribuir la carga de trabajo entre los nodos disponibles y de administrar los recursos requeridos por los contenedores.

Kubernetes también posibilita la construcción de pipelines ETL utilizando herramientas como Spark o Airflow, y se emplea extensamente en el entrenamiento de modelos de aprendizaje automático, como se evidencia en su uso en Kubeflow. Al gestionar la infraestructura de cómputo, redes y almacenamiento, Kubernetes simplifica la implementación y administración de aplicaciones en contenedores a gran escala.

### 3.1. Componentes de Kubernetes

**Kubectl** es una interfaz de línea de comandos que facilita la interacción con un clúster de Kubernetes, permitiendo la gestión de objetos como pods, servicios y despliegues.

Para la creación de un clúster de Kubernetes en un entorno local, se utiliza **Minikube**. Esta herramienta permite la ejecución de Kubernetes de manera local para fines de prueba o desarrollo, creando un clúster con uno o varios nodos virtualizados. Por defecto, Minikube crea un clúster que contiene un nodo.

Para inicializar el clúster de Minikube podemos utilizar el comando:

```bash
minikube start
```

Mientras que para verificar el estado del clúster, podemos utilizar el comando:

```bash
minikube status
```

#### 3.1.1. Nodo

Un nodo representa la unidad más pequeña dentro de un clúster de Kubernetes. Este puede ser una máquina física o una máquina virtual donde se ejecutan las aplicaciones. Kubernetes abstrae el hardware subyacente, permitiendo una gestión eficiente de los requisitos de recursos. Si un nodo no puede proporcionar más recursos o falla, Kubernetes redistribuye las cargas de trabajo a otros nodos disponibles.

Existen diferentes tipos de nodos:

+ **Nodos bajo demanda (On-Demand Nodes)**: Se crean cuando los recursos son elevados (CPU, GPU, RAM).
+ **Nodos al mejor precio (Spot Nodes)**: Son nodos más económicos que pueden ser retirados en cualquier momento.

#### 3.1.2. Pod

Un pod es la unidad mínima de ejecución en Kubernetes y puede contener uno o más contenedores que comparten los mismos recursos y red local. Todos los contenedores dentro del mismo pod pueden comunicarse entre sí y comparten el mismo entorno de red. Al escalar un pod, todos los contenedores dentro de él se escalan conjuntamente.

#### 3.1.3. Clúster

Un clúster es un conjunto de nodos, también conocidos como workers, que se ejecutan en Kubernetes. La relación entre las aplicaciones que se están ejecutando en cada nodo es independiente. Por ejemplo, si se tiene un servidor de Proxmox donde existen dos máquinas virtuales, VM1 y VM2, a pesar de que cuenten con diferentes Pods, si todos están gestionados por Kubernetes, ambos formarán parte del mismo clúster.

### 3.2. StatefulSet y volúmenes

Dado que no se puede garantizar el lugar de ejecución de una aplicación, el uso del disco local para almacenar datos es inviable, siendo útil únicamente para almacenamiento temporal de datos, como caché.

Kubernetes emplea volúmenes persistentes, que a diferencia de otros recursos como la CPU, GPU y RAM, que son gestionados por los clústeres de Kubernetes, deben ser adjuntados al propio clúster de Kubernetes desde unidades locales o en la nube. Estos volúmenes no se asocian a un nodo en particular.

**StatefulSet** permite la creación de pods con volúmenes persistentes, garantizando la integridad de los datos incluso si el pod se reinicia o se elimina.

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
      containers:  # Lista de contenedores que se ejecutarán en cada pod
      - name: my-frontend  # Nombre del contenedor
        image: busybox  # Imagen del contenedor que se utilizará
        args:
        - sleep
        - infinity  # Argumentos que se pasarán al contenedor
        volumeMounts:  # Puntos de montaje de los volúmenes en el contenedor
        - name: data  # Nombre del volumen
          mountPath: "/data"  # Ruta en la que se montará el volumen

  # Plantillas para las solicitudes de volumen persistente
  volumeClaimTemplates:
  - metadata:
      # Nombre de la solicitud de volumen persistente
      name: csi-pvc

    spec:
      # Modos de acceso para el volumen
      accessModes: [ "ReadWriteOnce" ]

      resources:
        requests:
          # Cantidad de almacenamiento solicitado
          storage: 1Gi

```

Para verificar el estado de los volúmenes y los StatefulSets, se pueden utilizar los siguientes comandos:

```bash
kubectl get pvc  # Para ver la asignación del volumen, capacidad, etc.
kubectl get sts  # Para ver los StatefulSets.
```

### 3.3. Manifiestos

Un manifiesto es un archivo en formato YAML o JSON que especifica cómo desplegar una aplicación en un clúster de Kubernetes. Este archivo se conoce como un registro de intención, donde se le indica a Kubernetes el estado deseado del clúster.

Además, es importante definir lo que es un namespace, que es la división lógica del clúster de Kubernetes, permitiendo separar la carga del clúster. Se pueden crear políticas para separar tráfico entre namespaces. Por defecto, los datos de un namespace se pueden ver desde otro namespace.

Para obtener el namespace del clúster podemos utilizar el comando:

```bash
kubectl get ns
```

Para obtener los pods de ese namespace podemos utilizar el siguiente comando, que al añadir al final -o wide, obtenemos información de la IP del pod, nodo, etc.

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

El siguiente manifiesto contiene variables de entorno, así como solicitudes y límites de recursos, además de readiness probe y liveness probe.

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

### 3.4. Despliegue y gestión de réplicas

Un despliegue permite declarar el número de réplicas, es decir, el número de Pods, y asegurar que el estado deseado se mantenga, monitorizándolos. 

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

### 3.5. DaemonSet

Un DaemonSet es una forma de hacer un despliegue de un Pod, pero este Pod va a estar en todos los nodos del clúster. Un solo Pod en cada nodo. No se especifica por tanto el número de réplicas, porque depende del número de nodos. Se suele utilizar mucho para servicios de monitoreo.

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

### 3.6. Exponer aplicaciones

#### 3.6.1. Servicios en Kubernetes

Los servicios en Kubernetes permiten acceder a los pods desde dentro y fuera del clúster. Un ejemplo de esto es el uso de un Load Balancer:

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

#### 3.6.2. Ingress

Ingress administra el acceso externo a los servicios del clúster, típicamente HTTP. Proporciona balanceo de carga y terminación SSL. Permite el acceso al servicio mediante paths, y suele requerirse Ingress-Nginx controller que se suele instalar por separado.

### 3.7. Networking y almacenamiento

#### 3.7.1. Pod Networking

Cada pod tiene su propia IP, y para comunicar pods en diferentes nodos se utiliza el Cloud Cluster Networking Interface.

#### 3.7.2. Almacenamiento persistente

**etcd** es un almacén de datos clave-valor distribuido utilizado para guardar datos de configuración, estado y metadatos.

### 3.8. Tipos de servicios

#### 3.8.1. Cluster IP

Cluster IP proporciona una forma de exponer aplicaciones que se ejecutan en un conjunto de Pods a través de una dirección IP virtual única a nivel de clúster, facilitando la comunicación y balanceo de carga entre Pods.

#### 3.8.2. Node Port

Node Port crea un puerto en cada nodo que va a recibir el tráfico y lo va a mandar a los servicios (Pods) necesarios²⁶. Esto permite que la aplicación sea accesible desde fuera del clúster. Suele utilizar puertos dentro del rango 30000-32767.

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

#### 3.8.3. Load Balancer

Load Balancer está más enfocado a proveedores de la nube para redireccionar el tráfico en los Pods. Crea un balanceador de carga proporcionando una IP estable para el servidor, lo que facilita su acceso desde internet.

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