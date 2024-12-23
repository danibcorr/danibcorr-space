---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Creación y gestión de entornos virtuales de Python con VENV y Anaconda.
title: Gestión de entornos en Python
toc_max_heading_level: 3
---

## 1. Introducción

<p align="center">
  <img src={require("../../img/anaconda-logo.png").default} width="500"/>
  <br />
  <em>Logo de Anaconda</em>
</p>

**Anaconda** es una plataforma de código abierto que facilita la creación y gestión de entornos virtuales de Python, diseñada especialmente para proyectos de ciencia de datos y aprendizaje automático.

Proporciona una distribución de Python con numerosas bibliotecas preinstaladas, un gestor de paquetes eficiente y herramientas avanzadas para trabajar con cuadernos [Jupyter](https://jupyter.org/).

La gestión de paquetes se realiza mediante el gestor de paquetes de [**Conda**](https://anaconda.org/anaconda/repo), aunque también se puede utilizar el gestor de paquetes de [**PIP**](https://pypi.org/).

Por otra parte, [**VENV**](https://docs.python.org/3/library/venv.html) es una opción más ligera que permite crear entornos virtuales sin las dependencias adicionales de Anaconda. La gestión de paquetes se realiza mediante el gestor de paquetes de [**PIP**](https://pypi.org/).

:::warning
Este tutorial asume el uso de un sistema basado en Linux, particularmente una distribución derivada de Debian. Ten en cuenta que algunos comandos podrían variar según la distribución o el sistema operativo utilizado.
:::

## 2. Utilidades para la gestión de entornos

### 2.1. Creación de un entorno virtual

#### 2.1.1. Utilizando VENV

Sigue estos pasos para configurar un entorno virtual utilizando **VENV**:

1. **Actualizar el sistema operativo**:

   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Agregar el repositorio de Python más reciente**:

   ```bash
   sudo add-apt-repository ppa:deadsnakes/ppa
   sudo apt update
   ```

3. **Instalar una versión específica de Python** (por ejemplo, Python 3.10):

   ```bash
   sudo apt install python3.10
   ```

4. **Instalar VENV, PIP y herramientas de desarrollo**:

   ```bash
   sudo apt install python3.10-venv python3.10-dev python3-pip
   ```

5. **Crear el entorno virtual**:

   ```bash
   python -m venv nombre_del_entorno
   ```

6. **Activar el entorno**:

   ```bash
   source nombre_del_entorno/bin/activate
   ```

#### 2.1.2. Utilizando Anaconda

Si prefieres utilizar Anaconda, sigue estos pasos:

1. **Abrir Anaconda Prompt**.

2. **Crear un nuevo entorno**:

   ```bash
   conda create --name nombre_del_entorno
   ```

3. **Activar el entorno**:

   ```bash
   conda activate nombre_del_entorno
   ```

4. **(Opcional) Instalar y actualizar PIP con Anaconda**: En el caso de que queramos utilizar Anaconda pero con los paquetes gestionados por PIP:

   ```bash
   conda install anaconda::pip
   pip install --upgrade pip
   ```

### 2.2. Gestión de la caché de PIP

#### 2.2.1. Utilizando PIP

Parar liberar espacio en el sistema o solucionar problemas con dependencias, podemos purgar la caché de PIP con el comando siguiente:

```bash
pip cache purge
```

#### 2.2.2. Utilizando Anaconda

Del mismo modo, en el caso de estar utilizando Anaconda, podemos emplear el siguiente comando:

```bash
conda clean --all
```

### 2.3. Actualización de paquetes

Es importante mantener las dependencias de tu proyecto actualizadas. Aquí se explican los pasos para hacerlo:

#### 2.3.1. Utilizando PIP

##### Actualizar todos los paquetes

Puedes utilizar el siguiente comando para actualizar todos los paquetes:

```bash
pip freeze | grep -v "^\-e" | cut -d = -f 1 | xargs -n1 pip install -U
```

Donde:

- `pip freeze`: Genera una lista de los paquetes instalados.
- `grep -v "^\-e"`: Excluye las instalaciones en modo editable.
- `cut -d = -f 1`: Extrae solo los nombres de los paquetes, sin las versiones.
- `xargs -n1 pip install -U`: Actualiza cada paquete.

##### Actualizar un paquete específico

Para actualizar un paquete específico:

```bash
pip install --upgrade nombre_del_paquete
```

#### 2.3.2. Utilizando Anaconda

##### Actualizar todos los paquetes

Aunque Anaconda permite la instalación de paquetes con PIP, se recomienda evitar mezclar paquetes del repositorio de Anaconda y PIP, ya que esto podría causar conflictos. Si decides usar paquetes de Anaconda, puedes actualizar todos los paquetes con:

```bash
conda update --all
```

##### Actualizar un paquete específico

Para actualizar un paquete específico:

```bash
conda update nombre_del_paquete
```

### 2.4. Instalación de paquetes desde un archivo de requisitos

Cuando un proyecto necesita dependencias específicas, es útil usar un archivo `requirements.txt`:

1. **Crear un archivo `requirements.txt`** con los paquetes y versiones deseadas:

   ```plaintext
   numpy==1.21.0
   pandas>=1.3.0
   requests
   ```

2. **Instalar los paquetes desde el archivo**:

   ```bash
   pip install -r requirements.txt
   ```

### 2.5. Eliminar un entorno

#### 2.5.1. Utilizando VENV

Para eliminar un entorno creado con VENV, dirígete al directorio donde se creó y elimina la carpeta correspondiente:

```bash
rm -rf nombre_del_entorno
```

#### 2.5.2. Utilizando Anaconda

1. **Listar los entornos disponibles**:

   ```bash
   conda env list
   ```

2. **Eliminar un entorno**:

   ```bash
   conda env remove --name nombre_del_entorno
   ```

### 2.6. Añadir el entorno en Jupyter

Para añadir el entorno virtual creado, independientemente de si se trata de Anaconda o VENV, podemos seguir los pasos siguientes:

1. **Instalar `ipykernel` para la integración con Jupyter**:

   ```bash
   pip install ipykernel
   ```

2. **Añadir el entorno a Jupyter**:

   ```bash
   python -m ipykernel install --user --name=nombre_del_entorno
   ```

### 2.7. Eliminar paquetes instalados de un entorno

#### 2.7.1. Utilizando PIP

##### Eliminar todos los paquetes

1. **Listar todos los paquetes instalados**:

   ```bash
   pip list --format=freeze > installed.txt
   ```

2. **Eliminar todos los paquetes listados**:
   ```bash
   pip uninstall -r installed.txt -y
   ```

##### Eliminar un paquete en concreto

1. **Eliminar un paquete específico**:
   ```bash
   pip uninstall nombre_del_paquete
   ```

#### 2.7.2. Utilizando Anaconda

##### Eliminar todos los paquetes

1. **Eliminar un entorno de Anaconda completo**:
   Si tienes entornos específicos que quieres eliminar, puedes hacerlo con:

   ```bash
   conda remove --name nombre_entorno --all
   ```

2. **Eliminar paquetes de un entorno específico sin eliminar el entorno**:
   Primero, activa el entorno:

   ```bash
   conda activate nombre_entorno
   ```

3. **Eliminar todos los paquetes del entorno activo**:
   ```bash
   conda list --export > installed_conda.txt
   conda remove --yes --file installed_conda.txt
   ```

##### Eliminar un paquete en concreto

1. **Eliminar un paquete específico**:
   ```bash
   conda remove nombre_del_paquete
   ```
