---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Creación de scripts con Bash.
title: Bash
---

# Bibliografía

- [Pradumnasaraf/DevOps](https://github.com/Pradumnasaraf/DevOps)
- [TODOS deberían aprender BASH - Bash PARTE 1](https://www.youtube.com/watch?v=4_ub6614dwY)

# Introducción

<p align="center">
  <img src="https://freepngdesign.com/content/uploads/images/p-2744-3-bash-logo-png-transparent-logo-848251298474.png" height="350"/>
  <br />
  <em>Logo de Bash</em>
</p>

**BASH** es un intérprete de comandos y lenguaje de programación para sistemas Unix, desarrollado por Brian Fox para el Proyecto GNU y lanzado en 1989. Es una versión mejorada del shell Bourne (sh) y se destaca por su capacidad para ejecutar comandos de manera eficiente, su compatibilidad con scripts de shell, y su utilidad en la automatización de tareas y administración de sistemas. BASH es ampliamente utilizado en entornos de desarrollo y servidores debido a su flexibilidad y robustez.

## 1. Conceptos básicos

### 1.1. Ejemplo de programa base

Un programa básico en BASH:

```bash
#!/bin/bash

echo "Hola mundo"
```

La línea `#!/bin/bash` (shebang) indica al sistema el intérprete a utilizar para ejecutar los comandos.

Para ejecutar el script con `./nombre_script.sh`, es necesario modificar los permisos del archivo con:

```bash
chmod +x nombre_script.sh
```

Alternativamente, se puede ejecutar con `bash nombre_script.sh`.

### 1.2. Pasar parámetros como argumentos

Los parámetros se pasan al script utilizando `$` seguido de la posición del argumento, donde `$0` es el nombre del script. Por ejemplo, en `./script.sh Daniel Paco`, `Daniel` será `$1` y `Paco` será `$2`.

```bash
#!/bin/bash
echo "Hola $1"
echo "Adiós $2"
```

### 1.3. Asignación de variables

Las variables se asignan de la siguiente manera:

```bash
#!/bin/bash
VARIABLE="Daniel"
echo "Mi nombre es $VARIABLE"
```

Es posible almacenar el resultado de comandos del sistema:

```bash
#!/bin/bash
resultado=$(comando)
```

### 1.4. Introducción de entradas del usuario

La entrada del usuario se captura con `read`:

```bash
#!/bin/bash
echo "Nombre"
read NOMBRE
echo "Mi nombre es $NOMBRE"
```

### 1.5. Operaciones aritméticas

Las operaciones aritméticas se realizan con `(( ))`:

```bash
#!/bin/bash
echo $((5+5))
```

Operaciones disponibles:

- `+` - Suma
- `-` - Resta
- `*` - Multiplicación
- `/` - División
- `%` - Módulo

### 1.6. Condiciones

Las condiciones en BASH se expresan de la siguiente forma:

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

Operadores de comparación:

- `==` - Igual a
- `!=` - Distinto de
- `>` - Mayor que
- `<` - Menor que
- `>=` - Mayor o igual que
- `<=` - Menor o igual que

Operadores booleanos:

- `-a` o `&&` - Y (And)
- `-o` o `||` - O (Or)
- `!` - No (Not)

Se utiliza `-a` y `-o` dentro de corchetes y `&&` y `||` fuera de ellos.

### 1.7. Bucles

Un bucle `for` se define así:

```bash
#!/bin/bash

for i in 1 2 3; do
    echo $i
done
```

Un bucle `while` se define de la siguiente manera:

```bash
#!/bin/bash

i=1
while [ $i -le 5 ]; do
    echo $i
    (( i++ ))
done
```

Comandos adicionales:

- `break` - Finaliza el bucle.
- `continue` - Salta a la siguiente iteración.

### 1.8. Funciones

Las funciones en BASH se definen así:

```bash
#!/bin/bash

function funcion() {
    echo "Función de prueba"
}

funcion
```