---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Herramientas necesarias para MLOps.
title: MLOps
---

# Bibliografía

- [ML in Production: From Data Scientist to ML Engineer](https://www.udemy.com/course/ml-in-production/?couponCode=SKILLS4SALEA)
- [PEP 8 — the Style Guide for Python Code](https://pep8.org/)
  
## 1. Introducción a MLOps

### 1.1. Definición y objetivos
### 1.2. Importancia en el ciclo de vida de los proyectos de ML

## 2. Fundamentos

### 2.1. Diseño del producto y sistemas

El diseño del producto debe justificar su necesidad y detallar sus objetivos e impacto, siguiendo los siguientes pasos:

1. **Definición del producto**: Identificar la necesidad del producto y describir sus objetivos e impacto.

2. **Antecedentes**: Comprender a los usuarios, sus objetivos y los obstáculos que enfrentan.

3. **Propuesta de valor**: Definir lo que el producto debe ofrecer para ayudar a los usuarios a alcanzar sus objetivos, cómo aliviará sus problemas y qué beneficios generará.

4. **Objetivos**: Desglosar el producto en objetivos clave.

5. **Solución**: Describir la solución para cumplir los objetivos, incluyendo características principales, integración con otros servicios, alternativas consideradas, limitaciones y características no desarrolladas.

6. **Factibilidad**: Evaluar la viabilidad de la solución y los recursos necesarios (datos, dinero, equipo, etc.).

Para el diseño del sistema, se consideran los siguientes aspectos:

1. **Diseño del sistema**: Incluir todos los elementos necesarios, desde el consumo de datos hasta la entrega del modelo.

2. **Cargas de trabajo de ML**: Describir las fuentes de datos para el entrenamiento y la producción, el proceso de etiquetado, y la selección de características y etiquetas.

3. **Métricas**: Vincular los objetivos principales con métricas cuantitativas que optimicen el modelo.

4. **Evaluación del modelo**: Realizar la evaluación del modelo según las métricas definidas, ya sea con datos de referencia (sin conexión) o en producción (en línea).

5. **Rendimiento en tiempo real**: Medir el rendimiento en tiempo real antes de reemplazar la versión existente del sistema.

6. **Modelado**: Aplicar principios como la utilidad de extremo a extremo, probar un sistema simple antes de avanzar a modelos complejos, complementar el proceso de toma de decisiones y evaluar cada enfoque a fondo.

7. **Inferencia**: Decidir entre inferencia en lotes (sin conexión) o en tiempo real (en línea):

   - **Inferencia en lotes**: Permite predicciones en grupo y almacenamiento para una inferencia rápida, sin requerir un servicio separado, pero con riesgo de desactualización.
   - **Inferencia en línea**: Ofrece predicciones en tiempo real, mejorando la experiencia del usuario, pero requiere un servicio separado y monitoreo constante.

8. **Retroalimentación**: Recoger e incorporar retroalimentación humana y automática en la siguiente iteración.

9. **Impacto real**: Asegurar que los sistemas de ML generen un impacto tangible, interactuando con los usuarios para iterar y mejorar el sistema.

### 2.2. La importancia del flujo de los datos

#### 2.2.1. Origen

Los datos son el punto de partida en cualquier proyecto de MLOps y pueden provenir de diversas fuentes, como bases de datos, archivos CSV o servicios web. El alojamiento de estos datos depende de las necesidades del sistema:

- **Sistemas sencillos**: Los datos pueden alojarse localmente en servidores controlados por la empresa.
- **Sistemas complejos o escalables**: Es recomendable utilizar **servicios en la nube** como Amazon S3 o Google Cloud Storage, que ofrecen la flexibilidad y escalabilidad necesarias para manejar grandes volúmenes de datos y facilitar su acceso y procesamiento.

#### 2.2.2. Análisis

Una vez obtenidos los datos, se realiza un *Exploratory Data Analysis (EDA)*, un proceso iterativo que se aplica en diferentes etapas del proyecto para comprender mejor los datos y asegurar su adecuación a la tarea. El objetivo principal es extraer información relevante mediante gráficos para evaluar la cantidad de datos, entender la distribución, detectar anomalías y posibles correlaciones.

#### 2.2.3. Preprocesado de los datos

Con un conocimiento previo de los datos, se aplican técnicas de preprocesamiento antes de introducirlos en un modelo. Este proceso incluye:

- Unir tablas para consolidar información en una vista única.
- Manejar valores faltantes mediante eliminación o reemplazo.
- Detectar y tratar valores atípicos que podrían distorsionar los resultados.
- Realizar ingeniería de características para extraer información adicional.

Durante el preprocesamiento, se pueden emplear técnicas como aumentación de datos, eliminación de muestras y asignación de pesos por clases. Además, los datos pueden requerir transformaciones como:

- **Normalización o estandarización**: Ajuste de las escalas de las características para mejorar el procesamiento por los modelos.
- **Codificación de características**: Conversión de características categóricas en representaciones numéricas.
- **Extracción de características**: Derivación de nuevas características a partir de las existentes para resaltar información relevante.

#### 2.2.4. Balance y división de los datos

Con los datos transformados, se procede al último paso, que incluye:

1. **Manejo del desequilibrio de los datos**: El desequilibrio puede afectar el rendimiento del modelo. Para abordarlo, se utilizan técnicas como `train_test_split` de *Scikit-Learn*, que divide los datos equitativamente utilizando el parámetro `stratify`.

2. **Técnicas de sobremuestreo y submuestreo**: 

   - **Sobremuestreo**: Aumenta las instancias de la clase minoritaria mediante duplicación o generación de ejemplos sintéticos.
   - **Submuestreo**: Reduce las instancias de la clase mayoritaria eliminando registros.

   Es crucial evaluar el impacto de estas técnicas, ya que el sobremuestreo puede llevar al sobreajuste, mientras que el submuestreo puede causar la pérdida de información útil.

3. **División de los datos**: Se divide en conjuntos de entrenamiento, validación y prueba para prevenir el sobreajuste y asegurar que el modelo generalice adecuadamente. Es esencial que estas divisiones mantengan distribuciones similares.

### 2.3. Proceso de elaboración de un modelo

#### 2.3.1. Creación del modelo base

El desarrollo de un modelo de aprendizaje automático comienza con la creación de un modelo base, que puede ser tan simple como un conjunto de reglas `if-else`. Si este enfoque satisface las necesidades y requisitos, no se justifica crear soluciones más complejas, lo que evitaría un costo innecesario. Si el modelo base no es suficiente, la complejidad se incrementa gradualmente, considerando factores como la latencia y el tamaño del modelo, buscando un equilibrio óptimo entre complejidad y rendimiento.

#### 2.3.2. Entrenamiento distribuido

El entrenamiento distribuido es una estrategia para entrenar modelos de aprendizaje automático en sistemas distribuidos, especialmente útil cuando se requiere una gran carga computacional. Utilizando herramientas como Ray, se aprovecha la escalabilidad de estos sistemas. En este enfoque, un nodo maestro coordina el entrenamiento, mientras los nodos trabajadores entrenan el modelo y envían los resultados al nodo central. Para su implementación, cada nodo trabajador recibe una parte de los datos, adaptando el modelo para el entrenamiento paralelo. Es necesario ajustar el entorno, configurar la red, asignar recursos y gestionar dependencias, además de implementar técnicas de paralelización y sincronización. Se debe garantizar la capacidad de guardar el estado del modelo durante el entrenamiento para facilitar la reanudación o depuración en caso de interrupciones.

#### 2.3.3. Iteración en los datos

En lugar de iterar en los modelos manteniendo el conjunto de datos fijo, otra opción es mantener el modelo constante e iterar en el conjunto de datos. Este enfoque mejora la calidad de los datos mediante la corrección de muestras incorrectas, la transformación de características, la expansión de clases y la adición de nuevos conjuntos de datos.

#### 2.3.4. Optimización del modelo

Cuando los datos o modelos son demasiado grandes para el entrenamiento tradicional o cuando se busca mejorar la eficiencia, se aplican técnicas de compresión del modelo, especialmente en el aprendizaje profundo:

- __*Pruning*__: Elimina pesos o canales enteros de la red para reducir su tamaño, manteniendo el rendimiento.
- __*Quantization*__: Reduce la precisión de los pesos, disminuyendo la huella de memoria con una pérdida mínima de precisión.
- __*Distillation*__: Entrena redes más pequeñas para imitar a redes más grandes, reproduciendo las salidas de las capas de la red mayor.

#### 2.3.5. Ajuste de hiperparámetros

El ajuste de hiperparámetros optimiza los parámetros de un modelo de aprendizaje automático. Herramientas como Ray Tune, integradas con HyperOpt, u Optuna, permiten definir y explorar un espacio de búsqueda para identificar los mejores hiperparámetros. Estas herramientas facilitan la gestión del ciclo de vida de los proyectos de aprendizaje automático, desde el seguimiento de experimentos hasta la implementación y gestión de modelos.

#### 2.3.6. Métricas de evaluación

Las métricas de evaluación son esenciales para medir el rendimiento de un modelo en MLOps. Es importante evitar la sobreoptimización de una métrica específica para no comprometer el rendimiento general. La selección de métricas depende del problema.

Por ejemplo, el F1 es útil para la clasificación en casos de clases desequilibradas. Técnicas como matrices de confusión y Grad-CAM ayudan a interpretar cómo el modelo toma decisiones. 

Es crucial realizar una evaluación integral, comenzando con una preparación adecuada y analizando resultados detallados para entender el rendimiento en diferentes clases y situaciones.

#### 2.3.7. Modelos como servicios

Implementar modelos como servicios es crucial para su uso en aplicaciones en tiempo real o por lotes, asegurando escalabilidad y robustez. Este proceso implica hacer que los modelos estén disponibles en producción, considerando aspectos clave como la escalabilidad, robustez, rendimiento y latencia. 

La elección del marco de trabajo adecuado depende de las necesidades específicas del proyecto. Según los requisitos, se puede optar por la inferencia por lotes, útil para predicciones sobre grandes conjuntos de datos sin necesidad de respuesta inmediata, o por la inferencia en tiempo real, esencial para aplicaciones que demandan decisiones rápidas. 

Es necesario personalizar el servicio, añadiendo lógica específica o configurando umbrales de control de confianza en las predicciones. 

Finalmente, el proceso de despliegue y pruebas, incluyendo pruebas de carga y funcionales, es crucial para garantizar un despliegue exitoso y eficiente en el entorno de producción.

## 3. MLOps en práctica

### 3.1. Código sostenible

El desarrollo de un proyecto debe realizarse bajo una estructura de código clara y sostenible, utilizando herramientas y metodologías para garantizar su organización y limpieza. Estas prácticas son fundamentales durante el desarrollo, puesta en producción y evolución del proyecto.

#### 3.1.1. Estructura del proyecto

Un proyecto debe estar organizado en dos partes principales:

1. **Directorio de la aplicación:** Contiene la lógica del código, la configuración de los modelos, los registros (*logs*), entre otros componentes.
2. **Ajustes y configuraciones:** Incluye configuraciones y dependencias del proyecto, como los archivos de gestión de dependencias (Poetry), Dockerfiles, archivos de configuración `.yml`, etc.

Esta separación promueve un código modular, organizado y fácil de mantener. Facilita la colaboración entre miembros del equipo, simplifica el proceso de actualización y mejora la comprensión de la estructura del proyecto por parte de nuevos desarrolladores.

Ejemplo de estructura de proyecto:

```plaintext
src (o nombre del proyecto)
│
├── config
│   ├── config.py
│   ├── .env
├── db
├── logs
├── model
│   ├── models
│   ├── pipeline
│   ├── inference.py
├── main.py
```

#### 3.1.2. Código limpio

La guía de estilo [PEP 8](https://pep8.org/) define convenciones para escribir código Python que sea legible y consistente. A continuación, se destacan sus principales recomendaciones. Además, se sugieren herramientas como [Black](https://pypi.org/project/black/) y [Ruff](https://docs.astral.sh/ruff/) para aplicar estas convenciones automáticamente en los proyectos.

##### Diseño del código

- Se debe utilizar una indentación de 4 espacios, sin mezclar espacios y tabuladores.
- La longitud máxima de las líneas es de 79 caracteres; para comentarios y docstrings, es de 72 caracteres.
- Las líneas largas deben dividirse usando paréntesis, corchetes o llaves para mejorar la legibilidad.

Ejemplo:

```python
def funcion_larga(parametro1, parametro2,
                  parametro3, parametro4):
    return parametro1 + parametro2 + parametro3 + parametro4
```

##### Codificación de archivos y cadenas

- Los archivos fuente deben utilizar codificación UTF-8.
- Se pueden emplear comillas simples o dobles para las cadenas, pero es importante mantener la consistencia.
- Para cadenas multilínea, se prefieren las comillas dobles.

```python
cadena_simple = 'Hola mundo'
cadena_doble = "Hola mundo"
cadena_multilinea = """
    Esta es una cadena
    que ocupa varias líneas
"""
```

##### Importaciones

Las importaciones deben estar ubicadas al principio del archivo y organizadas en el siguiente orden:

1. Biblioteca estándar de Python.
2. Bibliotecas de terceros.
3. Importaciones locales.

Se recomienda utilizar importaciones absolutas.

```python
import os
import sys

from external_lib import some_function

from local_module import local_function
```

##### Espacios en blanco

- No se deben añadir espacios adicionales alrededor de paréntesis, corchetes, llaves, comas o dos puntos.
- Se debe agregar un espacio alrededor de operadores de asignación, comparación y booleanos.

```python
x = 5
y = x + 1
if x == y:
    print(f"x:{x}, y:{y}")
```

##### Comentarios y docstrings

- Los comentarios deben ser claros y concisos, utilizando oraciones completas para describir el propósito del código.
- Los **docstrings** son obligatorios para módulos, funciones, clases y métodos públicos, describiendo su funcionalidad y parámetros.

```python
def suma(a, b):
    """
    Suma dos números y devuelve el resultado.

    Args:
        a (int): Primer número.
        b (int): Segundo número.

    Returns:
        int: La suma de a y b.
    """
    return a + b
```

##### Convenciones de nomenclatura

- **Paquetes y módulos:** Se deben escribir en minúsculas, sin espacios (ej. `mi_modulo`).
- **Clases:** Usar el estilo CapWords, también conocido como CamelCase (ej. `MiClase`).
- **Funciones y variables:** Utilizar minúsculas con guiones bajos (ej. `mi_funcion`).
- **Constantes:** Escribir en mayúsculas con guiones bajos (ej. `MI_CONSTANTE`).
- **Métodos y variables de instancia:** Como las funciones, con un guion bajo inicial para los elementos no públicos (ej. `_variable_interna`).

```python
class MiClase:
    MI_CONSTANTE = 42

    def __init__(self):
        self._variable_interna = 10

    def metodo_publico(self):
        return self._variable_interna
```

### 3.2. Gestión de las dependencias de proyectos

La gestión de dependencias de un proyecto puede realizarse mediante un archivo `requirements.txt`. Sin embargo, herramientas como Poetry ofrecen funcionalidades avanzadas. 

Poetry permite la instalación automática de todas las dependencias de una biblioteca, separa dependencias entre proyectos, favorece la reproducibilidad, gestiona entornos virtuales automáticamente y resuelve problemas de dependencias.

Para gestionar un proyecto con Poetry desde cero, se siguen los siguientes pasos:

1. Instalar Poetry utilizando pip:

   ```bash
   pip install poetry
   ```

2. Inicializar Poetry en el directorio del proyecto:

   ```bash
   poetry init
   ```

   Esto genera un archivo `.toml` que almacena la configuración del entorno de Python y las dependencias del proyecto.

3. Añadir nuevas librerías al proyecto con el comando:

   ```bash
   poetry add nombre_libreria
   ```

   Esto actualiza e instala la librería en un entorno virtual gestionado por Poetry.

4. Ejecutar el script del proyecto con el entorno configurado:

   ```bash
   poetry run python archivo.py
   ```

Para que un colaborador utilice el proyecto, debe seguir estos pasos:

1. Instalar Poetry:

   ```bash
   pip install poetry
   ```

2. Crear e instalar el entorno de Python y las dependencias del proyecto:

   ```bash
   poetry install
   ```

3. Ejecutar el programa principal del proyecto:

   ```bash
   poetry run python archivo.py
   ```

### 3.3. Gestión de parámetros con Pydantic

La gestión de parámetros o parametrización consiste en definir y ajustar los parámetros que configuran un sistema, modelo o función, con el objetivo de evitar valores "hardcodeados" y reducir errores al realizar cambios. Se recomienda centralizar los parámetros en un único archivo para facilitar su gestión en todo el proyecto.

Pydantic se utiliza para validar y gestionar los parámetros de configuración de manera estructurada. A continuación, se presenta un ejemplo de implementación en un archivo `config.py`, donde se definen las variables `data_file_name`, `model_path` y `model_name`, correspondientes al nombre del fichero de datos, el directorio del modelo y el nombre del modelo, respectivamente:

```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import DirectoryPath, FilePath

## Clase de configuración base
class Settings(BaseSettings):
   model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8')

   data_file_name: FilePath
   model_path: DirectoryPath
   model_name: str

settings = Settings()
```

Se debe crear un archivo `.env` con los siguientes parámetros:

```plaintext
DATA_FILE_NAME=rent_apartments.csv
MODEL_PATH=models
MODEL_NAME=rf_db_v1
```

Los parámetros definidos se pueden utilizar en cualquier parte del código mediante la importación de la variable `settings`:

```python
from config import settings

print(f"El nombre del modelo es {settings.model_name}")
```

### 3.4. Creación y registro de logs con Loguru

El logging permite registrar y monitorizar las actividades de las aplicaciones durante su ejecución. A diferencia de `print`, los logs proporcionan una forma más estructurada y sofisticada de gestionar mensajes, lo cual es esencial en aplicaciones en producción.

Loguru simplifica la configuración de logs en comparación con la biblioteca `logging` de Python, que es más compleja de configurar. Loguru opera a través de una única instancia por aplicación, independientemente del número de veces que se importe la librería. Una vez configurado Loguru en cualquier parte del código o en un archivo de configuración, dicha configuración se aplica globalmente. En cada entorno de Python configurado con Poetry en el que se ejecuta el proyecto, solo se puede tener un fichero de log, cuya información pertenece a una misma aplicación.

El siguiente código muestra cómo crear un log de tipo `INFO`:

```python
from loguru import logger

logger.info("Hola!, esto es un mensaje de información")
```

Este código genera un log que incluye información sobre la fecha, hora de ejecución, tipo de log (`INFO`), función, módulo y la línea de código correspondiente.

#### 3.4.1. Niveles de logs

Loguru permite definir diferentes niveles de logs, organizados jerárquicamente:

- **DEBUG**: Proporciona detalles completos sobre el funcionamiento del programa.
- **INFO**: Informa sobre el flujo de ejecución del programa.
- **WARNING**: Señala posibles problemas que pueden gestionarse en el momento, pero que podrían ser relevantes para el programa.
- **ERROR**: Indica un error en una parte específica del código.
- **CRITICAL**: Identifica errores críticos que impiden el funcionamiento del código.

#### 3.4.2. Almacenamiento de logs en archivos

Loguru permite almacenar logs en archivos. Por ejemplo:

```python
from loguru import logger

logger.add("programa.log")
```

#### 3.4.3. Rotación de logs

Es posible establecer rotaciones para los archivos de log:

```python
from loguru import logger

## Rotación cuando el archivo alcance 1 MB
logger.add("programa.log", rotation="1 MB")

## Rotación diaria a una hora específica
logger.add("programa.log", rotation="13:15")
```

#### 3.4.4. Almacenamiento de logs por nivel de jerarquía

Se pueden almacenar logs en archivos diferentes según su nivel de jerarquía:

```python
from loguru import logger

logger.add("info.log", level="INFO")
logger.add("critical.log", level="CRITICAL")
```

- `info.log` almacenará todos los logs a partir del nivel `INFO`, excluyendo `DEBUG`.
- `critical.log` solo almacenará los logs de nivel `CRITICAL`.

#### 3.4.5. Uso de decoradores

Loguru permite el uso de decoradores para capturar excepciones en funciones:

```python
from loguru import logger

@logger.catch
def funcion(a, b):
    return a - b
```

Este decorador facilita la captura y el registro automático de errores en las funciones.

### 3.5. Automatización de Procesos mediante Bash y Makefiles

El dominio de Bash es fundamental para la automatización de procesos. Para profundizar en su uso, se recomienda consultar los [apuntes sobre Bash](../programacion/bash.md) disponibles en esta wiki. Asimismo, los [apuntes sobre Makefiles](../herramientas/makefile.md) ofrecen información relevante sobre la implementación y gestión de estos archivos para facilitar la automatización de tareas.

### 3.6. CI/CD con GitHub Actions

El término CI (Continuous Integration) se refiere a la capacidad de automatizar los pasos necesarios para introducir nuevo código en un repositorio compartido. Por su parte, CD (Continuous Deployment) implica automatizar los pasos para llevar el código del repositorio compartido a producción, facilitando la creación de nuevas versiones de un producto.

El runner de GitHub Actions es un servidor que aloja y ejecuta los *workflows* definidos en un proyecto. Para configurar un workflow, se crea un archivo YAML dentro del repositorio que define las acciones o pasos a realizar.

Este archivo, por ejemplo `workflow.yml`, contiene `jobs` que representan unidades de trabajo, como podrían ser compilar el proyecto, ejecutar pruebas o desplegar la aplicación. Cada `job` se compone de pasos secuenciales que describen tareas específicas. Además, cada `job` requiere un sistema operativo para ejecutar los pasos. En el mismo archivo, se deben definir eventos o `triggers` que inicien el workflow de CI/CD, como un push, un pull request o un evento programado. También se pueden definir `permisos` que determinan el nivel de acceso del workflow a los recursos del repositorio.

GitHub Actions permite utilizar acciones definidas por terceros, disponibles en [github.com/actions](https://github.com/actions) y [github.com/marketplace](https://github.com/marketplace).

#### 3.6.1. Estructura del proyecto

En la raíz del proyecto, se debe crear una carpeta `.github` que contenga una subcarpeta `*workflows*`. Esta subcarpeta alberga un archivo con extensión `.yml` que define los pasos del *workflow*. Esta estructura es estándar y permite a GitHub reconocer los *workflows* en los proyectos.

```plaintext
src
│
.github
|   ├── workflows
│       ├── workflows.yml
```

#### 3.6.2. Ejemplos de creación de *workflows*

##### Ejemplo básico

```yml
## Definimos el nombre del workflow
name: Nombre Workflow

## Trigger para inicializar el workflow
on:
  ## El workflow se activa cuando hay un push o un pull request en la rama "main"
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

## Permisos para leer el contenido del repositorio
permissions:
  contents: read

jobs:
  ## Nombre del job
  build:
    ## Sistema operativo a utilizar
    runs-on: ubuntu-latest

    steps:
      ## Definimos los pasos secuenciales
      - name: Checkout repository
        ## Acción para clonar el repositorio
        run: git clone url_repo
```

En este ejemplo, uno de los pasos es clonar el repositorio utilizando un comando. Sin embargo, en pasos más complejos, es conveniente usar acciones de terceros para simplificar la configuración.

```yml
## Definimos el nombre del workflow
name: Nombre Workflow

## Trigger para inicializar el workflow
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

## Permisos para leer el contenido del repositorio
permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        ## Utilización de una acción de terceros para clonar el repositorio
        uses: actions/checkout@v4
```

##### Configurar Python, Poetry y Flake8

A continuación, un ejemplo de cómo crear un workflow para instalar Python, Poetry, instalar dependencias del proyecto y verificar errores con Flake8.

Flake8 permite verificar la calidad y el estilo del código, detectando errores de sintaxis, tipográficos, y midiendo la complejidad del código.

```yml
name: Nombre Workflow

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

      - name: Install poetry
        uses: snok/install-poetry@v1

      - name: Install dependencies with poetry
        run: poetry install

      - name: Lint with flake8 
        run: poetry run flake8 src/
```

##### Uso de caché para la optimización de *workflows*

Es posible optimizar los *workflows* utilizando caché para ciertos pasos, lo que permite ahorrar tiempo. Por ejemplo, se puede hacer un caché de las librerías instaladas en la máquina virtual creada por GitHub para evitar la reinstalación en cada ejecución.

```yml
name: Nombre Workflow

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

      - name: Install poetry
        uses: snok/install-poetry@v1
        with:
          virtualenvs-in-project: true

      - name: Load cached venv
        uses: actions/cache@v4
        id: cached-poetry-dependencies
        with:
          path: .venv
          key: venv-${{ runner.os }}-${{ hashFiles('**/poetry.lock') }}

      - name: Install dependencies using poetry
        if: steps.cached-poetry-dependencies.outputs.cache-hit != 'true'
        run: poetry install
        shell: bash
```

El código `venv-${{ runner.os }}-${{ hashFiles('**/poetry.lock') }}` crea un nombre único para la caché de la carpeta `.venv`, considerando el sistema operativo del runner (`runner.os`) y generando un hash que solo cambia si el contenido del archivo `poetry.lock` cambia.

##### División de *workflows* y acciones

Es recomendable dividir las acciones del workflow para reducir la complejidad de los archivos `.yml`, mejorar la eficiencia, tener mayor control granular y permitir la reutilización. Para ello, se deben diferenciar entre acciones y *workflows*.

Se crea una carpeta `.github` en la raíz del repositorio con dos subcarpetas: `actions` y `workflows`. Dentro de `actions`, se puede crear una subcarpeta como `build-application` que contenga un archivo `action.yml` con las acciones necesarias para construir la aplicación. En `workflows` se coloca un archivo `lint.yml` que combina las acciones para un flujo de trabajo específico y realiza comprobaciones con Flake8.

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

Ejemplo de `action.yml`:

```yml
name: Build Application

runs:
  using: composite

  steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Set up Python 3.10.7
      uses: actions/setup-python@v5
      with:
        python-version: '3.10.7'

    - name: Install poetry
      uses: snok/install-poetry@v1
      with:
        virtualenvs-in-project: true
        
    - name: Load cached venv
      uses: actions/cache@v4
      id: cached-poetry-dependencies
      with:
        path: .venv
        key: venv-${{ runner.os }}-${{ hashFiles('**/poetry.lock') }}

    - name: Install dependencies using poetry
      if: steps.cached-poetry-dependencies.outputs.cache-hit != 'true'
      run: poetry install
      shell: bash
```

Ejemplo de `lint.yml`:

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

### 3.X. Publicación de un paquete de Python en PyPI

Para publicar un paquete de Python en PyPI, es necesario que el proyecto tenga una estructura organizada. Es recomendable alojar el paquete en un repositorio para facilitar el control de versiones, la implementación de pipelines CI/CD y otras prácticas de desarrollo.

El primer paso es crear un archivo `setup.py` que contenga la configuración del paquete. A continuación, se muestra un ejemplo de configuración básica:

```python
import os
from setuptools import setup, find_packages
import codecs

here = os.path.abspath(os.path.dirname(__file__))

with codecs.open(os.path.join(here, "README.md"), encoding="utf-8") as fh:
    long_description = "\n" + fh.read()

VERSION = "0.1.1"
DESCRIPTION = "Essential utilities for data scientists"
LONG_DESCRIPTION = """
    A package of essential tools and utilities for streamlining data science tasks like manipulation, 
    augmentation, visualization, among others, enhancing daily *workflows*.
"""

setup(
    name="datasu",
    version=VERSION,
    author="danibcorr (Daniel Bazo)",
    description=DESCRIPTION,
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/danibcorr/data-scientist-utilities",
    packages=find_packages(),
    install_requires=[
        "numpy",
        "numba",
        "ipywidgets",
        "matplotlib",
        "seaborn",
        "pandas",
        "scikit-learn",
    ],
    keywords=[
        "python",
        "data science",
        "machine learning",
        "deep learning",
        "artificial intelligence",
    ],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: MIT License",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
)
```

En el archivo `setup.py` se especifican la versión del paquete, una descripción, los requerimientos y otra información relevante. Es posible consultar parámetros adicionales en la [guía oficial de setuptools](https://setuptools.pypa.io/en/latest/userguide/).

Una vez configurado el archivo `setup.py`, se pueden generar los archivos de distribución utilizando el comando:

```bash
python setup.py sdist bdist_wheel
```

Antes de publicar el paquete en PyPI, se recomienda realizar pruebas locales para asegurarse de que todo funcione correctamente. Para instalar el paquete localmente, utilice:

```bash
pip install /dist/nombre_fichero.whl
```

Esto permite probar el paquete en un entorno local y ejecutar tests para verificar su funcionamiento.

Para publicar en PyPI, se requiere una cuenta en el servicio y la configuración de autenticación multifactor (2FA). Luego, es necesario obtener un token de API desde la sección correspondiente en la cuenta de PyPI. Este token puede almacenarse en un archivo `.pypirc` o guardarse de manera segura.

Para publicar el proyecto, se utiliza el siguiente comando:

```bash
twine upload dist/*
```

Si el nombre del proyecto ya está en uso, se recibirá un error y será necesario seleccionar un nombre diferente para el paquete.