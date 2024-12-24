---
sidebar_position: 6
authors:
  - name: Daniel Bazo Correa
description: Crea y almacena tus artefactos en repositorios.
title: Gestión y publicación de repositorios
toc_max_heading_level: 4
---

## 1. Publicación de un paquete de Python en PyPI

Para publicar un paquete de Python en PyPI, es necesario que el proyecto tenga una estructura organizada. Es recomendable alojar el paquete en un repositorio para facilitar el control de versiones, la implementación de pipelines CI/CD y otras prácticas de desarrollo.

El primer paso es crear un archivo `setup.py` que contenga la configuración del paquete. A continuación, se muestra un ejemplo de configuración básica:

```python
import os
from setuptools import setup, find_packages
import codecs

here = os.path.abspath(os.path.dirname(__file__))

with codecs.open(os.path.join(here, "README.md"), encoding="utf-8") as fh:
    long_description = "\n" + fh.read()

VERSION = "0.1.1"
DESCRIPTION = "Essential utilities for data scientists"
LONG_DESCRIPTION = """
    A package of essential tools and utilities for streamlining data science tasks like manipulation,
    augmentation, visualization, among others, enhancing daily *workflows*.
"""

setup(
    name="datasu",
    version=VERSION,
    author="danibcorr (Daniel Bazo)",
    description=DESCRIPTION,
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/danibcorr/data-scientist-utilities",
    packages=find_packages(),
    install_requires=[
        "numpy",
        "numba",
        "ipywidgets",
        "matplotlib",
        "seaborn",
        "pandas",
        "scikit-learn",
    ],
    keywords=[
        "python",
        "data science",
        "machine learning",
        "deep learning",
        "artificial intelligence",
    ],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: MIT License",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
)
```

En el archivo `setup.py` se especifican la versión del paquete, una descripción, los requerimientos y otra información relevante. Es posible consultar parámetros adicionales en la [guía oficial de setuptools](https://setuptools.pypa.io/en/latest/userguide/).

Una vez configurado el archivo `setup.py`, se pueden generar los archivos de distribución utilizando el comando:

```bash
python setup.py sdist bdist_wheel
```

Antes de publicar el paquete en PyPI, se recomienda realizar pruebas locales para asegurarse de que todo funcione correctamente. Para instalar el paquete localmente, utilice:

```bash
pip install /dist/nombre_fichero.whl
```

Esto permite probar el paquete en un entorno local y ejecutar tests para verificar su funcionamiento.

Para publicar en PyPI, se requiere una cuenta en el servicio y la configuración de autenticación multifactor (2FA). Luego, es necesario obtener un token de API desde la sección correspondiente en la cuenta de PyPI. Este token puede almacenarse en un archivo `.pypirc` o guardarse de manera segura.

Para publicar el proyecto, se utiliza el siguiente comando:

```bash
twine upload dist/*
```

Si el nombre del proyecto ya está en uso, se recibirá un error y será necesario seleccionar un nombre diferente para el paquete.
