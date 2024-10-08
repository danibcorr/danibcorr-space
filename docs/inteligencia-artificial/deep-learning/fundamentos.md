# Estado de la tecnología
Este capítulo aborda los aspectos fundamentales relacionados con este trabajo. La sección [Inteligencia artificial](#secIA) presenta los principios de la inteligencia artificial, centrándose en el aprendizaje profundo. La sección [Capas convolucionales](#secConv) describe el funcionamiento de las capas convolucionales, junto con diversas estructuras utilizadas para la configuración del modelo final. Finalmente, la sección [Interferencias](#secINT) analiza el estado actual de la tecnología en la gestión y clasificación de interferencias.

## Inteligencia artificial
En la última década, el ámbito de la inteligencia artificial ha experimentado un crecimiento significativo, impulsado por la acumulación masiva de datos digitalizados y los avances en *hardware*. Factores clave en este crecimiento han sido los avances en la paralelización de procesos, el desarrollo acelerado de unidades de procesamiento gráfico (GPU) más eficientes y potentes, y la implementación de algoritmos más avanzados.

La inteligencia artificial se define como la capacidad de desarrollar sistemas y algoritmos que emulan la inteligencia humana, con el objetivo de identificar patrones y tomar decisiones a través de la computación. Dentro de la inteligencia artificial, el aprendizaje automático juega un papel fundamental y se clasifica en cuatro tipos principales: aprendizaje supervisado, no supervisado, autosupervisado y por refuerzo [1, 2, 3]. El aprendizaje profundo, una subcategoría del aprendizaje automático, utiliza redes neuronales avanzadas para modelar datos complejos y es aplicable a los cuatro tipos mencionados. En este trabajo, se emplean técnicas de aprendizaje supervisado para abordar el problema planteado.

El aprendizaje supervisado, ilustrado en la Figura 1, se fundamenta en un conjunto de datos etiquetados. El propósito es entrenar un modelo que pueda predecir la salida correcta para datos nunca vistos. Entre los algoritmos que utilizan el aprendizaje supervisado se encuentran la regresión lineal, la regresión logística, las máquinas de vectores de soporte y las redes neuronales. A su vez, los algoritmos supervisados pueden clasificarse en dos tipos: a) algoritmos de clasificación, donde el resultado obtenido a la salida del modelo es la probabilidad de que el dato introducido pertenezca a una clase determinada, y b) algoritmos de regresión, donde se modela la relación entre las variables independientes y una variable dependiente para entrenar un modelo utilizando datos de entrenamiento, con el que posteriormente se predicen valores numéricos en nuevos conjuntos de datos [1].

![Problema de clasificación supervisado](Imagenes/ejemplo_supervisado.drawio.png)
*Figura 1. Problema de clasificación supervisado.*

### Aprendizaje profundo
Primero, es esencial definir el concepto de neurona artificial. Una neurona artificial, también conocida como perceptrón, es un nodo de procesamiento que aplica una función a un dato de entrada y produce un resultado de salida. Una red neuronal es una combinación de neuronas interconectadas que conforman una arquitectura que simula la estructura de las redes neuronales biológicas del cerebro humano. Cada neurona de la red artificial aplica la siguiente función:

\[
\widehat{y} = f\left( \mathbf{W}^{\top}\mathbf{X} + b \right)
\]

donde \(\widehat{y}\) es la salida predicha por la neurona del conjunto de características de entrada \(\mathbf{X}\), \(\mathbf{W}\) es la matriz de los pesos de la neurona, \(b\) es el sesgo, que permite controlar y ajustar la salida de la neurona, y \(f\) es la función de activación que introduce una no linealidad y define el rango de valores en el que se encontrará la salida.

El uso de una sola neurona presenta limitaciones para la realización de tareas complejas. Por lo tanto, se utilizan redes neuronales con múltiples capas, lo que da lugar al aprendizaje profundo [4], como se ilustra en la Figura 2. Una red neuronal, en general, consta de una capa de entrada, capas ocultas y una capa de salida. La capa de entrada es la que recibe los datos que se introducen en el modelo. La capa de salida, por su parte, es la que proporciona los resultados del modelo. Las capas ocultas, situadas entre la capa de entrada y la capa de salida, procesan la información recibida y transmitida entre estas dos capas. Aumentar el número de capas en la red permite realizar operaciones más complejas, pero también puede provocar problemas de sobreajuste si el conjunto de datos es limitado. Por ello, es importante considerar otras alternativas para optimizar el rendimiento y evitar el sobreajuste.

![Diagrama de una red neuronal](Imagenes/red neuronal.png)
*Figura 2. Diagrama de una red neuronal.*

#### a) Parámetros e hiperparámetros
Los parámetros son variables internas del modelo que se aprenden durante el proceso de entrenamiento, como los pesos y sesgos. Por otro lado, los hiperparámetros son variables externas que se definen antes del proceso de entrenamiento y tienen un impacto en el proceso de aprendizaje y generalización del modelo. Ejemplos de hiperparámetros incluyen el número de capas, el número de neuronas en cada capa, el número de iteraciones para entrenar el modelo y las funciones de activación, entre otros.

La función de activación juega un papel crucial al determinar la transformación que experimentan los parámetros de entrada dentro de la neurona. En un modelo, pueden utilizarse diferentes funciones de activación en cada capa. Las funciones de activación son derivables, ya que forman parte del algoritmo de propagación hacia atrás empleado durante el proceso de entrenamiento. Existe una amplia variedad de funciones de activación, algunas de las cuales se ilustran en la Figura 3, incluyendo la función sigmoide, la tangente hiperbólica, ReLU y sus variantes, entre otras [5].

![Funciones de activación](Imagenes/graficas_funciones_activacion.png)
*Figura 3. Funciones de activación.*

#### b) División del conjunto de datos
Los conjuntos de datos utilizados suelen dividirse en tres subconjuntos:

- **Conjunto de entrenamiento**: Es el conjunto principal de datos utilizado en el proceso de aprendizaje, por lo que son datos que ve el modelo y de los que deberá obtener patrones.

- **Conjunto de validación o desarrollo**: Este conjunto de datos se utiliza para evaluar el rendimiento obtenido a la salida del modelo con diferentes valores de hiperparámetros, hasta obtener los valores óptimos.

- **Conjunto de pruebas**: Se utiliza para evaluar el rendimiento final del modelo, una vez entrenado.

#### c) Funciones de coste y pérdida
La función de pérdida, representada como \(\mathcal{L}\), evalúa el rendimiento del modelo por cada iteración, mientras que la función de coste, representada como \(\mathcal{J}\), se define como la media de la función de pérdida en todo el conjunto de datos. Durante el entrenamiento, se minimiza la función de pérdida para ajustar los parámetros del modelo con el objetivo de mejorar su capacidad para hacer predicciones. Dependiendo del tipo de problema, se utilizan diferentes funciones de pérdida y coste [6, 7].

Para problemas de regresión, se suelen utilizar funciones de pérdida como el error cuadrático medio (MSE) o el error absoluto medio (MAE). El MSE calcula la media de los cuadrados de las diferencias entre las predicciones y los valores reales, penalizando más los errores grandes. Por otro lado, el MAE calcula la media de las diferencias absolutas entre las predicciones y los valores reales, siendo más robusto frente a valores atípicos.

Para problemas de clasificación, se utilizan funciones de pérdida como la entropía cruzada, que mide la diferencia entre dos distribuciones de probabilidad, la predicha y la real. Esta función es común en problemas de clasificación binaria y multiclase.

#### d) Entrenamiento
El entrenamiento de una red neuronal implica dos algoritmos: a) la propagación hacia adelante, que transmite los datos de entrada a la salida, y b) la propagación hacia atrás, que ajusta los pesos y sesgos mediante derivadas para optimizar la salida y minimizar la pérdida.

El objetivo es mejorar el rendimiento ajustando los pesos y sesgos con el descenso del gradiente, donde el modelo evalúa la dirección de la función de coste en un punto y converge a un mínimo. Sin embargo, existen alternativas al descenso del gradiente, como los algoritmos evolutivos [8] o la optimización por enjambre de partículas [9].

La actualización de los parámetros de peso y sesgo, respectivamente, se realiza mediante las reglas:

\[
\mathbf{W} := \mathbf{W} - \alpha\frac{\partial \mathcal{J}(\mathbf{W}, b)}{\partial \mathbf{W}}
\]
\[
b := b - \alpha\frac{\partial \mathcal{J}(\mathbf{W}, b)}{\partial b}
\]

donde \(\frac{\partial \mathcal{J}(\mathbf{W}, b)}{\partial \mathbf{W}}\) y \(\frac{\partial \mathcal{J}(\mathbf{W}, b)}{\partial b}\) son la derivada parcial de la función de coste \(\mathcal{J}(\mathbf{W}, b)\) con respecto a las variables \(\mathbf{W}\) y \(b\), respectivamente. El parámetro \(\alpha\) se define como el ratio de aprendizaje, el cual determina el tamaño de paso en cada iteración durante el proceso de descenso del gradiente.

Técnicas como \emph{Momentum}, \gls{RMSprop} y \gls{Adam} mejoran la técnica del descenso del gradiente. \emph{Momentum} suaviza las oscilaciones, \gls{RMSprop} ajusta la tasa de aprendizaje dinámicamente y \gls{Adam} combina ambas técnicas \cite{heaton2020applications}\cite{adam}.

La evaluación del modelo se realiza verificando su capacidad de generalización en datos no visualizados durante el entrenamiento. En esta situación pueden darse diferentes casos. El sobreajuste se produce cuando el modelo se ajusta demasiado a los datos de entrenamiento y presenta un rendimiento bajo en nuevos datos, mientras que el infraajuste ocurre cuando el modelo es demasiado simple o el conjunto de datos es insuficiente. La Figura b) de la Figura \ref{fig:under_overfitting} representa una correcta generalización.

\subsubsection{e) Optimización}

Los métodos de optimización, entre los que se incluyen la regularización, la normalización de datos, la inicialización de pesos y el uso de lotes, son fundamentales para combatir el sobreajuste y acelerar el aprendizaje \cite{heaton2020applications}\cite{howard2020deep}.

La regularización, que tiene como objetivo reducir el valor global de los pesos, abarca técnicas como la regularización \(L_1\) y \(L_2\). Estas penalizan respectivamente la suma de los valores absolutos y la suma de los cuadrados de los pesos. Otra técnica relevante es el \emph{Dropout}, que durante el proceso de aprendizaje suprime aleatoriamente neuronas, lo que disminuye la posibilidad de sobreajuste \cite{dropout}. 

La normalización de los datos de entrada facilita la optimización de la función de coste. Esta práctica implica escalar las características de los datos para que tengan una media de $0$ y varianza $1$, o reescalar las características para que se encuentren en un rango específico, como \([0, 1]\). Este procedimiento mejora la convergencia de los algoritmos de optimización al reducir la dispersión de los datos.

Una inicialización adecuada de los pesos es también esencial para un entrenamiento eficaz. Por ejemplo, la inicialización \textit{Glorot} ajusta los pesos iniciales de tal manera que se mantenga la varianza de las activaciones a lo largo de las capas, evitando problemas de desvanecimiento o explosión de gradientes. Otra estrategia consiste en la inicialización de los pesos mediante el uso de modelos preentrenados, que emplea pesos de redes previamente entrenadas en grandes conjuntos de datos, acelerando el entrenamiento y mejorando el rendimiento en tareas específicas.

Además, la división de conjuntos de datos grandes en lotes permite avanzar antes de procesar la totalidad del conjunto de datos, lo que acelera el entrenamiento y reduce el uso de memoria \cite{power2batch}. Los métodos de optimización basados en lotes, como el descenso de gradiente estocástico (\glsf{SGD}) y sus variantes (p. ej., \gls{Adam} y \gls{RMSprop}), se benefician de esta división, permitiendo actualizaciones de los pesos más frecuentes y estables.
