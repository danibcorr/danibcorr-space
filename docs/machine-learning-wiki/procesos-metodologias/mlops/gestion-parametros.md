---
sidebar_position: 5
authors:
  - name: Daniel Bazo Correa
description: Gestiona los parámetros de tus proyectos en Python.
title: Gestión de parámetros con Pydantic
toc_max_heading_level: 4
---

## 1. Gestión de parámetros con Pydantic

La gestión de parámetros o parametrización consiste en definir y ajustar los
parámetros que configuran un sistema, modelo o función, con el objetivo de
evitar valores "hardcodeados" y reducir errores al realizar cambios. Se
recomienda centralizar los parámetros en un único archivo para facilitar su
gestión en todo el proyecto.

Pydantic se utiliza para validar y gestionar los parámetros de configuración de
manera estructurada. A continuación, se presenta un ejemplo de implementación en
un archivo `config.py`, donde se definen las variables `data_file_name`,
`model_path` y `model_name`, correspondientes al nombre del fichero de datos, el
directorio del modelo y el nombre del modelo, respectivamente:

```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import DirectoryPath, FilePath

# Clase de configuración base
class Settings(BaseSettings):
   model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8')

   data_file_name: FilePath
   model_path: DirectoryPath
   model_name: str

settings = Settings()
```

Se debe crear un archivo `.env` con los siguientes parámetros:

```plaintext
DATA_FILE_NAME=rent_apartments.csv
MODEL_PATH=models
MODEL_NAME=rf_db_v1
```

Los parámetros definidos se pueden utilizar en cualquier parte del código
mediante la importación de la variable `settings`:

```python
from config import settings

print(f"El nombre del modelo es {settings.model_name}")
```
