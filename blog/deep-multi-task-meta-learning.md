---
title: Deep Multi Task y Meta Learning
authors: daniel
tags: [deeplearning]
---


<!-- truncate -->

## 1. Conceptos Fundamentales

El **multi-task learning** consiste en la capacidad de un modelo de realizar múltiples tareas relacionadas de forma simultánea, permitiendo adaptaciones mínimas para cada tarea específica a partir de un único modelo. Esto se logra ajustando el output o adaptando los parámetros a cambios del entorno y transfiriendo patrones aprendidos entre tareas. Este enfoque busca optimizar los recursos y mejorar la generalización del modelo en entornos dinámicos.

Por su parte, el **meta-learning** se refiere a la capacidad de los modelos de "aprender a aprender", logrando que el modelo identifique automáticamente patrones y relaciones en los datos. El objetivo es aumentar la robustez del modelo ante cambios en la entrada y mejorar su capacidad de generalización, incluso con conjuntos de datos limitados. Esto resulta útil cuando la recolección de datos es costosa o involucra problemas de privacidad, permitiendo al modelo optimizar recursos y mejorar el desempeño en múltiples tareas a partir de datos mínimos.

Este enfoque es especialmente adecuado para datasets pequeños donde la proporción de datos etiquetados es menor a la de datos no etiquetados. La idea es que el modelo extraiga patrones de los datos etiquetados y los aplique a los datos no etiquetados, evaluando si existen correlaciones útiles. Además, este método facilita la detección de variaciones (shifts) en las distribuciones de los datos.

## 2. Parámetros en Multi-Task Learning

Al implementar modelos en este contexto, se deben definir varios parámetros clave:

- **$\theta$**: Representa todos los parámetros del modelo.
- **Función $f_\theta(y|x)$**: Define la red neuronal, que proporciona una distribución de probabilidades para $y$ dado $x$.
- **Tarea ($T_i$)**: Se define como $T_i = \{p_i(x), p_i(y|x), L_i\}$, donde:
  - $p_i(x)$ es la distribución de $x$.
  - $p_i(y|x)$ es la distribución de probabilidades de $y$ dado $x$.
  - $L_i$ representa la función de pérdida de la tarea.

En un contexto de multi-task learning, la función de pérdida puede ser la misma para todas las tareas, aunque puede depender del tipo de datos, ya sean variables discretas o continuas. El objetivo principal es minimizar la pérdida total del modelo para todas las tareas.

Cuando se define un **descriptor de tarea** ($z_i$), se pasa de modelar $f_\theta(y|x)$ a $f_\theta(y|x, z_i)$, buscando minimizar $\min_{\theta} \sum_{i=1}^{T} L_i(\theta, D_i)$, es decir, reducir la pérdida para cada dataset $D_i$ en todas las tareas $T$. Adicionalmente, es común añadir un peso en la minimización, $\min_{\theta} \sum_{i=1}^{T} w_i \cdot L_i(\theta, D_i)$, que ajusta la prioridad de cada tarea según su importancia.

## 3. Opciones de Multi-Tasking

Algunas de las principales estrategias para abordar tareas múltiples incluyen:

- Uso de un modelo dedicado para cada tarea específica, aunque este enfoque no es escalable.
- Implementación de **condicionales en los embeddings** para combinar información utilizando técnicas como:
  - **Concatenación de embeddings**.
  - **Suma de componentes lineales de embeddings**.
  - **Multi-head**, que utiliza un mismo backbone pero con capas de salida diferentes (similar al modelo **Mixture of Experts** o MOE). Por ejemplo, la técnica Multi-Gate Mixture of Experts.
  - **Condicionales multiplicativos**, aplicando factores multiplicativos a los embeddings para ajustar su combinación de acuerdo con las tareas.

## 4. Aprendizaje Contrastivo

Los métodos de **aprendizaje contrastivo** buscan que los embeddings de datos similares (mismo grupo o clase) se encuentren próximos en el espacio latente del modelo, mientras que los embeddings de clases distintas estén más alejados. Esto permite obtener representaciones más distintivas y facilita la agrupación de datos en el espacio latente.

Este enfoque es útil en sistemas de **computación visual** con datasets pequeños y curados, donde al aplicar transformaciones a los datos originales, el modelo aprende que las transformaciones son equivalentes al dato original. Así, el modelo se vuelve más robusto y obtiene una mejor comprensión de las características globales de las imágenes, evitando características genéricas que dificulten la clasificación. Los métodos contrastivos permiten representar el espacio latente del modelo de forma más agrupada, lo que mejora la clasificación y facilita la detección de muestras fuera de la distribución.

### 4.1. Proceso de Entrenamiento Contrastivo

Un proceso común en el aprendizaje contrastivo incluye los siguientes pasos:
1. **Dataset no etiquetado** → 2. **Modelo preentrenado** → 3. **Fine-tuning** con un dataset etiquetado pequeño → 4. **Predicción**. Este proceso se repite hasta alcanzar una pérdida mínima o un número máximo de iteraciones.

### 4.2. Minimización de la Distancia entre Embeddings

El proceso contrastivo generalmente inicia con un dato $X$ de un batch al que se le aplican varias transformaciones, generando pares positivos ($x_1$, $x_2$). Pasando estas muestras por un encoder, se obtienen representaciones (embeddings) que se proyectan en un espacio de menor dimensionalidad para facilitar la agrupación de datos similares y minimizar la pérdida contrastiva.

La similitud entre embeddings suele medirse con normalización L2 y distancias como la **distancia euclidiana** o la **similitud del coseno**. Sin embargo, minimizar exclusivamente la distancia euclidiana puede llevar al colapso del modelo, sin obtener representaciones útiles. Para mejorar esto, se aplican otras funciones de pérdida, como la **Triplet Loss**.

#### Triplet Loss

La **Triplet Loss** utiliza un ancla ($X$), un par positivo ($X^+$) y un par negativo ($X^-$). Su objetivo es minimizar la distancia entre la representación del dato $X$ y su par positivo, y maximizar la distancia respecto al par negativo. Además, se introduce un margen (Hinge) que limita la distancia y estabiliza la función de pérdida.

### 4.3. Limitaciones del Aprendizaje Contrastivo

El aprendizaje contrastivo presenta varias limitaciones:

- **Dependencia de las transformaciones de datos**: Para obtener buenos resultados, las transformaciones deben ser adecuadas. Técnicas como **resizes**, **crops**, ajustes de color y métodos como **CutMix** y **MixUp** ayudan a robustecer el modelo ante el ruido.
- **Pérdida contrastiva por batches**: Los pares negativos pueden coincidir con las clases de los pares positivos, aunque en datasets grandes esto es poco problemático; sin embargo, sí es una limitación en datasets pequeños.
- **Balance de muestras**: Se asume que las clases en el dataset están equilibradas, lo que no siempre se cumple.
- **Obtención de pares negativos**: Es complejo definir pares negativos efectivos, ya que deben ser lo suficientemente distintos de los pares positivos para asegurar representaciones diferenciadas.
- **Requerimiento de un alto número de épocas**: El rendimiento depende en gran medida del tamaño del batch y del número de épocas, ya que la obtención de pares negativos es fundamental para el proceso.