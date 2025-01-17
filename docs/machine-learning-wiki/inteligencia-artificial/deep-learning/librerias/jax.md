---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
title: Jax
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

# Bibliografía

- https://huggingface.co/blog/afmck/flax-tutorial

# Introducción a JAX y las Unidades de Procesamiento Tensorial (TPU)

Las **Unidades de Procesamiento Tensorial (TPU)** son sistemas que integran
múltiples chips en una misma placa, cada uno de ellos equipado con una serie de
núcleos. Un ejemplo destacado son las TPU v3 de Google, que cuentan con 8
núcleos, conexiones de alta velocidad y un compilador integrado. Estas unidades
poseen un elevado ancho de banda que permite realizar intercambios de datos de
manera eficiente. Además, utilizan el compilador XLA (Accelerated Linear
Algebra), lo que significa que todo en el entorno de las TPU está compilado.
Esto facilita su escalabilidad mediante la creación de conjuntos conocidos como
"pods". Un pod puede contener hasta 1024 TPU v3, lo que se traduce en 2048
núcleos disponibles que pueden conectarse a múltiples CPU hosts. Esta alta
capacidad de ancho de banda es crucial para la escalabilidad del sistema,
permitiendo una mayor potencia por chip.

La compilación es especialmente útil en entornos de investigación donde el
código desarrollado puede carecer de eficiencia inherente. En estos casos, el
compilador se encarga de optimizar el rendimiento del código de manera
automática.

**JAX** ha sido diseñado para crear un ecosistema alrededor de él. Existen
librerías como **Optax**, que contiene una amplia gama de utilidades para el
entrenamiento de modelos, como optimizadores, funciones de pérdida,
programadores de tasas de aprendizaje y más. También está **FLAX**, que se
utiliza para el desarrollo de redes neuronales.

Además de Optax y FLAX, existen otras librerías o familias que se basan en JAX:

- **Dopamine**: Es una librería orientada al Aprendizaje por Refuerzo.
- **Trax**: Es una librería de aprendizaje profundo que se centra en la claridad
  para la investigación.
- **Objax**: Es una librería de aprendizaje profundo que combina la simplicidad
  de Keras con la flexibilidad de JAX.
- **Haiku**: Es una librería para redes neuronales en JAX que se centra en la
  simplicidad y la transparencia.

Estas librerías, junto con JAX, forman un ecosistema robusto y flexible para la
investigación y el desarrollo en el campo del aprendizaje automático.

# JAX: Un framework de computación numérica

**JAX** es un framework de computación numérica diseñado para ser compatible con
CPU, GPU y TPU sin necesidad de modificar el código fuente. Esto simplifica
considerablemente el proceso de desarrollo y optimización, ya que un mismo
código puede ejecutarse en diferentes tipos de hardware sin modificaciones. JAX
permite la diferenciación automática de funciones de Python.

JAX permite trazar tu función en una representación gráfica intermedia, que
luego se pasa a XLA donde se compilará y optimizará. El resultado es un solo
fragmento binario, altamente optimizado, listo y esperando para recibir tus
datos. Este enfoque encaja naturalmente en muchas aplicaciones de aprendizaje
automático, así como en otras tareas de computación científica.

Algunas de las ventajas que ofrece JAX son:

1. **Portabilidad del código**: JAX está diseñado para ser compatible con CPU,
   GPU y TPU sin necesidad de modificar el código fuente. Esto significa que un
   mismo código puede ejecutarse en diferentes tipos de hardware con mínimos
   cambios, lo que simplifica el desarrollo y la implementación de algoritmos.

2. **Optimización automática**: JAX utiliza técnicas de compilación y
   optimización automática, como la compilación justo a tiempo (JIT), para
   mejorar el rendimiento del código. Esto permite que las operaciones sean
   ejecutadas de manera más eficiente, lo que se traduce en tiempos de ejecución
   más rápidos.

3. **Vectorización y paralelización**: JAX proporciona herramientas como `vmap`
   y `pmap` para realizar operaciones vectorizadas y paralelizadas,
   respectivamente. Estas herramientas permiten aprovechar al máximo los
   recursos del hardware, como múltiples núcleos de CPU o GPU, para acelerar el
   procesamiento de grandes conjuntos de datos.

4. **Interoperabilidad con ecosistemas existentes**: JAX se integra fácilmente
   con otros frameworks y bibliotecas populares de Python, como NumPy,
   TensorFlow y PyTorch. Esto significa que los usuarios pueden aprovechar las
   funcionalidades y modelos preentrenados disponibles en estos ecosistemas
   mientras se benefician de las capacidades de optimización y ejecución
   eficiente de JAX.

5. **Flexibilidad y escalabilidad**: JAX es altamente flexible y escalable, lo
   que lo hace adecuado para una amplia gama de aplicaciones, desde experimentos
   de aprendizaje automático hasta simulaciones científicas de gran escala. Su
   capacidad para escalar fácilmente a través de múltiples dispositivos, como
   TPU pods, lo convierte en una opción atractiva para proyectos que requieren
   un alto rendimiento computacional.

A cotinuación se muestra un ejemplo de cómo se puede utilizar JAX:

```python
import jax.numpy as jnp
from jax import grad, vmap, jit

def predict(params, inputs):

    for W, b in params:

        outputs = jnp.dot(inputs, W) + b
        inputs = jnp.tanh(outputs)

    return outputs

def loss(params, batch):

    inputs, targets = batch
    preds = predict(params, inputs)

    return jnp.sum((preds - targets) ** 2)

# Funciones transformables
gradient_fun = jit(grad(loss))
per_example_grads = vmap(grad(loss), in_axes=(None, 0))
```

El código se almacena en la memoria del dispositivo correspondiente y solo se
transfiere al host cuando es necesario realizar operaciones como visualización
en pantalla o escritura en disco. JAX admite el uso de `jit` (compilación justo
a tiempo), lo que mejora aún más el rendimiento del código. Esto hace de JAX una
herramienta poderosa y flexible para la computación numérica y el aprendizaje
automático.

## Vectorización y Paralelización con JAX

**VMAP** es una herramienta de JAX que permite aplicar una función a cada
elemento de un conjunto de datos de entrada, facilitando la aplicación de
operaciones vectorizadas. Por ejemplo:

```python
import jax.numpy as jnp
from jax import vmap

print(vmap(lambda x: x ** 2)(jnp.arange(8)))
```

En este caso, VMAP crea una nueva dimensión, tratando los datos de entrada como
un lote (batch).

Por otro lado, **PMAP** paraleliza las operaciones en diferentes núcleos de la
TPU, permitiendo un procesamiento simultáneo de múltiples elementos de datos.
Cada resultado se almacena en un núcleo diferente, pero todos comparten los
mismos recursos, como un array compartido.

Además, existen operaciones de comunicación colectiva que facilitan la
coordinación y el intercambio de datos entre los diferentes núcleos.

**PJIT** es una herramienta que permite la paralelización automática entre
diferentes TPU, proporcionando una visión del cómputo global y optimizando la
distribución de tareas de manera automática.

En resumen, JAX ofrece una amplia gama de herramientas para optimizar y ejecutar
eficientemente cálculos numéricos en una variedad de dispositivos, desde CPU y
GPU hasta las potentes TPU de Google. Su capacidad para trabajar sin problemas
en diferentes tipos de hardware lo convierte en una opción atractiva para
proyectos de aprendizaje automático e investigación computacional.

## Reproducibilidad con JAX

En JAX y Flax, la función `jax.random.PRNGKey(seed)` se utiliza para inicializar
una clave pseudoaleatoria que luego se puede dividir en subclaves para
garantizar la reproducibilidad y el control de la aleatoriedad en las
operaciones que dependen de valores aleatorios, como la inicialización de
parámetros de modelos, la división de datos para entrenamiento, etc.

Por ejemplo:

```python
key = jax.random.PRNGKey(0x1234)
key, model_key = jax.random.split(key)
model = VAE(latent_dim=4)
print(model)

key, call_key = jax.random.split(key)
```

En este caso:

- `key = jax.random.PRNGKey(0x1234)`: Inicializa una clave pseudoaleatoria con
  el valor de semilla (seed) especificado, en este caso, 0x1234. El valor de
  semilla determina la secuencia de números pseudoaleatorios generada.
- `key, model_key = jax.random.split(key)`: Divide la clave original (key) en
  dos subclaves, key y model_key. Esto se hace para garantizar que las
  operaciones aleatorias realizadas en la inicialización del modelo (o cualquier
  otra operación aleatoria relacionada con el modelo) sean reproducibles.
  model_key se utilizará más adelante para inicializar los parámetros del
  modelo.
- `model = VAE(latent_dim=4)`: Aquí se crea una instancia del modelo VAE
  (autoencoder variacional) con una dimensionalidad latente de 4. Esto no tiene
  relación directa con la generación de claves aleatorias, pero es parte del
  proceso de inicialización del modelo.
- `key, call_key = jax.random.split(key)`: Finalmente, se divide la clave key
  nuevamente para generar una nueva subclave llamada call_key. Esta división se
  hace probablemente para garantizar que las operaciones posteriores que
  dependen de la aleatoriedad, como la selección de datos de entrenamiento o la
  introducción de ruido en el proceso de entrenamiento, sean reproducibles y
  controladas.

Estas características hacen de JAX una herramienta poderosa y flexible para la
computación numérica y el aprendizaje automático, permitiendo un control preciso
sobre la aleatoriedad y la reproducibilidad de los experimentos.

# Flax: Librería para el Desarrollo de Redes Neuronales

**Flax** es una librería basada en JAX que proporciona una API de alto nivel
para el desarrollo y entrenamiento de modelos de aprendizaje automático. Algunas
de las ventajas clave de utilizar Flax incluyen:

1. **API fácil de usar**: Flax proporciona una API intuitiva y fácil de usar que
   simplifica el desarrollo y la experimentación con modelos de aprendizaje
   automático. Está diseñado para ser accesible tanto para principiantes como
   para expertos en aprendizaje automático.

2. **Reproducibilidad y determinismo**: Flax utiliza un enfoque determinista
   para el entrenamiento de modelos, lo que garantiza que los resultados sean
   reproducibles. Esto es importante para la investigación científica y la
   colaboración, ya que permite a los investigadores replicar experimentos y
   comparar resultados de manera consistente.

3. **Flexibilidad y extensibilidad**: Flax está diseñado para ser altamente
   flexible y extensible, lo que permite a los usuarios personalizar y adaptar
   fácilmente los modelos y algoritmos según sus necesidades específicas. Esto
   incluye la capacidad de definir nuevas capas, funciones de activación y
   algoritmos de optimización.

4. **Optimización automática y eficiencia**: Al igual que JAX, Flax aprovecha
   las capacidades de optimización automática para acelerar el entrenamiento de
   modelos. Esto incluye técnicas como la compilación justo a tiempo (JIT) y la
   paralelización automática, que mejoran el rendimiento del código y la
   eficiencia del entrenamiento.

5. **Integración con ecosistemas existentes**: Flax se integra estrechamente con
   otros frameworks y bibliotecas populares de aprendizaje automático, como
   TensorFlow y PyTorch. Esto facilita la interoperabilidad y la migración de
   modelos entre diferentes plataformas, lo que permite a los usuarios
   aprovechar las funcionalidades y modelos preentrenados disponibles en estos
   ecosistemas.

Flax ofrece una API de redes neuronales familiar pero sin estado durante la
ejecución. Permite definir módulos de red neuronal de dos formas: una similar a
lo que sería PyTorch o TensorFlow y otra versión que se conoce como compacta.

Por ejemplo, en la versión compacta, podemos crear las capas conforme se llamen:

```python
class MLP(nn.Module):
    features: Sequence[int]

    @nn.compact
    def __call__(self, x):

        for feat in self.features[:-1]:

            x = nn.relu(nn.Dense(feat)(x))

        x = nn.Dense(self.features[-1])(x)

        return x

model = MLP([12, 8, 4])
batch = jnp.ones((32, 10))
variables = model.init(jax.random.PRNGKey(0), batch)
output = model.apply(variables, batch)
```

En la versión no compacta, primero definimos las capas en el setup y
posteriormente se llaman en el call:

```python
from flax import linen as nn

class Net(nn.Module):
    units: int

    def setup(self):

        self.conv = nn.Conv(self.units, [3, 3], [3, 3])
        self.fc = nn.Dense(10)

    def __call__(self, x):

        x = self.conv(x)
        x = nn.relu(x)
        x = x.reshape([len(x), -1])
        x = self.fc(x)

        return nn.log_softmax(x)
```

Existen módulos predefinidos como `nn.Dense()`, existe auto shape para la
inferencia, y automáticamente se crean los parámetros que reflejan la jerarquía
del módulo creado, es decir, la capa creada convolucional o densa tendrá tanto
el kernel como el sesgo. Podemos definir los setup como los `__init__` de las
clases. En resumen, Flax es una opción atractiva para el desarrollo y la
experimentación con modelos de aprendizaje automático gracias a su flexibilidad,
eficiencia y facilidad de uso. Su integración con JAX y otros frameworks de
aprendizaje automático lo hace especialmente poderoso y versátil para una amplia
gama de aplicaciones en investigación, desarrollo de productos y producción de
modelos.

Por supuesto, aquí tienes una versión mejorada del texto:

En Flax, los modelos se definen sin parámetros. En lugar de eso, los parámetros
se asocian posteriormente durante la inicialización. Esta inicialización se
lleva a cabo mediante la función `init`, que genera un diccionario con los
parámetros del modelo. Posteriormente, para llamar al modelo, utilizamos la
función `apply`, proporcionando tanto los parámetros como los datos de entrada.
Este enfoque mantiene el modelo sin estado durante la ejecución y permite su
interoperabilidad con JAX.

Aquí tienes un ejemplo de cómo se utiliza:

```python
import jax
import jax.numpy as jnp
import flax.linen as nn

# Definimos un modelo simple usando Flax
class SimpleModel(nn.Module):

    dim: int

    def setup(self):

        self.layer = nn.Dense(features=self.dim)

    def __call__(self, x):

        x = self.layer(x)

        return x

# Función para inicializar los parámetros del modelo
def initialize_model(rng_key, input_shape, model_cls):

    # Añadimos la dimensión del lote
    input_shape = (1,) + input_shape

    # Creamos un array de ceros con el tamaño de entrada
    input_shape = jnp.zeros(input_shape)
    _, initial_params = model_cls.init_by_shape(jax.random.PRNGKey(0), [input_shape])

    return initial_params

# Función para llamar al modelo con los parámetros e inputs
def call_model(params, inputs, model_cls):

    model = model_cls()

    return model.apply(params, inputs)

# Ejemplo de uso
input_shape = (10,)  # Tamaño de entrada
rng_key = jax.random.PRNGKey(0)

# Inicializamos los parámetros
initial_params = initialize_model(rng_key, input_shape, SimpleModel)

# Definimos los inputs de ejemplo
inputs = jnp.ones((1,) + input_shape)  # Usamos un array de unos como input

# Llamamos al modelo con los parámetros e inputs
output = call_model(initial_params, inputs, SimpleModel)

print("Forma del output:", output.shape)
print("Valores del output:", output)
```
