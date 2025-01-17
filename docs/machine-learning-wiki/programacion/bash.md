---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Crea tus propios scripts ejecutables con Bash.
title: Bash
toc_max_heading_level: 4
---

## Bibliografía

- [Pradumnasaraf/DevOps](https://github.com/Pradumnasaraf/DevOps)
- [TODOS deberían aprender BASH - Bash PARTE 1](https://www.youtube.com/watch?v=4_ub6614dwY)

## 1. Introducción

<p align="center">
  <img src={require("../../img/bash-logo.png").default} width="500"/>
  <br />
  <em>Logo de Bash</em>
</p>

**BASH** (_Bourne Again Shell_) es un intérprete de comandos y un lenguaje de
programación utilizado en sistemas basados en Unix. Fue desarrollado por Brian
Fox para el Proyecto GNU y lanzado en 1989 como una versión mejorada del _Bourne
shell_ (`sh`).

Se distingue por su eficiencia en la ejecución de comandos, su compatibilidad
con _scripts_ de _shell_ y su versatilidad para la automatización de tareas y la
administración de sistemas. Gracias a su flexibilidad y robustez, BASH se ha
convertido en uno de los intérpretes de comandos más populares, siendo
ampliamente utilizado tanto en entornos de desarrollo como en servidores.

## 2. Conceptos básicos

### 2.1. Ejemplo de programa base

Un programa básico en BASH comienza con la línea `#!/bin/bash` (_shebang_), que
indica al sistema qué intérprete debe usar para ejecutar los comandos del
script. Es importante destacar que los scripts de BASH suelen tener la extensión
`.sh`.

:::note Nota

El uso del shebang `#!/bin/bash` garantiza que el script se ejecute con el
intérprete adecuado, independientemente del entorno en el que se ejecute.

:::

A continuación, se añaden las líneas de comandos que definen las acciones a
realizar, como mostrar un mensaje en la terminal, ejecutar otros scripts o
realizar tareas específicas.

:::tip Ejemplo

Supongamos que tenemos un script llamado `script.sh`. Para hacerlo ejecutable,
primero debemos otorgarle permisos. Aquí te mostramos cómo hacerlo:

```bash
#!/bin/bash

echo "Hola mundo"
```

**Para otorgar permisos de ejecución al script**, usamos el siguiente comando:

```bash
chmod +x script.sh
```

También puedes **ejecutar el script** con el comando:

```bash
bash script.sh
```

:::

### 2.2. Pasar parámetros como argumentos

En BASH, los parámetros se pasan al script mediante el uso de `$`, seguido del
número que representa la posición del argumento.

:::tip Ejemplo

```bash
#!/bin/bash
echo "Hola $1"
echo "Adiós $2"
```

En este caso, el primer argumento se pasa como `$1`, el segundo como `$2`, y así
sucesivamente. Además, `$0` siempre contiene el nombre del script.

:::

### 2.3. Asignación de variables

En BASH, las variables se asignan de manera sencilla, sin necesidad de declarar
su tipo previamente.

:::tip Ejemplo

```bash
#!/bin/bash
nombre="Daniel"
echo "Mi nombre es $nombre"
```

También es posible almacenar el resultado de la ejecución de un comando del
sistema en una variable:

```bash
#!/bin/bash
resultado=$(comando)
```

:::tip

El uso de `$(comando)` permite capturar la salida de un comando y almacenarla en
una variable, lo cual resulta útil para automatizar tareas y procesar
información.

:::

### 2.4. Introducción de entradas del usuario

Para capturar entradas del usuario, se utiliza el comando `read`.

:::tip Ejemplo

```bash
#!/bin/bash
echo "¿Cuál es tu nombre?"
read nombre
echo "Tu nombre es $nombre"
```

:::

### 2.5. Operaciones aritméticas

Las operaciones aritméticas en BASH se realizan dentro de `(( ))`, lo que
permite evaluar expresiones matemáticas de manera sencilla.

:::tip Ejemplo

```bash
#!/bin/bash
echo $((5 + 5))
```

:::

Operaciones disponibles:

- `+` - Suma
- `-` - Resta
- `*` - Multiplicación
- `/` - División
- `%` - Módulo

### 2.6. Condiciones

En BASH, las condiciones se expresan utilizando el comando `if`, junto con los
operadores de comparación y lógicos.

:::tip Ejemplo

```bash
#!/bin/bash

if [ "$1" == "Dani" ] || [ "$1" == "Paco" ]; then
    echo "Hola $1"
elif [ "$1" == "Jorge" ]; then
    echo "Bienvenido"
else
    echo "Intruso"
fi
```

:::

Operadores de comparación:

- `==` - Igual a
- `!=` - Distinto de
- `>` - Mayor que
- `<` - Menor que
- `>=` - Mayor o igual que
- `<=` - Menor o igual que

Operadores booleanos:

- `-a` o `&&` - Y (AND)
- `-o` o `||` - O (OR)
- `!` - No (NOT)

Es importante recordar que `-a` y `-o` se usan dentro de corchetes, mientras que
`&&` y `||` se emplean fuera de ellos.

:::note Nota

Recuerda que los operadores `&&` y `||` son más comunes fuera de los corchetes,
mientras que los operadores `-a` y `-o` se utilizan dentro de los corchetes en
las condiciones del `if`.

:::

### 2.7. Bucles

BASH soporta varios tipos de bucles. Un bucle `for` se define de la siguiente
manera:

:::tip Ejemplo

```bash
#!/bin/bash

for i in 1 2 3; do
    echo $i
done
```

:::

Un bucle `while` se usa cuando se necesita repetir una acción mientras se cumpla
una condición específica:

:::tip Ejemplo

```bash
#!/bin/bash

i=1
while [ $i -le 5 ]; do
    echo $i
    (( i++ ))
done
```

:::

Comandos adicionales:

- `break` - Finaliza el bucle.
- `continue` - Salta a la siguiente iteración del bucle.

:::note Los bucles `for` son ideales cuando se conoce el número exacto de
iteraciones, mientras que los bucles `while` se utilizan cuando la condición de
salida depende de una variable o el resultado de una operación.

:::

### 2.8. Funciones

Las funciones en BASH permiten organizar y reutilizar el código de manera más
eficiente. Definir funciones ayuda a hacer el código más modular, legible y
fácil de mantener, facilitando además la reutilización de bloques de código sin
tener que escribirlos varias veces.

:::tip Ejemplo

```bash
#!/bin/bash

function funcion() {
    echo "Esta es una función de prueba"
}

funcion
```

::::
