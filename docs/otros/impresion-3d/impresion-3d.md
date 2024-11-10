---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Aprende lo necesario de impresión 3D.
title: Impresión 3D
toc_max_heading_level: 4
---

# Conocimientos de impresión 3D

Aunque los conceptos presentados en este bloque son aplicables a diversas impresoras, nos centraremos principalmente en la impresora Ender 3 S1 para brindar un enfoque específico.

## Bibliografía

* [https://www.youtube.com/@Control3D](https://www.youtube.com/@Control3D)
* [https://www.klipper3d.org/](https://www.klipper3d.org/)
* [https://www.reddit.com/r/klippers/](https://www.reddit.com/r/klippers/)

## Consejos de impresión 3D generales

### Retracciones (stringing)

Las retracciones se refieren a los movimientos realizados por el extrusor cuando se desplaza de un punto A a un punto B sin expulsar material, lo que puede resultar en la formación de hilos durante la impresión. Es importante destacar que las retracciones son específicas para cada modelo de impresora. Además, la configuración de retracciones puede variar entre diferentes materiales e incluso dentro de una misma marca de material.

#### Parámetros por ajustar

* **Distancia de retracción.** Se refiere a la cantidad de movimiento hacia atrás que se realiza para aliviar la presión en el extrusor. Es importante tener en cuenta que aumentar la distancia de retracción no siempre resulta en una mejora, ya que puede ocasionar atascos en el hotend. Para la mayoría de los casos de impresión con PLA, velocidades de 30/40 mm de retracción suele ser suficiente.
* **Velocidad de desplazamiento.** Velocidad de desplazamiento durante las retracciones que depende de la mecánica de la impresora. No existe una velocidad única que funcione para todas las impresoras, por lo que es importante ajustarla según las especificaciones y condiciones de la máquina.
* **Salto en Z.** El salto en Z, que es un ajuste de los slicers, puede ocasionar problemas de hilos en algunos casos, pero en otros puede resultar útil. Una configuración de salto en Z de 0.2 mm suele ser una buena opción para evitar la aparición de hilos no deseados.
* En el caso de una impresora con **extrusor directo**, como la Ender 3 S1, se recomienda una distancia de retracción de 1 mm a una velocidad de 30 mm/s. En cuanto a la velocidad de desplazamiento, se sugiere un rango de 120-150 mm/s, pero es importante realizar pruebas y ajustes según las necesidades específicas de la impresora.

### Imprimir más rápido

La velocidad de impresión no siempre se traduce en un menor tiempo de impresión de manera directa, ya que esto depende del tipo de material utilizado, las características de la pieza y otros factores. Aunque aumentar la velocidad de impresión puede acelerar el proceso, también puede afectar la calidad de la impresión y aumentar el riesgo de errores.

#### Parámetros por ajustar

* **Altura de capa**. Para lograr una excelente calidad de impresión, se puede reducir la altura de capa a valores de 0.15/0.16. Al disminuir la altura de capa, se reduce la distancia entre capas y se obtiene una mayor calidad en las piezas impresas.
* **Relleno.** El tipo de relleno y el patrón utilizado dependerán de la pieza a imprimir. El patrón de relleno más recomendado en general es el Giroide, ya que distribuye mejor las cargas en toda la superficie de impresión. Sin embargo, es importante ajustar el relleno según las necesidades específicas de cada pieza. En Prusa Slicer, se puede utilizar el parámetro "combinar el relleno cada X" para alternar el relleno en una capa sí y una capa no. En CURA, este parámetro se llama "grosor de la capa de relleno", y su valor debe ser el doble de la altura de capa para imprimir soportes una capa sí y una capa no.
* **Perímetros**. Para piezas que requieren mayor resistencia, se puede utilizar un grosor de 3 capas de perímetro. Sin embargo, en otros casos, 2 capas pueden ser suficientes. Como recomendación, la velocidad de impresión utilizada para el perímetro interno puede ser la mitad de la velocidad utilizada para los perímetros externos y los detalles más pequeños.
* **Cambios de boquilla**. Cuando se utiliza una boquilla de 0.6 mm o mayor, se pueden utilizar alturas de capa más grandes y también aumentar la cantidad de capas para el relleno, incluso cada 3 capas.
* **Ajustes de velocidad**. Los ajustes de velocidad dependen de varios factores, como la capacidad de la impresora y la calidad deseada. Es recomendable realizar pruebas y ajustes gradualmente para encontrar la velocidad de impresión óptima para cada situación.

### Mejorar calidad de las piezas

El volumen del depósito por inercia es un parámetro importante para mejorar las costuras y las retracciones en la impresión 3D. Se busca encontrar una distancia adecuada para evitar que las capas queden apelmazadas o abiertas.

Se puede comenzar probando con un volumen de depósito de 0.128 mm3 (milímetros cúbicos). Si las capas quedan apelmazadas, se puede duplicar este valor. Sin embargo, no se recomienda aumentar aún más el volumen, a menos que se esté utilizando una boquilla de 0.6 mm o 0.8 mm. Por otro lado, si las capas quedan abiertas con un volumen de 0.128 mm3, se puede reducir a la mitad.

### Configuración para boquillas de 0.6

Es recomendable activar la opción de "limpiar la boquilla durante las retracciones" para prevenir la formación de hilos y evitar la contaminación en la pieza impresa. Esta función implica realizar un pequeño movimiento de la boquilla para eliminar cualquier exceso de material antes de iniciar la retracción. Asimismo, es beneficioso activar el "depósito por inercia", lo que ayuda a mejorar la calidad de las costuras y reduce la apariencia de las mismas en la pieza impresa. Esta opción permite un flujo continuo de material en la boquilla durante los movimientos de retracción, evitando así las inconsistencias en la deposición del material. Además, se recomienda establecer un valor bajo para el "cebado adicional de retracción" de alrededor de 0.3 mm3. Esto asegurará que se expulse una pequeña cantidad de material al comienzo de cada retracción, lo que ayudará a evitar la obstrucción en la boquilla y mejorar la calidad de las impresiones.

La combinación de estas configuraciones optimizará el proceso de impresión y ayudará a obtener resultados más precisos y limpios en las piezas impresas.

#### Perfil calidad alta

* Altura de capa de 0.15 mm hasta 0.28 mm.
* Ancho de linea de 0.66 mm con una altura de capa inicial SIEMPRE de 0.3 mm.
* 2 paredes.
* Si la pieza contiene voladizos o áreas que requieren un buen soporte, se sugiere imprimir primero el relleno y luego las paredes. Esto asegurará una mejor sujeción de los voladizos durante el proceso de impresión.
* Combinar relleno cada 3 capas.&#x20;
* Velocidad de relleno de 60 mm/s, pared exterior de 15 mm/s y pared interior 30 mm/s.

#### Perfil calidad media

* Altura de capa de 0.28 hasta 0.35.
* Ancho de linea de 0.66 mm con una altura de capa inicial SIEMPRE de 0.3 mm.
* 2 paredes.
* Si la pieza contiene voladizos o áreas que requieren un buen soporte, se sugiere imprimir primero el relleno y luego las paredes. Esto asegurará una mejor sujeción de los voladizos durante el proceso de impresión.
* Velocidad de relleno de 65 mm/s, pared exterior de 20 mm/s y pared interior 40 mm/s.

#### Perfil calidad baja

* Altura de capa de 0.35 hasta 0.48.
* Ancho de linea de 0.72 mm con una altura de capa inicial SIEMPRE de 0.3 mm.
* 1 paredes.&#x20;
* Velocidad de relleno de 70 mm/s, pared exterior de 25 mm/s y pared interior 50 mm/s.

## Klipper

Calibración de resonancia para mantener la calidad de la impresión, permite reducir los tiempos, aumentar velocidades, etc.

## Anotaciones variadas

Mejorar la calidad de las impresiones:

+ Orden monotonico superior o inferior
+ Desplazamiento en modo peinado

A mayor velocidad mayor a de ser la temperatura para fundir el plástico