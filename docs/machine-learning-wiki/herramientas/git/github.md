---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Utiliza Git con GitHub
title: GitHub
toc_max_heading_level: 4
---

# Bibliografía

- [ML in Production: From Data Scientist to ML Engineer](https://www.udemy.com/course/ml-in-production/?couponCode=SKILLS4SALEA)

# Introducción

<p align="center">
  <img src={require("../../../img/github-logo.png").default} width="500"/>
  <br />
  <em>Logo de GitHub</em>
</p>

**GitHub** es una plataforma de desarrollo colaborativo que se utiliza para gestionar proyectos de software. Proporciona herramientas que permiten la integración continua (*Continuous Integration*, CI), la entrega continua (*Continuous Deployment*, CD) y el control de versiones a través de **Git**. 

GitHub se ha convertido en una herramienta esencial, ofreciendo funcionalidades avanzadas como **GitHub Actions** para la automatización de flujos de trabajo y **GitHub Pages** para la publicación de sitios web directamente desde repositorios.

## 1. CI/CD con GitHub Actions

El término **CI (*Continuous Integration*)** se refiere a la automatización de los pasos necesarios para integrar nuevo código en un repositorio compartido, garantizando que los cambios se validen continuamente mediante pruebas y compilaciones. **CD (*Continuous Deployment*)** implica la automatización de los pasos necesarios para llevar el código del repositorio compartido a producción, facilitando la creación y entrega continua de nuevas versiones de un producto.

### 1.1. GitHub Actions y su funcionamiento

GitHub Actions es una plataforma que permite automatizar flujos de trabajo mediante archivos de configuración YAML. El runner de GitHub Actions es un servidor que ejecuta estos workflows en el entorno definido por el proyecto. Para configurar un workflow, se crea un archivo YAML dentro del repositorio, generalmente bajo la ruta `.github/workflows/`, que define los pasos o acciones a realizar.

### 1.2. Estructura del workflow

El archivo de configuración del workflow (por ejemplo, `workflow.yml`) contiene ***jobs***, que representan unidades de trabajo como la compilación del proyecto, la ejecución de pruebas o el despliegue de la aplicación. Cada job está compuesto por pasos secuenciales que describen tareas específicas, y requiere un sistema operativo para ejecutarse. Los ***triggers*** o eventos, como un `push`, un `pull request` o eventos programados, determinan cuándo se debe iniciar el workflow. Además, es posible definir **permisos** que limitan el acceso del workflow a los recursos del repositorio.

GitHub Actions permite utilizar acciones definidas por terceros, disponibles en [github.com/actions](https://github.com/actions) y en el [Marketplace de GitHub](https://github.com/marketplace).

#### 1.2.1. Organización del proyecto

Para integrar GitHub Actions en un proyecto, se debe crear una carpeta `.github` en la raíz del repositorio, dentro de la cual se debe incluir una subcarpeta `workflows` que contendrá los archivos `.yml` con la definición de los workflows.

```plaintext
src
│
.github
|   ├── workflows
│       ├── workflow.yml
```

#### 1.2.2. Ejemplos de configuración de workflows

##### 1.2.2.1. Ejemplo básico

A continuación se muestra un ejemplo básico de un workflow que se ejecuta cuando hay un `push` o un `pull request` en la rama `main`.

```yml
name: Workflow básico

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
```

Este ejemplo clona el repositorio utilizando la acción de terceros `actions/checkout@v4`, simplificando el proceso de preparación del entorno para el workflow.

##### 1.2.2.2. Configuración de Python, Poetry y Flake8

En este ejemplo, se configura un workflow para instalar Python, gestionar dependencias con Poetry y verificar el código utilizando Flake8, una herramienta que valida el estilo y la calidad del código.

```yml
name: Verificación con Flake8

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Instalar Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.10'

      - name: Instalar Poetry
        uses: snok/install-poetry@v1

      - name: Instalar dependencias con Poetry
        run: poetry install

      - name: Verificar código con Flake8
        run: poetry run flake8 src/
```

##### 1.2.2.3. Uso de caché para optimización de workflows

Es posible mejorar el rendimiento del workflow utilizando caché para almacenar dependencias, evitando su reinstalación en cada ejecución. A continuación, un ejemplo de cómo utilizar el caché en un entorno configurado con Poetry.

```yml
name: Workflow con caché

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Instalar Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.10'

      - name: Instalar Poetry
        uses: snok/install-poetry@v1
        with:
          virtualenvs-in-project: true

      - name: Cargar caché de dependencias
        uses: actions/cache@v4
        id: cached-poetry-dependencies
        with:
          path: .venv
          key: venv-${{ runner.os }}-${{ hashFiles('**/poetry.lock') }}

      - name: Instalar dependencias con Poetry
        if: steps.cached-poetry-dependencies.outputs.cache-hit != 'true'
        run: poetry install
```

El uso de caché se gestiona mediante la clave `key: venv-${{ runner.os }}-${{ hashFiles('**/poetry.lock') }}`, que asegura que el caché solo se actualice si el archivo `poetry.lock` ha cambiado.

### 1.3. Modularización de workflows y acciones

Es recomendable dividir los workflows en acciones más pequeñas y reutilizables para simplificar la configuración y mejorar el mantenimiento. Para ello, se crean carpetas separadas para las acciones y los workflows dentro de la carpeta `.github`.

```plaintext
src
│
.github
|   ├── actions
|       ├── build-application
|           ├── action.yml
|   ├── workflows
│       ├── lint.yml
```

Ejemplo de `action.yml` en la carpeta `build-application`:

```yml
name: Build Application

runs:
  using: composite

  steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Set up Python
      uses: actions/setup-python@v5
      with:
        python-version: '3.10.7'

    - name: Instalar Poetry
      uses: snok/install-poetry@v1
      with:
        virtualenvs-in-project: true

    - name: Cargar caché de dependencias
      uses: actions/cache@v4
      id: cached-poetry-dependencies
      with:
        path: .venv
        key: venv-${{ runner.os }}-${{ hashFiles('**/poetry.lock') }}

    - name: Instalar dependencias con Poetry
      if: steps.cached-poetry-dependencies.outputs.cache-hit != 'true'
      run: poetry install
```

Ejemplo de `lint.yml` que reutiliza la acción definida anteriormente:

```yml
name: Lint Workflow

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

permissions:
  contents: read

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Build application
        uses: ./.github/actions/build-application

      - name: Lint with flake8
        run: poetry run flake8 src/
```

Este enfoque modular permite dividir la complejidad de los workflows, mejorar la eficiencia y permitir la reutilización de configuraciones a lo largo del proyecto.