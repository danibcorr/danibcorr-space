---
sidebar_position: 5
authors:
  - name: Daniel Bazo Correa
description: Creación y uso de logs en Python.
title: Creación y uso de logs
toc_max_heading_level: 4
---

## 1. Creación y registro de logs con Loguru

El logging permite registrar y monitorizar las actividades de las aplicaciones durante su ejecución. A diferencia de `print`, los logs proporcionan una forma más estructurada y sofisticada de gestionar mensajes, lo cual es esencial en aplicaciones en producción.

Loguru simplifica la configuración de logs en comparación con la biblioteca `logging` de Python, que es más compleja de configurar. Loguru opera a través de una única instancia por aplicación, independientemente del número de veces que se importe la librería. Una vez configurado Loguru en cualquier parte del código o en un archivo de configuración, dicha configuración se aplica globalmente. En cada entorno de Python configurado con Poetry en el que se ejecuta el proyecto, solo se puede tener un fichero de log, cuya información pertenece a una misma aplicación.

El siguiente código muestra cómo crear un log de tipo `INFO`:

```python
from loguru import logger

logger.info("¡Hola!, esto es un mensaje de información")
```

Este código genera un log que incluye información sobre la fecha, hora de ejecución, tipo de log (`INFO`), función, módulo y la línea de código correspondiente.

### 1.1. Niveles de logs

Loguru permite definir diferentes niveles de logs, organizados jerárquicamente:

- **DEBUG**: Proporciona detalles completos sobre el funcionamiento del programa.
- **INFO**: Informa sobre el flujo de ejecución del programa.
- **WARNING**: Señala posibles problemas que pueden gestionarse en el momento, pero que podrían ser relevantes para el programa.
- **ERROR**: Indica un error en una parte específica del código.
- **CRITICAL**: Identifica errores críticos que impiden el funcionamiento del código.

### 1.2. Almacenamiento de logs en archivos

Loguru permite almacenar logs en archivos. Por ejemplo:

```python
from loguru import logger

logger.add("programa.log")
```

### 1.3. Rotación de logs

Es posible establecer rotaciones para los archivos de log:

```python
from loguru import logger

# Rotación cuando el archivo alcance 1 MB
logger.add("programa.log", rotation="1 MB")

# Rotación diaria a una hora específica
logger.add("programa.log", rotation="13:15")
```

### 1.4. Almacenamiento de logs por nivel de jerarquía

Se pueden almacenar logs en archivos diferentes según su nivel de jerarquía:

```python
from loguru import logger

logger.add("info.log", level="INFO")
logger.add("critical.log", level="CRITICAL")
```

- `info.log` almacenará todos los logs a partir del nivel `INFO`, excluyendo `DEBUG`.
- `critical.log` solo almacenará los logs de nivel `CRITICAL`.

### 1.5. Uso de decoradores

Loguru permite el uso de decoradores para capturar excepciones en funciones:

```python
from loguru import logger

@logger.catch
def funcion(a, b):
    return a - b
```

Este decorador facilita la captura y el registro automático de errores en las funciones.
