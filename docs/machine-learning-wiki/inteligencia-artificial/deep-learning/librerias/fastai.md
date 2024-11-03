---
description: Realizado por Daniel Bazo Correa.
---

<div align="justify">

# FastAI

### Bibliografía

* [https://www.fast.ai/](https://www.fast.ai/)

## Anexo A: Terminología útil

Aquí se reúnen las palabras, términos, conceptos etc. claves a tener en cuenta a modo de recordatorio. No tiene ningún tipo de orden, ni pretende ser el primer capítulo a visualizar.

* **La letra ‘x’ se asocia a la variable independiente**, lo que usamos para hacer predicciones, por ejemplo imágenes. Mientras que la **letra ‘y’ se asocia a la variable dependiente**, lo que se denominan etiquetas y es nuestro objetivo obtener una predicción que tenga una alta probabilidad de parecerse a dicha ‘y’, un ejemplo de etiquetas pueden ser los nombres de las imágenes que permiten clasificar razas de perros.
* **weigth** = pesos: valores aleatorios con los que se inicializan a las neuronas, estos parámetros son fundamentales para determinar el tipo de funcionamiento de una red.
  * Forma (shape) → w(tamaño input, número de neuronas)
* **bias** = sesgo:
  * Forma (shape) → b(1, número de neuronas)
* Un **set de datos de puede dividir** en:
  * Set de entrenamiento (train set).
  * Set de desarrollo o validación (dev set o validation set).
  * Set de pruebas (test set)
* Función de pérdida (**Loss function**): función que mide el rendimiento del modelo en uno de los ejemplos del set de entrenamiento.
* Función de coste (**Cost function**): función que mide el rendimiento del modelo en todos los ejemplos del set de entrenamiento. Sería la media de cada una de las funciones de pérdidas de cada ejemplo del set de entrenamiento.
* **Dataset**: una colección que devuelve un tuple de su variable independiente y dependiente para un solo elemento.
* **DataLoader**: un iterador que proporciona un flujo de grupos reducidos (mini-batches), donde cada grupo reducido es un tuple de un lote de variables independientes y un lote de variables dependientes.
* **one-hot encoding**: vectores de 0’s con el tamaño del número de clases que tenga el dataset, cada categoría representa una posición en el vector por lo que si la imagen contiene algún elemento de alguna clase el vector tendrá un 1 en la posición del vector que corresponderá a su clase.
* Es importante saber que **una clasificación** pretende predecir una clase o categoría mientras que un modelo de **regresión** intenta predecir 1 o más cantidades numéricas.

## Capítulo 0: Útiles

### 0.1. Montar unidad de Google Drive en Google Colab

```python
from google.colab import drive
drive.mount('/content/gdrive')
```

### 0.2. Dudas con métodos/funciones en FastAI, documentación

Por ejemplo:

```python
doc(learn.predict)
```

### 0.3. Obtención de imágenes empleando la API de Bing

En el que caso de tener que trabajar con redes en las que los datos con los que trabajamos son imágenes, podemos emplear la API de Bing usando Microsoft Azure, esta API permite descargar de manera gratuita hasta 1000 colas por mes donde cada cola permite hasta 150 imágenes. Esto puede ser escaso por lo que requerirá procesos de aumentación de datos. Cuando tengamos una cuenta hecha en Azure, obtenemos la clave (key) en la ruta:

API Bing Search - Key Setting - Key 1

Usaríamos el API de la siguiente manera:

```python
# Sustituir XXX por la clave KEY 1
key = os.environ.get('AZURE_SEARCH_KEY', 'XXX')

# En este ejemplo se pretendía obtener 3 carpetas con diferentes razas de osos para 
# clasificarlos posteriormente. Ejemplo mejor desarrollado en el Capítulo 1.

# Si el directorio no existe, lo creamos
if not path.exists(): 

    path.mkdir()
    
    # Para cada oso perteneciente a la lista de razas de osos, seleccionamos el destino
		# cuyo nombre de carpeta es igual a la raza, creamos dicho directorio, 
		# buscamos los resultados con la API de BING y finalmente descargamos las imágenes
    for o in bear_types:

        dest = (path/o)
        dest.mkdir(exist_ok = True)
        results = search_images_bing(key, f'{o} bear')
        download_images(dest, urls=results.attrgot('contentUrl'))
```

#### 0.3.1. Borrar carpetas de datos en caso de fallos

```python
!rm_rf nombre_carpeta
```

### 0.4. Busqueda del learning rate

Podemos utilizar la función que tiene FastAI para buscar un rango de valores para el ratio de aprendizaje, por ejemplo:

```python
learn = vision_learner(
	dls = dls,
	arch = resnet50,
	metrics = [accuracy, error_rate])

lr_min,lr_steep = learn.lr_find(suggest_funcs = (minimum, steep))

print(f"Minimo: {lr_min} , Paso: {lr_steep}")
```

### 0.5. Congelar parámetros modelo

Al hacer fine-tuning a un modelo podemos tomar un número de épocas en que las capas entrenadas del modelo se queden con sus parámetros congelados y entrenar las últimas capas añadidas para posteriormente descongelar el modelo y hacer un entrenamiento conjunto, esto permite reducir tiempo de entrenamiento sin desaprovechar el aprendizaje de las capas, ejemplo:

```python
# Suponemos que tenemos un modelo que emplea resnet50
learn = vision_learner(
	dls = dls,
	arch = resnet50,
	metrics = [accuracy, error_rate]).to_fp16()

# freeze_epochs es el número de épocas en las que congelaremos las capas del modelo
# epochs es el número de épocas que se entrena el modelo al completo después
learn.fine_tune(epochs = 6, freeze_epochs = 3)
```

Resumiendo, cuando usamos `fine_tune` FastAI automáticamente entrena las últimas capas por 1 época con todas las capas anteriores congeladas y luego las descongela para entrenar el modelo al completo con el número de épocas elegido mientras que cuando usamos el `fit_one_cycle` empieza entrenando el modelo con un learning rate bajo que irá aumentando o disminuyendo conforme avance el entrenamiento.

### 0.6. Funciones de pérdida

* `nn.CrossEntropyLoss` para la clasificación de una sola etiqueta.
* `nn.BCEWithLogitsLoss` para la clasificación de una varias etiquetas.
* `nn.MSELoss` para regresión.

### 0.7. Incluir botón y testear modelo inferencia

```python
from fastbook import *

boton_upload = widgets.FileUpload()
img = PILImage.create(boton_upload.data[-1])
out_pl = widgets.Output()
out_pl.clear_output()

with out_pl:

  display(img.to_thumb(128,128))

pred,pred_idx,probs = learn_inf.predict(img)
```

## Capítulo 1: Visión computacional

### 1.0. Teoría previa

#### 1.0.1. Redes Neuronales Convolucionales (CNN)

#### 1.0.2. Transfer Learning

#### 1.0.3. Tipos de arquitecturas para visión computacional

### 1.1. Reconocimiento de perros y gatos

#### 1.1.1. Anotaciones

* Vamos a utilizar el dataset de Oxford\_IIT PET Dataset con imágenes perros y gatos (37 razas). **Para este dataset los nombres de los gatos vienen con la primera letra en mayúsculas.**
*   Usaremos modelos ya entrenados con el fin de realizar fine-tuning.

    Recordar que un modelo pre-entrenado es un modelo cuyos pesos ya han sido adaptados y ajustados para una tarea. Con fine-tuning o ajuste fino conseguimos eliminar la última capa junto a sus pesos y la ajustamos a la nueva tarea (tener en cuenta que han de ser tareas similares entrenadas anteriormente y ahora con datos del mismo tipo, por ejemplo si el modelo fue entrenado con imágenes el dataset nuevo a emplear han de ser también basado en imágenes).
* Podríamos emplear en transformaciones en un conjunto reducido de imágenes llamado **“batch”** y que permite ser alojados en la memoria RAM de la GPU, esto permite hacer el proceso de una manera más rápida. **Pero** hay que tener cuidado de no utilizar un **“batch\_size”** (un tamaño de lote) muy grande ya que la GPU se podría quedar sin memoria RAM y a la hora de entrenar el modelo daría problemas tales como “CUDA out of memory error”, si esto ocurre, tenemos que reducir el tamaño del batch y reiniciar el kernel de Jupyter en caso de usarlo.
* **Las métricas son distintas a la función de pérdida.**

#### 1.1.2. Código

```python
# Instalamos dependencias de los cuadernos de FastAI.
!pip install -Uqq fastbook

# Importamos la librería.
import fastbook

# Preparamos el cuaderno.
fastbook.setup_book()

# Como se trata de un problema de visión, usaremos redes neuronales convolucionales 
# (CNN), ademas metemos la librería fastbook que incluye funciones para el tratamiento
# de imágenes y también las funciones necesarias para implementar los widgets.
from fastai.vision.all import *
from fastbook import *

# Etiquetado de las imágenes mediante una función "es_gato", donde cada imagen de 
# un gato su primera letra es mayúscula.
def es_gato(x):

    return x[0].isupper()

path = untar_data(URLs.PETS)/'images'

# En este caso vamos a usar imágenes para un modelo convolucional por eso empleamos 
# ImageDataLoaders, from_name_func permite especificar que vamos a obtener las 
# etiquetas a partir de una función.
# path -> Seleccionamos el directorio en el que se encuentran las imágenes.
# get_image_files -> es la manera en la que vamos a obtener los datos.
# valid_pct -> es el porcentaje de los datos que vamos a usar para validación, 
# el resto se empleará como set de entrenamiento.
# seed -> establece una semilla con el fin de obtener un número aleatorio a partir de ella.
# label_func -> vamos a obtener las etiquetas a partir de una función, 
# en este caso, "es_gato".
# item_tfms -> cada imagen se reajusta a a una resolución de 224 pixeles.
dls = ImageDataLoaders.from_name_func(
	path, get_image_files(path), 
        valid_pct = 0.2, seed = 42, 
        label_func = es_gato, 
        item_tfms = Resize(224))

# Utilizaremos redes convolucionales (CNN), en concreto, una red residual de 34 capas,
# metrics indica los parámetros que queremos ir mostrando durante el entrenamiento.
# Recordar que accuracy = 1 - error_rate, son probabilidades por lo que son valores
# comprendidos entre 0 y 1.
learn = vision_learner(dls, resnet34, metrics = [accuracy, error_rate])

# Vamos a ajustar el modelo durante 3 pasadas (número de épocas) completas a los datos.
learn.fine_tune(3)

# Colocamos un botón para subir una imagen.
boton_subida = widgets.FileUpload()
boton_subida

# Procesamos el dato almacenado en "boton_subida".
img = PILImage.create(boton_subida.data[0])
es_gato,_,probs = learn.predict(img)

print(f"¿Es un gato? {es_gato}")
print(f"Probabilidad de que sea un gato: {probs[1].item():.6f}")
```

### 1.2. Segmentación de imágenes, UNET

#### 1.2.0. Teoría

#### 1.2.1. Anotaciones

* Utilizamos una versión reducida del dataset de CAMVID preparada por FastAI.
* **UNET** **se trata de una arquitectura empleada en segmentación que permite colorear cada elemento correspondiente a la clase a la que pertenece. UNET emplea la convolución transpuesta ya que esta permite aumentar el tamaño del volumen conforme avanzamos en la red (utilizando lo que se conocen como skip connections), con ello, a la salida obtenemos un resultado ya segmentado con la misma dimensión que la imagen introducida como input.**

#### 1.2.2. Código

```python
!pip install -Uqq fastbook

import fastbook
fastbook.setup_book()

from fastai.vision.all import *

path = untar_data(URLs.CAMVID_TINY)/'images'

# SegmentationDataLoaders permite especificar que vamos a tratar con un modelo 
# de segmentación, aquí los datos se etiquetarán a partir de una función 
# lambda (función anónima) de Python.
# bs -> es el batchsize (el tamaño de los subconjuntos de imágenes que vamos 
# a ir arrojando a la GPU) el tamaño dependerá de la cantidad de RAM que tenga la GPU.
# np.loadtext(...) -> es una función de NumPy que te permite cargar datos de un txt
dls = SegmentationDataLoaders.from_label_func(
	path, bs = 8, 
	fnames = get_image_files(path),
	label_func = lambda o:path/'labels'/f'{o.stream}_P{o.suffix}',
	codes = np.loadtext(path/'codes.txt', dtype = str)
	)
								
learn = unet_learner(dls, resnet34)
learn.fine_tune(8)

# Mostramos en 2 columnas, donde en la primera se encuentran las imágenes de 
# validación (y), y en la segunda se encuentran las imágenes de predicción (^y). 
# Mostramos 6 imágenes con un tamaño de 7 x 8
learn.show_results(max_n = 6, figsize = (7, 8))
```

### 1.3. Clasificación de osos

#### 1.3.1. Anotaciones

* En este ejercicio no se parte de ningún dataset, **vamos a crear el nuestro propio dataset** con el fin de ver que con **FastAI podemos crear modelos que se adapten a nuestros datos**. Para ello **usaremos los DataLoaders y DataBlocks**.
*   A la hora de hacer transformaciones en los datos reduciendo la resolución a 128 pixeles podemos perder información de las imágenes, por lo que en vez de utilizar:

    ```
    item_tfms = Resize(128)
    ```

    podríamos utilizar:

    ```
    item_tfms = RandomResizedCrop(size = 224, min_scale = 0.5)
    ```

    **RandomResizedCrop** permite elegir zonas aleatorias de la imagen, min\_scale determina cuánto de la imagen vamos a seleccionar como mínimo (el mínimo área posible). Con ello se consigue aumentar los datos sin cambiar el significado de estos.

#### 1.3.2. Código

```python
!pip install -Uqq fastbook

import fastbook
fastbook.setup_book()

from fastbook import *

# En este caso vamos a descargar las imágenes utilizando la API de BING empleando 
# Microsoft Azure.

# Sustituir XXX por la clave KEY 1
key = os.environ.get('AZURE_SEARCH_KEY', 'XXX')

# En este ejemplo se pretendía obtener 3 carpetas con diferentes razas de osos para 
# clasificarlos posteriormente.
bear_types = 'grizzly','black','teddy'
path = Path('bears')

# Si el directorio no existe, lo creamos
if not path.exists(): 

    path.mkdir()
    
    # Para cada oso perteneciente a la lista de razas de osos, seleccionamos el 
		# destino cuyo nombre de carpeta es igual a la raza, creamos dicho directorio, 
		# buscamos los resultados con la API de BING y finalmente descargamos las imágenes
    for o in bear_types:

        dest = (path/o)
        dest.mkdir(exist_ok = True)
        results = search_images_bing(key, f'{o} bear')
        download_images(dest, urls=results.attrgot('contentUrl'))
        
# Obtenemos el directorio de la carpeta 'bears' con todas las imágenes
fns = ge_image_files(path)

# Verificamos si existen fallos en algunas de las imágenes descargadas
imagenes_fallos = verify_images(fns)
imagenes_fallos.map(Path.unlink)

# Descargados los datos, tenemos que preparalos para que sean compatibles con FastAI
# para ello creamos un DataLoaders personalizado
class DataLoaders(GetAttr):
    
    def __init__(self, *loaders):

        self.loaders = loaders
    
    def __getitem__(self, i):

        return self.loaders[i]
    
    train, valid = add_props(lambda i, self: self[i])

# get_item_files -> permite obtener una ruta y devolver todas las imágenes de dicha ruta
# splitter -> divide el set de entrenamiento y validación de manera aleatoria,
# dejando un 20% de los datos para validación (valid_pct = 0.2)
# parent_label -> permite obtener como etiquetas (y) el nombre de la carpeta
# en la que se encuentra un archivo
# item_tfms -> como todas las imágenes serán de tamaños diferentes y tenemos
# que agruparlas en un tensor, tenemos que transformarlas todas a una misma resolución,
# en este caso, con una resolución de 128 x 128.
bears = DataBlock(
	# Tupla para especificar (x, y), siendo 'x' la variable independiente, 
	# lo que usamos para hacer predicciones, en este caso imágenes e 'y' 
	# la varibale dependiente, que son las etiquetas, en este caso las 
	# categorías de los osos
	blocks = (ImageBlock, CategoryBlock),
	get_items = get_image_files,
	splitter = RandomSplitter(valid_pct = 0.2, seed = 42),
	get_y = parent_label,
	# Mejor usar RandomResizedCrop(size = 224, min_scale = 0.5),
	item_tfms = Resize(128))

# Por defecto, FastAI coge un tamaño de batch de 64
dls = bears.dataloaders(path, bs = 64)

# Mostramos algunas de las imágenes para ver que los datos son correctos
dls.valid.show_batch(max_n = 4, nrows = 1)

learn.vision_learner(dls, resnet18, metrics = [accuracy, error_rate])

learn.fine_tune(4)

# Matriz de confusión, para ver si las predicciones coninciden con las etiquetas reales
interp = CassificationInterpretation.from_learner(learn)
interp.plot_confusion_matrix()

# En caso de ver que hay muchas predicciones incorrectas podemos limpiar los datos,
# para ello FastAI ofrece herramientas de data cleaning
# Primero vamos a ordenar las imágenes con el valor numérico más alto de la función
# de pérdida (Loss function) con el fin de ver qué imagenes se han predecido de forma
# incorrecta
interp.plot_top_losses(5, nrows = 1)

# Hacemos la limpieza
from fastai.vision.widgets import *

cleaner = ImageClassifierCleaner(learn)

for i in cleaner.delete():

    cleaner.fns[i].unlink()

# Si queremos mover imágenes a otra categoría
for i, cat in cleaner.change():

    shutil.move(str(cleaner.fns[i]), path/cat)
    
    
# Una vez el modelo está entrenado y tiene una precisión aceptable para los datos,
# no hace overfitting y se adapta bien a nuestro problema, podemos llevarlo a 
# una aplicación estaríamos pasando de un modelo a una inferencia.

# Exportamos el modelo
learn.export()

# Ver si se ha creado el fichero de la inferencia del modelo
path.ls(file_exts = '.pkl')

learn_inf = load_learner(path/'export.pkl')

learn_inf.predict('nombre_imagen_a_predecir')
```

### 1.4. Control de calidad de patatas por visión

#### 1.4.1. Notas

* La idea consistía en poder aplicar CNN para el control de calidad de productos, para ello se escogió un set de datos de **Kaggle**, “PepsiCo Lab Potato Chips Quality Control” ([PepsiCo Lab Potato Chips Quality Control | Kaggle](https://www.kaggle.com/datasets/concaption/pepsico-lab-potato-quality-control)).
* La distribución de las carpetas era:
  * Patatas
    * Train
      * Defective (369 imágenes)
      * NonDefective (400 imágenes)
    * Test
      * Defective (92 imágenes)
      * NonDefective (100 imágenes)

#### 1.4.2. Código

```python
!pip install fastbook

import fastbook
fastbook.setup_book()

from fastbook import *
from fastai import *
from fastai.vision import *
from fastai.vision.data import ImageDataLoaders

# Comprobamos la longitud de las listas de ficheros si corresponden con el número de 
# imágenes de las carpetas
train_fnames_defective = get_image_files('/Patatas/train/Defective')
train_fnames_nondefective = get_image_files('/Patatas/train/NonDefective')
test_fnames_defective = get_image_files('/Patatas/test/Defective')
test_fnames_nondefective = get_image_files('/Patatas/test/NonDefective')
L(train_fnames_defective, train_fnames_nondefective, test_fnames_defective, test_fnames_nondefective)

# Aplicamos transformaciones con tamaños de 224 cogiendo trozos de imagen de manera 
# aleatoria con un batch size de 16 debido a las limitaciones de memoria de la GPU 
# de Google Collab, si se tiene suficiente memoria probar con 32.
data = ImageDataLoaders.from_folder(
	path = path, train = 'Train', valid = 'Test',
  	item_tfms = RandomResizedCrop(size = 224, min_scale = 0.5),
	bs = 16)

data.show_batch(max_n = 4, nrows = 1)

learn = vision_learner(data, resnet34, metrics = [accuracy, error_rate])

learn.fine_tune(4)

interp = ClassificationInterpretation.from_learner(learn)
interp.plot_confusion_matrix()

# Conseguida una precisión óptima, exportamos el modelo
learn.export()

# Ver si se ha creado el fichero de la inferencia del modelo
path.ls(file_exts = '.pkl')

# Cargamos el modelo ya entrenado
learn_inf = load_learner(path/'export.pkl')

# Para probarlo podemos usar los Widgets de Python y Jupyter y subir una foto
btn_upload = widgets.FileUpload()
btn_upload

img = PILImage.create(btn_upload.data[-1])

pred, pred_idx, probs = learn_inf.predict(img)

print(f"Prediccion: {pred}, Probabilidad: {probs[pred_idx]}")
```

### 1.5. Entrenar modelos SOTA para visión

#### 1.5.1. Anotaciones

* Veremos diferentes técnicas de aumentación de datos, evitar overfitting etc. en modelos grandes. En concreto utilizaremos redes residuales, ResNet, para el ejemplo.
* Las técnicas que vamos a utilizar son:
  * **Progressive Resizing: c**onsiste en ir aumentando el tamaño de las imágenes durante el entrenamiento en modelos realizados desde cero ya que en modelos pre-entrenados podría afectar al rendimiento aunque la mejor manera de comprobarlo es probar su funcionamiento.
  * **Aumentación durante Test Time:** durante la validación o la inferencia, creamos múltiples versiones de cada imagen utilizando técnicas de aumentación de datos, posteriormente tomamos la media o el máximo valores de las predicciones de cada versión aumentada así evitamos pérdidas de información que pueden resultar relevantes a la hora de realizar, por ejemplo, recortes a una imagen.
  * **MixUP:** consiste en combinar datos para obtener una combinación de ambas, esto permite reducir problemas de overfitting durante el entrenamiento acosta de requerir un mayor número de épocas de entrenamiento con el fin de obtener una mejor precisión. **MixUp se suele emplear cuando el número de épocas es mayor a 80.**
  * **Label Smoothing:** permite que un modelo sea más robusto durante el entrenamiento ya que evita la sobre-confianza en las predicciones obtenidas. El resultado obtenido es una mejor generalización de los datos durante la inferencia. Por ejemplo, si tenemos el clasificador de perros vs gatos, si al subir una imagen difícil de etiquetar el modelo dará una probabilidad más alta a una etiqueta la cual no está seguro. Al utilizar label smoothing por ejemplo en etiquetas con un factor de forma one-hot-encoded con múltiples clases remplazaríamos los 0s con $\frac{\epsilon}{N}$ donde $**\epsilon**$ indica el grado de suavizado (smoothing) con un valor usual de 0.1 indicando que estamos un 10% **no seguros** de la etiquetación de nuestros datos y $N$ el número de clases.

#### 1.5.2. Código

```python
!pip install -Uqq fastbook

import fastbook
fastbook.setup_book()

from fastai.vision.all import *

# Imagenette es una version simplificada del dataset de ImageNet creada por FastAI
# con ello podemos realizar mayores pruebas, una vez obtenido un resultado optimo
# podemos pasar a entrenar con sets de datos mayores.
# Iniciar el entrenamiento con sets de datos muy grandes hace que el numero de pruebas
# sea menor debido a la mayor necesidad de tiempo para entrenar el modelo, por lo que
# en el caso de fallos supondria un mayor coste asociado.
# Recordar que siempre hay que buscar ciclos reiterativos de pruebas
# lo mas cortos posibles con el fin de localizar fallos, corregirlos y volver a testear.
dir = untar_data(URLs.IMAGENETTE)

def crear_datablock(batch_size, tam_img):

  dblock = DataBlock(blocks = (ImageBlock, CategoryBlock),
                   get_items = get_image_files,
                   get_y=parent_label,
                   item_tfms = Resize(460),
                   batch_tfms = [*aug_transforms(size = tam_img, min_scale = 0.75), 
                                 Normalize.from_stats(*imagenet_stats)])

  return dblock.dataloaders(dir, bs = batch_size)

# Vamos a utilizar "Progressive Resizing"

# Obtenemos el dataloader con un tamaño de batch de 128 y transformamos las imagenes 
# con un tamaño de 128
dls = crear_datablock(128, 128)
learn = Learner(dls, xresnet50(), 
                loss_func = CrossEntropyLossFlat(), metrics = [accuracy])

# Primero utilizamos fit_one_cycle ya que primero empieza entrenando el modelo
# con un learning rate bajo y va aumentando o disminuyendo conforme avanza el 
# entrenamiento
learn.fit_one_cycle(4, 3e-2)

# Posteriormente, utilizamos fine_tune ya que FastAi automaticamente entrena las ultimas
# capas por 1 epoca con todas las capas anteriores congeladas y luego las 
# descongela para entrenar el modelo al completo con el numero de epocas indicado
learn.dls = crear_datablock(64, 224)
learn.fine_tune(5, 1e-3)

# Vamos a utilizar ahora aumentación durante test time

preds, targs = learn.tta()
accuracy(preds, targs).item()

# Vamos a utilizar "Mixup"

model = xresnet50()
learn = Learner(dls, model, loss_func = CrossEntropyLossFlat(),
                metrics = accuracy, 
                # Con cbs indicamos las callbacks
                cbs = MixUp())
learn.fit_one_cycle(5, 3e-3)

# Vamos a utilizar "Label Smoothing"
# En esta ocasión hemos elegido un modelo de ResNet con mayor numero de capas
model = xresnet101()

# Al utilizar Label Smoothing en FastAi debemos ajustar la funcion de perdida
learn = Learner(dls, model, loss_func = LabelSmoothingCrossEntropy(),
                metrics = accuracy, 
                # Con cbs indicamos las callbacks
                cbs = MixUp())

learn.fit_one_cycle(20, 3e-3)
```

## Capítulo 2: Procesamiento del Lenguaje Natural, NLP

### 2.0. Teoría

Modelos secuenciales:

Transformers:

### 2.1. Análisis de reseñas/sentimientos, dataset IMDB

#### 2.1.2. Código

```python
!pip install -Uqq fastbook

import fastbook
fastbook.setup_book()

# Los datos empleados en este problema son textos, las mejores arquitecturas para 
# procesamiento de textos podría ser RNN (Redes Neuronales Recurrentes), 
# Transformers o aplicar algoritmos de Machine Learning y no Deep Learning. 
# En este caso, queremos ver la relación de las palabras en el contexto de la oración
# al completo con el fin de conocer el contexto y aprender de este.
from fastai.text.all import *

path = untar_data(URLs.IMDB)

# El dataset cuenta con una carpeta con el texto para el entrenamiento y la validacion, 
# es decir, se encuentra separado por carpetas. Seleccionamos la carpeta para los
# datos de validación.
dls = TextDataLoaders.from_folders(path = path, valid = 'test')

# En concreto vamos a utilizar redes LSTM (Long Short Term Memory)
# LSTM tienen múltiples probabilidades de abandono (drop out) para diferentes cosas. 
# Una vez establecidas, drop_mult escalará todas ellas, permitiendo cambiar todas 
# las probabilidades del drop out simultáneamente usando drop_mult.
leran = text_classifier_learner(
	dls = dls,
  	arch = AWD_LSTM, 
	drop_mult = 0.5, 
	metrics = accuracy)

# Realizamos 4 número de épocas.
# base_lr -> learning rate, ratio de aprendizaje, es el tamaño del paso a la hora 
# de realizar SGD (Stochastic Gradient Descent) para obtener el mínimo en la función. 
# Un learning rate alto, hará que nos alejemos del mínimo de la función,
# mientras que un learning rate bajo el aprendizaje será muy lento.
learn.fine_tune(4, base_lr = 1e-2)

learn.predict("""
	El otro día vimos la película de Buzz Lightyear en cines y la verdad que nos 
	encantó la película, nos recordó a nuestra infancia.
	""")
```

## Capítulo 3: Datos tabulares

### 3.1. Detectar un alto nivel de ingresos basándose en el entorno socioeconómico

#### 3.1.2. Código

```python
!pip install -Uqq fastbook

import fastbook()
fastbook.setup_book()

from fastai.tabular.all import *

path = untar_data(URLs.ADULT_SAMPLE)

# Datos categóricos hacen referencia a que contienen valores que son uno de un 
# conjunto discreto de opciones.
categorical_names = ['workclass', 'education', 'marital_status',
                     'occupation', 'relationship', 'race']

# Datos continuos son datos que contienen un número como representación de una cantidad.
continuous_names = ['age', 'fnlwgt', 'education-num']

dls = TabularDataLoaders.from_csv(
        path/'adult.csv', path = path, y_names="salary",
        cat_names = categorical_names,
        cont_names = continuous_names,
        procs = [Categorify, FillMissing, Normalize])

learn = tabular_learner(dls, metrics = accuracy)

learn.fit_one_cycle(3)

# Mostrará todas las columnas del fichero CSV junto con la predicción de si una 
# persona con altos ingresos o no. Habrá una columna en el CSV con los datos reales 
# (Salary) y otra columna con los datos obtenidos de la predicción (Salary_pred), 
# indicando con un '1' si tiene un alto nivel de ingresos o '0' si no tiene un alto 
# nivel de ingresos.
learn.show_results()
```

## Capítulo 4: Sistemas de recomendación

### 4.1. Predecir clasificaciones de una película

#### 4.1.2. Código

```python
!pip install -Uqq fastbook

import fastbook
fastbook.setup_book()

path = untar_data(URLs.ML_SAMPLE)/'ratings.csv'

dls = CollabDataLoaders.from_csv(path)

# y_range -> especifica el rango de predicción
learn = collab_learner(dls, y_range = (0.5 , 5.5))

learn.fit_one_cycle(10)

learn.show_results()
```

</div>