---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Herramientas necesarias para MLOps.
title: MLOps
toc_max_heading_level: 4
---

## Bibliografía

- [ML in Production: From Data Scientist to ML Engineer](https://www.udemy.com/course/ml-in-production/?couponCode=SKILLS4SALEA)
- [PEP 8 — the Style Guide for Python Code](https://pep8.org/)
  
## 1. Introducción

<p align="center">
  <img src={require("../../img/mlops-logo.png").default} width="500"/>
  <br />
  <em>Ciclo de vide de un proyecto MLOps</em>
</p>

MLOps, o *Machine Learning Operations*, es el conjunto de prácticas, herramientas y procesos que permiten desarrollar, implementar y mantener modelos de 
*machine learning* en entornos de producción. Este enfoque combina conocimientos de ingeniería de software, computación en la nube y gestión de redes, 
siendo fundamental para garantizar que los modelos sean eficaces, escalables y sostenibles.

<p align="center">
  <img src="https://ml-ops.org/img/mlops-phasen.jpg" width="500"/>
  <br />
  <em>Ejemplo de los pasos seguidos en un proyecto de MLOps</em>
</p>

Un sistema de MLOps se compone de diversos elementos. En su núcleo está el modelo o algoritmo, que representa la solución entrenada en datos. 
Este modelo opera sobre una infraestructura que puede variar desde servicios en la nube hasta servidores locales o en los propios dispositivos 
(*on edge*), dependiendo de las necesidades. Una API o interfaz es esencial para procesar solicitudes y devolver predicciones, 
mientras que la gestión de predicciones y la monitorización aseguran la calidad, fiabilidad y rendimiento en tiempo real.

## 2. Los desafíos de MLOps

Uno de los principales desafíos en la adopción de metodologías de MLOps es la correcta definición tanto del problema como de la posible solución. 
Además, es fundamental implementar tecnologías que puedan comunicarse eficazmente entre sí, permitiendo la creación de sistemas y procesos 
automatizados que agilicen la recopilación, el tratamiento, el análisis y el uso de los datos. Este enfoque requiere una infraestructura sólida, 
cuyo diseño y construcción demandan tiempo y conocimientos especializados.

Una vez establecida la infraestructura necesaria para integrar los diferentes componentes, surgen nuevos retos en la etapa de puesta en producción. 

Entre ellos destaca el ***data drift***, que ocurre cuando los datos de producción difieren de los de entrenamiento, afectando la precisión del modelo. 
Otro desafío común es el manejo de **datos fuera de distribución** (*Out of Distribution*, OOD), aquellos que no encajan con los patrones aprendidos 
durante el entrenamiento. Además, la actualización y el mantenimiento de los modelos para adaptarlos a nuevos datos o requerimientos constituyen 
un esfuerzo continuo.

:::note
El mantenimiento de modelos basados en inteligencia artificial suele implicar su reentrenamiento con nuevos datos para evitar la degradación de 
las métricas establecidas y asegurar un rendimiento óptimo.
:::

### 2.1. Ciclo de vida de MLOps

El ciclo de vida de MLOps es un proceso iterativo que permite realizar ajustes en cualquier etapa para optimizar el sistema. 
Un diseño efectivo de un producto basado en *machine learning* debe justificar su necesidad, detallar sus objetivos e impacto, 
y abordar las siguientes áreas clave:

1. **Definición del proyecto**: En esta etapa se identifican las necesidades del usuario y los objetivos del producto, además de evaluar la viabilidad técnica y financiera. Los pasos esenciales incluyen:  
   - **Identificación de problemas y métricas clave**: Métricas como precisión, latencia y ROI (Retorno de Inversión) son fundamentales para medir el éxito del proyecto.  
   - **Propuesta de valor**: Se define cómo el producto resolverá problemas específicos y generará beneficios para los usuarios.  
   - **Factibilidad**: Se evalúan los recursos necesarios (humanos, tecnológicos y financieros) para implementar la solución.  
   - **Planificación**: Se establecen cronogramas y se asignan recursos para el desarrollo del producto.

2. **Datos**: El manejo de datos es la base de cualquier sistema de ML. Incluye los siguientes procesos:  
   - **Recopilación y organización**: Los datos pueden provenir de bases de datos, archivos o servicios web. En proyectos complejos, el almacenamiento en la nube es una opción ideal.  
   - **Etiquetado y preprocesamiento**: Incluye normalización, codificación y extracción de características para garantizar que los datos sean adecuados para el entrenamiento.  
   - **Análisis exploratorio de datos (EDA)**: Se analiza la distribución de los datos, se identifican anomalías y se descubren correlaciones relevantes.  
   - **Manejo de desequilibrios**: Técnicas como el sobremuestreo o submuestreo equilibran clases desbalanceadas, asegurando que los datos sean representativos.  
   - **División en conjuntos**: Los datos se dividen en conjuntos de entrenamiento, validación y prueba, manteniendo distribuciones similares para evitar problemas como el sobreajuste.

3. **Modelado**: El modelado implica seleccionar, entrenar y validar modelos de ML. Las principales actividades incluyen:  
   - **Desarrollo iterativo**: Se comienza con soluciones base y se incrementa la complejidad según sea necesario.  
   - **Optimización**: Herramientas como Ray permiten el entrenamiento distribuido en sistemas escalables, mientras que técnicas como *pruning*, *quantization* y *distillation* optimizan modelos grandes.  
   - **Ajuste de hiperparámetros y seguimiento de experimentos**: Se experimenta con configuraciones para obtener un rendimiento óptimo, guiándose por métricas específicas como F1 en clasificaciones desbalanceadas.  
   - **Despliegue del modelo**: Los modelos se implementan como servicios robustos, ya sea para predicciones en tiempo real o por lotes, asegurando personalización, pruebas exhaustivas y escalabilidad.

4. **Despliegue**: El modelo se implementa inicialmente en entornos de preproducción, donde se evalúa con un número limitado de usuarios o bajo condiciones controladas. Posteriormente, se despliega en producción, aumentando gradualmente el tráfico de usuarios mientras se monitorizan métricas clave y se configuran alertas para detectar anomalías.

5. **Mantenimiento**: Incluye el entrenamiento continuo con datos recientes y la monitorización constante para identificar y resolver problemas de rendimiento, asegurando que el modelo siga cumpliendo los objetivos establecidos.

Un diseño robusto debe abarcar todos los elementos necesarios, desde la ingesta de datos hasta la entrega de predicciones, tomando en cuenta:

- **Carga de trabajo ML**: Definición de fuentes de datos, etiquetado y selección de características.  
- **Inferencia**: Elección entre inferencia en lotes o en tiempo real, dependiendo de los requisitos del sistema.  
- **Impacto real**: Garantizar que el sistema genere valor tangible y que su rendimiento mejore continuamente.

Este enfoque integral e iterativo asegura que los sistemas de ML sean sostenibles, escalables y efectivos en el mundo real.

### 2.2. Estrategias de despliegue

Existen diversas técnicas para implementar modelos en producción de manera segura y con el mínimo impacto:

- **Gradual ramp-up**: Consiste en incrementar progresivamente el tráfico hacia el nuevo modelo, lo que permite monitorear su desempeño y hacer ajustes según sea necesario.
- **Rollback**: Esta estrategia permite revertir rápidamente al modelo anterior en caso de que el nuevo no cumpla con las expectativas o falle.
- **Canary deployment**: En esta técnica, se asigna inicialmente un pequeño porcentaje de tráfico al nuevo modelo, incrementándolo gradualmente si demuestra ser eficaz y estable.
- **Blue-green deployment**: Utiliza dos entornos paralelos (uno activo y otro de prueba), lo que facilita la implementación de cambios y una rápida recuperación en caso de problemas.

### 2.3. Consideraciones de desarrollo

El desarrollo de modelos de ML puede seguir dos enfoques principales: ***model-centric***, enfocado en optimizar algoritmos, 
y ***data-centric***, que prioriza la mejora de la calidad de los datos, lo cual es esencial para garantizar un buen rendimiento en producción. 

Es crucial realizar un *sanity check* inicial para validar las hipótesis del modelo, establecer líneas base robustas y emplear herramientas de 
versionado como **MLFlow** o **DVC** para rastrear de manera efectiva modelos, datos y resultados.

El mantenimiento continuo de los modelos requiere una supervisión constante para detectar ***drifts*** (desviaciones en el comportamiento del modelo) 
y **datos OOD** (fuera de distribución), así como la recolección de métricas clave para evaluar su rendimiento. Además, es fundamental equilibrar 
adecuadamente los conjuntos de datos y mantener la consistencia en las divisiones para entrenamiento, validación y prueba, garantizando que el modelo 
sea fiable y escalable a largo plazo.

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

# Clase de configuración base
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

logger.info("¡Hola!, esto es un mensaje de información")
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

# Rotación cuando el archivo alcance 1 MB
logger.add("programa.log", rotation="1 MB")

# Rotación diaria a una hora específica
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

### 3.5. Automatización de procesos mediante Bash y Makefiles

El dominio de Bash es fundamental para la automatización de procesos. Para profundizar en su uso, se recomienda consultar los [apuntes sobre Bash](../programacion/bash.md) disponibles en esta Wiki. Asimismo, los [apuntes sobre Makefiles](../herramientas/makefile.md) ofrecen información relevante sobre la implementación y gestión de estos archivos para facilitar la automatización de tareas.

### 3.6. CI/CD con GitHub Actions

GitHub es una plataforma que utiliza la herramienta Git y que incluye otras herramientas específicas de su plataforma que facilitan la gestión y despliegue de proyectos. Para profundizar en su uso, se recomienda consultar los [apuntes sobre GitHub](../herramientas/git/github.md) disponibles en esta Wiki.

### 3.7. Publicación de un paquete de Python en PyPI

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