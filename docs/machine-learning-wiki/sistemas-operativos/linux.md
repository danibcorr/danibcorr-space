---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Conoce un poco más del sistema operativo Linux.
title: Linux
toc_max_heading_level: 4
---

:::danger **Este contenido aún está en desarrollo**  

Actualmente, no es la mejor opción para tu aprendizaje, ya que no está terminado. Estoy utilizando este espacio para probar que todo funciona correctamente y para planificar cómo estructurar el contenido final.  

Te agradezco mucho tu paciencia y comprensión. Soy solo una persona trabajando en esto, y a veces no me da tiempo para todo. ¡Espero pronto tener algo genial para ti!  
:::  

## Bibliografía

+ [60 Linux Commands you NEED to know (in 10 minutes)](https://www.youtube.com/watch?v=gd7BXuUQ91w)
  
## Introducción

<p align="center">
  <img src={require("../../img/linux-logo.png").default} height="300"/>
  <br />
  <em>Logo de Linux</em>
</p>

**Linux** es un sistema operativo de código abierto basado en Unix, creado por Linus Torvalds y lanzado en 1991. Se caracteriza por su robustez, seguridad y flexibilidad, siendo popular tanto en servidores como en dispositivos personales. Linux dispone de una amplia variedad de distribuciones adaptadas a diferentes necesidades, desde entornos de escritorio hasta servidores y sistemas embebidos. La comunidad de desarrolladores y usuarios contribuye a su desarrollo y mejora continua.

## Comandos útiles

- `ssh nombre-usuario@IP-maquina`: Conectarse a una máquina por SSH.
- `pwd`: Muestra el directorio actual.
- `ls`: Lista el contenido del directorio actual.
  - `ls -l`: Muestra el contenido en formato de lista.
  - `ls -al`: Incluye archivos ocultos.
- `cd`: Cambia el directorio.
- `touch archivo`: Crea un archivo vacío. Ejemplo: `touch hola.txt`.
- `cat archivo`: Muestra el contenido de un archivo. Ejemplo: `cat hola.txt`.
- `mkdir directorio`: Crea un directorio.
- `cp archivo destino`: Copia un archivo a un destino.
- `mv archivo destino`: Mueve un archivo a un destino.
- `rm archivo`: Elimina un archivo.
- `rmdir directorio`: Elimina un directorio vacío. Utilizar `rmdir -rf directorio` para eliminar un directorio no vacío.
- `whoami`: Muestra el nombre del usuario actual.
- `useradd nombre-usuario`: Crea un nuevo usuario.
- `man comando`: Muestra el manual de un comando. Ejemplo: `man cat`.
- `wget url`: Descarga un archivo desde una URL.
- `zip nombre.zip archivo`: Comprime un archivo en un archivo ZIP.
- `unzip nombre.zip`: Descomprime un archivo ZIP.
- `less archivo`: Muestra el contenido de un archivo una página a la vez. Ejemplo: `less hola.txt`.
- `cmp archivo1 archivo2`: Compara dos archivos byte a byte.
- `diff archivo1 archivo2`: Muestra las diferencias entre dos archivos.
- `find directorio -name "nombre fichero"`: Busca un archivo en un directorio.
- `chown usuario archivo`: Cambia el propietario de un archivo.