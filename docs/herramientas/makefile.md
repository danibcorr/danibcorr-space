---
sidebar_position: 3
authors:
  - name: Daniel Bazo Correa
description: Automatización de procesos con Makefile.
title: Makefile
---

# Bibliografía

- [Makefile Tutorial](https://makefiletutorial.com/)
  
## 1. Introducción

Un **Makefile** es un archivo de configuración utilizado por la herramienta `make`, que permite automatizar el proceso de compilación y ejecución de proyectos de software. Generalmente, se emplea en entornos con sistemas operativos basados en GNU/Linux y puede contener comandos en [Bash](../programacion/bash.md).

El uso de Makefiles ofrece varios beneficios en el desarrollo de software, entre los que destacan:

1. Mayor **eficiencia** en la compilación y gestión de proyectos.
2. **Facilidad de mantenimiento** en proyectos de gran envergadura.
3. **Automatización** de tareas repetitivas, optimizando el flujo de trabajo.

## 2. Sintaxis básica

### 2.1. Estructura de una regla

Una regla en un Makefile define el proceso de construcción de un objetivo (*target*) a partir de sus prerrequisitos. La estructura básica de una regla es la siguiente:

```makefile
targets: prerequisites
    comando
    comando
    comando
```

- ***targets:*** Son los nombres de los archivos o tareas que se crearán, separados por espacios. Usualmente, se define un único *target* por regla.
- ***prerequisites:*** Son los archivos o dependencias necesarios para generar el *target*, también separados por espacios.
- **comandos:** Son las instrucciones que se ejecutan para crear el *target*. Cada comando debe comenzar con un carácter de tabulación, no con espacios.

#### 2.1.1. Ejemplo de una regla simple

```makefile
install: pyproject.toml
    poetry install
```

En este ejemplo:

- **`install`** es el *target*, que representa la tarea o archivo a crear.
- **`pyproject.toml`** es el prerrequisito necesario, un archivo que debe existir antes de ejecutar la tarea.
- **`poetry install`** es el comando que se ejecuta para crear el *target*.

Cuando se ejecuta el comando `make install`, Make verifica si el archivo `pyproject.toml` está presente. Si el archivo existe, se ejecuta el comando `poetry install` para instalar las dependencias de un proyecto.

### 2.2. Comentarios

Los comentarios en un Makefile se escriben utilizando el símbolo `#`. Estos comentarios no afectan la ejecución del archivo y sirven para describir el propósito de las reglas o comandos. Un ejemplo de comentario es:

```makefile
## Esta regla instala las dependencias de Poetry
install: pyproject.toml
    poetry install
```

### 2.3. Variables

Las variables en Makefiles permiten almacenar y reutilizar valores, facilitando la personalización de comandos o rutas. Se definen y utilizan de la siguiente manera:

```makefile
TEST_FILE ?= ./tests

## Regla para ejecutar tests al código
tests: 
    @echo "Testeando el código..."
    poetry run pytest -v $(TEST_FILE)
```

En este caso:

- **`TEST_FILE ?= ./tests`** define la variable `TEST_FILE`, que almacena la ruta del directorio donde se ejecutarán los tests. El uso de `?=` permite definir un valor por defecto si no se proporciona otro al ejecutar la regla.
- En la regla `tests`, el comando `poetry run pytest -v $(TEST_FILE)` utiliza la variable `TEST_FILE` para ejecutar los tests en el directorio especificado.

Para ejecutar la regla `tests` y especificar un archivo diferente al definido en la variable, se utiliza el siguiente comando:

```sh
make tests TEST_FILE=./tests/test_ejemplo.py
```

Esto ejecutará los tests usando el archivo `test_ejemplo.py` en lugar del directorio por defecto.

#### 2.3.1. Variables automáticas

Make utiliza variables automáticas que simplifican la escritura y gestión de reglas. Estas variables se expanden automáticamente en función del contexto de la regla en la que se encuentran, permitiendo optimizar el código del archivo Makefile.

| Variable | Descripción |
|----------|-------------|
| `$@`     | Nombre del *target* actual |
| `$<`     | Primer prerrequisito de la regla |
| `$^`     | Todos los prerrequisitos de la regla |
| `$*`     | Parte del nombre (stem) que coincide con el patrón `%` |
| `$(@D)`  | Directorio del *target* actual |
| `$(@F)`  | Nombre del archivo del *target* actual |

Por ejemplo:

```makefile
build: main.o util.o
    gcc -o $@ $^
```

En este caso:

- **`build`** es el *target*.
- **`main.o`** y **`util.o`** son los prerrequisitos.
- **`$@`** se sustituye por `build`, que es el *target*.
- **`$^`** se sustituye por todos los prerrequisitos (`main.o util.o`), lo que permite compilar los archivos objeto en un ejecutable llamado `build`.

#### 2.3.2. Variables específicas de objetivo y patrones

Es posible definir variables que solo se aplican a ciertos objetivos o a patrones de objetivos, por ejemplo:

```makefile
%.o: CFLAGS += -O3
%.o: %.c
    $(CC) $(CFLAGS) -c $< -o $@
```

En este ejemplo:

- **`%.o`** es un patrón que indica cualquier archivo con la extensión `.o`.
- **`CFLAGS += -O3`** agrega la opción `-O3` de optimización al compilar cualquier archivo `.o`.
- El comando **`$(CC) $(CFLAGS) -c $< -o $@`** compila un archivo `.c` en un archivo `.o`, utilizando el compilador `$(CC)` y las banderas de compilación `$(CFLAGS)`.

Este patrón es útil para compilar múltiples archivos con la misma regla, asegurando que todos los archivos `.c` se conviertan en archivos `.o` con las mismas opciones de compilación.

## 3. Funciones avanzadas

### 3.1. Funciones para cadenas de texto

Make proporciona diversas funciones que permiten manipular y transformar cadenas de texto.

#### 3.1.1. Función `subst`

La función `subst` realiza sustituciones simples en una cadena de texto. Su sintaxis es la siguiente:

```makefile
$(subst from,to,text)
```

- **from:** El texto que se desea reemplazar.
- **to:** El texto por el cual se quiere sustituir.
- **text:** El texto original donde se buscarán las ocurrencias.

##### Ejemplo:
```makefile
SOURCES = file1.cpp file2.cpp file3.cpp
OBJECTS = $(subst .cpp,.o,$(SOURCES))
```

En este ejemplo, `subst` reemplaza todas las extensiones `.cpp` por `.o` en la variable `SOURCES`. De esta manera, se genera una lista de archivos objeto (`OBJECTS`): `file1.o file2.o file3.o`.

#### 3.1.2. Función `patsubst`

La función `patsubst` realiza sustituciones en texto utilizando patrones, proporcionando mayor flexibilidad que `subst`. Su sintaxis es la siguiente:

```makefile
$(patsubst pattern,replacement,text)
```

- **pattern:** El patrón a buscar (puede incluir comodines como `%`).
- **replacement:** El texto de reemplazo (puede utilizar los comodines del patrón).
- **text:** El texto donde se buscará el patrón.

##### Ejemplo:
```makefile
SOURCES = file1.cpp file2.cpp file3.cpp
OBJECTS = $(patsubst %.cpp,%.o,$(SOURCES))
```

Aquí, `patsubst` utiliza el comodín `%` para buscar archivos con la extensión `.cpp` y reemplazarla por `.o`, produciendo el mismo resultado que el ejemplo anterior, pero con mayor versatilidad.

#### 3.1.3. Funciones `filter` y `filter-out`

Las funciones `filter` y `filter-out` permiten filtrar listas de palabras o archivos. 

- **`filter`**: Retiene las palabras que coinciden con el patrón.
- **`filter-out`**: Elimina las palabras que coinciden con el patrón.

```makefile
$(filter pattern...,text)
$(filter-out pattern...,text)
```

##### Ejemplo:
```makefile
SOURCES = file1.c file2.cpp file3.h
C_FILES = $(filter %.c,$(SOURCES))
```

En este ejemplo, `filter` selecciona únicamente los archivos con la extensión `.c` de la variable `SOURCES`, asignándolos a la variable `C_FILES` (`file1.c`).

#### 3.1.4. Función `foreach`

La función `foreach` permite iterar sobre una lista y aplicar una operación para cada elemento. Su sintaxis es:

```makefile
$(foreach var,list,text)
```

- **var:** El nombre de la variable que tomará los valores de la lista en cada iteración.
- **list:** La lista sobre la que se iterará.
- **text:** El texto que se evaluará para cada valor de la lista.

##### Ejemplo:
```makefile
DIRS = dir1 dir2 dir3
CLEAN_DIRS = $(foreach dir,$(DIRS),$(dir)/clean)
```

Este ejemplo genera una lista `CLEAN_DIRS` que contiene las rutas `dir1/clean`, `dir2/clean` y `dir3/clean`, una por cada valor en `DIRS`.

#### 3.1.5. Función `if`

La función `if` permite ejecutar condicionalmente código en un Makefile. Su sintaxis es:

```makefile
$(if condition,then-part[,else-part])
```

- **condition:** La condición a evaluar.
- **then-part:** Lo que se ejecuta si la condición es verdadera.
- **else-part:** (opcional) Lo que se ejecuta si la condición es falsa.

##### Ejemplo:
```makefile
USE_DEBUG = yes
CFLAGS = $(if $(USE_DEBUG),-g,-O2)
```

En este ejemplo, si la variable `USE_DEBUG` tiene el valor `yes`, se añade la bandera de depuración `-g` a `CFLAGS`. De lo contrario, se utiliza la optimización `-O2`.

### 3.2. Directivas clave

Las directivas en Makefiles permiten controlar el flujo de ejecución, la inclusión de otros archivos y otras configuraciones avanzadas.

#### 3.2.1. Directiva `include`

La directiva `include` permite incluir otros Makefiles dentro de uno principal. Esto es útil para dividir un Makefile grande en varios módulos más pequeños y manejables, mejorando la organización y el mantenimiento.

```makefile
include config.mk
```

Esto permite mantener las configuraciones y las reglas separadas en archivos específicos, haciendo el Makefile principal más limpio.

#### 3.2.2. Directiva `VPATH`

La directiva `VPATH` especifica directorios adicionales donde Make buscará los archivos necesarios (prerrequisitos). Es útil cuando los archivos se encuentran en directorios diferentes al Makefile.

```makefile
VPATH = src:include
```

Con esta directiva, Make buscará los archivos necesarios primero en el directorio `src` y luego en el directorio `include`.

#### 3.2.3. Directiva `.PHONY`

La directiva `.PHONY` se utiliza para declarar objetivos que no corresponden a archivos reales en el sistema de archivos. Esto evita conflictos cuando el nombre del objetivo coincide con un archivo existente.

```makefile
.PHONY: clean all
```

En este ejemplo, se especifica que los objetivos `clean` y `all` son "falsos", es decir, no representan archivos, sino comandos o tareas.

#### 3.2.4. Directiva `.DELETE_ON_ERROR`

La directiva `.DELETE_ON_ERROR` indica a Make que elimine el archivo objetivo si un comando falla durante su construcción. Esto es útil para evitar que queden archivos corruptos o incompletos.

```makefile
.DELETE_ON_ERROR:
```

### 3.3. Condicionales

Makefiles permiten el uso de estructuras condicionales para adaptar las reglas a diferentes entornos o configuraciones.

```makefile
ifeq ($(CC),gcc)
    CFLAGS += -Wall
else
    CFLAGS += -W3
endif
```

En este ejemplo, si el compilador (`CC`) es `gcc`, se añade la bandera `-Wall` a `CFLAGS` (para activar todos los warnings). Si no, se añade `-W3`.

### 3.4. Macros y funciones

Es posible definir macros y funciones personalizadas en Make para reutilizar código y mejorar la legibilidad. Estas macros permiten agrupar múltiples comandos bajo un solo nombre.

```makefile
define compile_rule
    $(CC) $(CFLAGS) -c $< -o $@
endef

%.o: %.c
    $(call compile_rule)
```

En este ejemplo, `compile_rule` es una macro que contiene la regla para compilar archivos `.c` en archivos `.o`. Luego, la regla `%.o: %.c` invoca la macro con `$(call compile_rule)`.

## 4. Mejores prácticas y estilos

El uso adecuado de Makefiles no solo facilita la compilación y gestión de proyectos, sino que también mejora la legibilidad y mantenimiento a largo plazo. A continuación, se presentan algunas de las mejores prácticas y estilos recomendados.

### 4.1. Organización de Makefiles

Es recomendable organizar el Makefile de manera que sea fácil de leer y mantener. Algunas sugerencias son:

1. **Separar las reglas y configuraciones:** Definir las variables al inicio del Makefile y agrupar las reglas relacionadas. Esto facilita el mantenimiento y comprensión del archivo.

2. **Uso de comentarios:** Añadir comentarios claros y concisos para explicar las reglas, variables y funciones dentro del Makefile.

3. **Modularización:** Dividir los Makefiles grandes en varios archivos pequeños y organizados, utilizando la directiva `include`.

##### Ejemplo de estructura organizada:

```makefile
## Variables de configuración
CC = gcc
CFLAGS = -Wall -O2

## Objetivos
all: programa

## Reglas de compilación
programa: main.o utils.o
    $(CC) $(CFLAGS) -o programa main.o utils.o

main.o: main.c
    $(CC) $(CFLAGS) -c main.c

utils.o: utils.c
    $(CC) $(CFLAGS) -c utils.c

## Limpiar los archivos generados
clean:
    rm -f *.o programa
```

### 4.2. Depuración

La depuración de Makefiles puede ser un desafío si no se siguen ciertas prácticas que faciliten la detección de errores. Algunas técnicas útiles incluyen:

1. **Ejecución en seco (`-n`):** Esta opción permite ver qué comandos se ejecutarían sin realmente ejecutarlos, lo cual es útil para verificar el flujo de ejecución.
   ```sh
   make -n
   ```

2. **Depuración detallada (`-d`):** Proporciona una salida de depuración detallada para ayudar a identificar errores en la ejecución del Makefile.
   ```sh
   make -d
   ```

3. **Impresión de variables:** Para comprobar el valor de las variables, se puede definir una regla que las imprima.
   ```makefile
   debug:
       @echo "CFLAGS = $(CFLAGS)"
   ```

   Al ejecutar:
   ```sh
   make debug
   ```

   Se imprimirá el valor actual de la variable `CFLAGS`.

### 4.3. Portabilidad y compatibilidad

Asegurar la portabilidad de los Makefiles es crucial cuando el proyecto se compila en diferentes plataformas y sistemas operativos. Para lograrlo, se deben seguir ciertos lineamientos:

1. **Uso de variables para comandos y opciones del sistema:** Esto permite ajustar fácilmente los comandos en función del sistema operativo o entorno de desarrollo. Por ejemplo, si se compila en Windows y Linux, se puede definir una variable para el compilador.

2. **Evitar características específicas de shell:** En la medida de lo posible, es preferible no depender de características o comandos específicos de una shell particular (como `bash`), ya que esto puede limitar la compatibilidad con otros sistemas.

## 5. Casos de uso avanzados

El uso de Makefiles no se limita a proyectos simples, sino que también se extiende a proyectos grandes, integraciones con sistemas de control de versiones, y otras tareas más avanzadas, como la generación de documentación o la creación de paquetes. A continuación se presentan algunos casos de uso avanzados que demuestran la flexibilidad y potencia de Make.

### 5.1. Gestión de proyectos

En proyectos de gran envergadura con múltiples directorios y archivos, es crucial estructurar bien el sistema de construcción. Para esto, se pueden emplear dos enfoques: Makefiles recursivos o un sistema de construcción no recursivo.

#### 5.1.1. Makefiles recursivos

Los Makefiles recursivos son útiles para proyectos con una estructura de subdirectorios, donde cada uno tiene su propio Makefile. El Makefile principal se encarga de coordinar las compilaciones en los subdirectorios. Esto es especialmente práctico cuando los diferentes módulos o bibliotecas se gestionan de forma independiente.

Por ejemplo:

```makefile
SUBDIRS = lib src
all:
    for dir in $(SUBDIRS); do \
        $(MAKE) -C $$dir all; \
    done
```

En este ejemplo, `SUBDIRS` contiene los subdirectorios `lib` y `src`. La regla `all` itera sobre cada subdirectorio y ejecuta `make` en cada uno de ellos. La opción `-C $$dir` cambia el directorio de trabajo al subdirectorio actual.

Este enfoque permite organizar el proyecto de manera modular, facilitando su mantenimiento y la adición de nuevas funcionalidades sin alterar el Makefile principal.

#### 5.1.2. Sistema de construcción no recursivo

Un sistema no recursivo también es una opción para proyectos grandes. A diferencia del enfoque recursivo, se controla todo el proceso de compilación desde un único Makefile, sin necesidad de cambiar de directorio. Esto puede ser más eficiente al evitar la sobrecarga de llamadas recursivas y proporcionar un control centralizado.

Por ejemplo:

```makefile
MODULES := lib src tests
SRC_DIR := $(addprefix ./,$(MODULES))
SRCS := $(foreach sdir,$(SRC_DIR),$(wildcard $(sdir)/*.c))
OBJS := $(SRCS:.c=.o)

all: $(OBJS)
    $(CC) $(CFLAGS) $^ -o $(TARGET)
```

En este ejemplo, se utilizan funciones como `addprefix` y `wildcard` para generar automáticamente las rutas a los archivos fuente dentro de los subdirectorios, y `foreach` para aplicar la regla de compilación a todos los archivos. El resultado es un sistema de construcción más centralizado y eficiente.

### 5.2. Integración con sistemas de control de versiones

Makefiles pueden integrarse con sistemas de control de versiones, como Git, para automatizar tareas relacionadas con la versión del código. Esto es útil para etiquetar versiones del software o para incrustar la información de la versión en los binarios.

Por ejemplo:

```makefile
VERSION := $(shell git describe --tags --always --dirty)

$(TARGET): CFLAGS += -DVERSION=\"$(VERSION)\"
```

En este ejemplo, la variable `VERSION` toma la versión del código desde Git usando `git describe`, que devuelve la etiqueta más cercana, el número de commits desde esa etiqueta y el estado del repositorio. Esta versión se pasa como una macro de preprocesador a través de `CFLAGS`.

### 5.3. Generación automática de documentación

Makefiles pueden automatizar la generación de documentación utilizando herramientas como Doxygen. Esta automatización es especialmente útil en proyectos donde la documentación debe actualizarse regularmente en función de los cambios en el código.

Ejemplo de generación de documentación con Doxygen:

```makefile
docs: $(SRCS)
    doxygen Doxyfile
```

En este ejemplo, la regla `docs` utiliza Doxygen para generar la documentación a partir de los archivos fuente listados en `$(SRCS)` y las configuraciones definidas en `Doxyfile`. Al ejecutar `make docs`, se genera automáticamente la documentación en el formato deseado (HTML, PDF, etc.).

### 5.4. Creación y gestión de paquetes

Los Makefiles pueden también facilitar la creación de paquetes para distribución, empaquetando los binarios y archivos relacionados en formatos como `.tar.gz`.

Ejemplo de creación de paquetes:

```makefile
package: all
    tar -czf $(TARGET)-$(VERSION).tar.gz $(TARGET) README.md
```

Este ejemplo genera un archivo comprimido `tar.gz` que contiene el binario final `$(TARGET)` y el archivo `README.md`. El nombre del paquete incluye el número de versión, lo cual es útil para identificar diferentes versiones del software.

### 5.5. Implementación de sistemas de construcción personalizados

Para proyectos con necesidades específicas, es posible implementar sistemas de construcción personalizados utilizando Make como base. Estos sistemas pueden incluir reglas complejas, manejo de dependencias, y generación de archivos automáticamente.

Ejemplo de sistema personalizado con dependencias:

```makefile
include $(wildcard *.d)

%.d: %.c
    $(CC) -MM $< > $@

%.o: %.c
    $(CC) $(CFLAGS) -c $< -o $@
```

En este ejemplo, se generan archivos de dependencias (`.d`) automáticamente para cada archivo fuente `.c`. La regla `%.d: %.c` utiliza el compilador para generar dependencias, mientras que la regla `%.o: %.c` compila el archivo fuente en un objeto. El archivo `*.d` se incluye al inicio del Makefile para asegurar que las dependencias se carguen correctamente.

## 6. Herramientas y recursos adicionales

En esta sección se describen herramientas y recursos útiles que complementan el uso de Make en la gestión de proyectos, así como funcionalidades adicionales ofrecidas por GNU Make para mejorar el rendimiento y la flexibilidad del sistema de construcción.

### 6.1. GNU Make

GNU Make es una de las herramientas más utilizadas para automatizar procesos de compilación y gestión de proyectos de software. Su capacidad de manejar dependencias y automatizar tareas repetitivas la convierte en una opción popular en diversos entornos de desarrollo. A continuación, se detallan algunas características avanzadas que pueden mejorar el rendimiento y la gestión de proyectos a través de GNU Make.

#### 6.1.1. Opciones de línea de comandos y su aplicación

GNU Make ofrece diversas opciones que permiten modificar su comportamiento desde la línea de comandos. Estas opciones facilitan la depuración, la mejora del rendimiento en compilaciones paralelas y la gestión de diferentes Makefiles.

- `-j [N]`: Ejecuta N tareas en paralelo, aprovechando sistemas con múltiples núcleos. Esta opción es especialmente útil en compilaciones grandes, ya que reduce el tiempo de construcción al ejecutar tareas simultáneamente.
  
  **Ejemplo:**
  ```sh
  make -j4
  ```
  En este caso, se ejecutan cuatro tareas en paralelo.

- `-n` o `--dry-run`: Muestra los comandos que se ejecutarían, pero sin ejecutarlos realmente. Es una excelente herramienta para verificar que las reglas y dependencias estén correctamente configuradas antes de hacer cambios efectivos.
  
  **Ejemplo:**
  ```sh
  make -n install
  ```
  Muestra los comandos que se ejecutarían para la regla `install` sin ejecutarlos.

- `-B` o `--always-make`: Fuerza la reconstrucción de todos los objetivos, independientemente de si los archivos están actualizados o no.
  
  **Ejemplo:**
  ```sh
  make -B
  ```
  Vuelve a compilar todo el proyecto sin considerar si los archivos objetivo ya están actualizados.

- `-d`: Proporciona información detallada de depuración, mostrando cómo Make decide qué archivos necesitan ser reconstruidos y cómo se evalúan las reglas.
  
  **Ejemplo:**
  ```sh
  make -d
  ```
  Ejecuta Make con información de depuración detallada, útil para diagnosticar problemas complejos en Makefiles.

- `-f [archivo]`: Permite especificar un archivo Makefile alternativo. Esto es útil cuando se tiene más de un Makefile en el proyecto o cuando se quiere probar un archivo temporal.
  
  **Ejemplo:**
  ```sh
  make -f Makefile.alt
  ```
  Ejecuta Make usando el archivo `Makefile.alt` en lugar del `Makefile` predeterminado.

#### 6.1.2. Variables de entorno útiles

GNU Make utiliza varias variables de entorno para ajustar su comportamiento. Estas variables pueden ser utilizadas para personalizar el proceso de construcción sin modificar directamente el Makefile.

- `MAKEFILES`: Es una lista de Makefiles que se incluyen automáticamente antes de procesar el Makefile principal. Esta variable es útil cuando se desea forzar la inclusión de ciertos archivos en todas las invocaciones de Make sin tener que modificar cada Makefile individual.

  **Ejemplo:**
  ```sh
  export MAKEFILES=common.mk
  ```
  Hace que `common.mk` se incluya automáticamente en todos los Makefiles.

- `MAKELEVEL`: Indica el nivel de recursión actual en una construcción de Make. Este valor es útil para evitar comportamientos indeseados en construcciones recursivas o para imprimir mensajes específicos solo en el nivel más alto de la recursión.

  **Ejemplo:**
  ```makefile
  ifeq ($(MAKELEVEL),0)
      @echo "Ejecutando nivel superior de Make"
  endif
  ```

- `MAKEFLAGS`: Almacena las opciones de línea de comandos que se pasaron a Make. Es útil para mantener las mismas opciones de compilación en todo un proyecto, especialmente en construcciones recursivas.

  **Ejemplo:**
  ```sh
  make -j4
  ```
  Después de ejecutar este comando, `MAKEFLAGS` almacenará `-j4`, garantizando que las llamadas recursivas a Make también utilicen esta opción.

- `MAKEFILE_LIST`: Contiene la lista de todos los Makefiles que Make ha procesado. Esta variable es útil para depurar o generar informes que muestren todos los archivos Makefile que se están utilizando en un proyecto.

  **Ejemplo:**
  ```makefile
  @echo "Archivos Makefile procesados: $(MAKEFILE_LIST)"
  ```
  Imprime todos los Makefiles que han sido procesados durante la ejecución.