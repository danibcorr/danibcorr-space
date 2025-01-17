---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description:
  Creación y gestión de entornos virtuales de Python con VENV, Anaconda y Poetry
title: Gestión de entornos en Python
toc_max_heading_level: 3
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Bibliografía

- [VENV Docs](https://docs.python.org/3/library/venv.html)
- [Poetry Docs](https://python-poetry.org/)
- [Anaconda Docs](https://docs.anaconda.com/)

## 1. Introducción

<p align="center">
  <img src={require("../../img/anaconda-logo.png").default} width="500"/>
  <br />
  <em>Logo de Anaconda</em>
</p>

**Anaconda** es una plataforma de código abierto diseñada para la creación y
gestión de entornos virtuales en Python, enfocada en proyectos de ciencia de
datos y aprendizaje automático.

Proporciona una distribución de Python con numerosas bibliotecas preinstaladas,
un gestor de paquetes eficiente y herramientas avanzadas, como los cuadernos
[_Jupyter_](https://jupyter.org/).

La gestión de paquetes en Anaconda se realiza mediante el gestor
[_Conda_](https://anaconda.org/anaconda/repo), aunque también es posible
utilizar [_PIP_](https://pypi.org/).

Por otro lado, [_VENV_](https://docs.python.org/3/library/venv.html) es una
alternativa más ligera para la creación de entornos virtuales sin las
dependencias adicionales de Anaconda. En este caso, la gestión de paquetes se
lleva a cabo con [_PIP_](https://pypi.org/).

<p align="center">
  <img src="https://python-poetry.org/images/logo-origami.svg" width="100"/>
  <br />
  <em>Logo de Poetry</em>
</p>

[_Poetry_](https://python-poetry.org/) es otra herramienta de gestión de
dependencias en proyectos de Python. Permite, entre otras cosas:

- Administrar dependencias por grupos (_producción_, _pruebas_, _documentación_,
  etc.).
- Crear y manejar entornos virtuales automáticamente.
- Facilitar la creación de _wheels_ para empaquetar proyectos y publicarlos en
  [_PyPI_](https://pypi.org/).

:::warning Este tutorial asume el uso de un sistema basado en Linux,
específicamente una distribución derivada de Debian. Ten en cuenta que algunos
comandos pueden variar según la distribución o el sistema operativo utilizado.
:::

## 2. Utilidades para la gestión de entornos

### 2.1. Creación de un entorno virtual

<Tabs>
   <TabItem value="venv" label="VENV">

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

      4. **Instalar _VENV_, _PIP_ y herramientas de desarrollo**:

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

   </TabItem>

   <TabItem value="anaconda" label="Anaconda">

      1. **Abrir la terminal de Anaconda Prompt**.

      2. **Crear un nuevo entorno**:

         ```bash
         conda create --name nombre_del_entorno
         ```

      3. **Activar el entorno**:

         ```bash
         conda activate nombre_del_entorno
         ```

      4. **(Opcional) Instalar y actualizar _PIP_ con Anaconda**:

         Es posible usar _PIP_ dentro de Anaconda, aunque no se recomienda
         mezclar paquetes de ambos gestores, ya que esto puede generar
         conflictos de versiones.

         ```bash
         conda install anaconda::pip
         pip install --upgrade pip
         ```

   </TabItem>
</Tabs>

### 2.2. Gestión de la caché

Para liberar espacio o solucionar problemas con dependencias, se puede purgar la
caché con los siguientes comandos:

<Tabs>
   <TabItem value="pip" label="PIP">
      ```bash
      pip cache purge
      ```
   </TabItem>
   <TabItem value="anaconda" label="Anaconda">
      ```bash
      conda clean --all
      ```
   </TabItem>
   <TabItem value="poetry" label="Poetry">
      ```bash
      poetry cache clear --all .
      ```
   </TabItem>
</Tabs>

### 2.3. Actualización de paquetes

Mantener las dependencias actualizadas es clave para el correcto funcionamiento
del proyecto.

<Tabs>
   <TabItem value="pip" label="PIP">

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

   </TabItem>
   <TabItem value="anaconda" label="Anaconda">

      ##### Actualizar todos los paquetes

      Aunque Anaconda permite la instalación de paquetes con PIP, se recomienda evitar
      mezclar paquetes del repositorio de Anaconda y PIP, ya que esto podría causar
      conflictos. Si decides usar paquetes de Anaconda, puedes actualizar todos los
      paquetes con:

      ```bash
      conda update --all
      ```

      ##### Actualizar un paquete específico

      Para actualizar un paquete específico:

      ```bash
      conda update nombre_del_paquete
      ```

   </TabItem>
   <TabItem value="poetry" label="Poetry">

      ##### Actualizar todos los paquetes

      ```bash
      poetry update
      ```

      ##### Actualizar un paquete específico

      Para actualizar un paquete específico:

      ```bash
      poetry update nombre_del_paquete
      ```

   </TabItem>
</Tabs>

### 2.4. Instalación de paquetes desde un archivo de requisitos

Cuando un proyecto necesita dependencias específicas, es útil usar un archivo
`requirements.txt`:

1. **Crear un archivo `requirements.txt`** con los paquetes y versiones
   deseadas:

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

<Tabs>
   <TabItem value="venv" label="VENV">

      ```bash
      rm -rf nombre_del_entorno
      ```

   </TabItem>
   <TabItem value="anaconda" label="Anaconda">

      1. **Listar los entornos disponibles**:

         ```bash
         conda env list
         ```

      2. **Eliminar un entorno**:

         ```bash
         conda env remove --name nombre_del_entorno
         ```

   </TabItem>
</Tabs>

### 2.6. Integración del entorno con Jupyter

Para añadir el entorno virtual creado podemos seguir los pasos siguientes:

1. **Instalar `ipykernel` para la integración con Jupyter**:

   ```bash
   pip install ipykernel
   ```

2. **Añadir el entorno a Jupyter**:

   ```bash
   python -m ipykernel install --user --name=nombre_del_entorno
   ```

### 2.7. Eliminación de paquetes instalados

<Tabs>
   <TabItem value="pip" label="PIP">

      ##### Eliminar todos los paquetes

      ```bash
      pip list --format=freeze > installed.txt
      pip uninstall -r installed.txt -y
      ```

      ##### Eliminar un paquete específico

      ```bash
      pip uninstall nombre_del_paquete
      ```

   </TabItem>
   <TabItem value="anaconda" label="Anaconda">

      ##### Eliminar un paquete específico

      ```bash
      conda remove nombre_del_paquete
      ```

   </TabItem>
   <TabItem value="poetry" label="Poetry">

      ```bash
      poetry remove nombre_del_paquete
      ```

   </TabItem>
</Tabs>
