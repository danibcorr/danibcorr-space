---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Aprende todo lo necesario sobre el lenguaje de programación Python.
title: Python
toc_max_heading_level: 4
---

## Bibliografía

- [Python Docs](https://docs.python.org/3/)
- [Python Bootcamps Udemy](https://www.udemy.com/course/complete-python-bootcamp/)

## 1. Introducción

<p align="center">
  <img src={require("../../img/python-logo.png").default} height="250"/>
  <br />
  <em>Logo de Python</em>
</p>

**Python** es un lenguaje de programación de alto nivel, interpretado y de
propósito general, creado por Guido van Rossum y lanzado en 1991. Se caracteriza
por su sintaxis clara y legible, lo que facilita el aprendizaje y la escritura
de código. Además, cuenta con una amplia comunidad de desarrolladores y una gran
cantidad de bibliotecas y frameworks que permiten desarrollar proyectos
diversos, como aplicaciones web, análisis de datos y aprendizaje automático.

## 2. Instalación

### 2.1. Miniconda y los Jupyter Notebooks

**Miniconda** es una versión ligera de **Conda** que incluye únicamente lo
esencial: Conda, Python y algunos paquetes básicos. Su función principal es
facilitar la creación de entornos virtuales para aislar dependencias y evitar
conflictos entre versiones de paquetes. La instalación de Miniconda se debe
realizar siguiendo las instrucciones oficiales disponibles en la
[página de Miniconda](https://docs.anaconda.com/miniconda/).

Para trabajar con Python en entornos de pruebas se suele emplear **Jupyter
Notebooks**, una herramienta interactiva que combina código, visualizaciones y
texto en un único documento. Las ventajas principales de los Jupyter Notebooks
incluyen:

- **Interactividad**: Permite ejecutar bloques de código de forma independiente,
  facilitando la experimentación y la prueba de ideas.
- **Documentación integrada**: Soporta texto en formato Markdown, permitiendo
  documentar el código junto a su ejecución.
- **Visualización**: Permite integrar gráficos y visualizaciones de bibliotecas
  como **Matplotlib** o **Seaborn** directamente en el documento.

### 2.2. Creación y configuración del entorno

Una vez instalado Miniconda, es necesario crear un entorno virtual configurando
la versión de Python y los paquetes necesarios para cada proyecto. Para ello,
puedes seguir los pasos del
[apartado de herramientas, gestión de entornos en Python](../herramientas/entornos_python.md).

### 2.3. Comandos útiles para la terminal

A continuación, se listan algunos comandos útiles para la terminal en Linux,
junto con su función:

| Comando                | Función                                                 |
| ---------------------- | ------------------------------------------------------- |
| `pwd`                  | Muestra la ruta completa del directorio actual.         |
| `ls`                   | Lista los archivos y carpetas en el directorio actual.  |
| `ls -l`                | Muestra una lista detallada de los archivos y carpetas. |
| `cd nombre_directorio` | Cambia al directorio especificado.                      |
| `cd ..`                | Navega al directorio superior (padre).                  |
| `cd /`                 | Navega al directorio raíz del sistema.                  |
| `mkdir nombre_carpeta` | Crea una nueva carpeta con el nombre especificado.      |
| `rm nombre_archivo`    | Elimina un archivo especificado.                        |
| `rm -r nombre_carpeta` | Elimina una carpeta y su contenido de manera recursiva. |
| `touch nombre_archivo` | Crea un archivo vacío con el nombre especificado.       |
| `mv origen destino`    | Mueve o renombra archivos o carpetas.                   |
| `cp origen destino`    | Copia archivos o carpetas de un lugar a otro.           |
| `clear`                | Limpia la pantalla del terminal.                        |

### 2.4. Atajos de teclado para Jupyter Notebooks

A continuación, se presentan algunos atajos de teclado útiles para trabajar en
**Jupyter Notebooks**:

| Atajo              | Función                                                                                |
| ------------------ | -------------------------------------------------------------------------------------- |
| `ctrl + shift + p` | Abre la paleta de comandos en Visual Studio Code (incluye la opción de abrir Jupyter). |
| `shift + tab`      | Muestra la documentación de una función o método en Jupyter.                           |
| `esc + m`          | Cambia una celda a modo Markdown en Jupyter.                                           |
| `esc + y`          | Cambia una celda a modo de código en Jupyter.                                          |
| `ctrl + enter`     | Ejecuta la celda actual sin avanzar a la siguiente.                                    |
| `shift + enter`    | Ejecuta la celda actual y avanza a la siguiente.                                       |

## 3. Conceptos básicos

### 3.1. Tipos de datos

Python ofrece varios tipos de datos fundamentales que permiten definir,
almacenar y manipular información. A continuación, se detallan los principales
tipos de datos y sus características:

| Tipo de Datos                               | Palabra Reservada | Ejemplos                         |
| ------------------------------------------- | ----------------- | -------------------------------- |
| **Números Enteros**                         | `int`             | `3`                              |
| **Números Flotantes**                       | `float`           | `2.3`                            |
| **Cadenas de Texto**                        | `str`             | `"Hola"`                         |
| **Listas** (colección ordenada y mutable)   | `list`            | `[10, "hello", 200.3]`           |
| **Diccionarios** (pares clave-valor)        | `dict`            | `{"edad": 20, "nombre": "Dani"}` |
| **Tuplas** (secuencia ordenada e inmutable) | `tuple`           | `(10, "hello", 200.3)`           |
| **Sets** (colección única y desordenada)    | `set`             | `{"a", "b"}`                     |
| **Booleanos** (valores lógicos)             | `bool`            | `True`, `False`                  |

### 3.2. Operaciones con datos

Python permite realizar una amplia variedad de operaciones sobre datos numéricos
y otros tipos. A continuación, se describen las principales operaciones
matemáticas y funciones disponibles:

| Operador/Función        | Descripción                                                            |
| ----------------------- | ---------------------------------------------------------------------- |
| `+`, `-`, `*`, `/`, `%` | Suma, resta, multiplicación, división y módulo (resto de la división). |
| `-x`                    | Cambia el signo de un número.                                          |
| `abs(x)`                | Devuelve el valor absoluto de `x`.                                     |
| `pow(x, y)` o `x**y`    | Potencia de `x` elevado a `y`.                                         |
| `max(x, y)`             | Devuelve el valor máximo entre `x` y `y`.                              |
| `min(x, y)`             | Devuelve el valor mínimo entre `x` y `y`.                              |
| `round(x, n)`           | Redondea `x` a `n` decimales.                                          |
| `math.floor(x)`         | Redondea hacia abajo. Requiere importar `math`.                        |
| `math.ceil(x)`          | Redondea hacia arriba. Requiere importar `math`.                       |
| `math.sqrt(x)`          | Devuelve la raíz cuadrada de `x`. Requiere importar `math`.            |
| `math.pi`               | Devuelve el valor de Pi. Requiere importar `math`.                     |
| `hex(x)`                | Convierte `x` a hexadecimal.                                           |
| `bin(x)`                | Convierte `x` a binario.                                               |

### 3.3. Operadores

#### 3.3.1. Operadores de comparación

Los operadores de comparación permiten evaluar relaciones entre dos valores,
devolviendo un resultado booleano (`True` o `False`).

| Expresión | Descripción               |
| --------- | ------------------------- |
| `A == B`  | A es igual a B.           |
| `A != B`  | A es distinto de B.       |
| `A < B`   | A es menor que B.         |
| `A <= B`  | A es menor o igual que B. |
| `A > B`   | A es mayor que B.         |
| `A >= B`  | A es mayor o igual que B. |

#### 3.3.2. Operadores lógicos

Los operadores lógicos permiten combinar varias condiciones y controlar el flujo
de ejecución en función de los resultados.

| Operador | Descripción                                                  |
| -------- | ------------------------------------------------------------ |
| `and`    | Devuelve `True` si **todas** las condiciones son verdaderas. |
| `or`     | Devuelve `True` si **al menos una** condición es verdadera.  |
| `not`    | Invierte el valor lógico de la condición.                    |

Los operadores lógicos se utilizan principalmente en estructuras de control,
como condicionales y bucles, para determinar el flujo del programa en función de
condiciones lógicas. Estas estructuras de control se explicarán en secciones
posteriores.

### 3.4. Variables

Al crear variables en Python, se deben seguir ciertas reglas:

- Los nombres no deben comenzar con números.
- No se permiten espacios en los nombres.
- No se deben utilizar los siguientes símbolos:
  `: ''' <> / , ? | \ ( ) ! @ ## $ % ^ & * ~ - +`.
- Es recomendable utilizar nombres de variables en minúsculas.

**Python es un lenguaje de tipificación dinámica**, por lo que no es necesario
declarar explícitamente el tipo de dato, ya que este se asigna automáticamente
según el valor. Por ejemplo:

```python
mis_perros = 2
mis_perros = ["Pixel", "One"]
```

Para conocer el tipo de una variable, se utiliza la función `type(variable)`.

### 3.5. Mostrar datos por pantalla

Para mostrar datos en pantalla, se utiliza la función `print()`, por ejemplo:

```python
print("Esto es una prueba")
```

Se pueden concatenar variables que contienen cadenas de texto o
métodos/funciones que devuelvan un valor utilizando el operador `+`, por
ejemplo:

```python
char_name = "Daniel"
char_age = 19

print("Yo me llamo " + char_name + " y tengo " + str(char_age) + " años.")
```

Este método puede ser ineficiente. A partir de la versión de Python 3, es
posible dar formato a la función `print()` utilizando una cadena de formato con
`f`, que permite incluir variables o expresiones dentro de llaves `{}`, por
ejemplo:

```python
char_name = "Daniel"
char_age = 19

print(f"Yo me llamo {char_name} y tengo {char_age} años")
```

Incluso podemos modificar la cantidad específica de decimales para un valor de
tipo `float` utilizando el formato `{valor_float:.precision}`. Por ejemplo, para
mostrar el número Pi con 5 decimales:

```python
import math

pi = math.pi
print(f"El número pi con 5 decimales es: {pi:.5f}")
```

### 3.6. Introducción de datos

Python permite recibir información del usuario mediante la función `input(...)`.
Esta función siempre devuelve el valor ingresado como una cadena de texto
(`string`). Por lo tanto, es necesario realizar una conversión de tipo
(**_casting_**) si se requiere un tipo de dato diferente. Por ejemplo:

```python
nombre = input("Introduce tu nombre: ")
edad = input("Introduce tu edad: ")

print("\n\t- DATOS DEL USUARIO - \n")
print(f"Nombre: {nombre}")
print(f"Edad: {edad}")
```

Para convertir un `input` a un número, es necesario hacer un _casting_, como en
el siguiente ejemplo, donde se convierte una entrada de tipo `string` a `float`:

```python
numero = float(input("Introduce un numero: "))
```

Este procedimiento es útil para manipular datos numéricos o realizar cálculos
después de recibir la entrada del usuario.

### 3.7. Cadenas de texto (Strings)

Un **string** es una secuencia de caracteres que puede contener letras, números,
símbolos o espacios. A cotinuación se muestra un ejemplo básico de string junto
con el uso del indexado:

```python
frase = "Hola buenas"

# Muestra el carácter 'H'
print("El primer carácter de mi string es " + frase[0])

# Muestra el carácter 'b'
print("El sexto carácter de mi string es " + frase[5])
```

En este caso, el índice de un string comienza en `0`, por lo que:

- `frase[0]` hace referencia al primer carácter del string, que es `"H"`.
- `frase[5]` hace referencia al sexto carácter del string, que es `"b"`. Se
  observa como el espacio en blanco cuenta como un carácter.

Python permite acceder a cualquier carácter de un string utilizando su posición,
o **índice**. El primer carácter tiene el índice `0`, el segundo carácter tiene
el índice `1`, y así sucesivamente. También se pueden usar índices negativos
para contar desde el final del string hacia el principio, por ejemplo,
`frase[-1]` devuelve el último carácter.

Los strings son **inmutables**, lo que significa que no es posible cambiar un
carácter específico en un string ya creado. Intentar modificar directamente un
elemento producirá un error. Por ejemplo:

```python
frase = "Hola buenas"

# Intentar cambiar el primer carácter
frase[0] = "h"  # Esto producirá un error
```

Este código genera un error de tipo `TypeError` porque no se puede modificar
directamente un carácter de un string existente. Para modificar un string, es
necesario crear uno nuevo combinando partes del string original. Por ejemplo,
para cambiar la primera letra de `"Hola buenas"` por una minúscula:

```python
frase = "Hola buenas"

# Crear un nuevo string con la primera letra modificada
nueva_frase = "h" + frase[1:]

# Imprime: "hola buenas"
print(nueva_frase)
```

En este ejemplo, se construye una nueva cadena concatenando `"h"` con el resto
del string original (`frase[1:]`), que devuelve el string desde el segundo
carácter en adelante.

#### 3.7.1. Métodos

Las variables de tipo string en Python disponen de varias funciones incorporadas
para manipular y analizar el contenido de la cadena:

| Función                                            | Definición                                                                                                     |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `str(variable_a_convertir_en_string)`              | Convierte una variable en una cadena de texto.                                                                 |
| `variable *= x`                                    | Duplica la cadena `variable` `x` veces, siendo `x` un número entero.                                           |
| `variable[índice:]`                                | Obtiene una subcadena desde el índice hasta el final de la cadena.                                             |
| `variable[::X]`                                    | Obtiene caracteres de la cadena con un paso de `X`, es decir, toma un carácter cada `X` caracteres.            |
| `variable[::-1]`                                   | Invierte la cadena.                                                                                            |
| `variable.lower()`                                 | Convierte toda la cadena a minúsculas.                                                                         |
| `variable.upper()`                                 | Convierte toda la cadena a mayúsculas.                                                                         |
| `variable.isupper()`                               | Devuelve True si toda la cadena está en mayúsculas, False en caso contrario.                                   |
| `variable.upper().isupper()`                       | Convierte la cadena a mayúsculas y devuelve True si toda la cadena está en mayúsculas.                         |
| `variable.split()`                                 | Divide la cadena en una lista de subcadenas basadas en espacios. Puede especificarse un delimitador diferente. |
| `len(variable)`                                    | Devuelve el número de caracteres en la cadena.                                                                 |
| `variable.index("a")` o `variable.index("buenas")` | Devuelve el primer índice donde se encuentra el parámetro especificado.                                        |
| `variable.replace("buenas", "me llamo Daniel")`    | Reemplaza una subcadena dentro de la cadena por otra subcadena.                                                |
| `variable.count('x')`                              | Cuenta el número de veces que aparece el carácter especificado.                                                |
| `variable.find('x')`                               | Devuelve la primera posición en la que se encuentra el carácter especificado.                                  |
| `variable.isalnum()`                               | Devuelve True si todos los caracteres son alfanuméricos.                                                       |
| `variable.isalpha()`                               | Devuelve True si todos los caracteres son alfabéticos.                                                         |
| `variable.islower()`                               | Devuelve True si todos los caracteres están en minúsculas.                                                     |
| `variable.isspace()`                               | Devuelve True si todos los caracteres son espacios en blanco.                                                  |
| `variable.istitle()`                               | Devuelve True si la primera letra de cada palabra está en mayúsculas.                                          |
| `variable.split('x')`                              | Divide la cadena en partes cuando encuentra el carácter `x`.                                                   |
| `variable.partition('x')`                          | Divide la cadena en dos partes en el primer encuentro del carácter `x`.                                        |
| `variable.strip()`                                 | Elimina los espacios al principio y al final de la cadena.                                                     |

### 3.8. Declaraciones condicionales

Las declaraciones condicionales en Python, como `if`, `elif` y `else`, permiten
ejecutar diferentes bloques de código según si se cumplen o no ciertas
condiciones. Esto es fundamental para controlar el flujo de un programa y tomar
decisiones en función de los datos o situaciones evaluadas.

El condicional básico en Python es la instrucción `if`, que ejecuta un bloque de
código solo si la condición especificada es verdadera.

```python
if condicion:
    # Código a ejecutar si la condición es verdadera
```

Si la condición es falsa, se puede usar una instrucción `else` para ejecutar un
bloque alternativo:

```python
if condicion:
    # Código a ejecutar si la condición es verdadera
else:
    # Código a ejecutar si la condición es falsa
```

Para manejar múltiples condiciones, se utiliza la instrucción `elif`, que
permite evaluar varias condiciones de forma secuencial:

```python
if primera_condicion:
    # Código a ejecutar si la primera condición es verdadera
elif segunda_condicion:
    # Código a ejecutar si la segunda condición es verdadera
else:
    # Código a ejecutar si ninguna de las condiciones anteriores es verdadera
```

##### Ejemplos

Veamos cómo se aplican estas estructuras en ejemplos prácticos. Primero, se
utiliza un condicional `if` para verificar si un número está presente en una
lista:

```python
letra = 'y'
palabra = "Laguna"

if letra in palabra:
    print(f"La palabra {palabra} contiene la letra {letra}")
else:
    print(f"La palabra {palabra} no contiene la letra {letra}")
```

En este caso, si `letra` se encuentra en el string `palabra`, el programa
imprimirá un mensaje indicando que la palabra contiene la letra. En caso
contrario, se ejecutará el bloque `else`.

### 3.9. Bucles

Los bucles en Python permiten ejecutar un bloque de código repetidamente,
facilitando la automatización de tareas repetitivas al recorrer secuencias de
elementos o al evaluar una condición.

#### 3.9.1. Bucle `for`

El bucle `for` es ideal para iterar sobre secuencias como listas o strings. Su
sintaxis básica es:

```python
for variable in iterable:
    # Código a ejecutar para cada elemento en el iterable
```

##### Ejemplos

1. **Recorrer un rango de números**  
   La función `range(n, m, s)` genera una secuencia de números desde `n` hasta
   `m - 1`, con un paso de `s`. Por ejemplo, para mostrar números desde 0 hasta
   10 en pasos de 2:

   ```python
   for numero in range(0, 11, 2):
       print(numero)
   ```

2. **Recorrer los caracteres de un string**  
   Se puede utilizar `range()` y `len()` para iterar sobre los índices de un
   string:

   ```python
   mi_string = "Hola caracola"
   for letra in range(len(mi_string)):
       print(mi_string[letra])
   ```

   Alternativamente, se puede iterar directamente sobre los caracteres del
   string:

   ```python
   mi_string = "Hola caracola"
   for letra in mi_string:
       print(letra)
   ```

3. **Recorrer dos secuencias simultáneamente con `zip()`**  
   `zip()` permite recorrer dos secuencias al mismo tiempo, emparejando sus
   elementos:

   ```python
   mi_lista1 = "Hola"
   mi_lista2 = "Yadi"

   for item in zip(mi_lista1, mi_lista2):
       print(item)
   ```

   En este ejemplo, solo se recorrerán los caracteres hasta el final del string
   más corto.

4. **Uso de `enumerate()` para obtener índices y valores**  
   `enumerate()` permite obtener el índice y el valor de cada elemento en una
   secuencia:

   ```python
   word = "abcde"

   for idx, letra in enumerate(word):
       print(f"Índice {idx}: {letra}")
   ```

#### 3.9.2. Bucle `while`

El bucle `while` continúa ejecutándose mientras una condición se mantenga
verdadera. Su sintaxis básica es:

```python
while condicion:
    # Código a ejecutar mientras la condición sea verdadera
```

##### Ejemplo

1. **Crear un contador**  
   Un bucle `while` puede usarse para incrementar un contador hasta que alcance
   un valor determinado:

   ```python
   contador = 0
   while contador < 5:
       print(contador)
       contador += 1
   ```

   En este caso, el bucle imprime los valores de `contador` mientras este sea
   menor que 5.

#### 3.9.3. Control de flujo en bucles: `break`, `continue`, y `pass`

La instrucción `break` termina el bucle inmediatamente, incluso si no ha
terminado de recorrer todos los elementos:

```python
mi_string = "Daniel"

for letra in mi_string:
    if letra == 'a':
        break
    print(letra)
```

En este ejemplo, el bucle se detendrá al encontrar la letra 'a' y no continuará
con el resto de las iteraciones.

Por otra parte, `continue` omite el resto del código en la iteración actual y
pasa a la siguiente:

```python
mi_string = "Daniel"

for letra in mi_string:
    if letra == 'a':
        continue
    print(letra)
```

Aquí, cuando el bucle encuentra la letra 'a', omite el `print()` y continúa con
la siguiente letra.

Finalmente, `pass` no hace nada, pero se utiliza como marcador de posición
cuando se necesita un bloque de código vacío:

```python
for letra in 'Python':
    if letra == 'h':
        pass  # No realiza ninguna acción
        print('Esta es la letra h')
    print('Letra actual:', letra)
```

En este caso, cuando el bucle encuentra la letra 'h', no realiza ninguna acción
específica gracias a `pass`, pero el bucle continúa normalmente.

### 3.10. Uso de `__name__` y la función `main`

En Python, la variable especial `__name__` se utiliza para determinar si un
archivo se está ejecutando directamente como un script o si está siendo
importado como un módulo en otro script. Comprender este comportamiento es útil
para estructurar el código de manera que ciertos bloques se ejecuten solo cuando
el archivo se ejecuta directamente, y no cuando se importa.

> Un script es un conjunto de instrucciones o comandos escritos en un lenguaje
> de programación que se ejecutan de manera secuencial. Los scripts se utilizan
> para automatizar tareas repetitivas, realizar operaciones complejas o
> interactuar con otros programas.

Cuando un archivo de Python se ejecuta directamente, Python asigna a la variable
`__name__` el valor `"__main__"`. Sin embargo, si el archivo es importado como
un módulo en otro script, `__name__` toma el nombre del archivo (sin la
extensión `.py`).

#### 3.10.1. Caso práctico

Por ejemplo, consideremos dos archivos Python, `one79.py` y `two79.py`, que se
importan mutuamente. Aquí está cómo se comporta `__name__` en cada caso:

**Archivo `one79.py`**

```python
# one79.py
import two79

print(f"Archivo 1 __name__ establecido a: {__name__}")

if __name__ == "__main__":
    print("Archivo 1 ejecutado directamente")
else:
    print("Archivo 1 ejecutado como importado a otro módulo")
```

**Archivo `two79.py`**

```python
# two79.py
import one79 as t

print(f"Archivo 2 __name__ establecido a: {__name__}")

if __name__ == "__main__":
    print("Archivo 2 ejecutado directamente")
else:
    print("Archivo 2 ejecutado como importado a otro módulo")
```

Si se ejecuta el archivo `one79.py`, el resultado será:

```
Archivo 1 __name__ establecido a: __main__
Archivo 2 __name__ establecido a: two79
Archivo 2 ejecutado como importado a otro módulo
```

En este caso, `one79.py` muestra que `__name__` es `"__main__"` porque se está
ejecutando directamente. `two79.py`, que se importa dentro de `one79.py`,
muestra que `__name__` es `"two79"`.

Es una buena práctica definir una función `main()` que contenga el código
principal a ejecutar. Esto hace que el código sea más organizado y facilita la
reutilización. Aquí se muestra cómo se puede definir y usar `main()`:

```python
# one79.py
import two79

def main():
    print("Código principal de one79.py")

if __name__ == "__main__":
    main()
```

En este ejemplo, el código dentro de la función `main()` solo se ejecutará si
`one79.py` es ejecutado directamente. Si `one79.py` es importado, solo se
ejecutará el código fuera de la función `main()`, que podría ser útil para la
inicialización de módulos o importaciones.

## 4. Estructuras de datos

En Python, las estructuras de datos son fundamentales para almacenar y manipular
datos de manera eficiente. A continuación, exploraremos algunas de las
estructuras de datos más comunes.

### 4.1. Listas

Las listas en Python son estructuras de datos que permiten almacenar secuencias
ordenadas y mutables de elementos. A diferencia de otros lenguajes, las listas
en Python pueden contener elementos de diferentes tipos. Además, su tamaño es
dinámico, lo que significa que puede cambiar durante la ejecución del programa.
La indexación comienza en 0, y los índices negativos permiten acceder a los
elementos desde el final de la lista.

Para definir una lista, basta con usar corchetes y separar los elementos por
comas. A continuación se muestra un ejemplo donde cada elemento es un string:

```python
lista_amigos = ["Jorge", "Fran", "Ricardo"]
```

También es posible inicializar una lista vacía:

```python
lista = []
```

El acceso a los elementos se realiza mediante el índice. Por ejemplo:

```python
lista_amigos = ["Jorge", "Fran", "Ricardo"]

# Accede al primer elemento
print(f"El primer amigo es {lista_amigos[0]}")

# Accede al último elemento
print(f"Mi amigo del pueblo es {lista_amigos[-1]}")

# Selecciona un rango de elementos
print(lista_amigos[0:2])

# Muestra la lista completa
print(lista_amigos)
```

#### 4.1.1. Métodos

| Función                  | Definición                                                                      |
| ------------------------ | ------------------------------------------------------------------------------- |
| `lista[indice] = x`      | Cambia el elemento en el índice especificado por `x`.                           |
| `lista.extend(x)`        | Agrega los elementos de `x` al final de la lista actual.                        |
| `lista.append(x)`        | Añade un elemento `x` al final de la lista.                                     |
| `lista.insert(indice,x)` | Inserta `x` en el índice especificado.                                          |
| `lista.remove(x)`        | Elimina la primera aparición de `x` en la lista.                                |
| `lista.clear()`          | Vacía la lista.                                                                 |
| `lista.pop()`            | Elimina el último elemento de la lista o el elemento en el índice especificado. |
| `lista.index(x)`         | Devuelve el índice de la primera aparición de `x`.                              |
| `lista.count(x)`         | Devuelve el número de veces que `x` aparece en la lista.                        |
| `lista.sort()`           | Ordena la lista en orden ascendente.                                            |
| `lista.reverse()`        | Invierte el orden de los elementos en la lista.                                 |
| `lista2 = lista1.copy()` | Crea una copia de `lista1` en `lista2`.                                         |
| `max(lista)`             | Devuelve el valor máximo de la lista.                                           |
| `min(lista)`             | Devuelve el valor mínimo de la lista.                                           |
| `del lista[x]`           | Elimina el elemento en el índice `x` de la lista.                               |

#### 4.1.2. Uso de bucles `for` dentro de listas

Los bucles `for` permiten iterar sobre los elementos de una lista de manera
sencilla. Además, Python permite utilizar **comprensión de listas** para crear
nuevas listas basadas en operaciones sobre una secuencia de elementos.

Ejemplos de bucles `for` en listas:

```python
# Crear una lista de caracteres de un string
mi_lista = [letra for letra in "Hola"]
print(mi_lista)

# Crear una lista de cuadrados de números
mi_lista = [numero ** 2 for numero in range(0, 20, 2)]
print(mi_lista)

# Convertir temperaturas de Celsius a Fahrenheit
celcius = [0, 10, 20, 34.5]
fahrenheit = [((9/5) * temp + 32) for temp in celcius]
print(fahrenheit)

# Crear una lista de números cuadrados solo si son pares
mi_lista = [numero ** 2 for numero in range(0, 15, 2) if numero % 2 == 0]
print(mi_lista)
```

#### 4.1.3. Listas anidadas y matrices

Las listas en Python pueden contener otras listas, lo que permite la
representación de matrices o tablas de datos. Este tipo de estructura es útil
para manejar información en varias dimensiones.

Ejemplo de una lista anidada que representa una matriz:

```python
number_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]

# Acceder al elemento en la tercera fila y tercera columna
print(number_grid[2][2])
```

En este caso, `number_grid[2][2]` devolverá el valor `9`, que es el elemento
ubicado en la tercera fila y tercera columna.

### 4.2. Tuplas

Las **tuplas** en Python son secuencias ordenadas e **inmutables**, lo que
significa que, a diferencia de las listas, sus elementos no pueden ser
modificados después de su creación. Las tuplas son útiles cuando se necesita
garantizar que los datos no cambien a lo largo del programa. Además, son más
rápidas de procesar que las listas.

Para definir una tupla, se utilizan paréntesis:

```python
# Definición de una tupla
coordenadas = (4, 5)

print(f"Coordenada completa {coordenadas}")
print(f"Primera coordenada {coordenadas[0]} y segunda coordenada {coordenadas[1]}")
```

También es posible combinar tuplas con otras estructuras de datos, como listas
de tuplas:

```python
lista_tuplas = [(1, 2), (3, 4), (5, 6)]
print(f"Mi lista de tuplas es {lista_tuplas}")
```

#### 4.2.1. Métodos

A pesar de ser inmutables, las tuplas tienen algunos métodos útiles:

| Función          | Descripción                                                    |
| ---------------- | -------------------------------------------------------------- |
| `tupla.count(x)` | Devuelve el número de veces que `x` aparece en la tupla.       |
| `tupla.index(x)` | Devuelve el índice de la primera aparición de `x` en la tupla. |

### 4.3. Sets

Los **sets** en Python son colecciones **desordenadas** de elementos únicos. A
diferencia de las listas y tuplas, los sets no permiten duplicados, lo que los
convierte en una herramienta útil para eliminar valores repetidos o para
realizar operaciones matemáticas como uniones e intersecciones.

Un set se puede definir usando llaves `{}` o con la función `set()`:

```python
# Inicializar un set vacío
mi_set = set()

# Añadir elementos
mi_set.add(1)
mi_set.add(1)  # No se añadirá, ya que el elemento es único

# Inicializar un set con elementos
mi_nuevo_set = {'a', 'b', 'c'}
```

#### 4.3.1. Métodos

Un set se puede definir usando llaves `{}` o con la función `set()`:

| Función                    | Definición                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------- |
| `s.add(x)`                 | Añade un elemento `x` al set.                                                          |
| `s.clear()`                | Elimina todos los elementos del set.                                                   |
| `sc = s.copy()`            | Crea una copia del set.                                                                |
| `s1.difference(s2)`        | Devuelve los elementos en `s1` que no están en `s2`.                                   |
| `s1.difference_update(s2)` | Elimina los elementos en `s1` que están en `s2`.                                       |
| `s.discard(elem)`          | Elimina el elemento `elem` del set sin causar error si `elem` no está presente.        |
| `s1.intersection(s2)`      | Devuelve los elementos comunes a `s1` y `s2`.                                          |
| `s1.issubset(s2)`          | Verifica si todos los elementos de `s1` están en `s2`.                                 |
| `s1.union(s2)`             | Devuelve la unión de `s1` y `s2`, combinando todos los elementos únicos de ambos sets. |

### 4.4. Diccionarios

Los **diccionarios** en Python son colecciones de datos que almacenan pares de
**clave-valor**. Las claves son únicas y se utilizan para acceder a los valores
correspondientes. Los diccionarios son mutables, por lo que se pueden modificar
después de su creación.

Un diccionario se define utilizando llaves `{}`, donde cada elemento es un par
de clave-valor:

```python
# Definición de un diccionario
conversion_meses = {
    "Ene": "Enero",
    "Feb": "Febrero",
    "Mar": "Marzo"
}

# Acceso a valores
print(conversion_meses["Ene"])
print(conversion_meses.get("Ene"))

# Manejo de claves no encontradas
clave = "Daniel"
print(conversion_meses.get(clave, f"La clave {clave} no está en el diccionario"))
```

#### 4.4.1. Métodos

Los diccionarios ofrecen varios métodos para interactuar con sus elementos:

| Función                | Definición                                                   |
| ---------------------- | ------------------------------------------------------------ |
| `diccionario.items()`  | Devuelve una vista de los pares clave-valor del diccionario. |
| `diccionario.keys()`   | Devuelve una vista de las claves del diccionario.            |
| `diccionario.values()` | Devuelve una vista de los valores del diccionario.           |

#### 4.4.2. Casos prácticos

##### **Diccionarios anidados**

Es posible crear diccionarios dentro de otros diccionarios para representar
estructuras más complejas:

```python
diccionario = {"k3": {'insideKey': 100}}

# Acceder al valor de 'insideKey'
print(diccionario["k3"]['insideKey'])
```

##### **Iteración sobre diccionarios**

Se puede iterar sobre claves, valores o pares clave-valor en un diccionario:

```python
d = {'k1': 1, 'k2': 2}

for llave in d.keys():
    print(llave)

for valor in d.values():
    print(valor)

for elemento in d.items():
    print(elemento)
```

##### **Listas de diccionarios**

Puedes combinar listas y diccionarios para crear estructuras más elaboradas,
como una lista de clientes y sus animales:

```python
clientes =

 [
    {"nombre": "Daniel", "animales": ["Pakito", "Pakon", "Pakonazo"]},
    {"nombre": "Clemencia", "animales": ["Rodolfo"]},
    {"nombre": "Carolina"}
]

for cliente in clientes:
    print(f"{cliente['nombre']} tiene: {cliente.get('animales', 'No tiene animales')}")
```

Estas estructuras de datos flexibles y eficientes permiten manipular datos de
diferentes formas en Python, ofreciendo soluciones adecuadas para una gran
variedad de problemas.

## 5. Métodos y funciones

En Python, los métodos y las funciones son herramientas esenciales para la
programación modular y la reutilización del código. A continuación, se exploran
en detalle los métodos y las funciones, sus diferencias y cómo usarlos.

### 5.1. Métodos

Los métodos son funciones que están asociadas a un objeto específico. Actúan
sobre el objeto y pueden modificar su estado o realizar alguna operación en él.
Los métodos están disponibles para distintos tipos de objetos, como cadenas de
texto (`str`), listas (`list`), diccionarios (`dict`), entre otros.

Cada tipo de objeto tiene un conjunto específico de métodos. Por ejemplo, los
métodos para objetos de tipo `str` (cadenas de texto) permiten realizar
operaciones como convertir a mayúsculas, dividir la cadena en palabras, o
reemplazar subcadenas.

Para información más detallada y actualizada sobre los métodos en Python, puedes
visitar la documentación oficial en
[https://docs.python.org/](https://docs.python.org/).

Ejemplos de métodos para strings:

```python
texto = "hola mundo"

# Convertir a mayúsculas
print(texto.upper())  # Output: "HOLA MUNDO"

# Dividir en palabras
print(texto.split())  # Output: ['hola', 'mundo']

# Reemplazar una subcadena
print(texto.replace("mundo", "Python"))  # Output: "hola Python"
```

#### 5.1.1. Obtener una lista de métodos disponibles

Para obtener una lista de todos los métodos disponibles para un tipo de objeto,
puedes usar la función `dir()`. Por ejemplo:

```python
# Muestra todos los métodos disponibles para objetos de tipo str
print(dir(str))
```

#### 5.1.2. Obtener ayuda sobre un método específico

Puedes obtener información detallada sobre un método específico utilizando la
función `help()`. Por ejemplo:

```python
# Muestra la documentación para el método upper()
help(str.upper)
```

Esta función te proporcionará una descripción del método, su uso y posibles
parámetros.

### 5.2. Definición de funciones

Las funciones son bloques de código reutilizables que realizan una tarea
específica y pueden ser llamadas desde cualquier lugar del programa. A
diferencia de los métodos, que están asociados a objetos, las funciones no están
vinculadas a ningún tipo de objeto en particular.

Para definir una función, se utiliza la palabra clave `def`, seguida del nombre
de la función y paréntesis con posibles parámetros. El bloque de código dentro
de la función se indenta.

A continuación, se muestra Aquí tienes un ejemplo de cómo definir y usar una
función en Python:

```python
def saludo(nombre):

    return f"Hola, {nombre}!"

print(saludo("Mundo"))
```

En este ejemplo, `saludo` es una función que toma un parámetro, `nombre`, y
devuelve una cadena de texto que es un saludo a ese nombre.

Las funciones pueden tomar cualquier número de parámetros, y estos parámetros
pueden tener valores predeterminados. Si un parámetro tiene un valor
predeterminado, puedes omitir ese parámetro cuando llamas a la función. Aquí
tienes un ejemplo:

```python
def saludo(nombre="Mundo"):

    return f"Hola, {nombre}!"

print(saludo())
print(saludo("Python"))
```

En este ejemplo, `nombre` tiene un valor predeterminado de `"Mundo"`. Si llamas
a `saludo()` sin ningún argumento, usará el valor predeterminado. Si
proporcionas un argumento, ese argumento reemplazará el valor predeterminado.

Las funciones son una excelente manera de organizar tu código y hacerlo más
legible y reutilizable. También pueden ayudarte a dividir problemas complejos en
partes más manejables.

Las funciones en Python pueden contener una variedad de estructuras de control,
como bucles y llamadas a otras funciones. Aquí te presento algunos ejemplos:

#### 5.2.1. Casos prácticos

##### Función para comprobar una lista

Esta función toma una lista de números como entrada y separa los números pares e
impares en dos conjuntos diferentes:

```python
def comprobar_lista(lista):

    # Inicializa dos conjuntos vacíos para almacenar números pares e impares
    lista_par_devolver = set()
    lista_impar_devolver = set()

    # Itera sobre cada elemento de la lista de entrada
    for indice in lista:

        # Comprueba si el número es par
        if indice % 2 == 0:

            # Si es par, lo añade al conjunto de números pares
            lista_par_devolver.add(indice)

        else:

            # Si es impar, lo añade al conjunto de números impares
            lista_impar_devolver.add(indice)

    # Imprime los números pares encontrados
    print(f"Lista de números pares de la lista principal: {lista_par_devolver}")

    # Imprime los números impares encontrados
    print(f"Lista de números impares de la lista principal: {lista_impar_devolver}")

comprobar_lista([1, 1, 1, 1, 1, 1, 23, 56, 87, 918, 23, 12, 3, 2, 4, 6, 5])
```

##### Función con tuplas

Este ejemplo muestra una función que determina el trabajador con más horas
trabajadas:

```python
horas_trabajadores = [("Daniel", 22), ("Kike", 20), ("Ricardo", 25)]

def mejor_trabajador(lista):

    # Inicializa variables para el máximo de horas y el mejor trabajador
    maximo = 0
    mejor = ""

    # Itera sobre cada trabajador y sus horas en la lista
    for empleado, horas in horas_trabajadores:

        # Compara las horas con el máximo actual
        if horas > maximo:

            # Actualiza el máximo y el mejor trabajador si se encuentra uno mejor
            maximo = horas
            mejor = empleado

    # Devuelve una tupla con el nombre del mejor trabajador y sus horas
    return (mejor, maximo)

mejor, maximo = mejor_trabajador(horas_trabajadores)

print(f"El mejor trabajador es {mejor} que ha trabajado un total de {maximo} horas")
```

##### Funciones que llaman a otras funciones

En este ejemplo, se muestra un juego simple donde las funciones llaman a otras
funciones. Se utiliza la función `shuffle()` de Python, que reordena una lista
de manera aleatoria:

```python
# El juego de la bolita

# Importamos la función shuffle para barajar la lista
from random import shuffle

# Definimos una lista llamada 'vasos' con tres elementos, representando los vasos del juego.
# El carácter 'O' representa la bolita.
vasos = [' ','O',' ']

# Función para barajar la lista de vasos
def shuffle_list(mi_lista):

    # Barajamos la lista
    shuffle(mi_lista)

    # Devolvemos la lista barajada
    return mi_lista

def inicio():

    # Mostramos un mensaje inicial con la posición de la bolita
    print("La bolita se encuentra en el vaso 2\n")
    print('vaso 1: ')
    print('vaso 2: O')
    print('vaso 3: ')
    print("\nMoviendo la bola por los diferentes vasos...\n")

def operar():

    # Pedimos al usuario que adivine en qué vaso está la bolita
    resultado = int(input("¿En qué vaso está la bolita?: "))

    # Comprobamos que el vaso introducido sea válido
    while resultado < 1 or resultado > 3:

        # Si no es válido, mostramos un mensaje de error y volvemos a pedir la entrada
        print("Este vaso no existe")
        resultado = int(input("¿En qué vaso está la bolita?: "))

    # Llamamos a la función comprobar para verificar la respuesta
    comprobar(resultado)

def comprobar(resultado):

    i = 1

    # Comprobamos si la bolita está en el vaso seleccionado
    if vasos[resultado-1] == 'O':

        # Si está, mostramos un mensaje de acierto
        print("\n¡Has acertado!\n")

        # Mostramos la posición de la bolita en cada vaso
        for vaso in vasos:

            print(f"vaso {i}: {vaso}")
            i += 1
    else:

        # Si no está, mostramos un mensaje de fallo
        print("\nHas fallado :(\n")

        # Mostramos la posición de la bolita en cada vaso
        for vaso in vasos:

            print(f"vaso {i}: {vaso}")
            i += 1

# Llamamos a la función inicio para mostrar el mensaje inicial
inicio()

# Barajamos la lista de vasos
shuffle_list(vasos)

# Llamamos a la función operar para jugar
operar()
```

Estos ejemplos muestran cómo las funciones en Python pueden contener lógica
compleja y cómo pueden interactuar entre sí para realizar tareas más grandes.

### 5.3. Argumentos Arbitrarios, \*Args y \*\*Kwargs

En Python, los términos **`*args`** y **`**kwargs`\*\* se utilizan en la
definición de funciones para permitir que estas acepten un número arbitrario de
argumentos.

En el siguiente ejemplo, `a` y `b` son argumentos posicionales. La función
`mifuncion` toma estos dos argumentos, los suma y luego multiplica el resultado
por 0.05:

```python
def mifuncion(a, b):

    return sum((a, b)) * 0.05

mifuncion(40,60)
```

Sin embargo, si quisiéramos que esta función pudiera manejar más de dos números,
tendríamos que modificar la definición de la función para incluir más
parámetros. Una opción sería asignar un valor predeterminado a estos parámetros
adicionales:

```python
def mifuncion(a, b, c = 0):

    return sum((a, b, c)) * 0.05
```

#### 5.3.1. Funciones con \*Args

Aquí es donde **`*args`** resulta útil. Nos permite configurar la función para
aceptar un número arbitrario de argumentos:

```python
def mifuncion(*args):

    return sum(args) * 0.05
```

En este caso, **`*args`** permite tratar la entrada como una tupla de
parámetros. Ahora podemos pasar tantos argumentos como queramos. Por defecto,
Python toma todos los parámetros que se pasan y los configura como una tupla.

#### 5.3.2. Funciones con \*\*Kwargs

De manera similar, Python ofrece una forma de manejar un número arbitrario de
argumentos de palabras clave. En lugar de crear una tupla, crea un diccionario.
Para ello, usamos **`**kwargs`\*\*:

```python
def mifuncion(**kwargs):

    if 'fruta' in kwargs:

        print(f"Mi fruta favorita es la {kwargs['fruta']}")

    else:

        print("No se encontró la fruta")

    if 'verduras' in kwargs:

        print(f"Mi verdura favorita es la {kwargs['verduras']}")

    else:

        print("No se encontró la verdura")

mifuncion(fruta = 'manzana', verduras = 'zanahoria')
```

#### 5.3.3. Combinando \*Args y \*\*Kwargs

También podemos combinar **`*args`** y **`**kwargs`\*\* en la misma función:

```python
def mifuncion(*args, **kwargs):

    print(f"Tengo {args[0]} coneja llamada {kwargs['animal']}")

mifuncion(1,2,3,4,fruta = "manzana",verdura = "zanahoria",animal = "Misifu")
```

En este caso, `args` es una tupla de los argumentos posicionales y `kwargs` es
un diccionario de los argumentos de palabras clave. Esto nos da una gran
flexibilidad a la hora de definir funciones en Python.

### 5.4. Funciones anónimas (Lambdas), Map y Filter

Las **expresiones Lambda**, junto con las funciones **`map()`** y
**`filter()`**, son herramientas poderosas en Python que permiten un
procesamiento de datos avanzado.

Las **expresiones Lambda** son una forma rápida de crear funciones anónimas, es
decir, funciones que se utilizan una sola vez.

```python
lambda num: pow(num,2)
```

Esta expresión lambda toma un número, lo eleva al cuadrado y devuelve el
resultado.

La función **`map()`** aplica una función a cada elemento de una lista,
devolviendo una nueva lista con los resultados.

```python
mis_nums = [1,2,3,4,5]
list(map(lambda num: pow(num,2),mis_nums))
```

En este ejemplo, la función `map()` aplica la expresión lambda a cada elemento
de `mis_nums`, devolviendo una nueva lista con los cuadrados de los números
originales.

La función **`filter()`** filtra los elementos de una lista basándose en una
función de filtrado, devolviendo una nueva lista con los elementos que cumplen
la condición de filtrado.

```python
mis_nums = [1,2,3,4,5]
list(filter(lambda num: num % 2 == 0,mis_nums))
```

En este ejemplo, la función `filter()` aplica la expresión lambda a cada
elemento de `mis_nums`, devolviendo una nueva lista con solo los números pares.

Las expresiones lambda se utilizan comúnmente junto con las funciones `map()` y
`filter()`, permitiendo un procesamiento de datos más conciso y eficiente.

```python
people = ['Dr. Christopher Brooks', 'Dr. Kevyn Collins-Thompson',
            'Dr. VG Vinod Vydiswaran', 'Dr. Daniel Romero']

list(map(lambda person: person.split()[0] + ' ' + person.split()[-1], people))
```

En este ejemplo, la función `map()` aplica la expresión lambda a cada elemento
de `people`, devolviendo una nueva lista con solo el título y el apellido de
cada persona.

Es importante recordar que las expresiones lambda pueden tomar múltiples
argumentos, lo que aumenta su flexibilidad y utilidad. Sin embargo, debido a su
naturaleza anónima y de un solo uso, las expresiones lambda son más adecuadas
para operaciones simples y concisas. Para operaciones más complejas, es
recomendable definir una función completa.

### 5.5. Decoradores

Los decoradores en Python son una herramienta poderosa que permite "decorar" una
función, es decir, modificar su comportamiento sin alterar su código fuente.
Esto es útil cuando queremos añadir funcionalidades a una función existente sin
modificar su definición.

Los decoradores tienen muchas aplicaciones. Por ejemplo, se utilizan en el
desarrollo web con frameworks como Flask para añadir comportamientos a las
funciones de ruta, como requerir que un usuario esté autenticado para acceder a
ciertas páginas. También se utilizan para crear _loggers_, que registran cuándo
se llaman a ciertas funciones y con qué argumentos, lo cual es útil para depurar
y entender el flujo de ejecución de un programa. En resumen, los decoradores
ofrecen una forma elegante y potente de modificar el comportamiento de las
funciones en Python.

En Python, las funciones son objetos de primera clase. Esto significa que pueden
ser asignadas a variables, almacenadas en estructuras de datos, pasadas como
argumentos a otras funciones e incluso retornadas como valores de otras
funciones. Aquí tienes un ejemplo:

```python
def funcion_saludo():

    return "Hola"

copia = funcion_saludo
del funcion_saludo

print(copia())  # Imprime: Hola
```

En este ejemplo, hemos asignado la función `funcion_saludo` a la variable
`copia`, y luego hemos eliminado `funcion_saludo`. A pesar de esto, aún podemos
llamar a la función original a través de `copia`.

Un decorador es una función que toma otra función y extiende su comportamiento
sin modificar explícitamente su código fuente. Aquí tienes un ejemplo de cómo se
define y se usa un decorador:

```python
def nuevo_decorador(funcion_original):

    def funcion_nueva():

        print("Antes de la funcion original")
        funcion_original()
        print("Despues de la funcion original")

    return funcion_nueva

@nuevo_decorador
def funcion_necesita_decorador():

    print("Necesita un nuevo decorador")

funcion_necesita_decorador()
```

En este ejemplo, `nuevo_decorador` es un decorador que añade dos líneas de
impresión antes y después de la ejecución de la función original. La sintaxis
`@nuevo_decorador` antes de la definición de `funcion_necesita_decorador` es lo
que aplica el decorador a la función.

### 5.6. Generadores

Los generadores en Python son una forma eficiente de crear iteradores. A
diferencia de las funciones normales, los generadores utilizan la palabra clave
`yield` en lugar de `return`. Esto permite que los generadores produzcan valores
de uno en uno, y solo cuando se necesitan, en lugar de calcular todos los
valores a la vez y almacenarlos en memoria.

Una función generadora es una función que utiliza la palabra clave `yield`.
Cuando se llama a una función generadora, en lugar de ejecutar todo el cuerpo de
la función y devolver un resultado, devuelve un objeto generador. Este objeto
puede ser iterado para obtener los valores generados por `yield`. Aquí tienes un
ejemplo de una función generadora que genera los cubos de los números hasta `n`:

```python
def funcion_cubo_generador(n):

    for x in range(n):

        yield pow(x,3)

print(list(funcion_cubo_generador(10)))  # Imprime: [0, 1, 8, 27, 64, 125, 216, 343, 512, 729]
```

Los generadores son especialmente útiles cuando trabajamos con grandes
cantidades de datos que no caben en memoria. En lugar de generar todos los datos
a la vez, los generadores los producen de uno en uno, solo cuando se necesitan.
Esto puede mejorar significativamente el rendimiento de nuestro programa.

La función `iter()` en Python convierte un objeto iterable en un iterador. Esto
significa que podemos utilizar la función `next()` en el objeto para acceder a
sus elementos uno a uno. Aquí tienes un ejemplo:

```python
s = "hello"
s_iterador = iter(s)
print(next(s_iterador))  # Imprime: h
```

En este ejemplo, hemos convertido la cadena `s` en un iterador utilizando la
función `iter()`. Luego, hemos utilizado la función `next()` para obtener el
primer elemento del iterador.

### 5.7. Cronometrar el tiempo de ejecución de una función

Para evaluar la eficiencia de nuestro código, podemos medir el tiempo que una
función tarda en ejecutar una acción específica. Por ejemplo:

```python
import time

def func_uno(n):

    return [str(num) for num in range(n)]

def func_dos(n):

    return list(map(str, range(n)))

# Paso 1: Registrar el tiempo de inicio
start_time = time.time()

# Paso 2: Ejecutar el código que queremos cronometrar
result = func_uno(1000000)

# Paso 3: Calcular el tiempo total de ejecución
end_time = time.time() - start_time
print(end_time)
```

En el código anterior, ambas funciones dan un resultado muy similar, por lo que
es difícil ver una diferencia real. Sin embargo, podemos importar la biblioteca
_timeit_, que permite realizar mediciones más precisas con un número de
repeticiones y parámetros que podemos asignar. Por ejemplo:

```python
import timeit

# Preparación para la primera función
setup = '''
def func_uno(n):
    return [str(num) for num in range(n)]
'''

# Declaración
stmt = 'func_uno(100)'

# Ejecución del cronometraje
print(timeit.timeit(stmt, setup, number=100000))

# Hacemos lo mismo para la segunda función
setup2 = '''
def func_dos(n):
    return list(map(str, range(n)))
'''

stmt2 = 'func_dos(100)'

print(timeit.timeit(stmt2, setup2, number=100000))
```

Es importante mencionar que Jupyter permite utilizar **funciones mágicas** (las
funciones mágicas de Jupyter se activan con dos signos de porcentaje al comienzo
del bloque de código), una de ellas es la función _timeit_:

```python
%%timeit
func_uno(100)
```

### 5.8. Declaraciones anidadas y alcance del código (Scope)

En Python, es crucial entender cómo se manejan las variables que creamos. Estas
variables se almacenan en lo que se conoce como un "alcance" o "scope", que
determina la visibilidad de la variable a otras partes del código.

Por ejemplo:

```python
x = 25

def printer():

    x = 50
    return x

print(x)  # Devuelve 25
print(printer())  # Devuelve 50
```

En este ejemplo, la reasignación de `x` dentro de la función `printer()` no
afecta a la asignación global de `x`. Esto se debe a la regla de alcance (scope)
en Python, que sigue la regla LEGB:

- **L, Local** — Nombres asignados de alguna manera dentro de una función (`def`
  o `lambda`) y que no se declaran globales en esa función.
- **E, Enclosing function locals** — Nombres en el ámbito local de cualquier y
  todas las funciones de encierro (`def` o `lambda`), de interior a exterior.
- **G, Global (module)** — Nombres asignados en el nivel superior de un archivo
  de módulo, o declarados globales en un `def` dentro del archivo.
- **B, Built-in (Python)** — Nombres preasignados en el módulo de nombres
  incorporado: `open`, `range`, `SyntaxError`, etc.

Este es el orden en el que Python buscará las variables. Aquí hay un ejemplo de
cómo funciona:

```python
# VARIABLE GLOBAL
nombre = "Esto es un string global"

def prueba():

    # VARIABLE DE ENCIERRO LOCAL
    nombre = "Daniel"

    def hola():

        # VARIABLE LOCAL
        nombre = "Carlitos"
        print(f"Hola {nombre}")

    hola()

prueba()
```

En este ejemplo, la función `hola()` mostrará primero la variable local
"Carlitos". Si comentamos la asignación local, cogerá la variable de encierro
local "Daniel". Y si también comentamos esa asignación, cogerá la variable
global "Esto es un string global".

Ahora, veamos qué sucede cuando reasignamos una variable global dentro de una
función. Si hacemos una reasignación dentro de la función, por el alcance
(scope), el valor de reasignación solo se mantiene dentro de la función. Una vez
que salimos de ella, el valor de la variable vuelve a ser el valor que se le
asignó al principio. Para cambiar esto, podemos usar la palabra clave `global`,
como en el siguiente ejemplo:

```python
x = 50

def prueba():

    global x
    print(f"Valor de x antes {x}")
    x = 200
    print(f"Valor de x despues {x}")

prueba()
print(f"Valor de x fuera {x}")
```

Sin embargo, se recomienda evitar el uso de la palabra clave `global` a menos
que sea absolutamente necesario. Es más seguro devolver un objeto y luego
asignarlo a la variable. De esta manera, evitamos sobrescribir la variable
global dentro de una función sin siquiera saberlo.

## 6. Programación Orientada a Objetos

La **Programación Orientada a Objetos (POO)** es un paradigma que organiza el
código en torno a **objetos** en lugar de funciones y lógica. Estos objetos
combinan **datos** (atributos) y **funciones** (métodos) que actúan sobre los
datos. Este enfoque permite la reutilización, modularidad y escalabilidad del
código.

La **POO** en Python es una herramienta poderosa que facilita la creación de
código limpio, estructurado y modular. Al usar clases, herencia y polimorfismo,
puedes desarrollar programas flexibles y fáciles de mantener.

### 6.1. Clases y objetos

Una **clase** es un molde o plantilla para crear objetos, que son instancias de
la clase. Los objetos tienen **atributos** (características) y **métodos**
(comportamientos). A continuación, se muestra un ejemplo básico de una clase y
cómo se crea un objeto:

```python
class NombreDeClase():

    def __init__(self, parametro1, parametro2):
        self.parametro1 = parametro1
        self.parametro2 = parametro2

    def algun_metodo(self):
        print("Este es un método dentro de la clase")
```

Cuando se define una función dentro de una clase, se le llama **método**. El
método especial `__init__` es un **constructor** que se ejecuta automáticamente
al crear una nueva instancia de la clase. El primer argumento de cualquier
método en una clase es `self`, que se refiere a la instancia del objeto.

##### Ejemplo

```python
class Coche():

    def __init__(self, marca, modelo, mejorado, acceso_coche):
        self.marca = marca
        self.modelo = modelo
        self.mejorado = mejorado
        self.acceso_coche = acceso_coche

# Crear una instancia de la clase Coche
mi_coche = Coche("Toyota", "Corolla", True, ["Juan", "Maria"])

print(f"Mi coche es un {mi_coche.marca} {mi_coche.modelo}")
```

En este ejemplo, se define la clase `Coche` con atributos y métodos.
Posteriormente, se crea una instancia de la clase `Coche`, `mi_coche`, que tiene
sus propios atributos y comportamientos.

### 6.2. Métodos y atributos

Los **atributos** son características del objeto, y los **métodos** son acciones
que puede realizar. Algunos atributos son comunes a todas las instancias,
mientras que otros son específicos para cada objeto.

##### Ejemplo

```python
class Perro():

    # Atributo de clase (común para todas las instancias)
    especie = "mamífero"

    def __init__(self, raza, nombre, edad):
        # Atributos de instancia
        self.raza = raza
        self.nombre = nombre
        self.edad = edad

    # Método de la clase
    def sonido(self):
        return "Woof!"

    # Método para mostrar información del objeto
    def informacion(self):
        print(f"Nombre: {self.nombre}, Raza: {self.raza}, Edad: {self.edad}, Especie: {self.especie}")

if __name__ == '__main__':

    mi_perro = Perro("Labrador", "Fido", 3)
    mi_perro.informacion()
```

En este ejemplo, `especie` es un atributo de clase compartido por todas las
instancias de `Perro`, mientras que `raza`, `nombre` y `edad` son atributos
únicos para cada instancia.

### 6.3. Herencia y polimorfismo

#### 6.3.1. Herencia

La **herencia** permite crear nuevas clases a partir de clases ya existentes. La
nueva clase (subclase) hereda los atributos y métodos de la clase padre, pero
también puede tener sus propios atributos y métodos o sobreescribir los
heredados.

##### Ejemplo

```python
class Animal():

    def __init__(self, nombre):
        self.nombre = nombre

    def quien_soy(self):
        print("Soy un animal")

    def comer(self):
        print("Estoy comiendo")

# La clase Perro hereda de Animal
class Perro(Animal):

    def quien_soy(self):
        print(f"Soy un perro llamado {self.nombre}")

mi_perro = Perro("Fido")
mi_perro.quien_soy()  # Imprime: Soy un perro llamado Fido
mi_perro.comer()  # Imprime: Estoy comiendo
```

En este caso, `Perro` hereda de `Animal`, por lo que puede usar el método
`comer`. Además, la subclase `Perro` sobrescribe el método `quien_soy` de la
clase `Animal`.

#### 6.3.2. Polimorfismo

El **polimorfismo** permite usar el mismo nombre de método en diferentes clases.
Aunque el método tenga el mismo nombre, cada clase puede implementarlo de manera
diferente.

##### Ejemplo

```python
class Perro():

    def __init__(self, nombre):
        self.nombre = nombre

    def sonido(self):
        print(f"El perro {self.nombre} ladra")

class Gato():

    def __init__(self, nombre):
        self.nombre = nombre

    def sonido(self):
        print(f"El gato {self.nombre} maulla")

mi_perro = Perro("Fido")
mi_gato = Gato("Miau")

# Llamada al mismo método con diferentes clases
# Imprime: El perro Fido ladra
mi_perro.sonido()
# Imprime: El gato Miau maulla
mi_gato.sonido()
```

En este ejemplo, tanto la clase `Perro` como la clase `Gato` tienen el método
`sonido`, pero el comportamiento es diferente según el tipo de objeto que lo
invoque.

### 6.4. Clases Abstractas

Una **clase abstracta** es aquella que no se espera que se instancie
directamente. Solo sirve como base para otras clases que implementen sus
métodos.

##### Ejemplo

```python
class Animal():

    def __init__(self, nombre):
        self.nombre = nombre

    def sonido(self):
        # Definir un método abstracto
        raise NotImplementedError("Subclase debe implementar este método")

class Perro(Animal):

    def sonido(self):
        return f"{self.nombre} hace woof!"

mi_perro = Perro("Fido")

# Imprime: Fido hace woof!
print(mi_perro.sonido())
```

En este caso, `Animal` es una clase base abstracta, y la clase `Perro` debe
implementar el método `sonido`. Si no se implementa el método en la subclase, se
genera un error.

## 7. Módulos y paquetes

### 7.1. Importación de módulos

En Python, los **módulos** son archivos que contienen definiciones y
declaraciones de Python, mientras que los **paquetes** son colecciones de
módulos. Un gestor de paquetes muy utilizado es **PIP**, que permite instalar y
administrar bibliotecas externas.

PIP se utiliza junto con **PyPi** (Python Package Index), un repositorio que
contiene numerosos paquetes de terceros. Para instalar un paquete, puedes
ejecutar el comando `pip install` en tu terminal. A continuación, te mostramos
cómo instalar y utilizar la biblioteca `colorama` para imprimir texto en color:

```bash
# Comando para instalar colorama usando PIP
pip install colorama
```

```python
from colorama import init, Fore

init()

# Texto en rojo
print(Fore.RED + "Texto de prueba")
```

### 7.2. Uso de paquetes y librerías externas

Un **módulo** es simplemente un archivo `.py` que contiene funciones, variables
y clases. Un **paquete** es una colección de módulos organizados en una carpeta.
El paquete debe contener un archivo `__init__.py`, el cual puede estar vacío,
pero es necesario para que Python trate el directorio como un paquete.

Ejemplo de cómo estructurar un proyecto con módulos y submódulos:

```python
# main.py
from paquete78 import some_main_script as p
from paquete78.Subpaquetes import mysubscript as s

p.main_report()
s.sub_report()
```

```python
# paquete78/some_main_script.py
def main_report():
    print("Hola, soy una función dentro de mi script principal.")
```

```python
# paquete78/Subpaquetes/mysubscript.py
def sub_report():
    print("Hola, soy una función dentro de mi subscript.")
```

### 7.3. Módulos avanzados de Python

#### 7.3.1. Módulos de colección

El módulo `collections` proporciona tipos de datos especializados como
`Counter`, `defaultdict` y `namedtuple`, que son alternativas más eficientes a
los contenedores generales de Python (`dict`, `list`, `set`, y `tuple`).

##### 7.3.1.1. Counter

`Counter` es una subclase de diccionario para contar elementos de manera rápida.
Almacena los elementos como claves y su recuento como valores.

```python
from collections import Counter

lista = [1, 1, 1, 2, 2, 3, 'a', 'adios']
cuenta = Counter(lista)

print(cuenta.most_common())  # Devuelve los elementos más comunes
```

##### 7.3.1.2. defaultdict

`defaultdict` es una subclase de `dict` que devuelve un valor predeterminado si
la clave no existe, evitando errores.

```python
from collections import defaultdict

d = defaultdict(lambda: 0)
print(d["inexistente"])  # Imprime: 0
```

##### 7.3.1.3. namedtuple

`namedtuple` es una subclase de tupla que permite acceder a sus elementos por
nombre en lugar de por índice.

```python
from collections import namedtuple

Conejo = namedtuple("Conejo", ["Edad", "Color", "Nombre"])
misifu = Conejo(Edad=2, Color="Blanco", Nombre="Misifu")

print(misifu.Edad)  # Imprime: 2
```

### 7.4. Módulo de fecha y hora

El módulo `datetime` permite trabajar con fechas y horas en Python. Puedes crear
objetos de fecha, realizar cálculos y extraer información como el año, mes o
día.

```python
import datetime
from datetime import date

# Crear un objeto de tiempo
mi_tiempo = datetime.time(2, 20)
print(mi_tiempo.minute)  # Imprime: 20
print(mi_tiempo)  # Imprime: 02:20:00

# Obtener la fecha actual
hoy = datetime.date.today()
print(hoy)

# Extraer día, mes y año
print(f"Día: {hoy.day}, Mes: {hoy.month}, Año: {hoy.year}")

# Operaciones con fechas
fecha1 = date(2021, 11, 3)
fecha2 = date(2020, 11, 2)
print(fecha1 - fecha2)  # Imprime: 366 days, 0:00:00
```

### 7.5. Módulo math y random

#### 7.5.1. Módulo math

El módulo `math` proporciona funciones matemáticas comunes, como el valor de pi,
logaritmos y funciones trigonométricas.

```python
import math

# Valor de pi y e
print(math.pi)  # Imprime: 3.141592653589793
print(math.e)   # Imprime: 2.718281828459045

# Logaritmo en base 2 de 100
print(math.log(100, 2))  # Imprime: 6.643856189774724

# Funciones trigonométricas
print(math.sin(math.radians(90)))  # Imprime: 1.0
print(math.degrees(math.pi/2))  # Imprime: 90.0
```

#### 7.5.2. Módulo random

El módulo `random` genera números pseudoaleatorios y ofrece varias funciones
para elegir elementos aleatoriamente o barajar listas.

```python
import random

# Número aleatorio entre 0 y 100
print(random.randint(0, 100))

# Semilla para números aleatorios reproducibles
random.seed(101)

# Lista de números del 0 al 9
lista = list(range(10))
print(lista)

# Elegir un número aleatorio de la lista
print(random.choice(lista))

# Elegir varios números aleatorios (pueden repetirse)
print(random.choices(lista, k=5))

# Elegir varios números aleatorios sin repetición
print(random.sample(lista, k=4))

# Barajar la lista de forma aleatoria
random.shuffle(lista)
print(lista)
```

Con estos módulos y paquetes, puedes gestionar y realizar cálculos complejos,
trabajar con fechas y horas, y generar números aleatorios de manera eficiente.

## 8. Manejo de errores y excepciones

### 8.1. Validación de datos

Cuando se crean funciones que toman valores de entrada del usuario, es
importante verificar esas entradas para asegurarse de que son correctas. Esto se
conoce como validación de datos.

La función `input()` en Python puede ser un poco complicada porque espera la
interacción del usuario. Si se ejecuta accidentalmente dos veces, el programa
puede quedarse esperando una respuesta que no llega. En ese caso, en Jupyter
tendrías que reiniciar el kernel, teniendo en cuenta que todas las variables
anteriores se borrarán y tendrías que ejecutarlas de nuevo.

Una forma cómoda de validar datos es utilizar bucles `while` para pedir al
usuario que introduzca un valor repetidamente cuando este no es válido. Aquí
tienes un ejemplo:

```python
def limite(eleccion):

    return int(eleccion) >= 1 and int(eleccion) <= 10

def eleccion_usuario():

    eleccion = input("Numero de 1-10: ")

    while not eleccion.isdigit() or not limite(eleccion):

        eleccion = input("Numero de 1-10: ")

        if not eleccion.isdigit():

            print("El valor introducido no es un numero")

        if eleccion.isdigit() and not limite(eleccion):

            print("El numero introducido supero el limite")

    return int(eleccion)

eleccion_usuario()
```

En este ejemplo, la función `eleccion_usuario()` pide al usuario que introduzca
un número entre 1 y 10. Si el valor introducido no es un número o si no está en
el rango correcto, la función le pide al usuario que introduzca un nuevo valor.

Si quieres limpiar la consola cuando el usuario introduce valores incorrectos,
puedes importar y usar la biblioteca `IPython.display` y usar la función
`clear_output()`:

```python
from IPython.display import clear_output
```

Esta función borra la salida de la celda actual en un cuaderno Jupyter, lo que
puede ser útil para mantener la interfaz de usuario limpia. Sin embargo, ten en
cuenta que `clear_output()` solo funciona en cuadernos Jupyter y no en otros
entornos de Python.

### 8.2. Manejo de excepciones

El manejo de errores es una estrategia que nos permite planificar y gestionar
posibles errores que puedan surgir en nuestro código. Por ejemplo, si un usuario
intenta escribir en un archivo que se ha abierto en modo de solo lectura y no
hay ninguna declaración de error en el código, el programa entero se detendrá.
Para evitar esto, utilizamos el manejo de excepciones, que nos permite continuar
con el programa, notificar el error y seguir con el código.

Existen tres palabras clave para el manejo de errores en Python:

- `try`: Este es el bloque de código que se intentará ejecutar (puede llevar a
  un error).
- `except`: Bloque de código que se ejecutará en caso de que haya un error en el
  bloque de prueba (`try`).
- `finally`: Un bloque final de código que se ejecutará independientemente de si
  hubo un error o no.

Aquí tienes un ejemplo de cómo se utilizan estas palabras clave:

```python
try:

    f.open("fichero",'w')
    f.write("Linea de prueba")

except TypeError:

    print("Hubo un problema con el tipo")

except OSError:

    print("Hubo un error de OSError")

except:

    print("Hubo un fallo en otro tipo de excepciones")

finally:

    print("De todos modos seguí ejecutando el código")
```

En este otro ejemplo, pediremos constantemente un dato al usuario hasta que
introduzca un valor adecuado:

```python
def introducir_entero():

    while True:

        try:

            valor = int(input("Introduce un número entero: "))

        except:

            print("El valor introducido no es un número")

        else:

            print(f"El valor {valor} es un valor correcto")
            break

introducir_entero()
```

Python tiene más excepciones implementadas que puedes consultar en la
documentación, en el apartado "Library → Exceptions".

### 8.3. Depurador de Python

El depurador o **debugger** se emplea para identificar y corregir errores en el
código. En lugar de utilizar `print()` para ver qué sucede a cada rato, podemos
usar el depurador de Python, _pdb_. Por ejemplo:

```python
import pdb

x = [1,2,3]
z = 2
y = 1

resultado1 = z + y

# Al añadir este depurador, podemos introducir las variables que se hayan declarado
# con la intención de ver el tipo incluso podemos realizar operaciones en ella,
# para ver si el resultado es el esperado o no.
# Una vez que hemos visto posibles casos y los fallos, pulsamos "q" para salir
# del depurador

pdb.set_trace()

resultado2 = y + x # ERROR
```

### 8.4. Pruebas unitarias con Pylint

Las pruebas unitarias son esenciales a medida que expandimos nuestros proyectos
con varios archivos o comenzamos a trabajar en equipo. Al realizar cualquier
cambio o actualización en el código, podemos ejecutar archivos de prueba para
asegurarnos de que el código anterior aún se ejecuta de la manera esperada.

Existen diferentes herramientas para probar el código, pero nos centraremos en
dos de ellas:

- Pylint: Esta es una biblioteca que analiza el código e informa de posibles
  problemas.
- Unittest: Esta biblioteca incorporada permite probar tus propios programas y
  comprobar que estás obteniendo los resultados deseados.

Para usar Pylint, ejecuta el siguiente código en la terminal:

```bash
pylint nombre_fichero.py -r y
```

### 8.5. Pruebas con Unittest

Con `unittest`, puedes implementar un script en Python que analice los
resultados devueltos por tu código y compruebe si son los esperados. Aquí tienes
un ejemplo con dos archivos, `cap85a.py` y `cap85b.py`.

`cap85a.py`:

```python
def prueba(texto):

    return texto.capitalize()
```

`cap85b.py`:

```python
import cap85a
import unittest

class Test(unittest.TestCase):

    def test_1(self):

        texto = 'python'
        resultado = cap85a.prueba(texto)
        self.assertEqual(resultado,'Python')

if __name__ == '__main__':

    unittest.main()
```

En este ejemplo, `unittest` se utiliza para comprobar que la función `prueba`
del archivo `cap85a.py` devuelve el resultado esperado. Si el resultado es el
esperado, la prueba pasará. Si no, la prueba fallará y se mostrará un mensaje de
error.

## 9. Trabajo con archivos y directorios

### 9.1. Lectura y escritura de archivos

Podemos abrir un fichero usando la función `open()`:

```python
file = open(dirección_del_fichero)
```

Python permite asignar diferentes permisos (escritura/lectura/ambas...) al
fichero, algunos de estos permisos son:

| Permiso | Definición                                                                   |
| ------- | ---------------------------------------------------------------------------- |
| r       | Solo lectura.                                                                |
| w       | Solo escritura, reescribirá los archivos existentes o creará uno nuevo.      |
| a       | Para añadir información al final del archivo.                                |
| r+      | Lectura y escritura.                                                         |
| w+      | Escritura y lectura, reescribirá los archivos existentes o creará uno nuevo. |
| wb      | Modo archivo, escritura y binario.                                           |

Para poder leer un fichero podemos utilizar algunas funciones como:

| Función       | Definición                                                        |
| ------------- | ----------------------------------------------------------------- |
| `readable()`  | Devuelve un booleano para saber si se puede leer o no el fichero. |
| `read()`      | Muestra toda la información del fichero.                          |
| `readline()`  | Lee la primera línea del fichero.                                 |
| `readlines()` | Lee todas las líneas del fichero y las inserta en una lista.      |

Por ejemplo:

```python
nombre_fic = input("Nombre del fichero: ")

fichero = open(nombre_fic,"r")

if fichero.readable():

    lista = fichero.readlines()
```

Alternativa:

```python
for empleado in empleado_fic:

    print(empleado)

# Es recomendado cerrar el fichero luego de tratar con el
empleado_fic.close()
```

Si leemos archivos directamente con métodos como `read()`, al leer de nuevo el
fichero no aparecerá nada, para solucionarlo hay que usar:

- `nombre_fichero.seek(0)` → Permite poner el cursor al principio del fichero.

Otra forma de abrir un fichero y operar con él sería:

```python
with open('myfile.txt', mode='w') as my_new_file:

    contents = my_new_file.read()

print(contents)
```

Un ejemplo de cómo escribir en un fichero sería:

```python
nombre_fic = input("Nombre del fichero: ")

fichero = open(nombre_fic,"a") # Voy a añadir texto al final

nuevo_empleado = input("Nombre del nuevo empleado: ")
funcion_empleado = input(f"Puesto del empleado {nuevo_empleado}: ")

fichero.write("\\n" + nuevo_empleado + " - " + funcion_empleado)

fichero.close()
```

### 9.2. Manejo de archivos y directorios

En Python, se utilizan varios módulos para la apertura, lectura y manipulación
de archivos y directorios en el sistema operativo. Los módulos principales son:

- _shutil_
- _os_ (OS → Sistema Operativo)

Estos módulos permiten realizar operaciones como abrir y leer archivos
individuales, navegar por los directorios, mover y eliminar archivos, entre
otras.

```python
import os
import shutil
import send2trash

# Creación de un archivo de prueba
f = open("Prueba.txt",'w+')
f.write("Esto es una prueba de escritura en un archivo")
f.close()

# Obtención del directorio de trabajo actual
print(os.getcwd())

# Listado de los elementos en el directorio de trabajo
print(os.listdir())

# Listado de los elementos en un directorio específico
print(os.listdir('/home/usuario/'))

# Movimiento de archivos entre directorios
shutil.move("Prueba.txt",'/home/daniel/')

# Eliminación segura de archivos con send2trash
send2trash.send2trash("Prueba.txt")
```

Además, Python permite listar todos los archivos de un directorio, incluyendo
carpetas, subcarpetas y ficheros que contienen:

```python
import os

directorio = '/home/daniel/Desktop'

for carpeta, sub_carpetas, archivos in os.walk(directorio):

    print(f"Estamos en la carpeta: {carpeta}")
    print("Las subcarpetas son: ")

    for sub_carpeta in sub_carpetas:

        print(f"\t{sub_carpeta}")

    print("Los archivos son: ")

    for archivo in archivos:

        print(f"\t{archivo}")
```

### 9.3. Manipulación de archivos CSV y JSON

Los archivos CSV (Comma Separated Values) son un tipo de formato que utilizan
Excel y otros programas de bases de datos. Son útiles para la manipulación de
datos de un fichero, pero sólo contienen el contenido en crudo, por lo que no
podemos obtener imágenes, macros, etc., solo los datos.

En Python, trabajaremos con el módulo `csv` incluido en la biblioteca estándar.
Otras bibliotecas a considerar para la manipulación de datos en Python serían
Pandas, Openpyxl o la API de Google Sheets para Python.

```python
import csv

# Abrimos el fichero
datos = open('example.csv',encoding = 'utf-8')

# csv.reader
csv_datos = csv.reader(datos)

# Convertimos los datos a una lista
lineas_datos = list(csv_datos)

correos = []

for linea in lineas_datos[1:]:
    if linea[3] not in correos:
        correos.append(linea[3])

for numero, correo in enumerate(correos):
    print(f"{numero} : {correo}")
```

Ahora vamos a ver cómo podemos escribir en un archivo CSV:

```python
# Creamos un archivo CSV
archivo_salida = open('fichero_prueba.csv', mode = 'w', newline = '')

# "delimiter" es un delimitador o separador, separa una columna de otra
# cuando encuentra una coma (',')
csv_escribir = csv.writer(archivo_salida, delimiter = ',')

csv_escribir.writerow(['a', 'b', 'c'])
csv_escribir.writerows([['1', '2', '3'],['4', '5', '6']])

# Cerramos el archivo CSV
archivo_salida.close()

# Añadimos información al final del archivo
f = open('fichero_prueba.csv', mode = 'a', newline = '')
csv_writer = csv.writer(f)

csv_writer.writerow(['Nombre', 'Apellido', 'Correo'])
csv_writer.writerows([['Daniel', 'BC', 'bsjhcjhs@gmail.com'],
                        ['Clara', 'RA', 'jsasdjb@gmail.com']])

f.close()
```

Para trabajar con ficheros JSON, importamos la biblioteca `json`.

```python
import json

# Creamos una variable de tipo JSON en Python
json_string = '{"Nombre":"Antonio", "Apellidos":"Adrian"}'
obj = json.loads(json_string)

print(f"Nombre: {obj['Nombre']} \nApellidos: {obj['Apellidos']}")
```

Python incluso permite cargar ficheros JSON directamente desde una URL:

```python
import requests

r = requests.get("url")

print(r.json())
```

### 9.4. Comprimir y descomprimir archivos

Aquí tienes un ejemplo de cómo comprimir y descomprimir archivos:

```python
import zipfile

# Creación de archivos de prueba
f = open("nuevo_archivo.txt",'w+')
f.write("Esto es solo un ejemplo de introducción de texto")
f.close()

f = open("nuevo_archivo2.txt",'w+')
f.write("Un poquito más de texto")
f.close()

# Creación del archivo zip
archivo_comprimido = zipfile.ZipFile('comprimido_1.zip','w')

# Añadir archivos al zip
archivo_comprimido.write("nuevo_archivo.txt", compress_type=zipfile.ZIP_DEFLATED)
archivo_comprimido.write('nuevo_archivo2.txt', compress_type=zipfile.ZIP_DEFLATED)

# Cerrar el archivo zip
archivo_comprimido.close()

# Extraer archivos de un archivo zip
zip_obj = zipfile.ZipFile('comprimido_1.zip', 'r')
zip_obj.extractall("contenido_extraido")
```

## 10. Expresiones regulares

En esta sección, exploraremos expresiones regulares en Python para manipular y
buscar patrones en texto.

### 10.1. Búsqueda y manipulación de patrones

Primero, aprenderemos cómo buscar y manipular patrones específicos en cadenas de
texto.

```python
import re

texto = "El número del agente es 111-111-1111"
patron = "número"

# Localiza la palabra y muestra el índice desde donde empieza hasta donde acaba
busqueda = re.search(patron,texto)

# Muestra el índice de inicio de la palabra
print(busqueda.start())

# Muestra el índice de finalización de la palabra
print(busqueda.end())

# Si queremos encontrar todas las mismas palabras y no solo una, utilizamos findall
texto2 = "Mi número favorito es el número 8"
busqueda2 = re.findall("número",texto2)

# Para ver en qué índice se encuentra la palabra repetida varias veces
print("La palabra 'número' está en los siguientes índices:")

for palabra in re.finditer('número',texto2):

    print(f"\t{palabra.span()}")

# Para mostrar la palabra en vez del índice
print("\nLa palabra 'número' está en los siguientes índices:")

for palabra in re.finditer('número',texto2):

    print(f"\t{palabra.group()} -> {palabra.span()}")
```

### 10.2. Patrones generales

A continuación, exploraremos cómo encontrar patrones más generales en texto.

```python
import re

texto = "Mi número de teléfono es 11 11 11 111"

# Importante usar la 'r' para indicar a Python que es un patrón raw
numero = re.search(r"\d{2} \d{2} \d{2} \d{3}",texto)
print(numero.group())

# Para extraer áreas concretas del patrón, podemos utilizar grupos
numero_grupos = re.compile(r"(\d{2}) (\d{2}) (\d{2}) (\d{3})")
resultado = re.search(numero_grupos,texto)

# Podemos acceder a un índice específico del grupo
print(resultado.group(4))
```

### 10.3. Patrones de palabras

Finalmente, nos centraremos en encontrar patrones de palabras específicas en un
texto.

```python
import re

texto = "Tengo una coneja que se llama Misifu"

busq1 = re.search(r'coneja|perro',texto)
print(busq1.group())

texto2 = "Tengo un perro que se llama Tom"

busq2 = re.search(r'coneja|perro',texto2)
print(busq2.group())

texto3 = "The cat in the hat sat there"

# Encontrar palabras que terminen con 'at'
terminadas_at = re.findall(r'.at',texto3)
print(terminadas_at)

# Exclusión de caracteres específicos
phrase = "there are 3 numbers 34 inside 5 this sentence."
print(re.findall(r'[^\\d]+',phrase))

# Eliminar signos de puntuación
test_phrase = """This is a string! But it has punctuation. How can we remove it?"""
clean = ' '.join(re.findall('[^!.? ]+',test_phrase))
print(clean)

# Encontrar palabras específicas que comienzan y terminan con ciertos patrones
text = 'Hello, would you like some catfish?'
texttwo = "Hello, would you like to take a catnap?"
re.search(r'cat(fish|nap|claw)',text)
re.search(r'cat(fish|nap|claw)',texttwo)
```

## 11. Buenas prácticas y estilo de código

### 11.1. Código sostenible

El desarrollo de un proyecto debe realizarse bajo una estructura de código clara
y sostenible, utilizando herramientas y metodologías para garantizar su
organización y limpieza. Estas prácticas son fundamentales durante el
desarrollo, puesta en producción y evolución del proyecto.

#### 11.1.1. Estructura del proyecto

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

#### 11.1.2. Código limpio

La guía de estilo [PEP 8](https://pep8.org/) define convenciones para escribir
código Python que sea legible y consistente. A continuación, se destacan sus
principales recomendaciones. Además, se sugieren herramientas como
[Black](https://pypi.org/project/black/) y [Ruff](https://docs.astral.sh/ruff/)
para aplicar estas convenciones automáticamente en los proyectos.

##### Diseño del código

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

##### Codificación de archivos y cadenas

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

##### Importaciones

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

##### Espacios en blanco

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

##### Comentarios y docstrings

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

##### Convenciones de nomenclatura

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
