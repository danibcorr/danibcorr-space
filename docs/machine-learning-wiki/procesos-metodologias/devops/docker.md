---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Herramientas necesarias para DevOps.
title: Docker
toc_max_heading_level: 4
---

## 1. Introducción

<p align="center">
  <img src={require("../../../img/docker-logo.png").default} width="500"/>
  <br />
  <em>Logo de Docker</em>
</p>

**Docker** es una plataforma de código abierto que facilita la creación, implementación y ejecución de aplicaciones mediante contenedores. Los contenedores permiten empaquetar una aplicación junto con sus dependencias y configuraciones en una unidad estandarizada, lo que simplifica el desarrollo de software y garantiza consistencia entre entornos.

### 1.1. Características principales

- **Portabilidad**: Los contenedores Docker se ejecutan en cualquier sistema que soporte Docker, independientemente del sistema operativo.
- **Ligereza**: Los contenedores comparten el kernel del sistema operativo del host, lo que los hace más ligeros y rápidos de iniciar.
- **Consistencia**: Docker asegura que una aplicación se ejecute de la misma manera en cualquier entorno.
- **Aislamiento**: Cada contenedor opera de manera independiente, mejorando la seguridad y evitando conflictos entre aplicaciones.
- **Escalabilidad**: Docker facilita la creación y eliminación rápida de instancias de aplicaciones.

### 1.2. Diferencia entre un contenedor y una máquina virtual

Los contenedores y las máquinas virtuales son tecnologías de virtualización que permiten ejecutar múltiples aplicaciones en un solo servidor físico. Aunque comparten objetivos similares, como optimizar el uso de recursos y asegurar aislamiento, difieren en su implementación y arquitectura subyacente.

#### 1.2.1. Contenedores

<p align="center">
  <img src="https://profile.es/wp-content/media/image-1-1024x266.png"/>
  <br />
  <em>Pasos para la creación de un contenedor Docker</em>
</p>

Los **contenedores** son una forma de virtualización a nivel del sistema operativo, también conocidos como "virtualización ligera". A diferencia de las máquinas virtuales, que virtualizan un sistema operativo completo, los contenedores comparten el núcleo del sistema operativo del host y ejecutan aplicaciones dentro de espacios de usuario completamente aislados. Esto permite ejecutar múltiples contenedores simultáneamente, minimizando la interferencia entre ellos.

Cada contenedor contiene solo la aplicación y sus dependencias, como bibliotecas, archivos de configuración y variables de entorno, lo que lo hace extremadamente **portátil** y fácil de desplegar en diferentes entornos, desde la máquina local de un desarrollador hasta un clúster en la nube.

##### Características de los contenedores

- **Imágenes y contenedores**:

  - **Imágenes**: Paquetes inmutables que contienen la aplicación y sus dependencias necesarias para ejecutarla. Las imágenes son reutilizables y se almacenan en repositorios como [**Docker Hub**](https://hub.docker.com/).
  - **Contenedores**: Instancias en ejecución de imágenes, que pueden crearse, detenerse y eliminarse rápidamente.

- **Aislamiento**:
  - Utiliza tecnologías del kernel de Linux para aislar procesos, sistemas de archivos, redes, etc., proporcionando un entorno independiente para cada contenedor.
  - Los **namespaces** (espacios de nombres) aíslan recursos del sistema operativo:
    - `pid`: Aísla los identificadores de procesos.
    - `net`: Proporciona pilas de red separadas.
    - `mnt`: Aisla los puntos de montaje del sistema de archivos.
    - `ipc`: Aísla recursos de comunicación entre procesos.
    - `uts`: Aísla nombres de host y dominios.
    - `user`: Aísla identificadores de usuarios y grupos.
  - Los **cgroups** (grupos de control) gestionan el uso de recursos como CPU, memoria y disco, garantizando que los contenedores no consuman más recursos de los asignados.
- **Union Filesystem (UFS)**: Permite que los contenedores se construyan en capas. Las capas de solo lectura contienen archivos del sistema, mientras que las capas de escritura se mantienen en la parte superior, minimizando el uso de almacenamiento y facilitando el desarrollo iterativo.

- **Ligereza**: Los contenedores no incluyen un sistema operativo completo; se ejecutan como procesos dentro del sistema operativo del host, lo que los hace mucho más ligeros que las máquinas virtuales.

##### Casos de uso de los contenedores

Los contenedores son ideales para:

- **Desarrollo y pruebas**: Permiten a los desarrolladores trabajar en un entorno que replica exactamente el de producción.
- **Microservicios**: Separan aplicaciones en componentes pequeños y desplegables, que pueden escalarse de forma independiente.
- **Despliegue continuo**: Facilitan el ciclo CI/CD al permitir que las aplicaciones se empaqueten y desplieguen uniformemente.

#### 1.2.2. Máquinas virtuales

**Las máquinas virtuales (VMs)** son una tecnología de virtualización más tradicional que permite ejecutar múltiples sistemas operativos en un servidor físico mediante un hipervisor, como **VMware** o **VirtualBox**.

##### Características de las máquinas virtuales

- **Hipervisor**: Un hipervisor puede ejecutarse directamente en el hardware del servidor (tipo 1) o sobre un sistema operativo (tipo 2). Este gestiona la creación y ejecución de múltiples VMs, asignando recursos de hardware eficientemente.
- **Sistema operativo completo**: Cada VM tiene su propio sistema operativo completo (por ejemplo, Linux, Windows), lo que significa que las VMs consumen más recursos de CPU, memoria y almacenamiento que los contenedores.
- **Aislamiento fuerte**: Debido a que cada VM tiene su propio kernel y sistema operativo, proporciona un aislamiento más fuerte que los contenedores. Esto es útil cuando la seguridad es crítica.
- **Rendimiento y uso de recursos**: Las VMs son más pesadas y tienen tiempos de inicio más largos en comparación con los contenedores, ya que requieren más recursos debido a la necesidad de un sistema operativo completo y un hipervisor.

##### Casos de uso de las máquinas virtuales

Las máquinas virtuales son adecuadas para:

- **Aplicaciones monolíticas**: Donde el aislamiento del sistema operativo completo es necesario.
- **Entornos con múltiples sistemas operativos**: Permiten ejecutar varios sistemas operativos en un solo servidor.
- **Cargas de trabajo heredadas**: Donde las aplicaciones antiguas o monolíticas deben ejecutarse en un entorno virtualizado.

#### 1.2.3. Soluciones en la nube

En la nube, proveedores como **Google Cloud Platform (GCP)**, **Amazon Web Services (AWS)** y **Microsoft Azure** ofrecen servicios de contenedores y máquinas virtuales:

- **AWS ECS/Fargate, EKS**, **Azure Kubernetes Service (AKS)** y **Google Kubernetes Engine (GKE)**: Herramientas para gestionar contenedores a gran escala.
- **EC2 (AWS), VM Instances (GCP), Azure Virtual Machines**: Soluciones para desplegar y gestionar máquinas virtuales.

#### 1.2.4. Herramientas de gestión de contenedores

**Docker Desktop**, **Docker CLI** y **Docker Compose** son herramientas ampliamente usadas para desarrollar, gestionar y desplegar contenedores en entornos de desarrollo locales. Permiten a los desarrolladores crear aplicaciones de manera rápida, probarlas y asegurarse de que se comportarán de la misma manera en producción.

### 1.3. Recopilación de comandos

|                                   Comando                                   |                                                                                                                                                                                                                                                                           Uso/función                                                                                                                                                                                                                                                                           |
| :-------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                              **docker images**                              |                                                                                                                                                                                                                                              Devuelve un listado de todas las imágenes descargadas en la máquina.                                                                                                                                                                                                                                               |
|                        **docker pull nombre_imagen**                        |                                                                                                                                                                                                                    Descargar una imagen de Docker (puedes visitar [Docker Hub](https://hub.docker.com/) para explorar imágenes disponibles).                                                                                                                                                                                                                    |
|                    **docker image rm nombre_imagen:tag**                    |                                                                                                                                                                                                                                                                 Eliminar una imagen de Docker.                                                                                                                                                                                                                                                                  |
|                       **docker create nombre_imagen**                       |                                                                                                                                                                                                                                        Crear un contenedor a partir de una imagen, devuelve el ID del contenedor creado.                                                                                                                                                                                                                                        |
|          **docker create --name nombre_contenedor nombre_imagen**           |                                                                                                                                                                                                                                              Crear un contenedor con un nombre específico a partir de una imagen.                                                                                                                                                                                                                                               |
|                    **docker start ID_contenedor_creado**                    |                                                                                                                                                                                                                                                                     Iniciar un contenedor.                                                                                                                                                                                                                                                                      |
|                     **docker start nombre_contenedor**                      |                                                                                                                                                                                                                                                           Iniciar un contenedor utilizando su nombre.                                                                                                                                                                                                                                                           |
|                                **docker ps**                                |                                                                                                                                                                                                      Mostrar solo los contenedores activos. Devuelve una tabla con información sobre cada contenedor, incluyendo el ID, la imagen, el estado y el nombre.                                                                                                                                                                                                       |
|                              **docker ps -a**                               |                                                                                                                                                                                                                                                Ver todos los contenedores (activos y no activos) en tu máquina.                                                                                                                                                                                                                                                 |
|                      **docker stop nombre_contenedor**                      |                                                                                                                                                                                                                                                             Detener un contenedor usando su nombre.                                                                                                                                                                                                                                                             |
|                        **docker stop ID_contenedor**                        |                                                                                                                                                                                                                                                               Detener un contenedor usando su ID.                                                                                                                                                                                                                                                               |
|                       **docker rm nombre_contenedor**                       |                                                                                                                                                                                                                                                                Eliminar un contenedor de Docker.                                                                                                                                                                                                                                                                |
|         **docker run -d -p 8080:80 -i --name Debian debian:latest**         | Crear un contenedor para alojar un servicio y publicarlo en un puerto del host para que sea accesible. <br /> - **Debian**: Nombre del contenedor <br /> - **debian:latest**: Imagen del contenedor <br /> - **8080**: Puerto del host <br /> - **80**: Puerto del contenedor <br /> - **-d**: Ejecuta el contenedor en segundo plano y devuelve el ID del contenedor <br /> - **-p**: Mapea un puerto del host con un puerto del contenedor <br /> - **-i**: Mantiene el acceso al terminal del contenedor <br /> - **--name**: Asigna un nombre al contenedor |
|                 **docker exec -it nombre_contenedor bash**                  |                                                                                                                                                                                                                                                   Accede al terminal del contenedor para interactuar con él.                                                                                                                                                                                                                                                    |
| **docker cp ruta_archivos_host nombre_contenedor:ruta_archivos_contenedor** |                                                                                                                                                                                                                                                             Copia archivos del host al contenedor.                                                                                                                                                                                                                                                              |
|                     **docker stats nombre_contenedor**                      |                                                                                                                                                                                                                                        Monitorea el uso de CPU, memoria y ancho de banda de un contenedor en ejecución.                                                                                                                                                                                                                                         |
|                            **docker network ls**                            |                                                                                                                                                                                                                                                         Muestra todas las redes configuradas en Docker.                                                                                                                                                                                                                                                         |
|                    **docker network inspect nombre_red**                    |                                                                                                                                                                                                              Obtiene detalles sobre una red específica, como las direcciones IP de los contenedores conectados y qué contenedores están en la red.                                                                                                                                                                                                              |
|            **docker update [OPTIONS] CONTAINER [CONTAINER...]**             |                                                                                                                                                                                                      Actualiza la configuración de uno o varios contenedores. [Documentación Docker Update](https://docs.docker.com/engine/reference/commandline/update/)                                                                                                                                                                                                       |

### 1.4. Acceso a contenedores mediante mapeo de puertos

El mapeo de puertos, o _port mapping_, asigna un puerto específico del host al puerto de un contenedor, lo que permite que una aplicación dentro del contenedor sea accesible desde el host o desde otros contenedores.

Por ejemplo, el siguiente comando crea un contenedor de MongoDB y mapea el puerto 27017 del host al puerto 27017 del contenedor:

```bash
docker container create -p 27017:27017 --name mongodb mongo
```

En este comando:

- `-p`: Mapea un puerto del host al puerto del contenedor.
- `mongodb`: Nombre del contenedor.
- `mongo`: Imagen del contenedor utilizada.

Docker proporciona comandos para capturar los logs de los contenedores:

- `docker logs nombre_contenedor`: Muestra los registros del contenedor.
- `docker logs -f nombre_contenedor`: Muestra los registros del contenedor de manera continua.

### 1.5. Crear e iniciar un contenedor con Docker Run

El comando `docker run` combina los comandos `docker create` y `docker start` y realiza los siguientes pasos:

1. Busca la imagen especificada; si no está disponible localmente, la descarga del repositorio.
2. Crea un contenedor a partir de la imagen.
3. Inicia el contenedor.

Ejemplo de comando para ejecutar un contenedor de MongoDB en segundo plano (utilizando `-d`), mapeando el puerto 27017 del host al contenedor:

```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

### 1.6. Variables de entorno en contenedores

Para conectar una base de datos con una aplicación dentro de Docker, se utilizan variables de entorno específicas para la imagen del contenedor.

Por ejemplo, para crear un contenedor de MongoDB con un nombre de usuario y una contraseña:

```bash
docker create -e MONGO_INITDB_ROOT_USERNAME=dani -e MONGO_INITDB_ROOT_PASSWORD=clave mongo
```

Estas variables configuran el usuario y la contraseña del administrador de la base de datos durante la inicialización del contenedor. Es importante revisar la documentación de la imagen del contenedor, ya que las variables de entorno varían según cada imagen.

### 1.7. Construcción de imágenes mediante Dockerfile

Un `Dockerfile` es un archivo de texto con instrucciones que te permiten construir una imagen Docker. La imagen construida a partir de un `Dockerfile` puede ser usada para crear contenedores personalizados. Cada imagen se construye sobre una imagen previa, que puede ser oficial de Docker o una personalizada.

Ejemplo de un `Dockerfile`:

```dockerfile
# Imagen base
FROM node:18

# Crear un directorio para el código
RUN mkdir -p /home/app

# Copia los archivos del host al contenedor
COPY . /home/app

# Exponer el puerto de la aplicación
EXPOSE 3000

# Ejecutar la aplicación
CMD ["node", "/home/app/index.js"]
```

Para permitir la comunicación entre contenedores, es necesario configurar una red interna. Docker proporciona comandos para gestionar estas redes:

- `docker network ls`: Muestra todas las redes configuradas en Docker.
- `docker network create mi-nueva-red`: Crea una red personalizada.

Los contenedores en la misma red pueden comunicarse entre sí usando su nombre como dominio.

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

### 1.8. Definición y gestión de múltiples contenedores mediante Docker Compose

Docker Compose es una herramienta que permite definir y gestionar múltiples contenedores como un conjunto de servicios interconectados. Utiliza un archivo de configuración `docker-compose.yml` en formato YAML para especificar la configuración de los servicios, redes, volúmenes y otros aspectos relacionados con los contenedores. Esto simplifica la gestión de aplicaciones complejas compuestas por varios contenedores.

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

Con este archivo de configuración, se definen dos servicios: uno para la aplicación (`mi-app`) y otro para MongoDB (`mongodb`). La aplicación se construye a partir del contexto del directorio actual, mapeando el puerto 3000 del contenedor al puerto 3000 del host. El servicio MongoDB utiliza una imagen preexistente (`mongo`), mapea el puerto 27017 y establece las credenciales de acceso mediante variables de entorno.

Para iniciar los servicios definidos en el archivo `docker-compose.yml`, basta con ejecutar:

```bash
docker compose up
```

Este comando descarga las imágenes necesarias (si no están disponibles localmente), crea los contenedores y los pone en funcionamiento.

Para detener y eliminar los servicios, incluidos los contenedores, redes y volúmenes asociados, se utiliza:

```bash
docker compose down
```

### 1.9. Creación de volúmenes para la persistencia de datos

En Docker, los volúmenes permiten la persistencia de datos en los contenedores. Esto significa que, incluso si un contenedor se elimina, los datos asociados a los volúmenes permanecen disponibles. Esto es especialmente útil cuando se quiere mantener información a través de reinicios o actualizaciones de contenedores.

Los volúmenes pueden ser de diferentes tipos:

1. **Volúmenes anónimos**: Son volúmenes sin nombre, lo que impide referenciarlos explícitamente desde otros contenedores.
2. **Volúmenes de host**: Permiten especificar qué carpeta del sistema anfitrión se monta dentro del contenedor.
3. **Volúmenes nombrados**: Son volúmenes con nombre, lo que permite referenciarlos en otros contenedores o en múltiples servicios.

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

En este ejemplo, el servicio `mongodb` utiliza un volumen nombrado llamado `mongo-data` para almacenar los datos persistentes de la base de datos. Este volumen se monta en el directorio `/data/db` del contenedor, lo que asegura que los datos de MongoDB se conserven incluso si el contenedor es detenido o eliminado.

Al final del archivo `docker-compose.yml`, se declara el volumen `mongo-data` en la sección `volumes`. De este modo, Docker se encarga de gestionar la creación y almacenamiento de dicho volumen.

Con este archivo de configuración, el proceso de persistencia de datos es completamente automatizado, lo que garantiza la disponibilidad continua de los datos en situaciones de reinicio o actualización de los servicios.
