---
sidebar_position: 3
authors:
  - name: Daniel Bazo Correa
description: Herramientas necesarias para DevOps.
title: GitHub Actions
toc_max_heading_level: 4
---

## Bibliografía

- [ML in Production: From Data Scientist to ML Engineer](https://www.udemy.com/course/ml-in-production/?couponCode=SKILLS4SALEA)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 1. Introducción

<p align="center">  
  <img src={require("../../../img/github-logo.png").default} width="500"/>  
  <br />  
  <em>Logo de GitHub</em>  
</p>

**GitHub** es una plataforma de desarrollo colaborativo diseñada para la gestión de proyectos de software. Proporciona herramientas avanzadas para el control de versiones mediante **Git**, así como funcionalidades para la integración y entrega continua (_Continuous Integration_ - CI y _Continuous Deployment_ - CD).

Con el tiempo, GitHub se ha consolidado como una herramienta esencial para desarrolladores y equipos de software. Entre sus características destacadas se encuentran:

- **GitHub Actions**: Permite la automatización de flujos de trabajo directamente dentro de los repositorios, facilitando la integración con servicios externos y optimizando procesos de desarrollo.
- **GitHub Pages**: Ofrece una manera sencilla de publicar sitios web estáticos directamente desde un repositorio.

Una de las principales ventajas de utilizar **GitHub Actions** en lugar de herramientas como **Jenkins** u otras soluciones similares es su integración nativa con GitHub. Además, su **Marketplace** proporciona un amplio catálogo de acciones desarrolladas tanto por GitHub como por terceros, lo que permite extender y personalizar los flujos de trabajo de manera eficiente.

## 2. CI/CD con GitHub Actions

La implementación de **CI/CD (Integración y Entrega/Despliegue Continuos)** permite automatizar procesos de desarrollo, mejorando la eficiencia y reduciendo errores en la integración y despliegue de software.

- **CI (_Continuous Integration_)**: Se refiere a la automatización de la integración de código en un repositorio compartido, asegurando que los cambios sean validados continuamente mediante pruebas y compilaciones.
- **CD (_Continuous Deployment_)**: Automatiza el proceso de despliegue de código en entornos de producción, facilitando la entrega continua de nuevas versiones del software.

### 2.1. GitHub Actions y su funcionamiento

**GitHub Actions** es una plataforma que permite la automatización de flujos de trabajo a través de archivos de configuración en formato YAML.

Cada **workflow** está compuesto por una serie de pasos organizados en **jobs**, que pueden ejecutarse en paralelo o en secuencia, dependiendo de las necesidades del proyecto.

El **runner** de GitHub Actions es un servidor que ejecuta estos **workflows** en un entorno definido, permitiendo:

- Compilación del código para distintos sistemas operativos.
- Ejecución de pruebas en paralelo.
- Validación de código con herramientas como linters y analizadores estáticos.
- Implementación de código en producción o entornos de staging.

Para definir un **workflow**, se crea un archivo `.yml` dentro de la carpeta `.github/workflows/`, por ejemplo:

📂 Estructura del repositorio:

```plaintext
src
│
.github
│   ├── workflows
│   │   ├── workflow_ejemplo.yml
```

Un **pipeline** típico en un workflow podría incluir pasos como:

1. Fusionar (merge) cambios en la rama principal.
2. Ejecutar pruebas.
3. Realizar un análisis de código (_linting_).
4. Generar una compilación (_build_).
5. Desplegar en producción o staging.

### 2.2. Estructura de un workflow

El archivo de configuración del workflow (por ejemplo, `workflow.yml`) contiene los siguientes elementos:

- **name**: Es el nombre del **workflow**. Este es opcional, pero es una buena práctica poner un nombre identificativo, ya que los **workflows** puede reutilizarse.

  ```yaml
  name: Nombre del Workflow
  ```

- **on**: Para cuando hacemos un **trigger** o eventos, como un `push`, un `pull request` o eventos programados, determinan cuándo se debe iniciar el **workflow**. Además, es posible definir **permisos** que limitan el acceso del **workflow** a los recursos del repositorio. En el caso de que los diferentes jobs requieran los mismos permisos, podríamos colocarlo al comienzo del fichero `yaml` del **workflow** en vez de en cada job, por ejemplo:

  Fuera de un job:

  ```yaml
  name: Nombre del Workflow

  # This workflow is triggered when there is a push to the 'main' branch or when
  # it is called from another workflow
  on:
    push:
      branches: ["main"]
    workflow_call:

  permissions:
    contents: write
  ```

  Dentro de un job:

  ```yaml
  name: Nombre del Workflow

  # This workflow is triggered when there is a push to the 'main' branch or when
  # it is called from another workflow
  on:
    push:
      branches: ["main"]
    workflow_call:

  jobs:
    build-mkdocs:
      name: Build MkDocs Wiki
      runs-on: ubuntu-latest
      needs: setup-lint-test

      permissions:
        contents: write

      steps:
        # Step 1: Checkout the repository code
        - name: Checkout repository
          uses: actions/checkout@v4
  ```

- **jobs**, que representan las unidades de trabajo dentro del **workflow**. Cada **job** está compuesto
  por pasos secuenciales conocidos como **steps** que describen las tareas específicas a seguir por cada
  **job**. Cada **job** en un workflow se ejecuta en una nueva máquina virtual en la que por defecto
  funciona en paralelo salvo cuando un **job** depende de otro **job**. También, hay que tener en cuenta que cada **job** requiere de un sistema operativo donde GitHub permite utilizar entre Linux, Mac y Windows, todo ello utilizando el parámetro de configuración `runs-on: ubuntu-latest` [pulsa aquí para ir a la documentación de GitHub](https://docs.github.com/en/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners)

:::note
GitHub Actions permite utilizar acciones definidas por terceros, disponibles en [github.com/actions](https://github.com/actions) y en el [Marketplace de GitHub](https://github.com/marketplace).
:::

#### 2.2.2. Ejemplos de configuración de workflows

##### 2.2.2.1. Ejemplo básico

A continuación se muestra un ejemplo básico de un workflow que se ejecuta cuando hay un `push` o un `pull request` en la rama `main`:

```yml
name: Workflow básico

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

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

:::tip
Es una buena práctica incluir la acción `checkout` al principio del workflow, ya que asegura que el código más reciente se descargue antes de realizar cualquier otra operación.
:::

##### 2.2.2.2. Configuración de Python, Poetry y Flake8

En este ejemplo, se configura un workflow para instalar Python, gestionar dependencias con Poetry y verificar el código utilizando Flake8, una herramienta que valida el estilo y la calidad del código.

```yml
name: Verificación con Flake8

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

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
          python-version: "3.10"

      - name: Instalar Poetry
        uses: snok/install-poetry@v1

      - name: Instalar dependencias con Poetry
        run: poetry install

      - name: Verificar código con Flake8
        run: poetry run flake8 src/
```

##### 2.2.2.3. Uso de caché para optimización de workflows

Es posible mejorar el rendimiento del workflow utilizando caché para almacenar dependencias, evitando su reinstalación en cada ejecución. A continuación, un ejemplo de cómo utilizar el caché en un entorno configurado con Poetry.

```yml
name: Workflow con caché

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

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
          python-version: "3.10"

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

:::note
El uso de caché puede mejorar significativamente la velocidad de las ejecuciones al evitar la reinstalación de dependencias. Sin embargo, hay que tener cuidado de no hacer que el caché quede desactualizado si las dependencias cambian, ya que podría llevar a resultados incorrectos.
:::

### 2.3. Modularización de workflows y acciones

Para mejorar la reutilización y mantenimiento del código, se recomienda modularizar los workflows mediante acciones personalizadas.

📂 Ejemplo de estructura del repositorio:

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
        python-version: "3.10.7"

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
    branches: ["main"]
  pull_request:
    branches: ["main"]

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

:::tip
La modularización de workflows no solo mejora la reutilización, sino que también facilita el mantenimiento del código y la integración de nuevas funcionalidades sin modificar los workflows principales.
:::

Este enfoque modular permite dividir la complejidad de los workflows, mejorar la eficiencia y permitir la reutilización de configuraciones a lo largo del proyecto.

### 2.4. Uso de estrategias con matrices

Las **matrices de estrategia** en GitHub Actions permiten ejecutar un mismo **workflow** en múltiples combinaciones de entornos, lo que es útil para probar software en diferentes sistemas operativos, versiones o configuraciones.

Por ejemplo, podemos crear una matriz para múltiples sistemas operativos y versiones:

```yml
name: Workflow

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: ${{ matrix.os }}
```

GitHub genera automáticamente **todas las combinaciones posibles** de los valores definidos en `matrix`.
Todas las combinaciones generadas se reflejan en la siguiente tabla:

| OS             | Versión | Entorno    |
| -------------- | ------- | ---------- |
| macos-latest   | 12      | staging    |
| macos-latest   | 14      | staging    |
| macos-latest   | 14      | production |
| macos-latest   | 16      | staging    |
| macos-latest   | 16      | production |
| windows-latest | 12      | staging    |
| windows-latest | 12      | production |
| windows-latest | 14      | staging    |
| windows-latest | 14      | production |

Del mismo modo, se excluyen las siguientes estrategias:
| OS | Versión | Entorno |
|--------------|--------|------------|
| macos-latest | 12 | production |
| windows-latest | 16 | _Cualquier_ |

Gracias al bloque `exclude`, estas combinaciones **no se ejecutarán** en el workflow.

Los beneficios del uso de matrices son:

- **Eficiencia:** Permite probar múltiples entornos en paralelo.
- **Flexibilidad:** Se pueden excluir combinaciones no necesarias.
- **Automatización escalable:** Ideal para probar en distintos sistemas sin escribir múltiples workflows.

Este enfoque es útil en proyectos que requieren pruebas en múltiples versiones de software, diferentes entornos (staging/producción) o compatibilidad con varios sistemas operativos.
