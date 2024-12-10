---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Crea tus propios scripts ejecutables con Bash.
title: Bash
toc_max_heading_level: 4
---
# References

- [Pradumnasaraf/DevOps](https://github.com/Pradumnasaraf/DevOps)
- [EVERYONE should learn BASH - Bash PART 1](https://www.youtube.com/watch?v=4_ub6614dwY)

# Introduction

**BASH** is a command interpreter and programming language for Unix systems, developed by Brian Fox for the GNU Project and released in 1989. It is an improved version of the Bourne shell (sh) and is notable for its ability to efficiently execute commands, its support for shell scripting, and its usefulness in task automation and system administration. BASH is widely used in development and server environments due to its flexibility and robustness.

## 1. Basics

### 1.1. Basic Program Example

A basic BASH program:

```bash
#!/bin/bash

echo "Hello world"
```

The `#!/bin/bash` (shebang) line tells the system which interpreter to use to run commands.

To run the script with `./script_name.sh`, you need to modify the file permissions with:

```bash
chmod +x script_name.sh
```

Alternatively, you can run it with `bash script_name.sh`.

### 1.2. Passing Parameters as Arguments

Parameters are passed to the script using `$` followed by the argument position, where `$0` is the name of the script. For example, in `./script.sh Daniel Paco`, `Daniel` will be `$1` and `Paco` will be `$2`.

```bash
#!/bin/bash
echo "Hello $1"
echo "Goodbye $2"
```

### 1.3. Variable assignment

Variables are assigned as follows:

```bash
#!/bin/bash
VARIABLE="Daniel"
echo "My name is $VARIABLE"
```

It is possible to store the result of system commands:

```bash
#!/bin/bash
result=$(command)
```

### 1.4. Entering user input

User input is captured with `read`:

```bash
#!/bin/bash
echo "Name"
read NAME
echo "My name is $NAME"
```

### 1.5. Arithmetic operations

Arithmetic operations are performed with `(( ))`:

```bash
#!/bin/bash
echo $((5+5))
```

Available operations:

- `+` - Addition
- `-` - Subtraction
- `*` - Multiplication
- `/` - Division
- `%` - Modulus

### 1.6. Conditions

Conditions in BASH are expressed as follows:

```bash
#!/bin/bash

if [ "$1" == "Dani" ] || [ "$1" == "Paco" ]; then
echo "Hello $1"
elif [ "$1" == "Jorge" ]; then
echo "Welcome"
else
echo "Intruder"
fi
```

Comparison operators:

- `==` - Equal to
- `!=` - Not equal to
- `>` - Greater than
- `<` - Less than
- `>=` - Greater than or equal to
- `<=` - Less than or equal to

Boolean operators:

- `-a` or `&&` - And
- `-o` or `||` - Or
- `!` - Not (Not)

`-a` and `-o` are used inside brackets and `&&` and `||` outside them.

### 1.7. Loops

A `for` loop is defined like this:

```bash
#!/bin/bash

for i in 1 2 3; do
echo $i
done
```

A `while` loop is defined like this:

```bash
#!/bin/bash

i=1
while [ $i -le 5 ]; do
echo $i
(( i++ ))
done
```

Additional commands:

- `break` - Ends the loop.
- `continue` - Jumps to the next iteration.

### 1.8. Functions

Functions in BASH are defined like this:

```bash
#!/bin/bash

function function() {
echo "Test function"
}

function
```