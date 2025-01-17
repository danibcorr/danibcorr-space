---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Conoce las claves esenciales para crear código sostenible.
title: Código sostenible
toc_max_heading_level: 4
---

## 1. Código sostenible

El desarrollo de un proyecto debe realizarse bajo una estructura de código clara
y sostenible, utilizando herramientas y metodologías para garantizar su
organización y limpieza. Estas prácticas son fundamentales durante el
desarrollo, puesta en producción y evolución del proyecto.

### 1.1. Estructura del proyecto

Un proyecto debe estar organizado en dos partes principales:

1. **Directorio de la aplicación:** Contiene la lógica del código, la
   configuración de los modelos, los registros (_logs_), entre otros
   componentes.
2. **Ajustes y configuraciones:** Incluye configuraciones y dependencias del
   proyecto, como los archivos de gestión de dependencias (Poetry), Dockerfiles,
   archivos de configuración `.yml`, etc.

Esta separación promueve un código modular, organizado y fácil de mantener.
Facilita la colaboración entre miembros del equipo, simplifica el proceso de
actualización y mejora la comprensión de la estructura del proyecto por parte de
nuevos desarrolladores.

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

### 1.2. Código limpio

La guía de estilo [PEP 8](https://pep8.org/) define convenciones para escribir
código Python que sea legible y consistente. A continuación, se destacan sus
principales recomendaciones. Además, se sugieren herramientas como
[Black](https://pypi.org/project/black/) y [Ruff](https://docs.astral.sh/ruff/)
para aplicar estas convenciones automáticamente en los proyectos.

#### 1.2.1. Diseño del código

- Se debe utilizar una indentación de 4 espacios, sin mezclar espacios y
  tabuladores.
- La longitud máxima de las líneas es de 79 caracteres; para comentarios y
  docstrings, es de 72 caracteres.
- Las líneas largas deben dividirse usando paréntesis, corchetes o llaves para
  mejorar la legibilidad.

Ejemplo:

```python
def funcion_larga(parametro1, parametro2,
                  parametro3, parametro4):
    return parametro1 + parametro2 + parametro3 + parametro4
```

#### 1.2.2. Codificación de archivos y cadenas

- Los archivos fuente deben utilizar codificación UTF-8.
- Se pueden emplear comillas simples o dobles para las cadenas, pero es
  importante mantener la consistencia.
- Para cadenas multilínea, se prefieren las comillas dobles.

```python
cadena_simple = 'Hola mundo'
cadena_doble = "Hola mundo"
cadena_multilinea = """
    Esta es una cadena
    que ocupa varias líneas
"""
```

#### 1.2.3. Importaciones

Las importaciones deben estar ubicadas al principio del archivo y organizadas en
el siguiente orden:

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

#### 1.2.4. Espacios en blanco

- No se deben añadir espacios adicionales alrededor de paréntesis, corchetes,
  llaves, comas o dos puntos.
- Se debe agregar un espacio alrededor de operadores de asignación, comparación
  y booleanos.

```python
x = 5
y = x + 1
if x == y:
    print(f"x:{x}, y:{y}")
```

#### 1.2.5. Comentarios y docstrings

- Los comentarios deben ser claros y concisos, utilizando oraciones completas
  para describir el propósito del código.
- Los **docstrings** son obligatorios para módulos, funciones, clases y métodos
  públicos, describiendo su funcionalidad y parámetros.

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

#### 1.2.6. Convenciones de nomenclatura

- **Paquetes y módulos:** Se deben escribir en minúsculas, sin espacios (ej.
  `mi_modulo`).
- **Clases:** Usar el estilo CapWords, también conocido como CamelCase (ej.
  `MiClase`).
- **Funciones y variables:** Utilizar minúsculas con guiones bajos (ej.
  `mi_funcion`).
- **Constantes:** Escribir en mayúsculas con guiones bajos (ej. `MI_CONSTANTE`).
- **Métodos y variables de instancia:** Como las funciones, con un guion bajo
  inicial para los elementos no públicos (ej. `_variable_interna`).

```python
class MiClase:
    MI_CONSTANTE = 42

    def __init__(self):
        self._variable_interna = 10

    def metodo_publico(self):
        return self._variable_interna
```
