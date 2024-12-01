---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Herramientas necesarias para DevOps.
title: DevOps
toc_max_heading_level: 4
---
# References

* [Learn Docker now! complete free course from scratch!](https://youtu.be/4Dko5W96WHg?si=pOAHHRxpPkqpQ2go)
* [Docker Docs](https://docs.docker.com/)
* [DevOps with Docker, Jenkins, Kubernetes, git, GitFlow CI and CD](https://www.udemy.com/course/devops-with-dockers-kubernetes-jenkins-and-gitflow-cicd/)
* [minikube Docs](https://minikube.sigs.k8s.io/docs/)
* [Kubernetes Tutorials](https://youtube.com/playlist?list=PLiMWaCMwGJXnHmccp2xlBENZ1xr4FpjXF&si=mxLcHpXxnZUhSGu3)
* [KUBERNETES From ROOKIE to PRO! (COMPLETE COURSE IN SPANISH)](https://youtu.be/DCoBcpOA7W4?si=KioSNJrOkZp-Dx5K)

## 1. Introduction to DevOps

**DevOps** is a philosophy and practice that combines software development (Dev) with the operation of IT systems (Ops) to improve collaboration, automation, and continuous software delivery. Its main objective is to shorten the software development life cycle, delivering high-quality applications more quickly and efficiently.

Some of the key concepts in DevOps are:

* **Version Control**: Use tools like **Git**, **GitHub**, or **GitLab** to maintain a centralized repository of code. This allows for collaboration, change tracking, and efficient source code management.

* **Continuous Integration (CI)**: Implement **integration pipelines** using tools like **Jenkins** or **GitLab CI/CD**. CI ensures that every change in code is automatically compiled and tested, identifying integration issues as early as possible.

* **Continuous Delivery (CD)**: Refers to the practice of deploying software quickly and reliably at any time. Tools like **ArgoCD** and **GitOps** are used to automate deployments and ensure that software is always ready to be put into production.

* **Infrastructure as Code (IaC)**: Use tools like **Terraform** or **Ansible** to define and manage infrastructure through text-based configuration files, usually of the **YAML** type. IaC enables automation and reproducibility of environments, reducing errors and speeding up resource provisioning.

In addition, DevOps also requires additional practices to optimize the entire development lifecycle, including:

* **Monitoring and logging**: Implement solutions like **Prometheus** or **Grafana** to collect performance metrics, monitor systems, detect failures, and facilitate problem resolution in real time.

* **Validated learning**: Measure the return on investment (ROI) of automation tools using **KPIs** (Key Performance Indicators*) to assess process efficiency and ensure continuous improvement. Examples of KPIs include **Development Cycle Time**, **Deployment Frequency**, **Mean Time to Recovery (MTTR)**, and **Deployment Failure Rate**.

## 2. Docker

**Docker** is an open-source platform that makes it easy to build, deploy, and run applications using containers. Containers allow you to package an application with its dependencies and configurations into a standardized unit for software development.

### 2.1. Key Features

- **Portability**: Docker containers can run on any system that supports Docker, regardless of the underlying operating system.
- **Lightweight**: Containers share the host operating system kernel, making them lighter and faster to start.
- **Consistency**: Docker ensures that an application runs the same way in any environment.- **Isolation**: Each container operates in isolation, improving security and avoiding conflicts between applications.
- **Scalability**: Docker makes it easy to quickly create and destroy application instances.

### 2.2. Difference between a container and a virtual machine

Containers and virtual machines are virtualization technologies that allow multiple applications to run on a single physical server. While they share some goals, such as resource efficiency and application isolation, they differ significantly in their implementation, usage, and underlying architecture.

#### 2.2.1. Containers

**Containers** are a form of operating system-level virtualization, also known as "lightweight virtualization." Instead of virtualizing an entire operating system (OS), containers share the host OS kernel and run applications in completely isolated user spaces. This setup allows multiple containers to run in parallel and isolated fashion, minimizing interference between them.

Each container includes only the application and its dependencies, such as libraries, configuration files, and environment variables, making it extremely **portable** and easy to deploy across different environments, from a developer's machine to a cloud cluster.

##### Container Features

- **Images and Containers**: 
- **Images**: Immutable packages containing the application and its dependencies needed to run it. Images are reusable and stored in repositories such as [**Docker Hub**](https://hub.docker.com/).
- **Containers**: Running image instances that can be quickly created, stopped, and deleted.

- **Isolation**:
- They use Linux kernel features to isolate processes, file systems, networks, etc., providing a separate environment per container.
- **Namespaces** provide isolation of operating system resources:
- `pid`: Isolates process IDs.
- `net`: Provides separate network stacks.
- `mnt`: Isolates file system mount points.
- `ipc`: Isolates inter-process communication resources.
- `uts`: Isolates host names and domains.
- `user`: Isolates user and group IDs.
- **cgroups** (control groups) manage the use of resources such as CPU, memory, and disk, ensuring that containers do not use more resources than allocated.

- **Union Filesystem (UFS)**: Allows containers to be built in layers. Read-only layers are used for system files, while writable layers are kept on top, minimizing storage usage and facilitating iterative development.

- **Lightweight**: Containers do not include a full OS; they run as processes on the host OS, making them much lighter than virtual machines.

##### Container Use Cases

Containers are ideal for:

- **Development and Testing**: They allow developers to work in an environment that exactly replicates the production environment.
- **Microservices**: They separate applications into small, deployable components, which can be scaled independently.
- **Continuous Deployment**: They facilitate CI/CD by allowing applications to be packaged and deployed uniformly.

#### 2.2.2. Virtual Machines

**Virtual machines (VMs)** are a more traditional virtualization technology that allows multiple operating systems to run on a single physical server using a hypervisor, such as **VMware** or **VirtualBox**.

##### Virtual Machine Features- **Hypervisor**: A hypervisor runs directly on the server hardware (type 1 hypervisor) or on top of an operating system (type 2 hypervisor). It manages the creation and execution of multiple VMs, allocating hardware resources effectively.

- **Full operating system**: Each VM has its own full operating system (e.g. Linux, Windows) that runs in isolation, meaning VMs consume more CPU, memory, and storage resources than containers.

- **Strong isolation**: Because each VM has its own kernel and OS, it provides stronger isolation than containers. This is useful in cases where security is critical.

- **Performance and resource usage**: VMs are heavier and have longer startup times compared to containers. They require more resources due to the need for a full operating system and hypervisor.

##### Virtual Machine Use Cases

Virtual machines are suitable for:

- **Monolithic applications**: Where complete OS isolation is necessary.
- **Multi-OS environments**: To run multiple operating systems on a single server.
- **Legacy workloads**: Where legacy or monolithic applications need to be run in a virtualized environment.

#### 2.2.3. Cloud Solutions

In the cloud, providers such as **Google Cloud Platform (GCP)**, **Amazon Web Services (AWS)**, and **Microsoft Azure** offer container and virtual machine services:

- **AWS ECS/Fargate, EKS, Azure Kubernetes Service (AKS), Google Kubernetes Engine (GKE)**: To manage containers at scale.
- **EC2 (AWS), VM Instances (GCP), Azure Virtual Machines**: To deploy and manage virtual machines.

#### 2.2.4. Container Management Tools

**Docker Desktop**, **Docker CLI**, and **Docker Compose** are widely used tools for developing, managing, and deploying containers in local development environments. They allow developers to quickly build applications, test them, and ensure that they will behave the same way in production.

### 2.3. Command Collection

| Command | Usage/Function |
|:-------:|:----------:|
| **docker images** | Returns a list of all images downloaded to the machine. |
| **docker pull image_name** | Download a Docker image, we can visit https://hub.docker.com/. |
| **docker image rm image_name:tag** | Remove an image. |
| **docker create image_name** | Create a container with that image, returns the ID of the created container. |
| **docker create --name container_name image_name** | Create a container with a specific name from an image. |
| **docker start created_container_id** | Start the container. |
| **docker start container_name** | Start a container using its name. |
| **docker ps** | View only active containers. Returns a table with Container-ID, Image, Command, Created, Status, Ports, and Names. |
| **docker ps -a** | View containers on the machine, active and non-active. |
| **docker stop container_name** | Stop a container using its name. |
| **docker stop container_id** | Stop a container using its ID. |
| **docker rm container_name** | Delete a Docker container. |
| **docker run -d -p 8080:80 -i --name Debian debian:latest** | Create a container to host a service and publish it on a port on the host to make it accessible. <br /> - **Debian**: Container name <br /> - **debian:latest**: Container image <br /> - **8080**: Host port <br /> - **80**: Container port <br /> - **-d**: Run the container in the background and print the container ID <br /> - **-p**: Publish the port(s) of a container to the host <br /> - **-i**: Keep STDIN open even when not connected <br /> - **--name**: Name the container || **docker exec -it container_name bash** | Open a Linux terminal in the container. |
| **docker cp host_files_path container_name:container_files_path** | Pass files from host to container. |
| **docker stats container_name** | Monitor CPU, memory, and bandwidth usage of a running container. |
| **docker network ls** | List available networks in Docker. |
| **docker network inspect network_name** | Inspect the Docker virtual network, find out the IP, and see which containers belong to that network. |
| **docker update [OPTIONS] CONTAINER [CONTAINER...]** | Update the configuration of one or more containers. [Docker Update Documentation](https://docs.docker.com/engine/reference/commandline/update/) |

### 2.4. Accessing containers by port mapping

Port mapping maps a specific host port to a container port to accept requests. This facilitates communication between containers and allows applications within containers to be accessible from the host or from other containers.

For example, the following command creates a container using the MongoDB image and maps port 27017 on the host to port 27017 on the container:

```bash
docker container create -p 27017:27017 --name mongodb mongo
```

In this command:

- `-p`: Publish the specified port. The first number is the host port and the second is the container port.
- `mongodb`: Name assigned to the container.
- `mongo`: Image of the container used.

Docker provides commands to capture container logs:

- `docker logs container_name`: Displays container logs.
- `docker logs -f container_name`: Displays logs continuously.

### 2.5. Create and start a container with Docker Run

The `docker run` command combines the `docker create` and `docker start` commands and performs the following steps:

1. Searches for the specified image; if not available locally, downloads it from the repository.
2. Creates a container from the image.
3. Starts the container.

Example command that runs a MongoDB container in the background (using `-d`), mapping port 27017 from the host to the container:

```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

### 2.6. Environment variables in containers

To connect a database to an application in Docker, environment variables specific to the container image are used.

For example, to create a MongoDB container with a username and password:

```bash
docker create -e MONGO_INITDB_ROOT_USERNAME=dani -e MONGO_INITDB_ROOT_PASSWORD=mongo key
```

These variables set the database administrator username and password during container initialization. Environment variables vary depending on the container image, so it is recommended to consult the documentation for the corresponding image.

### 2.7. Building images using Dockerfile

A `Dockerfile` is a text file with instructions for building a Docker image, which can then be used to create containers. Each image is based on a previous image, either official Docker or custom.

Example of a `Dockerfile`:

```dockerfile
# Base image
FROM node:18 

# Create folder for code
RUN mkdir -p /home/app

# Copy files from host to container 
COPY . /home/app

# Expose port 
EXPOSE 3000 

# Run application
CMD ["node", "/home/app/index.js"] 
```

To allow communication between containers, it is necessary to group them in an internal network. Docker provides commands to manage these networks:

- `docker network ls`: Lists all networks configured in Docker.
- `docker network create my-new-network`: Creates a new network.

Containers in the same network can communicate with each other using the container name as the domain.

To build an image from a `Dockerfile`:

```bashdocker build -t image-name:label path/dockerfile
```

And to create a container on a specific network:

```bash
docker create -p 27017:27017 --name mongodb --network my-new-network mongo
```

Networking modes in Docker:

- **Bridge mode**: Default mode; the network is recognizable only within the host and the container.
- **Custom network**: Allows you to specify the IP address range and other parameters.

### 2.8. Defining and managing multiple containers using Docker Compose

Docker Compose allows you to define and manage multiple containers as a set of interconnected services using a `docker-compose.yml` file in YAML format.

Example of `docker-compose.yml`:

```yaml
# Defines the version of the Docker Compose configuration file
version: "3.9"

# Defines the services to be used in this configuration
services:

# Service for the application
my-app:

# Specifies the build context, in this case the current directory
build: .

# Maps port 3000 of the container to port 3000 of the host
ports:
- "3000:3000"

# Defines the network links between the services
links:
# Establishes a link to the 'mongodb' service
- mongodb

# Service for the MongoDB database
mongodb:

# Uses the official MongoDB image
image: mongo

# Maps port 27017 of the container to port 27017 of the host
ports:
- "27017:27017"

# Sets the environment variables for database initialization
environment:
# Defines the root username for MongoDB
- MONGO_INITDB_ROOT_USERNAME=dani

# Defines the password for the MongoDB root user
- MONGO_INITDB_ROOT_PASSWORD=key
```

To run the defined services in `docker-compose.yml`:

```bash
docker compose up
```

To stop and remove all services, including images and containers:

```bash
docker compose down
```

### 2.9. Creating volumes for data persistence

Volumes in Docker allow data persistence in containers, preserving information even if a container is deleted. The data is stored on the host computer.

Volume types:

1. **Anonymous**: An unnamed path is mounted, with no option to reference it in another container.
2. **Host to host**: Which folder to mount and where is specified.
3. **Named**: Allows referencing the volume when creating another container.

Example of `docker-compose.yml` with volumes:

```yaml
# Defines the version of the Docker Compose configuration file
version: "3.9"

# Defines the services to be used in this configuration
services:

# Service for the application
my-app:

# Specifies the build context, in this case the current directory
build: .

# Maps port 3000 of the container to port 3000 of the host
ports:
- "3000:3000"

# Defines the network links between the services
links:
# Establishes a link to the 'mongodb' service
- mongodb

# Service for the MongoDB database
mongodb:

# Uses the official MongoDB image
image: mongo

# Maps port 27017 of the container to port 27017 of the host
ports:
- "27017:27017"

# Sets the environment variables for database initialization
environment:
# Defines the root username for MongoDB
- MONGO_INITDB_ROOT_USERNAME=dani

# Defines the password for the MongoDB root user
- MONGO_INITDB_ROOT_PASSWORD=key

# Mounts a volume to persist MongoDB data MongoDB
volumes:
# Associate the volume 'mongo-data' with the '/data/db' directory in the container
- mongo-data:/data/db

# Define the volumes to be used in this configuration
volumes:

# Declare a volume called 'mongo-data' to store persistent data
mongo-data:
```

## 3. Kubernetes

The adoption of Kubernetes is primarily motivated by the need to efficiently and scalably manage multiple Docker containers distributed across multiple servers. Kubernetes facilitates the orchestration of these containers through a declarative infrastructure. In this approach, users define the desired configuration in a manifest, i.e. a configuration file, which is processed by the Kubernetes API. Kubernetes takes responsibility for distributing the workload across the available nodes and managing the resources required by the containers.

Kubernetes also enables the construction of ETL pipelines using tools such as Spark or Airflow, and is widely used in training machine learning models, as evidenced by its use in Kubeflow. By managing the compute, network, and storage infrastructure, Kubernetes simplifies the deployment and management of containerized applications at scale.

### 3.1. Kubernetes Components

**Kubectl** is a command-line interface that facilitates interaction with a Kubernetes cluster, allowing management of objects such as pods, services, and deployments.

To create a Kubernetes cluster in a local environment, **Minikube** is used. This tool allows Kubernetes to run locally for testing or development purposes, creating a cluster with one or more virtualized nodes. By default, Minikube creates a cluster containing one node.

To initialize the Minikube cluster we can use the command:

```bash
minikube start
```

While to check the status of the cluster, we can use the command:

```bash
minikube status
```

#### 3.1.1. Node

A node represents the smallest unit within a Kubernetes cluster. It can be a physical machine or a virtual machine where applications run. Kubernetes abstracts the underlying hardware, allowing for efficient management of resource requirements. If a node cannot provide more resources or fails, Kubernetes redistributes workloads to other available nodes.

There are different types of nodes:

+ **On-Demand Nodes**: These are created when resources are high (CPU, GPU, RAM).
+ **Spot Nodes**: These are cheaper nodes that can be retired at any time.

#### 3.1.2. Pod

A pod is the minimum execution unit in Kubernetes and can contain one or more containers that share the same resources and local network. All containers within the same pod can communicate with each other and share the same network environment. When scaling a pod, all containers within it are scaled together.

#### 3.1.3. Cluster

A cluster is a set of nodes, also known as workers, running on Kubernetes. The relationship between the applications running on each node is independent. For example, if you have a Proxmox server where there are two virtual machines, VM1 and VM2, even though they have different Pods, if they are all managed by Kubernetes, they will both be part of the same cluster.

### 3.2. StatefulSet and volumes

Since the execution location of an application cannot be guaranteed, using the local disk to store data is not feasible, being useful only for temporary data storage, such as cache.

Kubernetes uses persistent volumes, which unlike other resources such as CPU, GPU, and RAM, which are managed by Kubernetes clusters, must be attached to the Kubernetes cluster itself from local or cloud drives. These volumes are not tied to a particular node.**StatefulSet** allows the creation of pods with persistent volumes, ensuring data integrity even if the pod is restarted or deleted.

```yaml
# Kubernetes API version being used
apiVersion: apps/v1

# Resource type being created
kind: StatefulSet

metadata:
# Name of the StatefulSet
name: my-csi-app-set

spec:
selector:
matchLabels:
# Label that must match for a pod to be considered part
# of this StatefulSet
app: my-frontend

# Name of the service to use for this StatefulSet
serviceName: "my-frontend"

# Number of pod replicas to keep running
replicas: 1

# Template defining the pods to be created
template:
metadata:
labels:
# Labels for the pods to be created
app: my-frontend

spec:
containers: # List of containers to run in each pod
- name: my-frontend # Name of the container
image: busybox # Image of the container to use
args:
- sleep
- infinity # Arguments to pass to the container
volumeMounts: # Mount points for volumes in the container
- name: data # Name of the volume
mountPath: "/data" # Path to mount the volume to

# Templates for persistent volume requests
volumeClaimTemplates:
- metadata:
# Name of the persistent volume request
name: csi-pvc

spec:
# Access modes for the volume
accessModes: [ "ReadWriteOnce" ]

resources:
requests:
# Amount of requested storage
storage: 1Gi

```

To check the status of volumes and StatefulSets, the following commands can be used:

```bash
kubectl get pvc # To view volume allocation, capacity, etc.
kubectl get sts # To view StatefulSets.
```

### 3.3. Manifests

A manifest is a file in YAML or JSON format that specifies how to deploy an application to a Kubernetes cluster. This file is known as an intent record, where you tell Kubernetes the desired state of the cluster.

It is also important to define what a namespace is, which is the logical division of the Kubernetes cluster, allowing the cluster load to be separated. Policies can be created to separate traffic between namespaces. By default, data from one namespace can be viewed from another namespace.

To get the cluster namespace we can use the command:

```bash
kubectl get ns
```

To get the pods in that namespace we can use the following command, which by adding -o wide at the end, we get information about the IP of the pod, node, etc.

```bash
kubectl -n name_namespace get pods -o wide
```

To delete a pod from the namespace we can use the command

```bash
kubectl -n name_namespace delete pod pod_name
```

Example of a manifest to create a simple Pod:

```yaml
# API version of the Kubernetes resource, it is associated with the type
# so you have to look at the documentation.
apiVersion: v1

# Type of the manifest.
kind: Pod

# Name of the Pod.
metadata:
name: nginx

# Containers that run inside this pod. All containers
# that run inside a Pod have the same IP.
spec:
containers:
- name: nginx
image: nginx:alpine
```

To apply the manifest:

```bash
kubectl apply -f name.yaml # Apply the manifest to the default namespace
kubectl get pods # View pod status
```

Example manifest for creating a more complex Pod:

The following manifest contains environment variables, as well as resource requests and limits, plus readiness probe and liveness probe.

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
# Environment variables, just like in Docker. This is specific
# to each container.- name: MY_VARIABLE
value: "pelado"
- name: MY_OTHER_VARIABLE
value: "pelade"
- name: DD_AGENT_HOST
valueFrom:
fieldRef:
# Get the Host IP from the Kubernetes API.
fieldPath: status.hostIP
resources:
# Always guaranteed resources. The instance must have this, otherwise
# it cannot deploy.
requests:
memory: "64Mi"
# Measured in millicores, where 1000 millicores is 1 CPU core.
cpu: "200m"
# Limit that the Pod can reach, if it uses more resources, the Linux
# kernel kills the process and the pod restarts. limits:
memory: "128Mi"
cpu: "500m"
# Way to tell Kubernetes that the Pod is ready to receive
# traffic
readinessProbe:
httpGet:
path: /
port: 80
initialDelaySeconds: 5
periodSeconds: 10
# Way to tell Kubernetes that the Pod is alive and not to kill it
livenessProbe:
tcpSocket:
port: 80
initialDelaySeconds: 15
periodSeconds: 20
# Expose port 80 for nginx.
ports:
- containerPort: 80
```

### 3.4. Deployment and replica management

A deployment allows you to declare the number of replicas, i.e. the number of Pods, and ensure that the desired state is maintained by monitoring them. 

```yaml
# API version of the Kubernetes resource, it is associated with the type
# so you have to look at the documentation.
apiVersion: apps/v1

# Manifest type.
kind: Deployment

# Name of the Deployment.
metadata:
name: nginx-deployment

spec:
# Number of pod replicas that will be kept running.
replicas: 3

# Label that must match for a pod to be considered part of this Deployment.
selector:
matchLabels:
app: nginx

# Template that defines the pods that will be created.
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

A DaemonSet is a way to deploy a Pod, but this Pod will be on all nodes in the cluster. A single Pod on each node. The number of replicas is therefore not specified, because it depends on the number of nodes. It is often used for monitoring services.

```yaml
# API version of the Kubernetes resource, it is associated with the type
# so you have to look at the documentation.
apiVersion: apps/v1

# Type of the manifest.
kind: DaemonSet

# Name of the DaemonSet.
metadata:
name: nginx-daemonset

spec:
# Label that must match for a pod to be considered part of this DaemonSet.
selector:
matchLabels:
app: nginx

# Template that defines the pods that will be created.
template:
metadata:
labels:
app: nginx
spec:
containers:
- name: nginx
image: nginx:alpine
```

### 3.6. Exposing applications

#### 3.6.1. Services in Kubernetes

Services in Kubernetes allow access to pods from inside and outside the cluster. An example of this is the use of a Load Balancer:

```yaml
apiVersion: v1
kind: Service
metadata:
name: my-service
spec:
type: LoadBalancer
selector:
app: my-application
ports:
- protocol: TCP
port: 80
targetPort: 9376
```

#### 3.6.2. Ingress

Ingress manages external access to cluster services, typically HTTP. It provides load balancing and SSL termination. Allows access to the service via paths, and usually requires the Ingress-Nginx controller which is usually installed separately.

### 3.7. Networking and Storage

#### 3.7.1. Pod Networking

Each pod has its own IP, and the Cloud Cluster Networking Interface is used to communicate between pods on different nodes.

#### 3.7.2. Persistent Storage

**etcd** is a distributed key-value data store used to store configuration, state, and metadata.### 3.8. Service Types

#### 3.8.1. Cluster IP

Cluster IP provides a way to expose applications running on a set of Pods through a single virtual IP address at the cluster level, facilitating communication and load balancing between Pods.

#### 3.8.2. Node Port

Node Port creates a port on each node that will receive traffic and forward it to the necessary services (Pods)²⁶. This allows the application to be accessible from outside the cluster. It typically uses ports within the range 30000-32767.

```yaml
apiVersion: v1
kind: Service
metadata:
name: my-service
spec:
type: NodePort
selector:
app: my-application
ports:
- port: 80
targetPort: 9376
nodePort: 30007
```

#### 3.8.3. Load Balancer

Load Balancer is more focused on cloud providers to redirect traffic in Pods. It creates a load balancer by providing a stable IP for the server, making it easier to access from the internet.

```yaml
apiVersion: v1
kind: Service
metadata:
name: my-service
spec:
type: LoadBalancer
selector:
app: my-application
ports:
- port: 80
targetPort: 80
```