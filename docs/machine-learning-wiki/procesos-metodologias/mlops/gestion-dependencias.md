---
sidebar_position: 4
authors:
  - name: Daniel Bazo Correa
description: Aprender a gestionar las dependencias de tus proyectos en Python.
title: Gestión de dependencias
toc_max_heading_level: 4
---

## 1. Gestión de las dependencias con Poetry

La gestión de dependencias de un proyecto puede realizarse mediante un archivo
`requirements.txt`. Sin embargo, herramientas como Poetry ofrecen
funcionalidades avanzadas.

Poetry permite la instalación automática de todas las dependencias de una
biblioteca, separa dependencias entre proyectos, favorece la reproducibilidad,
gestiona entornos virtuales automáticamente y resuelve problemas de
dependencias.

Para gestionar un proyecto con Poetry desde cero, se siguen los siguientes
pasos:

1. Instalar Poetry utilizando pip:

   ```bash
   pip install poetry
   ```

2. Inicializar Poetry en el directorio del proyecto:

   ```bash
   poetry init
   ```

   Esto genera un archivo `.toml` que almacena la configuración del entorno de
   Python y las dependencias del proyecto.

3. Añadir nuevas librerías al proyecto con el comando:

   ```bash
   poetry add nombre_libreria
   ```

   Esto actualiza e instala la librería en un entorno virtual gestionado por
   Poetry.

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
