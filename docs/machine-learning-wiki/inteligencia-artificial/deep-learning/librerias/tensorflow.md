---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
title: Tensorflow
toc_max_heading_level: 4
---

:::danger **Este contenido aún está en desarrollo**

Actualmente, no es la mejor opción para tu aprendizaje, ya que no está
terminado. Estoy utilizando este espacio para probar que todo funciona
correctamente y para planificar cómo estructurar el contenido final.

Te agradezco mucho tu paciencia y comprensión. Soy solo una persona trabajando
en esto, y a veces no me da tiempo para todo. ¡Espero pronto tener algo genial
para ti!  
:::

<div align="justify">

# Tensorflow

## Bibliografía

- [https://www.tensorflow.org/api_docs](https://www.tensorflow.org/api_docs)
- [Deep Learning by deeplearning.ai | Coursera](https://www.coursera.org/specializations/deep-learning)
- [Certificado profesional de DeepLearning.AI desarrollador de TensorFlow | Coursera](https://www.coursera.org/professional-certificates/tensorflow-in-practice)

## Anexo A: Terminología útil

Aquí se reúnen las palabras, términos, conceptos etc. claves a tener en cuenta a
modo de recordatorio. No tiene ningún tipo de orden, ni pretende ser el primer
capítulo a visualizar.

- **La letra ‘x’ se asocia a la variable independiente**, lo que usamos para
  hacer predicciones, por ejemplo imágenes. Mientras que la **letra ‘y’ se
  asocia a la variable dependiente**, lo que se denominan etiquetas y es nuestro
  objetivo obtener una predicción que tenga una alta probabilidad de parecerse a
  dicha ‘y’, un ejemplo de etiquetas pueden ser los nombres de las imágenes que
  permiten clasificar razas de perros.
- **weigth** = pesos: valores aleatorios con los que se inicializan a las
  neuronas, estos parámetros son fundamentales para determinar el tipo de
  funcionamiento de una red.
  - Forma (shape) → w(tamaño input, número de neuronas)
- **bias** = sesgo:
  - Forma (shape) → b(1, número de neuronas)
- Un **set de datos de puede dividir** en:
  - Set de entrenamiento (train set).
  - Set de desarrollo o validación (dev set o validation set).
  - Set de pruebas (test set)
- Función de pérdida (**Loss function**): función que mide el rendimiento del
  modelo en uno de los ejemplos del set de entrenamiento.
- Función de coste (**Cost function**): función que mide el rendimiento del
  modelo en todos los ejemplos del set de entrenamiento. Sería la media de cada
  una de las funciones de pérdidas de cada ejemplo del set de entrenamiento.
- **Dataset**: una colección que devuelve un tuple de su variable independiente
  y dependiente para un solo elemento.
- **DataLoader**: un iterador que proporciona un flujo de grupos reducidos
  (mini-batches), donde cada grupo reducido es un tuple de un lote de variables
  independientes y un lote de variables dependientes.
- **one-hot encoding**: vectores de 0’s con el tamaño del número de clases que
  tenga el dataset, cada categoría representa una posición en el vector por lo
  que si la imagen contiene algún elemento de alguna clase el vector tendrá un 1
  en la posición del vector que corresponderá a su clase.
- Es importante saber que **una clasificación** pretende predecir una clase o
  categoría mientras que un modelo de **regresión** intenta predecir 1 o más
  cantidades numéricas.

## Capítulo 0: Útiles

### 0.1. Descomprimir ficheros

Muchos de los datasets se encuentran comprimidos, si usamos Colab será pesado
subir los ficheros a Drive además del tiempo requerido para ello.

```python
import zipfile
import os

arhicvo_zip_descomprimir = './cats_and_dogs_filtered.zip'
lugar_descomprimir = ''

if os.path.exists(lugar_descomprimir) == False:

	zip_ref = zipfile.ZipFile(lugar_descomprimir , 'r')
	zip_ref.extractall()
	zip_ref.close()
```

### 0.2. Utilizar Weights & Biases (wandb)

Podemos utilizar WandB para el registro de la evolución de nuestro módulo.
Utilizar WandB nos permite obtener un registro del aprendizaje del modelo,
compartir información en tiempo real, etc.

```python
import wandb

!wandb login

# Ejemplo de parámetros que podemos rellenar para crear una instancia
wandb.init(
    settings = wandb.Settings(start_method="thread"),
    project = "Transfer-Learning-Inception-Perros-vs-Gatos",
    config = {
        "learning_rate": lr,
        "epochs": num_epocas,
        "batch_size": tam_batch,
        "loss_function": "binary_crossentropy",
        "architecture": "Inception",
        "dataset": "Dog-vs-Cat"
        }
    )

config = wandb.config
```

### 0.3. Utilizar modelos pre-entrenados

Al importar la librería de `Tensorflow`, podemos utilizar
`tf.keras.applications.` para que aparezca la lista de modelos pre-entrenados
disponibles.

Tener en cuenta, que dependiendo del modelo pre-entrenado a utilizar deberemos
seguir pasos específicos. Por ejemplo, por cómo ha sido entrenado ResNet no
podemos utilizar ni `BatchNormalization()` ni tampoco realizar normalización en
los datos ya que requiere realizar el procesado de la siguiente manera:

```python
train_datagen = ImageDataGenerator(
    dtype='float32',
    preprocessing_function = preprocess_input,
    horizontal_flip = True,
    validation_split = 0.05 # Division del dataset de entrenamiento a 80/20, 20 para validación
)
```

El ejemplo anterior es uno de los múltiples casos que se puedan dar por lo que
lo más recomendado es visitar siempre la documentación de `Tensorflow` .

Lo primero para poder hacer uso de los modelos pre-entrenados de `Tensorflow` es
cargar el modelo con los ajustes deseados:

```python
import tensorflow as tf

#   Modelo
modelo_base = tf.keras.applications.ResNet50(
  weights = 'imagenet', # Pesos con los que ha sido entrenado el modelo
  input_shape = (224, 224, 3), # Dimensión de los datos esperada por el modelo
  include_top = False # Eliminamos las últimas capas
)
```

Posteriormente, debemos congelar los parámetros del modelo para no
reentrenarlos.

```python
for capa in modelo_base.layers:

  capa.trainable = False
```

Para ajustar el modelo pre-entrenado a nuestro problema, debemos añadir nuevas
capas al modelo. Estas serán las capas que entrenaremos en primera instancia
para posteriormente descongelar el modelo y entrenarlo al completo.

```python
def Modelo(modelo_base):

		# Con modelo_base.summary() podemos ver todas las capas que cuenta el modelo
		# Estas capas se encuentran asociadas a un nombre que también se ve reflejado
		# al usar el método summary() por lo que apuntamos el nombre de la última capa
    ultima_capa = modelo_base.get_layer('conv5_block3_out')
    salida_capa = ultima_capa.output

    x = layers.Flatten()(salida_capa)

    x = layers.Dense(units = 512, activation = 'relu')(x)
    x = layers.Dropout(rate = 0.2)(x)

    x = layers.Dense(units = 256, activation = 'relu')(x)
    x = layers.Dropout(rate = 0.2)(x)

    x = layers.Dense(units = num_clases, activation = 'softmax')(x)

    modelo = Model(modelo_base.input, x)

    modelo.compile(
        optimizer = Optimizer.Adam(learning_rate = lr),
        loss = loss.CategoricalCrossentropy(),
        metrics = ['accuracy']
    )

    return modelo

modelo = Modelo(modelo_base)
```

### 0.4. Mostrar gráficas de pérdidas y accuracy

```python
history = modelo.fit(...)

# Creamos una gráfica para mostrar el accuracy obtenido tanto en el set de entrenamiento como en el de validacion
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.grid(which = 'both', axis = 'both')
plt.title('Precisión del modelo')
plt.ylabel('Precisión')
plt.xlabel('Época')
plt.legend(['Entrenamiento', 'Test'], loc='upper right')
plt.show()

# Creamos una gráfica para mostrar la función de pérdida obtenida tanto en el set de entrenamiento como en el de validacion
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.grid(which = 'both', axis = 'both')
plt.title('Pérdida del modelo')
plt.ylabel('Pérdida')
plt.xlabel('Época')
plt.legend(['Entrenamiento', 'Test'], loc='upper right')
plt.show()
```

### 0.5. ImageDataGenerator

Podemos utilizar generadores de datos para la manipulación de datos de nuestro
dataset. Con ello, conseguimos realizar aumentación datos, divisiones de datos
para entrenamiento, validación y pruebas, entre otras herramientras.

Un posible uso sería el siguiente:

```python
train_datagen = ImageDataGenerator(
    dtype='float32',
    preprocessing_function = preprocess_input,
    horizontal_flip = True,
    validation_split = 0.05 # 5% de los datros de entrenamiento para validación
)

train_generator = train_datagen.flow_from_directory(
    train_dir,
    batch_size = num_batch,
    class_mode = "categorical",
    target_size = (224, 224),
    shuffle = True,
    subset = 'training'
    )

validation_generator =  train_datagen.flow_from_directory(
    train_dir,
    batch_size = num_batch,
    class_mode  = "categorical",
    target_size = (224, 224),
    shuffle = True,
    subset = 'validation'
    )
```

A la hora de utilizar generadores de datos tenemos que ajustar los parámetros de
la función .fit:

```python
history = modelo.fit(
            train_generator,
            steps_per_epoch = train_generator.samples // num_batch,
            epochs = 50,
            callbacks = callbacks,
            verbose = 1,
            validation_data = validation_generator,
            validation_steps = validation_generator.samples // num_batch
            )
```

## Capítulo 1: Visión Computacional

### 1.0. Teoría previa

#### 1.0.1. Redes Neuronales Convolucionales (CNN)

#### 1.0.2. Transfer Learning

#### 1.0.3. Tipos de arquitecturas para visión computacional

### 1.1. Lenguaje de signos, SIGN MNIST

#### 1.1.1. Anotaciones

#### 1.1.2. Código

```python
import tensorflow.keras as keras
import pandas as pd
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import matplotlib.pyplot as plt

from google.colab import drive
drive.mount('/content/drive')

# Cargamos los datos desde los ficheros CSV
train_df = pd.read_csv("/content/drive/MyDrive/Colab Notebooks/data/sign_mnist_train.csv")
valid_df = pd.read_csv("/content/drive/MyDrive/Colab Notebooks/data/sign_mnist_valid.csv")

# Separamos el contenido de los ficheros CSV
y_train = train_df['label']
y_valid = valid_df['label']
del train_df['label']
del valid_df['label']

# Obtenemos los datos de entrenamiento y validación
x_train = train_df.values
x_valid = valid_df.values

# Obtenemos nuestras etiquetas utilizando categorias binarias (one-hot)
num_classes = 24
y_train = keras.utils.to_categorical(y_train, num_classes)
y_valid = keras.utils.to_categorical(y_valid, num_classes)

x_train = x_train.reshape(-1,28,28,1)
x_valid = x_valid.reshape(-1,28,28,1)
print(x_train.shape)
print(x_valid.shape)

def Modelo():

    modelo = tf.keras.models.Sequential([
        tf.keras.layers.Conv2D(32, (3, 3), strides=1, padding="same", activation="relu", input_shape=(28, 28, 1)),
        tf.keras.layers.MaxPool2D((2, 2), strides=2, padding="same"),
        tf.keras.layers.BatchNormalization(),

        tf.keras.layers.Conv2D(64, (3, 3), strides=1, padding="same", activation="relu"),
        tf.keras.layers.MaxPool2D((2, 2), strides=2, padding="same"),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.Dropout(0.25),

        tf.keras.layers.Conv2D(64, (3, 3), strides=1, padding="same", activation="relu"),
        tf.keras.layers.MaxPool2D((2, 2), strides=2, padding="same"),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.Dropout(0.25),

        tf.keras.layers.Conv2D(128, (3, 3), strides=1, padding="same", activation="relu"),
        tf.keras.layers.MaxPool2D((2, 2), strides=2, padding="same"),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.Dropout(0.25),

         tf.keras.layers.Flatten(),

        tf.keras.layers.Dense(units=512, activation="relu"),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.Dropout(0.5),

        tf.keras.layers.Dense(units=256, activation="relu"),
        tf.keras.layers.BatchNormalization(),
        tf.keras.layers.Dropout(0.5),

        tf.keras.layers.Dense(units=num_classes, activation="softmax")
    ])

    modelo.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate = 1e-3),
        loss=tf.keras.losses.CategoricalCrossentropy(),
        metrics=['accuracy']
        )

    return modelo

model = Modelo()

train_datagen = ImageDataGenerator(
    rescale = 1./255,
    rotation_range=15,  # randomly rotate images in the range (degrees, 0 to 180)
    zoom_range=0.1,  # Randomly zoom image
    width_shift_range=0.1,  # randomly shift images horizontally (fraction of total width)
    height_shift_range=0.1,  # randomly shift images vertically (fraction of total height)
    horizontal_flip=True,  # randomly flip images horizontally
    brightness_range = (0.4, 0.75),
    validation_split = 0.2
)

test_datagen = ImageDataGenerator(
    rescale = 1./255
)

train_gen = train_datagen.flow(
    x_train,
    y_train,
    batch_size = 64,
    subset = 'training'
)

valid_gen = train_datagen.flow(
    x_train,
    y_train,
    batch_size = 64,
    subset = 'validation'
)

test_gen = test_datagen.flow(
    x_valid,
    y_valid,
    batch_size=64,
)

class CallBack(tf.keras.callbacks.Callback):

    def on_epoch_end(self, epocas, logs = {}):

        if(logs.get('val_accuracy') >= 0.98):

            print("\nSe alcanzo un 98% de precision, cancelamos el entrenamiento")
            self.model.stop_training = True

callback = CallBack()

# Para la reducción del learning rate atenderemos a la métrica de la precisión del set de validación
reducir_lr = tf.keras.callbacks.ReduceLROnPlateau(
    monitor = 'val_accuracy', factor = 0.1,
    patience = 3, min_lr = 1e-5, verbose = 1
)

callbacks = [callback, reducir_lr]

history = model.fit(train_gen,
          epochs = 30,
          validation_data = valid_gen,
          callbacks = callbacks
          )

# Creamos una gráfica para mostrar el accuracy obtenido tanto en el set de entrenamiento como en el de validacion
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.grid(which = 'both', axis = 'both')
plt.title('Precisión del modelo')
plt.ylabel('Precisión')
plt.xlabel('Época')
plt.legend(['Entrenamiento', 'Test'], loc='upper right')
plt.show()

# Creamos una gráfica para mostrar la función de pérdida obtenida tanto en el set de entrenamiento como en el de validacion
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.grid(which = 'both', axis = 'both')
plt.title('Pérdida del modelo')
plt.ylabel('Pérdida')
plt.xlabel('Época')
plt.legend(['Entrenamiento', 'Test'], loc='upper right')
plt.show()
```

### 1.2. Perros vs Gatos

#### 1.2.1. Anotaciones

#### 1.2.2. Código

```python
import os
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import zipfile

!wget --no-check-certificate https://storage.googleapis.com/mledu-datasets/cats_and_dogs_filtered.zip

#   Hiperparámetros
num_epocas = 40
lr = 1e-3
batch_size = 64

local_zip = './cats_and_dogs_filtered.zip'
zip_ref = zipfile.ZipFile(local_zip, 'r')
zip_ref.extractall()
zip_ref.close()

#   Vamos a cargar el dataset
#   El dataset se encuentra en E:\Datasets\data\dogs-vs-cats, contamos con 2 carpetas: train y test
base_dir = './cats_and_dogs_filtered'

print("Contenido en el directorio base:")
print(os.listdir(base_dir))

print("\nContenido en el directorio de entrenamiento:")
# Con mostrar algunos ejemplos es suficiente
print(os.listdir(f'{base_dir}/train'))

print("\nContenido en el directorio de test:")
print(os.listdir(f'{base_dir}/validation'))

train_dir = os.path.join(base_dir, 'train')
validation_dir = os.path.join(base_dir, 'validation')

#   Modelo
def Modelo():

    modelo = tf.keras.models.Sequential([

        tf.keras.layers.Conv2D(filters = 32, kernel_size = (3, 3), strides = (1, 1), input_shape = (150, 150, 3), activation = 'relu'),
        tf.keras.layers.MaxPool2D(pool_size = (2, 2)),
        tf.keras.layers.BatchNormalization(),
        #tf.keras.layers.Dropout(rate = 0.25),

        tf.keras.layers.Conv2D(filters = 64, kernel_size = (3, 3), strides = (1, 1), activation = 'relu'),
        tf.keras.layers.MaxPool2D(pool_size = (2, 2)),
        tf.keras.layers.BatchNormalization(),
        #tf.keras.layers.Dropout(rate = 0.25),

        tf.keras.layers.Conv2D(filters = 64, kernel_size = (3, 3), strides = (1, 1), activation = 'relu'),
        tf.keras.layers.MaxPool2D(pool_size = (2, 2)),
        tf.keras.layers.BatchNormalization(),
        #tf.keras.layers.Dropout(rate = 0.25),

        tf.keras.layers.Conv2D(filters = 128, kernel_size = (3, 3), strides = (1, 1), activation = 'relu'),
        tf.keras.layers.MaxPool2D(pool_size = (2, 2)),
        tf.keras.layers.BatchNormalization(),
        #tf.keras.layers.Dropout(rate = 0.25),

        tf.keras.layers.Flatten(),

        tf.keras.layers.Dense(units = 512, activation = 'relu'),
        #tf.keras.layers.Dropout(rate = 0.5),
        tf.keras.layers.Dense(units = 128, activation = 'relu'),
        #tf.keras.layers.Dropout(rate = 0.5),
        tf.keras.layers.Dense(units = 1, activation = 'sigmoid')
    ])

    modelo.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate = lr),
        loss=tf.keras.losses.BinaryCrossentropy(),
        metrics=['accuracy']
        )

    return modelo

train_datagen = ImageDataGenerator(
    rescale = 1./255,
    vertical_flip = True,
    horizontal_flip = True,
    rotation_range = 40, # Gira entre 0 y 40 grados
    width_shift_range = 0.2, # Cantidad aleatoria para desplazar el centro de una imagen
    height_shift_range = 0.2,
    shear_range = 0.2, # shear = cizallar, realizar cortes en la imagen para cambiar perspectivas por ejemplo
    zoom_range = 0.2,
    fill_mode = 'nearest' # Intenta recrear la información perdida tras una transformación como shear
    )

train_datagen = ImageDataGenerator(rescale = 1.0/255)

test_datagen  = ImageDataGenerator(rescale = 1.0/255)

train_generator = train_datagen.flow_from_directory(
    train_dir,
    batch_size = batch_size,
    class_mode = 'binary',
    target_size = (150, 150)
    )

validation_generator =  test_datagen.flow_from_directory(
    validation_dir,
    batch_size = batch_size,
    class_mode  = 'binary',
    target_size = (150, 150)
    )

modelo = Modelo()
modelo.summary()

early_stopping = tf.keras.callbacks.EarlyStopping(
    monitor = 'val_loss',
    min_delta = 1e-3,
    patience = 10,
    verbose = 1,
    mode = 'auto',
    restore_best_weights = True
)

# Para la reducción del learning rate atenderemos a la métrica de la precisión del set de validación
reducir_lr = tf.keras.callbacks.ReduceLROnPlateau(
    monitor = 'val_accuracy', factor = 0.1,
    patience = 8, min_lr = 1e-5, verbose = 1
)

callbacks = [early_stopping, reducir_lr]

history = modelo.fit(
            train_generator,
            epochs = num_epocas,
            callbacks = callbacks,
            verbose = 2,
            validation_data = validation_generator
            )

# Creamos una gráfica para mostrar el accuracy obtenido tanto en el set de entrenamiento como en el de validacion
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.grid(which = 'both', axis = 'both')
plt.title('Precisión del modelo')
plt.ylabel('Precisión')
plt.xlabel('Época')
plt.legend(['Entrenamiento', 'Test'], loc='upper right')
plt.show()

# Creamos una gráfica para mostrar la función de pérdida obtenida tanto en el set de entrenamiento como en el de validacion
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.grid(which = 'both', axis = 'both')
plt.title('Pérdida del modelo')
plt.ylabel('Pérdida')
plt.xlabel('Época')
plt.legend(['Entrenamiento', 'Test'], loc='upper right')
plt.show()
```

### 1.3. Implementación YOLO

Para hacer uso de las utilidades, modelo y demás herramientas, debemos descargar
las herramientas del repositorio.

#### 1.3.0. Teoría

#### 1.3.1. Anotaciones

El modelo YOLO ha sido entrenado con datos de entrada con tamaños de (m, 608,
608, 3). Cada salida resultante, consiste en un cuadro delimitador (_bounding
boxes_) con la clase reconocida. A su vez, cada cuadro está representado por 6
números (𝑝𝑐, 𝑏𝑥, 𝑏𝑦, 𝑏ℎ, 𝑏𝑤, 𝑐). Para este ejemplo de algoritmo de YOLO,
usaremos **yad2k** (YAD2K: Yet Another Darknet 2 Keras) que cuenta con 80
clases.

Las cajas de anclaje se eligen explorando los datos de entrenamiento para elegir
proporciones razonables de altura y anchura que representen mejor a las
diferentes clases. Para esta tarea, se han elegido 5 cajas de anclaje (para
cubrir las 80 clases), almacenados en el archivo './model_data/yolo_anchors.txt'

La dimensión para las cajas de anclaje es la penúltima dimensión en la
codificación (𝑚, 𝑛𝐻, 𝑛𝑊, 𝑎𝑛𝑐ℎ𝑜𝑟𝑠, 𝑐𝑙𝑎𝑠𝑒𝑠) .

Por tanto, la arquitectura YOLO consiste en:

- IMAGEN (m, 608, 608, 3) → CNN PROFUNDA → CODIFICACIÓN (m, 19, 19, 5, 85).

Dado que estamos utilizando 5 cajas de anclaje, cada una de las 19 x19 celdas
codifica información sobre 5 cajas. Las cajas de anclaje se definen únicamente
por su anchura y altura.

Para simplificar, aplanaremos las dos últimas dimensiones de la codificación de
la forma (19, 19, 5, 85), de modo que la salida de la CNN profunda es (19, 19,
425).

Ahora, para cada caja (de cada celda) se calculará un producto y se extraerá una
probabilidad de que la caja contenga una determinada clase. La puntuación
(_score_) de clase, calculado como 𝑖 = 𝑝𝑐 × 𝑐𝑖, consistiría en la probabilidad
de que haya un objeto 𝑝𝑐 por la probabilidad de que el objeto sea de una
determinada clase 𝑐𝑖 .

#### 1.3.2. Código

Al tratarse de un código más complejo, iremos dividiéndolo en partes acompañados
por una explicación.

Primero importamos las librerías necesarias.

```python
import argparse
import os
import matplotlib.pyplot as plt
from matplotlib.pyplot import imshow
import scipy.io
import scipy.misc
import numpy as np
import pandas as pd
import PIL
from PIL import ImageFont, ImageDraw, Image
import tensorflow as tf
from tensorflow.python.framework.ops import EagerTensor

from tensorflow.keras.models import load_model
from yad2k.models.keras_yolo import yolo_head
from yad2k.utils.utils import draw_boxes, get_colors_for_classes, scale_boxes, read_classes, read_anchors, preprocess_image
```

En primer lugar, vamos a aplicar un filtro para el umbral, lo que implica que
eliminará cualquier casilla cuya puntuación de clase sea inferior a un umbral
elegido. El modelo arrojará un total de 19x19x6x85 números, con cada caja
descrita por 85 números. Es conveniente reordenar el tensor dimensional (19, 19,
5, 85) o (19, 19, 425) en las siguientes variables:

- **box_confidence**: tensor de forma (19, 19, 5, 1) que contiene 𝑝𝑐
  (probabilidad de confianza de que haya algún objeto) para cada una de las 5
  cajas previstas en cada una de las 19x19 casillas.
- **boxes**: tensor de forma (19, 19, 5, 4) que contiene el punto medio y las
  dimensiones (𝑏𝑥, 𝑏𝑦, 𝑏ℎ, 𝑏𝑤) para cada una de las 5 cajas en cada celda.
- **box_class_probs**: tensor de forma (19, 19, 5, 80) que contiene las
  "probabilidades de clase" (𝑐1, 𝑐2, ..., 𝑐80) para cada una de las 80 clases
  para cada una de las 5 cajas por celda.

```python
def yolo_filter_boxes(boxes, box_confidence, box_class_probs, threshold = .6):

    # Step 1: Compute box scores
    ##(≈ 1 line)
    box_scores = box_confidence * box_class_probs

    # Step 2: Find the box_classes using the max box_scores, keep track of the corresponding score
    ##(≈ 2 lines)
    box_classes = tf.math.argmax(input = box_scores, axis = -1)
    box_class_scores = tf.math.reduce_max(input_tensor = box_scores, axis = -1)

    # Step 3: Create a filtering mask based on "box_class_scores" by using "threshold". The mask should have the
    # same dimension as box_class_scores, and be True for the boxes you want to keep (with probability >= threshold)
    ## (≈ 1 line)
    filtering_mask = box_class_scores >= threshold

    # Step 4: Apply the mask to box_class_scores, boxes and box_classes
    ## (≈ 3 lines)
    scores = tf.boolean_mask(tensor = box_class_scores, mask = filtering_mask)
    boxes = tf.boolean_mask(tensor = boxes, mask = filtering_mask)
    classes = tf.boolean_mask(tensor = box_classes, mask = filtering_mask)

    return scores, boxes, classes
```

Implementar IoU (_Intersection over Union_). No es necesario implementarlo pero
para que veamos cómo se haría.

```python
def iou(box1, box2):

    (box1_x1, box1_y1, box1_x2, box1_y2) = box1
    (box2_x1, box2_y1, box2_x2, box2_y2) = box2

    # Calculate the (yi1, xi1, yi2, xi2) coordinates of the intersection of box1 and box2. Calculate its Area.
    ##(≈ 7 lines)
    xi1 = max(box1_x1, box2_x1)
    yi1 = max(box1_y1, box2_y1)
    xi2 = min(box1_x2, box2_x2)
    yi2 = min(box1_y2, box2_y2)
    inter_width = xi2-xi1
    inter_height = yi2-yi1
    inter_area = max(inter_width, 0) * max(inter_height, 0)

    # Calculate the Union area by using Formula: Union(A,B) = A + B - Inter(A,B)
    ## (≈ 3 lines)
    box1_area = (box1_x2 - box1_x1) * (box1_y2 - box1_y1)
    box2_area = (box2_x2 - box2_x1) * (box2_y2 - box2_y1)
    union_area = box1_area + box2_area - inter_area

    # compute the IoU
    return inter_area / union_area
```

Implementar _Non-Max Suppression._ `Tensorflow` tiene dos funciones incorporadas
que se utilizan para implementar la supresión de no-máximos (por lo que no es
necesario utilizar la función iou()).

```python
def yolo_non_max_suppression(scores, boxes, classes, max_boxes = 10, iou_threshold = 0.5):

    # tensor to be used in tf.image.non_max_suppression()
    max_boxes_tensor = tf.Variable(max_boxes, dtype='int32')

    # Use tf.image.non_max_suppression() to get the list of indices corresponding to boxes you keep
    nms_indices = tf.image.non_max_suppression(
									boxes = boxes,
									scores = scores,
									max_output_size = max_boxes,
									iou_threshold = iou_threshold)

    # Use tf.gather() to select only nms_indices from scores, boxes and classes
    scores = tf.gather(params = scores, indices = nms_indices)
    boxes = tf.gather(params = boxes, indices = nms_indices)
    classes = tf.gather(params = classes, indices = nms_indices)

    return scores, boxes, classes
```

Convertir las predicciones de la caja YOLO en esquinas de la caja delimitadora.

```python
def yolo_boxes_to_corners(box_xy, box_wh):

    box_mins = box_xy - (box_wh / 2.)
    box_maxes = box_xy + (box_wh / 2.)

    return tf.keras.backend.concatenate([
        box_mins[..., 1:2],  # y_min
        box_mins[..., 0:1],  # x_min
        box_maxes[..., 1:2],  # y_max
        box_maxes[..., 0:1]  # x_max
    ])
```

Convertimos la salida de la codificación YOLO (un montón de cajas) en sus cajas
predichas junto con sus puntuaciones, coordenadas de caja y clases.

```python
def yolo_eval(yolo_outputs, image_shape = (720, 1280), max_boxes=10, score_threshold=.6, iou_threshold=.5):

    ### START CODE HERE
    # Retrieve outputs of the YOLO model (≈1 line)
    box_xy, box_wh, box_confidence, box_class_probs = yolo_outputs

    # Convert boxes to be ready for filtering functions (convert boxes box_xy and box_wh to corner coordinates)
    boxes = yolo_boxes_to_corners(box_xy, box_wh)

    # Use one of the functions you've implemented to perform Score-filtering with a threshold of score_threshold (≈1 line)
    scores, boxes, classes = yolo_filter_boxes(boxes, box_confidence, box_class_probs, score_threshold)

    # Scale boxes back to original image shape.
    boxes = scale_boxes(boxes, image_shape)

    # Use one of the functions you've implemented to perform Non-max suppression with
    # maximum number of boxes set to max_boxes and a threshold of iou_threshold (≈1 line)
    scores, boxes, classes = yolo_non_max_suppression(scores, boxes, classes, max_boxes, iou_threshold)

    return scores, boxes, classes
```

Podemos probar un modelo pre-entrenado de YOLO. Dicho modelo ha sido entrenado
en el dataset de COCO basado en un problema de conducción autónoma.

```python
class_names = read_classes("model_data/coco_classes.txt")
anchors = read_anchors("model_data/yolo_anchors.txt")
model_image_size = (608, 608)
yolo_model = load_model("model_data/", compile=False)
```

Creamos una función para poder ejecutar el gráfico para predecir las cajas.

```python
def predict(image_file):
    # Preprocess your image
    image, image_data = preprocess_image("images/" + image_file, model_image_size = (608, 608))

    yolo_model_outputs = yolo_model(image_data)
    yolo_outputs = yolo_head(yolo_model_outputs, anchors, len(class_names))

    out_scores, out_boxes, out_classes = yolo_eval(yolo_outputs, [image.size[1],  image.size[0]], 10, 0.3, 0.5)

    # Print predictions info
    print('Found {} boxes for {}'.format(len(out_boxes), "images/" + image_file))
    # Generate colors for drawing bounding boxes.
    colors = get_colors_for_classes(len(class_names))
    # Draw bounding boxes on the image file
    #draw_boxes2(image, out_scores, out_boxes, out_classes, class_names, colors, image_shape)
    draw_boxes(image, out_boxes, out_classes, class_names, out_scores)
    # Save the predicted bounding box on the image
    image.save(os.path.join("out", image_file), quality=100)
    # Display the results in the notebook
    output_image = Image.open(os.path.join("out", image_file))
    imshow(output_image)

    return out_scores, out_boxes, out_classes
```

Finalmente, probamos el modelo:

```python
out_scores, out_boxes, out_classes = predict("download.jpeg")
```

## Capítulo 2: Procesamiento del Lenguaje Natural, NLP

### 2.0. Teoría

Modelos secuenciales:

Transformers:

## Capítulo 3: Procesamiento de Audio

### 3.1. Reconocimiento de audio

#### 3.1.1. Anotaciones

#### 3.1.2. Código

Podemos utilizar la librería `librosa` de Python para el procesado de señales de
audio. Para este caso, podemos convertir el sonido en espectrogramas para
posteriormente tratar el problema como un clasificador por visión computacional.

Ejemplo de código para procesar señales de audio a espectrogramas:

```python
import librosa
import numpy as np

# Leemos el fichero
file    = "temp/processed_file.wav"
sig, fs = librosa.core.load(file, sr=8000)

# Procesamos el fichero
abs_spectrogram = np.abs(librosa.core.spectrum.stft(sig))
audio_signal = librosa.core.spectrum.griffinlim(abs_spectrogram)

print(audio_signal, audio_signal.shape)

# Podemos realizar la conversión inversa de un espectrograma a una imagen
librosa.output.write_wav('test2.wav', audio_signal, fs)
```

</div>
