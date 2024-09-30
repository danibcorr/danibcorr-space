---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Controla versiones de tu código con Git, facilitando la gestión de cambios y la colaboración en proyectos.
title: Git
---

#  Bibliografía

* [Git Hooks](https://githooks.com/)
  
#  Introducción

<p align="center">
  <img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" height="200"/>
  <br />
  <em>Logo de Git</em>
</p>

**Git** es un sistema de control de versiones distribuido que gestiona el historial de cambios en proyectos de software, facilitando la colaboración entre desarrolladores.

## 1. Control de versiones

El control de versiones gestiona los cambios en archivos a lo largo del tiempo, permitiendo la recuperación de versiones anteriores cuando sea necesario.

###  1.1. Terminología

- **Repositorio Local**: Base de datos que almacena versiones de archivos.
- **Copia Local**: Versión del archivo que el usuario modifica en su directorio.
- **Repositorio Remoto**: Proyecto alojado en una red externa.
- **Histórico (Log)**: Registro de cambios realizados en el repositorio.
- **Conflicto**: Ocurre cuando dos usuarios modifican las mismas líneas de un archivo o cuando uno lo elimina y otro lo modifica.

### 1.2. Estados de un archivo

- **Sin Seguimiento**: Archivo no registrado en la instantánea anterior.
- **Confirmado**: Datos almacenados en la base de datos local.
- **Modificado**: Archivo alterado cuyos cambios no han sido confirmados.
- **Preparado**: Archivo marcado para inclusión en la próxima confirmación.
- **Ignorado**: Archivo que Git ha sido instruido para no registrar.

### 1.3. Operaciones

- **Clone**: Crea una copia local de un repositorio remoto.
- **Add**: Añade cambios al área de preparación.
- **Commit**: Registra una nueva versión en el repositorio local.
- **Push**: Sincroniza cambios locales con un repositorio remoto.
- **Pull**: Actualiza el repositorio local con cambios del repositorio remoto.
- **Fork**: Crea una copia de un proyecto para modificarla independientemente.
- **Pull Request**: Solicita la integración de cambios en un proyecto.

## 2. Git

Git es un sistema de control de versiones distribuido que permite gestionar y realizar un seguimiento de los cambios en el código a lo largo del tiempo. Por otro lado, plataformas como GitHub o GitLab utilizan Git para facilitar la gestión de proyectos y la colaboración en línea, ofreciendo interfaces gráficas y funcionalidades adicionales como la integración continua, la gestión de problemas y la colaboración entre equipos distribuidos.

### 2.1. Comandos básicos de Linux

Git-Bash es una interfaz de línea de comandos que permite la interacción con Git mediante el uso de comandos de Linux, facilitando la gestión del sistema de archivos y la ejecución de diversas operaciones. A continuación, se describen algunos comandos fundamentales y ejemplos de su uso:

| Comando   | Función                                             | Ejemplo de uso                                                                 |
| --------- | --------------------------------------------------- | ----------------------------------------------------------------------------- |
| **pwd**   | Muestra la ruta completa del directorio actual.     | `pwd` - Este comando muestra la ruta completa, por ejemplo: `/home/usuario/`   |
| **mkdir** | Crea un nuevo directorio en la ubicación deseada.   | `mkdir nuevo_directorio` - Crea un directorio llamado "nuevo_directorio".      |
| **cd**    | Cambia al directorio especificado.                  | `cd nuevo_directorio` - Cambia al directorio "nuevo_directorio".               |
| **ls**    | Lista los archivos y subdirectorios en el directorio actual. | `ls` - Muestra los archivos del directorio actual. `ls -la` muestra detalles adicionales, como permisos y fechas de modificación. |
| **rm**    | Elimina el archivo o directorio especificado.       | `rm archivo.txt` - Elimina el archivo "archivo.txt". Para eliminar directorios, usar `rm -r directorio/`. |
| **mv**    | Mueve o renombra un archivo o directorio.           | `mv archivo.txt nueva_ubicacion/` - Mueve "archivo.txt" a la carpeta "nueva_ubicacion". También puede usarse para renombrar archivos, por ejemplo: `mv archivo.txt archivo_nuevo.txt`. |

Para obtener más información sobre Linux, se pueden [visitar los siguientes apuntes](../sistemas-operativos/linux.md).

### 2.2. Comandos para el control de versiones local

A continuación, se presentan algunos de los comandos más utilizados para la gestión del control de versiones de manera local en un repositorio Git, acompañados de ejemplos de uso:

| Comando | Función | Ejemplo de uso |
| --- | --- | --- |
| **git init** | Crea un nuevo repositorio local. | `git init` - Inicializa un repositorio en el directorio actual. |
| **git clone** | Clona un repositorio existente en una ubicación local. | `git clone https://github.com/usuario/repositorio.git` - Clona el repositorio desde la URL indicada. |
| **git add** | Prepara archivos para su confirmación (staging). | `git add archivo.txt` - Añade "archivo.txt" al área de preparación (staging). |
| **git commit** | Confirma los cambios en el repositorio local. | `git commit -m "Mensaje del commit"` - Confirma los cambios con el mensaje "Mensaje del commit". |
| **git reset HEAD** | Revierte la preparación de archivos que estaban listos para ser confirmados. | `git reset HEAD archivo.txt` - Deshace la preparación de "archivo.txt". |
| **git commit --amend** | Modifica la última confirmación, permitiendo cambiar el mensaje o añadir archivos adicionales. | `git commit --amend -m "Mensaje corregido"` - Modifica el mensaje del último commit. |
| **git status** | Muestra el estado actual de los archivos en el repositorio. | `git status` - Muestra los archivos modificados, no preparados o pendientes de confirmación. |
| **git checkout** | Cambia entre ramas o descarta cambios en archivos específicos. | `git checkout rama-nueva` - Cambia a la rama "rama-nueva".<br />`git checkout -- archivo.txt` - Deshace los cambios en "archivo.txt". |
| **git branch** | Gestiona las ramas del repositorio local. | `git branch` - Lista las ramas existentes en el repositorio.<br />`git branch rama-nueva` - Crea una nueva rama llamada "rama-nueva". |
| **git merge** | Fusiona una rama con la rama actual. | `git merge rama-nueva` - Fusiona la rama "rama-nueva" con la rama en la que te encuentres actualmente. |
| **git fetch** | Descarga los cambios desde el repositorio remoto, pero no los fusiona. | `git fetch origin` - Descarga los cambios del repositorio remoto llamado "origin", pero no los aplica. |
| **git pull** | Descarga y fusiona los cambios del repositorio remoto con la rama actual. | `git pull origin main` - Descarga y fusiona los cambios de la rama "main" del repositorio remoto "origin". |
| **git push** | Sube los cambios confirmados a un repositorio remoto. | `git push origin main` - Sube los cambios locales confirmados a la rama "main" del repositorio remoto "origin". |
| **git log** | Muestra el historial de confirmaciones del repositorio. | `git log` - Muestra el historial de commits.<br />`git log --oneline` - Muestra el historial de commits de manera resumida. |
| **git diff** | Muestra las diferencias entre los archivos modificados y los confirmados. | `git diff` - Muestra las diferencias entre los archivos modificados en el área de trabajo. |
| **git stash** | Almacena temporalmente los cambios no confirmados para limpiarlos del área de trabajo. | `git stash` - Guarda los cambios en un área temporal.<br />`git stash pop` - Recupera los cambios guardados en el stash. |
| **git rm** | Elimina archivos del repositorio y del área de preparación. | `git rm archivo.txt` - Elimina el archivo "archivo.txt" del repositorio y del área de trabajo. |

### 2.3. Control de versiones centralizado

Git soporta control de versiones centralizado, donde un servidor central alberga el repositorio principal y los colaboradores sincronizan sus copias locales.

#### 2.3.1. Configuración de Git para trabajar a través de un proxy

Configurar un proxy global para Git:

```bash
git config --global http.proxy http://<proxyUsername>:<proxyPassword>@<proxy.server.com>:<port>
git config --global https.proxy https://<proxyUsername>:<proxyPassword>@<proxy.server.com>:<port>
```

Configurar un proxy para un dominio específico:

```bash
git config --global http.<http://domain.com>.proxy http://<proxyUsername>:<proxyPassword>@<proxy.server.com>:<port>
git config --global https.<https://domain.com>.proxy https://<proxyUsername>:<proxyPassword>@<proxy.server.com>:<port>
```

#### 2.3.2. Resolver conflictos al traer cambios

Si existen conflictos al realizar `git pull`, se pueden resolver mediante:

1. Subir cambios a otra rama y realizar un pull request.
2. Confirmar cambios locales y volver a ejecutar `git pull` para usar el solucionador de conflictos de Git.

## 3. Estrategia de control de versiones

Tanto **Trunk-Based Development** como **Git Flow** son estrategias populares de control de versiones, cada una con sus propias ventajas y casos de uso. A continuación, se presenta una comparación detallada de ambas metodologías.

### 3.1. Trunk-Based Development

<p align="center">
  <img src="https://aungkyawpaing.dev/content/images/size/w1000/2022/02/image-3.png"/>
  <br />
  <em>Esquema de desarrollo Trunk-Based</em>
</p>

En esta estrategia, los desarrolladores fusionan frecuentemente pequeñas actualizaciones en una única rama principal (a menudo llamada "trunk" o "main").

Las principales ventajas de esta estrategia son:

  - **Simplificación de la fusión e integración**: Al fusionar cambios pequeños y frecuentes, se reducen los conflictos y se facilita la integración continua.
  - **Facilita la Integración Continua (CI) y el Despliegue Continuo (CD)**: Esta metodología es ideal para entornos donde se practican CI/CD, permitiendo despliegues rápidos y frecuentes.
  - **Fomenta la iteración rápida y la colaboración**: Los desarrolladores pueden trabajar en paralelo y fusionar sus cambios rápidamente, lo que acelera el ciclo de desarrollo.

Sin embargo, presenta las siguientes desventajas:

  - **Gestión en equipos grandes**: Puede ser difícil de gestionar en equipos grandes sin una estricta disciplina y coordinación.
  - **Rastreo de cambios individuales**: Es menos capaz de rastrear cambios individuales en comparación con Git Flow, lo que puede dificultar la identificación de problemas específicos.

### 3.2. Git Flow

<p align="center">
  <img src="https://www.bitbull.it/blog/git-flow-come-funziona/gitflow-1.png" />
  <br />
  <em>Esquema de desarrollo Git Flow</em>
</p>

Esta estrategia utiliza múltiples ramas para diferentes propósitos (por ejemplo, ramas de características, ramas de lanzamiento, ramas de corrección).

Las principales ventajas de esta estrategia son:

  - **Organización y estructura**: Git Flow es altamente organizado y estructurado, lo que facilita la gestión de proyectos complejos.
  - **Seguimiento detallado de cambios**: Permite un seguimiento detallado de los cambios individuales, lo que es útil para auditorías y revisiones de código.
  - **Adecuado para ciclos de lanzamiento largos**: Es ideal para proyectos con ciclos de lanzamiento más largos, donde se requiere una planificación y gestión detallada.
  
Sin embargo, presenta las siguientes desventajas:

  - **Complejidad**: La gestión de múltiples ramas puede ser más compleja y requerir más esfuerzo y coordinación.
  - **Ralentización del desarrollo**: Si no se gestiona correctamente, puede ralentizar el proceso de desarrollo debido a la necesidad de mantener y fusionar múltiples ramas.

### 3.3. Cuándo usar Trunk-Based Development o Git Flow

- **Trunk-Based Development**: Es ideal para equipos que practican CI/CD, necesitan iteraciones rápidas y trabajan en proyectos con actualizaciones frecuentes. Es especialmente útil en entornos ágiles donde la velocidad y la flexibilidad son cruciales.
- **Git Flow**: Adecuado para proyectos con ciclos de lanzamiento más largos, que requieren un seguimiento detallado de los cambios, y para equipos que prefieren un enfoque más estructurado. Es ideal para proyectos donde la estabilidad y la planificación a largo plazo son prioritarias.

## 4. Git Hooks

Los Git Hooks constituyen una funcionalidad integrada en Git que permite automatizar tareas y aplicar políticas a lo largo del flujo de trabajo. Con ello, Git puede ejecutar acciones en momentos clave del proceso de desarrollo, asegurando la calidad del código y cumpliendo políticas específicas del proyecto.

### 4.1. Definición y uso de Git Hooks

Los Git Hooks son scripts que se ejecutan automáticamente en respuesta a eventos específicos dentro de Git, como antes o después de realizar un `commit`, un `push` o un `merge`.

Para utilizar Git Hooks, es necesario crear scripts en el directorio `.githooks` en la raiz del repositorio Git. Estos scripts deben ser ejecutables y llevar el nombre del evento para el que se activan, como `pre-commit`, `pre-push` o `post-merge`. Es fundamental que se otorguen los permisos adecuados al archivo, lo cual puede hacerse con el comando:

```bash
chmod +x pre-commit
```

Al colocarse estos scripts en el directorio correcto y con los permisos necesarios, Git los ejecutará automáticamente cuando ocurra el evento correspondiente.

- **pre-commit**: Se ejecuta antes de crear un commit. Se utiliza para verificar que el código cumple con el formato, realizar pruebas unitarias, validar que los mensajes de commit cumplan con ciertos estándares o evitar errores ortográficos. 

  ```bash
  # !/bin/bash
  # Hook pre-commit para ejecutar Black solo en la rama main
  # Este script utiliza Black para verificar el estilo del código
  # Si hay errores, se bloquea el commit y se muestra un mensaje al usuario.

  # Obtener la rama actual
  branch_name=$(git rev-parse --abbrev-ref HEAD)

  # Verificar si estamos en la rama main
  if [ "$branch_name" != "main" ]; then
      echo "No se ejecutará Black porque no estás en la rama 'main'."
     #  Salir sin errores
      exit 0  
  else
     #  Ejecutar Black en el directorio actual
      black . --check

     #  Verificar el estado de la última operación (código de salida)
      if [ $? -ne 0 ]; then
          echo "Errores de estilo detectados."
         #  Bloquear el commit si hay errores
          exit 1  
      fi

      echo "El commit se ha completado con éxito."
  fi
  ```

- **pre-push**: Se ejecuta antes de enviar cambios a un repositorio remoto. Se utiliza para evitar que se realicen push en ramas protegidas o para ejecutar pruebas adicionales antes de que los cambios se suban al servidor. 

  ```bash
  # !/bin/bash
  # Hook pre-push para actualizar pip, instalar Poetry, instalar dependencias y ejecutar pruebas

  # Actualizar pip
  echo "Actualizando pip..."
  python -m pip install --upgrade pip

  # Instalar Poetry si no está instalado
  if ! command -v poetry &> /dev/null; then
      echo "Instalando Poetry..."
      pip install poetry
  fi

  # Verificar si Poetry se instaló correctamente
  if ! command -v poetry &> /dev/null; then
      echo "Error: Poetry no se pudo instalar."
      exit 1
  fi

  # Instalar dependencias de Poetry
  echo "Instalando dependencias de Poetry..."
  poetry install

  # Ejecutar pruebas con Pytest
  echo "Ejecutando pruebas con Pytest..."
  poetry run pytest -v ./tests

  # Verificar el estado de las pruebas
  if [ $? -ne 0 ]; then
      echo "Error: Las pruebas no han pasado. Bloqueando el push."
      exit 1
  fi

  # Generar requirements.txt a partir de Poetry
  echo "Generando requirements.txt..."
  poetry export -f requirements.txt --output requirements.txt --without-hashes

  echo "El push se ha completado con éxito."
  ```

- **post-commit**: Se ejecuta después de realizar un commit. Este hook puede utilizarse para realizar tareas posteriores, como enviar notificaciones automáticas al equipo, informando sobre los cambios introducidos en el proyecto.

  ```bash
  # Hook post-commit para enviar una notificación por correo
  # Este script envía un correo al equipo informando sobre el nuevo commit.

  # Obtener el mensaje del último commit
  commit_message=$(git log -1 --pretty=%B)
  
  # Enviar un correo electrónico (usando sendmail como ejemplo)
  echo "Nuevo commit realizado: $commit_message" | sendmail -v equipo@example.com
  ```

- **post-merge**: Se ejecuta después de completar un merge. Es útil para realizar acciones como la actualización de dependencias o la regeneración de documentación. 

  ```bash
  # !/bin/bash
  # Hook post-merge para actualizar dependencias con Poetry 

  # Verificar si Poetry está instalado
  if ! command -v poetry &> /dev/null; then
      echo "Error: Poetry no está instalado."
      echo "Instalando Poetry..."
      pip install poetry
  fi

  # Actualizar las dependencias
  echo "Actualizando dependencias de Poetry..."
  poetry update

  # Comprobar la configuración de Poetry
  echo "Comprobando configuración de Poetry..."
  poetry check

  # Instalar nuevas dependencias si han sido añadidas en el pyproject.toml
  echo "Instalando nuevas dependencias..."
  poetry install

  # Ejecutar pruebas para verificar que todo funciona correctamente
  echo "Ejecutando pruebas con Pytest..."
  poetry run pytest -v ./tests

  # Verificar el estado de las pruebas
  if [ $? -ne 0 ]; then
      echo "Error: Las pruebas no han pasado. Verifica los errores."
      exit 1
  fi

  # Generar requirements.txt si es necesario
  echo "Generando requirements.txt..."
  poetry export -f requirements.txt --output requirements.txt --without-hashes

  echo "El post-merge se ha completado con éxito. Dependencias actualizadas y pruebas ejecutadas."
  ```

- **pre-receive** y **post-receive**: Estos hooks se ejecutan en el servidor remoto al recibir cambios mediante push. El `pre-receive` permite verificar que los commits cumplen con las políticas del proyecto antes de aceptar los cambios, mientras que el `post-receive` se puede utilizar para realizar despliegues automáticos en un entorno de producción.

  - **pre-receive**: Un ejemplo de este hook que bloquea el push si se detectan problemas con los mensajes de commit se presenta a continuación.

    ```bash
    # !/bin/bash
    # Hook pre-receive para validar mensajes de commit
    # Este script verifica que todos los mensajes de commit sigan un formato específico.

    while read oldrev newrev refname; do
     #  Iterar sobre los commits que se están empujando
      for commit in $(git rev-list $oldrev..$newrev); do
       #  Obtener el mensaje del commit actual
        commit_message=$(git log --format=%B -n 1 $commit)
        
       #  Verificar si el mensaje de commit cumple con el formato requerido
        if ! [[ $commit_message =~ ^\[JIRA-[0-9]+\] ]]; then
          echo "El mensaje de commit '$commit_message' no cumple con el formato requerido."
         #  Bloquear el push si el formato es incorrecto
          exit 1  
        fi
      done
    done
    ```

  - **post-receive**: Un ejemplo de un hook `post-receive` que realiza un despliegue automático en producción tras recibir un push.

    ```bash
    # Hook post-receive para desplegar automáticamente el código en producción
    # Este script se ejecuta en el servidor después de que se aceptan los cambios.

    echo "Desplegando cambios en producción..."
    
    # Cambiar al directorio de producción
    cd /var/www/mi-aplicacion
    
    # Obtener la última versión del código
    # Asumiendo que la rama principal es 'main'
    git pull origin main  

    # Reiniciar el servidor web para aplicar cambios (por ejemplo, con PM2)
    pm2 restart mi-aplicacion
    ```

### 4.2. Recomendaciones para Git Hooks

Al escribir y gestionar Git Hooks, se sugiere seguir las siguientes pautas:

- **Rapidez y fiabilidad**: Los hooks deben ser rápidos para no ralentizar el flujo de trabajo, y deben funcionar de manera confiable, evitando interrupciones en los procesos de desarrollo.
  
- **Documentación clara**: Es fundamental que los scripts estén bien documentados, mediante comentarios que describan su funcionalidad, de modo que cualquier miembro del equipo pueda entender su propósito y modificarlos si es necesario.

- **No intrusivos**: Es importante evitar que los hooks modifiquen automáticamente el código o los archivos sin el consentimiento del desarrollador, ya que esto podría generar conflictos no deseados.
