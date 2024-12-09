---
sidebar_position: 3
authors:
  - name: Daniel Bazo Correa
description: Controla versiones de tu código con Git.
title: Git
toc_max_heading_level: 4
---

## Bibliografía

* [Git Hooks](https://githooks.com/)
  
## 1. Introducción

<p align="center">
  <img src={require("../../../img/git-logo.png").default}/>
  <br />
  <em>Logo de Git</em>
</p>

**Git** es un sistema de control de versiones distribuido que gestiona el historial de cambios en proyectos de software, facilitando la colaboración entre desarrolladores.

## 2. Control de versiones

El control de versiones gestiona los cambios en archivos a lo largo del tiempo, permitiendo la recuperación de versiones anteriores cuando sea necesario.

### 2.1. Terminología

- **Repositorio local**: Base de datos que almacena versiones de archivos a nivel local.
- **Copia local**: Versión del archivo que el usuario modifica en su directorio.
- **Repositorio remoto**: Proyecto alojado en una red externa, p.ej. GitHub, GitLab, entre otros.
- **Histórico (***Log***)**: Registro de cambios realizados en el repositorio.
- **Conflicto**: Ocurre cuando dos usuarios modifican las mismas líneas de un archivo o cuando uno lo elimina y otro lo modifica.

### 2.2. Estados de un archivo

- **Sin seguimiento**: Archivo no registrado en la instantánea anterior.
- **Confirmado**: Datos almacenados en la base de datos local.
- **Modificado**: Archivo alterado cuyos cambios no han sido confirmados.
- **Preparado**: Archivo marcado para inclusión en la próxima confirmación.
- **Ignorado**: Archivo que Git ha sido instruido para no registrar.

### 2.3. Operaciones

- ***Clone***: Crea una copia local de un repositorio remoto.
- ***Add***: Añade cambios al área de preparación.
- ***Commit***: Registra una nueva versión en el repositorio local.
- ***Push***: Sincroniza cambios locales con un repositorio remoto.
- ***Pull***: Actualiza el repositorio local con cambios del repositorio remoto.
- ***Fork***: Crea una copia de un proyecto para modificarla independientemente.
- ***Pull Request***: Solicita la integración de cambios en un proyecto.

## 3. Git

Git es un sistema de control de versiones distribuido que permite gestionar y realizar un seguimiento de los cambios en el código a lo largo del tiempo. Por otro lado, plataformas como GitHub o GitLab utilizan Git para facilitar la gestión de proyectos y la colaboración en línea, ofreciendo interfaces gráficas y funcionalidades adicionales como la integración continua, la gestión de problemas y la colaboración entre equipos distribuidos.

### 3.1. Comandos básicos de Linux

Git-Bash es una interfaz de línea de comandos que permite la interacción con Git mediante el uso de comandos de Linux, facilitando la gestión del sistema de archivos y la ejecución de diversas operaciones. A continuación, se describen algunos comandos fundamentales y ejemplos de su uso:

| Comando   | Función                                             | Ejemplo de uso                                                                 |
| --------- | --------------------------------------------------- | ----------------------------------------------------------------------------- |
| **pwd**   | Muestra la ruta completa del directorio actual.     | `pwd` - Este comando muestra la ruta completa, por ejemplo: `/home/usuario/`   |
| **mkdir** | Crea un nuevo directorio en la ubicación deseada.   | `mkdir nuevo_directorio` - Crea un directorio llamado "nuevo_directorio".      |
| **cd**    | Cambia al directorio especificado.                  | `cd nuevo_directorio` - Cambia al directorio "nuevo_directorio".               |
| **ls**    | Lista los archivos y subdirectorios en el directorio actual. | `ls` - Muestra los archivos del directorio actual. `ls -la` - Muestra detalles adicionales, como permisos y fechas de modificación. `ls -a`- Muestra todos los archivos del directorio incluso los que están ocultos. |
| **rm**    | Elimina el archivo o directorio especificado.       | `rm archivo.txt` - Elimina el archivo "archivo.txt". Para eliminar directorios, usar `rm -r directorio/`. |
| **mv**    | Mueve o renombra un archivo o directorio.           | `mv archivo.txt nueva_ubicacion/` - Mueve "archivo.txt" a la carpeta "nueva_ubicacion". También puede usarse para renombrar archivos, por ejemplo: `mv archivo.txt archivo_nuevo.txt`. |

Para obtener más información sobre Linux, se pueden [visitar los siguientes apuntes](../../sistemas-operativos/linux.md).

### 3.2. Comandos para el control de versiones local

A continuación, se presentan algunos de los comandos más utilizados para la gestión del control de versiones de manera local en un repositorio Git, acompañados de ejemplos de uso:

| Comando | Función | Ejemplo de uso |
| --- | --- | --- |
| **git init** | Crea un nuevo repositorio local. | `git init` - Inicializa un repositorio en el directorio actual. |
| **git clone** | Clona un repositorio existente en una ubicación local. | `git clone https://github.com/usuario/repositorio.git` - Clona el repositorio desde la URL indicada. |
| **git add** | Prepara archivos para su confirmación (*staging*). | `git add archivo.txt` - Añade "archivo.txt" al área de preparación (*staging*). |
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

### 3.3. Configuración básica de Git para GitHub/GitLab

Antes de trabajar con GitHub o GitLab, es necesario configurar tu entorno de Git local. Esto incluye establecer tu identidad y configurar autenticación con las plataformas.

#### 3.3.1. Configurar nombre de usuario y correo

Git utiliza el nombre y el correo configurados para identificar tus contribuciones. Puedes configurarlos globalmente para que se apliquen a todos tus repositorios:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@example.com"
```

Para verificar la configuración:

```bash
git config --global --list
```

Si deseas configurarlos solo para un repositorio específico, omite la opción `--global` y ejecuta los comandos dentro del directorio del repositorio.

#### 3.3.2. Configurar autenticación SSH para GitHub/GitLab

Configurar claves SSH simplifica la autenticación con GitHub/GitLab:

1. Genera una clave SSH si no tienes una:
   ```bash
   ssh-keygen -t ed25519 -C "tu-correo@example.com"
   ```
   Si tu sistema no soporta `ed25519`, usa:
   ```bash
   ssh-keygen -t rsa -b 4096 -C "tu-correo@example.com"
   ```

2. Copia la clave pública generada:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

3. Ve a tu cuenta de GitHub o GitLab, accede a **Settings** > **SSH and GPG keys**, y añade la clave pública copiada.

4. Prueba la conexión:
   ```bash
   ssh -T git@github.com
   ```
   (Para GitLab: `ssh -T git@gitlab.com`).

#### 3.3.3. Configurar autenticación con tokens personales

Si prefieres usar HTTPS en lugar de SSH, puedes crear un token personal de acceso en GitHub/GitLab y usarlo como contraseña al clonar o realizar *push*. Para configurarlo:

1. Ve a **Settings** > **Developer Settings** > **Personal Access Tokens**.
2. Genera un token con los permisos necesarios.
3. Al realizar una operación que requiera autenticación, usa tu usuario como nombre de usuario y el token como contraseña.

## 4. Estrategia de control de versiones

Tanto **Trunk-Based Development** como **Git Flow** son estrategias populares de control de versiones, cada una con sus propias ventajas y casos de uso. A continuación, se presenta una comparación detallada de ambas metodologías.

### 4.1. Trunk-Based Development

<p align="center">
  <img src={require("../../../img/trunk-based-git.png").default}/>
  <br />
  <em>Esquema de desarrollo Trunk-Based</em>
</p>

En esta estrategia, los desarrolladores fusionan frecuentemente pequeñas actualizaciones en una única rama principal (a menudo llamada *trunk* o *main*).

Las principales ventajas de esta estrategia son:

  - **Facilita la Integración Continua (CI) y el Despliegue Continuo (CD)**: Esta metodología es ideal para entornos donde se practican CI/CD, permitiendo despliegues rápidos y frecuentes. Esto se debe al fusionar cambios pequeños y frecuentes.
  - **Fomenta la iteración rápida y la colaboración**: Los desarrolladores pueden trabajar en paralelo y fusionar sus cambios rápidamente, lo que acelera el ciclo de desarrollo.

Sin embargo, presenta las siguientes desventajas:

  - **Gestión en equipos grandes**: Puede ser difícil de gestionar en equipos grandes sin una estricta disciplina y coordinación.
  - **Rastreo de cambios individuales**: Es menos capaz de rastrear cambios individuales en comparación con Git Flow, lo que puede dificultar la identificación de problemas específicos.

### 4.2. Git Flow

<p align="center">
  <img src={require("../../../img/git-flow-git.png").default} width="500"/>
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

### 4.3. Cuándo usar Trunk-Based Development o Git Flow

- **Trunk-Based Development**: Es ideal para equipos que practican CI/CD, necesitan iteraciones rápidas y trabajan en proyectos con actualizaciones frecuentes. Es especialmente útil en entornos ágiles donde la velocidad y la flexibilidad son cruciales.
- **Git Flow**: Adecuado para proyectos con ciclos de lanzamiento más largos, que requieren un seguimiento detallado de los cambios, y para equipos que prefieren un enfoque más estructurado. Es ideal para proyectos donde la estabilidad y la planificación a largo plazo son prioritarias.

## 5. Git Hooks

Los Git Hooks constituyen una funcionalidad integrada en Git que permite automatizar tareas y aplicar políticas a lo largo del flujo de trabajo. Con ello, Git puede ejecutar acciones en momentos clave del proceso de desarrollo, asegurando la calidad del código y cumpliendo políticas específicas del proyecto.

### 5.1. Definición y uso de Git Hooks

Los Git Hooks son scripts que se ejecutan automáticamente en respuesta a eventos específicos dentro de Git, como antes o después de realizar un `commit`, un `push` o un `merge`.

Para utilizar Git Hooks, es necesario crear scripts en el directorio `.git/hooks` en la raiz del repositorio Git. Estos scripts deben ser ejecutables y llevar el nombre del evento para el que se activan, como `pre-commit`, `pre-push` o `post-merge`. Es fundamental que se otorguen los permisos adecuados al archivo, lo cual puede hacerse con el comando:

```bash
chmod +x pre-commit
```

Al colocarse estos scripts en el directorio correcto y con los permisos necesarios, Git los ejecutará automáticamente cuando ocurra el evento correspondiente.

- **pre-commit**: Se ejecuta antes de crear un commit. Se utiliza para verificar que el código cumple con el formato, realizar pruebas unitarias, validar que los mensajes de commit cumplan con ciertos estándares o evitar errores ortográficos. 

  :::tip Ejemplo
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
  :::

- **pre-push**: Se ejecuta antes de enviar cambios a un repositorio remoto. Se utiliza para evitar que se realicen push en ramas protegidas o para ejecutar pruebas adicionales antes de que los cambios se suban al servidor. 
  
  :::tip Ejemplo
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
  :::

- **post-commit**: Se ejecuta después de realizar un commit. Este hook puede utilizarse para realizar tareas posteriores, como enviar notificaciones automáticas al equipo, informando sobre los cambios introducidos en el proyecto.

  :::tip Ejemplo
  ```bash
  # Hook post-commit para enviar una notificación por correo
  # Este script envía un correo al equipo informando sobre el nuevo commit.

  # Obtener el mensaje del último commit
  commit_message=$(git log -1 --pretty=%B)
  
  # Enviar un correo electrónico (usando sendmail como ejemplo)
  echo "Nuevo commit realizado: $commit_message" | sendmail -v equipo@example.com
  ```
  :::

- **post-merge**: Se ejecuta después de completar un merge. Es útil para realizar acciones como la actualización de dependencias o la regeneración de documentación. 

  :::tip Ejemplo
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
  :::

- **pre-receive** y **post-receive**: Estos hooks se ejecutan en el servidor remoto al recibir cambios mediante push. El `pre-receive` permite verificar que los commits cumplen con las políticas del proyecto antes de aceptar los cambios, mientras que el `post-receive` se puede utilizar para realizar despliegues automáticos en un entorno de producción.

  - **pre-receive**: Un ejemplo de este hook que bloquea el push si se detectan problemas con los mensajes de commit se presenta a continuación.

    :::tip Ejemplo
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
    :::

  - **post-receive**: Un ejemplo de un hook `post-receive` que realiza un despliegue automático en producción tras recibir un push.

    :::tip Ejemplo
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
    pm2 restart mi-aplicacionDescripción: 
    ```
    :::

### 5.2. Recomendaciones para Git Hooks

Al escribir y gestionar Git Hooks, se sugiere seguir las siguientes pautas:

- **Rapidez y fiabilidad**: Los hooks deben ser rápidos para no ralentizar el flujo de trabajo, y deben funcionar de manera confiable, evitando interrupciones en los procesos de desarrollo.
  
- **Documentación clara**: Es fundamental que los scripts estén bien documentados, mediante comentarios que describan su funcionalidad, de modo que cualquier miembro del equipo pueda entender su propósito y modificarlos si es necesario.

- **No intrusivos**: Es importante evitar que los hooks modifiquen automáticamente el código o los archivos sin el consentimiento del desarrollador, ya que esto podría generar conflictos no deseados.

## 6. Casos de uso práctico

### 6.1. Errores comunes 

#### 6.1.1. Conflictos de fusión (Merge Conflicts)

Estos conflictos surgen cuando dos personas modifican la misma línea de un archivo o realizan cambios que no son compatibles.

Solución:
+ Utiliza herramientas de fusión (*merge tools*) para resolver los conflictos de manera eficiente.
+ Coordina con el equipo para gestionar mejor los cambios y minimizar conflictos.

#### 6.1.2. Branches divergentes

Ocurre cuando las ramas se separan tanto que la integración se vuelve complicada.

Solución:
+ Integra cambios con frecuencia (*continuous integration*) para evitar divergencias significativas.
+ Implementa estrategias de gestión de ramas como GitFlow o GitHub Flow para mantener el código sincronizado.
+ Revisa y valida los cambios antes de fusionar ramas altamente divergentes.

#### 6.1.3. Ramas abandonadas

Ramas antiguas y sin uso permanecen en el repositorio, generando desorden.

Solución:
+ Elimina ramas locales y remotas que ya no se necesiten con `git branch -d` y `git push origin --delete`.
+ Mantén un registro organizado de las ramas activas y sus propósitos.
+ Realiza limpiezas periódicas en el repositorio para mantenerlo ordenado y eficiente.

#### 6.1.4. Código no versionado

No realizar commits con regularidad puede resultar en la pérdida de trabajo o de cambios importantes.

Solución:
+ Haz commits frecuentes y significativos para proteger el progreso del proyecto.
+ Usa `git stash` para guardar cambios temporales sin alterar el historial del proyecto.
+ Implementa herramientas de gestión de tareas para vincular los commits con actividades o requerimientos específicos.

#### 6.1.5. Desincronización entre local y remoto

Cuando el repositorio local no está sincronizado con el remoto, se pueden presentar problemas de integración.

Solución:
+ Realiza `git pull` regularmente para mantener tu copia local actualizada con el remoto.
+ Usa `git push` para enviar tus cambios al repositorio remoto, evitando desincronizaciones.
+ Configura alertas o notificaciones para estar al tanto de actualizaciones en el repositorio remoto.

#### 6.1.7. Pérdida de historial de cambios

Ocurre cuando se realizan cambios directamente en el repositorio remoto, omitiendo el historial de commits en local.

Solución:
+ Emplea `git fetch` y `git rebase` para integrar los cambios remotos en el historial local de forma adecuada.
+ Evita hacer modificaciones directamente en la rama principal sin seguir un proceso de revisión adecuado.
+ Utiliza pull requests para realizar revisiones y fusiones, asegurando un historial de cambios claro y ordenado.
