---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Crea y gestiona entornos virtuales de Python con Anaconda, asegurando la separación de dependencias para distintos proyectos.
title: Anaconda
---

# Introducción

<p align="center">
  <img src="https://th.bing.com/th/id/R.7b4ee475a8fa6657174bc8477be3df41?rik=7C3cFBxzAcC5Xw&pid=ImgRaw&r=0"/>
  <br />
  <em>Logo de Anaconda</em>
</p>

**Anaconda** es una plataforma de código abierto que facilita la creación de entornos virtuales de Python, permitiendo el desarrollo de proyectos en ciencia de datos, aprendizaje automático, entre otros. Incluye una distribución de Python con diversas bibliotecas preinstaladas, un gestor de paquetes para administrar dependencias, herramientas para crear y gestionar entornos virtuales, y una integración fluida con cuadernos Jupyter.

## 1. Comandos y procedimientos

### 1.1. Actualización de paquetes

Para actualizar todos los paquetes y garantizar el uso de versiones más recientes y seguras, se utiliza:

```bash
conda update --all
```

### 1.2. Creación y gestión de entornos en Jupyter

Los entornos virtuales permiten aislar las dependencias necesarias para proyectos específicos, evitando conflictos entre paquetes. Para crear y añadir un nuevo entorno a los cuadernos Jupyter, se deben seguir los pasos siguientes:

1. Abrir el terminal de **Anaconda Prompt**.
2. **Crear un entorno nuevo**:

   ```bash
   conda create --name nombre_del_entorno
   ```

3. **Activar el entorno**:

   ```bash
   conda activate nombre_del_entorno
   ```

4. **Instalar y actualizar PIP** utilizando el gestor de paquetes de Anaconda:

   ```bash
   conda install anaconda::pip
   pip install --upgrade pip
   ```

5. **Instalar ipykernel**, para permitir que Jupyter interactúe con los entornos de Python:

   ```bash
   pip install ipykernel
   ```

6. **Agregar el entorno a Jupyter**:

   ```bash
   python -m ipykernel install --user --name=nombre_del_entorno
   ```

### 1.3. Instalación de paquetes desde un archivo de requisitos

Cuando trabajamos en un nuevo proyecto que requiere el uso de paquetes específicos es recomendable crear un archivo `requirements.txt` que defina los nombres y versiones de los paquetes necesarios. Para ello sigue los siguientes pasos:

1. **Crear el archivo `requirements.txt`**: Usar un editor de texto (Visual Studio Code, Sublime Text, etc.).

2. **Definir los paquetes necesarios**: Ingresar nombres y versiones de los paquetes en el archivo. Ejemplo:

   ```plaintext
   numpy==1.21.0
   pandas>=1.3.0
   requests
   ```

3. **Guardar el archivo**.

4. **Instalar los paquetes**:

   ```bash
   pip install -r requirements.txt
   ```

### 1.4. Eliminación de un entorno

Para eliminar un entorno en Anaconda:

1. **Listar entornos disponibles**:

   ```bash
   conda env list
   ```

2. **Eliminar el entorno**:

   ```bash
   conda env remove --name nombre_del_entorno
   ```