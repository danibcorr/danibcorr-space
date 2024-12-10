---
sidebar_position: 3
authors:
  - name: Daniel Bazo Correa
description: Estructuras de datos y algoritmos de programación.
title: Estructuras de datos y algoritmos
toc_max_heading_level: 4
---

## Bibliografía

* [YouTube Cesar Ramos](https://www.youtube.com/@cesarramos2592)
  
## 1. Notación Big O

La notación Big O se utiliza para evaluar la eficiencia de los algoritmos en términos de complejidad temporal y espacial. La **complejidad temporal** se refiere a cómo varía el tiempo requerido por un algoritmo en función del número de elementos de entrada, mientras que la **complejidad espacial** se refiere al uso de memoria en función del número de variables utilizadas por el algoritmo.

### 1.1. Ejemplos de notación Big O

- $O\left( 1 \right)$: El tiempo de ejecución es constante, independientemente del tamaño de la entrada. Es típico en algoritmos que acceden a un número fijo de elementos, como devolver el primer elemento de una lista.

- $O\left(\log N\right)$: El tiempo de ejecución crece logarítmicamente con el tamaño de la entrada. Común en algoritmos que dividen el problema a la mitad en cada paso, como la búsqueda binaria.

- $O\left(N\right)$: El tiempo de ejecución crece linealmente con el tamaño de la entrada. Típico de algoritmos que realizan una operación en cada elemento de la entrada, como sumar todos los elementos de una lista.

- $O\left(N\log N\right)$: Representa una combinación de comportamiento lineal y logarítmico. Es común en algoritmos de ordenación eficientes, como el algoritmo de ordenación rápida (*quicksort*).

- $O\left(N^2\right)$: El tiempo de ejecución crece cuadráticamente con el tamaño de la entrada. Se presenta en algoritmos que realizan operaciones sobre cada par de elementos, como el algoritmo de ordenación por burbuja.

- $O\left(2^N\right)$: El tiempo de ejecución crece exponencialmente con el tamaño de la entrada. Es típico de algoritmos que generan todas las combinaciones posibles de elementos, como el "problema del viajante".

En casos donde se realizan múltiples operaciones con diferentes costes temporales, la notación Big O se utiliza para representar el peor caso.

### 1.2. Complejidad de algoritmos multipartes

En algoritmos que involucran múltiples estructuras de datos, la complejidad puede depender de más de un parámetro.

:::tip Ejemplo
```python
def funcion():
    for i in arrayA:
        ...
    for i in arrayB:
        ...
```
En este ejemplo, cada bucle tiene una complejidad de $O\left(N\right)$, pero como los bucles operan en arrays diferentes, la complejidad total es $O\left(A + B\right)$, donde $A$ y $B$ son los tamaños de los arrays `arrayA` y `arrayB`, respectivamente.
:::

:::tip Ejemplo
```python
def funcion():
    for i in arrayA:
        for j in arrayB:
            ...
```

En este caso, la complejidad es $O\left(A \times B\right)$, ya que los bucles anidados operan sobre arrays diferentes. Es un error asumir $O\left(N^2\right)$ sin considerar los tamaños de los arrays involucrados.
:::

Es importante señalar que la notación Big O no está limitada a la letra $N$; cualquier letra puede ser utilizada para representar el tamaño de la entrada en función del contexto del problema.

## 2. Métodos de ordenación

Este capítulo presenta algunos de los métodos de ordenación más utilizados en estructuras de datos y algoritmos.

### 2.1. Ordenación de Burbuja (*Bubble Sort*)

La ordenación de burbuja es un algoritmo de ordenación sencillo que compara pares adyacentes de elementos en una lista e intercambia sus posiciones si están en orden incorrecto. Este proceso se repite hasta que no se requieren más intercambios, lo que indica que la lista está ordenada.

- **Complejidad temporal**: $$O\left(N^2\right)$$ en el peor caso, ya que cada elemento se compara con todos los demás.
- **Complejidad espacial**: $$O\left(1\right)$$, porque solo utiliza un número constante de variables temporales.

:::tip Implementación
```python
def ordenacion_burbuja(lista: list[int]) -> list[int]:

    # Bucle externo que recorre toda la lista
    for i in range(len(lista)):

        # Bucle interno que compara elementos adyacentes
        for j in range(len(lista) - 1):

            # Compara si el elemento actual es mayor que el siguiente
            if lista[j] > lista[j + 1]:

                # Almacena temporalmente el valor del elemento actual
                temp = lista[j]

                # Intercambia los elementos
                lista[j] = lista[j + 1]
                lista[j + 1] = temp

    # Devuelve la lista ordenada
    return lista
```
:::

### 2.2. Ordenación por Selección (*Selection Sort*)

La ordenación por selección selecciona el elemento más pequeño de la lista y lo coloca al principio. Este proceso se repite para el resto de la lista hasta que está completamente ordenada.

- **Complejidad temporal**: $$O\left(N^2\right)$$ en el peor caso, porque cada elemento se compara con todos los demás restantes.
- **Complejidad espacial**: $$O\left(1\right)$$, ya que solo utiliza un espacio constante adicional.

:::tip Implementación

```python
def ordenacion_seleccion(lista: list[int]) -> list[int]:

    # Bucle externo que recorre toda la lista
    for i in range(len(lista)):

        # Inicializa el índice del valor mínimo como el índice actual
        idx_min_value = i

        # Bucle interno que busca el elemento más pequeño en la sublista no ordenada
        for j in range(i + 1, len(lista)): 

            # Compara si el elemento actual es menor que el mínimo encontrado hasta ahora
            if lista[idx_min_value] > lista[j]:
                idx_min_value = j

        # Intercambia el elemento mínimo encontrado con el primer elemento de la sublista no ordenada
        temp = lista[i]
        lista[i] = lista[idx_min_value]
        lista[idx_min_value] = temp

    # Devuelve la lista ordenada
    return lista
```
:::

### 2.3. Ordenación por Inserción (*Insertion Sort*)

La ordenación por inserción funciona dividiendo la lista en una parte ordenada y otra desordenada. Se toma un elemento de la parte desordenada y se inserta en la posición correcta dentro de la parte ordenada. Este proceso continúa hasta que no quedan elementos desordenados.

- **Complejidad temporal**: $$O\left(N^2\right)$$ en el peor caso, cuando los elementos están en orden inverso. En el mejor caso, con una lista ya ordenada, es $$O\left(N\right)$$.
- **Complejidad espacial**: $$O\left(1\right)$$, ya que solo requiere un espacio constante adicional.

:::tip Implementación

```python
def ordenacion_insercion(lista: list[int]) -> list[int]:

    # Bucle que recorre la lista desde el segundo elemento hasta el final
    for i in range(1, len(lista)):

        # Inicializa j como el índice del elemento actual
        j = i

        # Compara y desplaza elementos mientras sea necesario
        while j > 0 and lista[j - 1] > lista[j]:

            # Intercambia elementos adyacentes
            temp = lista[j - 1]
            lista[j - 1] = lista[j]
            lista[j] = temp

            # Decrementa j para continuar comparando con elementos anteriores
            j -= 1

    # Devuelve la lista ordenada
    return lista
```
:::

Estos métodos de ordenación, aunque menos eficientes para grandes conjuntos de datos, proporcionan una buena base para entender algoritmos más avanzados y eficientes.

## 3. Métodos de búsqueda

Este capítulo explora algunos de los métodos de búsqueda más utilizados en estructuras de datos y algoritmos.

### 3.1. Búsqueda Lineal (*Linear Search*)

La búsqueda lineal es un método de búsqueda sencillo que recorre cada elemento de la lista uno por uno hasta encontrar el elemento buscado o hasta recorrer todos los elementos.

- **Complejidad temporal**: $$O\left(N\right)$$ en el peor caso, donde $$n$$ es el número de elementos en la lista, ya que puede ser necesario recorrer todos los elementos.
- **Complejidad espacial**: $$O\left(1\right)$$, ya que solo requiere un espacio constante adicional.

:::tip Implementación

```python
def busqueda_lineal(lista: list[int], valor_buscar: int) -> int:

    # Recorre la lista utilizando enumerate para obtener índice y valor
    for idx, valor in enumerate(lista):

        # Compara el valor actual con el valor buscado
        if valor_buscar == valor:
            # Si encuentra el valor, devuelve su índice
            return idx

    # Si no encuentra el valor, devuelve None
    return None
```
:::

### 3.2. Búsqueda Binaria (*Binary Search*)

La búsqueda binaria es un método de búsqueda eficiente que divide repetidamente a la mitad la parte de la lista que podría contener el elemento buscado, hasta reducir las posibles ubicaciones a una sola. Este método requiere que la lista esté ordenada.

- **Complejidad temporal**: $$O\left(\log N\right)$$ en el peor caso, ya que con cada comparación, el algoritmo reduce a la mitad el número de elementos a examinar.
- **Complejidad espacial**: $$O\left(1\right)$$, ya que solo requiere un espacio constante adicional.

:::tip Implementación

```python
def busqueda_binaria(lista: list[int], valor_buscar: int) -> int:

    # Ordena la lista de manera ascendente
    lista.sort()

    # Inicializa los índices de los extremos de la lista
    izquierda = 0
    derecha = len(lista) - 1

    # Bucle principal de la búsqueda binaria
    while izquierda <= derecha:

        # Calcula el índice del punto medio
        punto_medio = (izquierda + derecha) // 2

        # Compara el valor buscado con el elemento del punto medio
        if valor_buscar == lista[punto_medio]:
            # Si encuentra el valor, devuelve su índice
            return punto_medio
        elif valor_buscar > lista[punto_medio]:
            # Si el valor es mayor, ajusta el límite izquierdo
            izquierda = punto_medio + 1
        else:
            # Si el valor es menor, ajusta el límite derecho
            derecha = punto_medio - 1

    # Si no encuentra el valor, devuelve None
    return None
```
:::

## 4. Estructuras de Datos

### 4.1. Pilas

Una pila es una estructura de datos que organiza elementos de manera secuencial siguiendo el principio LIFO (*Last In, First Out*). Esto implica que el último elemento añadido es el primero en ser retirado. Las operaciones principales en una pila son:

- **Apilar (*push*)**: Añade un elemento a la pila.
- **Desapilar (*pop*)**: Retira el último elemento añadido.

Las pilas pueden tener un tamaño estático o dinámico.

:::tip Implementación

```python
class Pila:

    def __init__(self, tam: int = None):

        self.lista = []
        self.tope = 0
        self.tam = tam
        self.dinamico = False if self.tam is not None else True

    def empty(self):

        return len(self.lista) == 0

    def push(self, elem: int):

        if self.dinamico or self.tope < self.tam:

            self.lista.append(elem)
            self.tope += 1

            if self.dinamico:

                self.tam = self.tope
        else:

            raise Exception("Error, pila llena.")

    def pop(self):

        if not self.empty():

            self.tope -= 1
            return self.lista.pop()

        else:

            raise Exception("Error, pila vacía.")

    def show(self):

        print(self.lista)

    def top(self):

        if not self.empty():

            return self.lista[self.tope - 1]

        else:

            raise Exception("Error, pila vacía.")

    def size(self):

        return len(self.lista)
```
:::

### 4.2. Colas

Una cola es una estructura de datos que organiza elementos de manera secuencial bajo el principio FIFO (*First In, First Out*). Las operaciones de inserción se realizan en un extremo y las de extracción en el otro. 

:::tip Implementación

```python
class Cola():

    def __init__(self, tam: int = None):

        self.lista = []
        self.tope = 0
        self.tam = tam
        self.dinamico = False if self.tam is not None else True

    def size(self):

        return len(self.lista)

    def empty(self):

        return self.size() == 0

    def insertar(self, elem: int):

        if self.dinamico or self.tope < self.tam:

            self.lista.append(elem)
            self.tope += 1

            if self.dinamico:

                self.tam = self.tope
        else:

            raise Exception("Error, cola llena.")

    def eliminar(self):
        
        if not self.empty():

            self.lista.pop(0)
            self.tope -= 1

        else:

            raise Exception("Error, cola vacía.")

    def buscar(self, elem: int):

        if not self.empty():

            for idx, value in enumerate(self.lista):

                if elem == value:

                    return idx

            raise Exception("Error, valor no encontrado.")

        else:

            raise Exception("Error, cola vacía.")

    def top(self):

        if not self.empty():

            return self.lista[0]

        else:

            raise Exception("Error, cola vacía.")

    def show(self):

        print(self.lista)
```
::: 

### 4.3. Nodos

Un nodo es un elemento fundamental en estructuras de datos como listas enlazadas, árboles o grafos. Cada nodo contiene uno o más campos de datos y al menos un campo que es un puntero o referencia a otro nodo. Esto permite navegar por los nodos conectados de la estructura.

### 4.4. Listas Enlazadas

Las listas enlazadas son estructuras de datos donde cada elemento apunta al siguiente mediante un puntero. A diferencia de los arrays, el acceso a elementos se realiza a través de estos enlaces. Una lista enlazada simple tiene un enlace por nodo, que apunta al siguiente nodo o a `None` si es el último nodo.

:::tip Implementación

```python
class Nodo():

    def __init__(self, dato: int):

        self.dato = dato
        self.ptr = None

class ListaEnlazada():

    def __init__(self):

        self.nodo_inicial = None
        self.nodo_final = None

    def vacia(self) -> bool:

        return self.nodo_inicial is None

    def insertar_final(self, dato: int):

        nuevo_nodo = Nodo(dato)

        if self.vacia():

            self.nodo_inicial = self.nodo_final = nuevo_nodo

        else:

            self.nodo_final.ptr = nuevo_nodo
            self.nodo_final = nuevo_nodo

    def insertar_principio(self, dato: int):

        nuevo_nodo = Nodo(dato)

        if self.vacia():

            self.nodo_inicial = self.nodo_final = nuevo_nodo

        else:

            nuevo_nodo.ptr = self.nodo_inicial
            self.nodo_inicial = nuevo_nodo

    def recorrido(self):

        puntero = self.nodo_inicial

        while puntero is not None:

            print(puntero.dato)
            puntero = puntero.ptr

    def eliminar_ultimo(self):

        if not self.vacia():

            if self.nodo_inicial.ptr is None:

                self.nodo_inicial = self.nodo_final = None

            else:

                anterior = self.nodo_inicial
                actual = anterior.ptr

                while actual.ptr is not None:

                    anterior = actual
                    actual = actual.ptr

                del actual
                anterior.ptr = None
                self.nodo_final = anterior

    def eliminar_primero(self):

        if not self.vacia():

            if self.nodo_inicial.ptr is None:

                self.nodo_inicial = self.nodo_final = None

            else:

                nuevo_nodo_inicial = self.nodo_inicial.ptr
                del self.nodo_inicial
                self.nodo_inicial = nuevo_nodo_inicial
```
::: 

### 4.5. Listas Doblemente Enlazadas

Una lista doblemente enlazada consta de una secuencia de nodos donde cada nodo tiene dos enlaces: uno al siguiente nodo y otro al anterior. Esta estructura permite recorrer la lista en ambos sentidos y facilita la eliminación de elementos.

:::tip Implementación

```python
class Nodo():

    def __init__(self, dato: int):

        self.dato = dato
        self.ptr_sig = None
        self.ptr_ant = None

class ListaDobleEnlazada:

    def __init__(self):

        self.nodo_inicial = None
        self.nodo_final = None

    def vacia(self):

        return self.nodo_inicial is None

    def insertar_final(self, dato: int):

        nuevo_nodo = Nodo(dato)

        if self.vacia():

            self.nodo_inicial = self.nodo_final = nuevo_nodo

        else:

            self.nodo_final.ptr_sig = nuevo_nodo
            nuevo_nodo.ptr_ant = self.nodo_final
            self.nodo_final = nuevo_nodo

    def insertar_principio(self, dato: int):

        nuevo_nodo = Nodo(dato)

        if self.vacia():

            self.nodo_inicial = self.nodo_final = nuevo_nodo

        else:

            self.nodo_inicial.ptr_ant = nuevo_nodo
            nuevo_nodo.ptr_sig = self.nodo_inicial
            self.nodo_inicial = nuevo_nodo

    def recorrido_hacia_adelante(self):

        nodo = self.nodo_inicial

        while nodo is not None:

            print(nodo.dato)
            nodo = nodo.ptr_sig

    def recorrido_hacia_atras(self):

        nodo = self.nodo_final

        while nodo is not None:

            print(nodo.dato)
            nodo = nodo.ptr_ant

    def eliminar_ultimo(self):
        
        if not self.vacia():

            if self.nodo_inicial.ptr is None:

                self.nodo_inicial = self.nodo_final = None
            
            else:
                
                ultimo = self.nodo_final
                penultimo = ultimo.ptr_ant
                penultimo.ptr_sig = None
                del ultimo
                self.nodo_final = penultimo

    def eliminar_primero(self):

        if not self.vacia():

            if self.nodo_inicial.ptr is None:

                self.nodo_inicial = self.nodo_final = None

            else:

                primero = self.nodo_inicial
                segundo = primero.ptr_sig
                segundo.ptr_ant = None
                del primero
                self.nodo_inicial = segundo
```
::: 

### 4.6. Lista Circular Simple

Una lista circular simple es una lista enlazada donde el enlace del último nodo apunta al primero, formando un ciclo. Este tipo de lista permite operaciones eficientes de inserción y eliminación cuando se conoce el nodo previo.

:::tip Implementación

```python
class Nodo():

    def __init__(self, dato: int):

        self.dato = dato
        self.ptr = None

class ListaCircular():

    def __init__(self):

        self.nodo_inicial = None
        self.nodo_final = None

    def vacia(self):

        return self.nodo_inicial is None

    def insertar_final(self, dato: int):

        nuevo_nodo = Nodo(dato)

        if self.vacia():

            self.nodo_inicial = self.nodo_final = nuevo_nodo

        else:

            self.nodo_final.ptr = nuevo_nodo
            nuevo_nodo.ptr = self.nodo_inicial
            self.nodo_final = nuevo_nodo

    def insertar_principio(self, dato: int):

        nuevo_nodo = Nodo(dato)

        if self.vacia():

            self.nodo_inicial = self.nodo_final = nuevo_nodo

        else:

            nuevo_nodo.ptr = self.nodo_inicial
            self.nodo_final.ptr = nuevo_nodo
            self.nodo_inicial = nuevo_nodo

    def recorrido(self):

        nodo = self.nodo_inicial

        while (nodo != None):

            print(nodo.dato)
            nodo = nodo.ptr

            if nodo == self.nodo_inicial:

                break

    def eliminar_ultimo(self):

        if self.vacia():

            if self.nodo_inicial == self.nodo_final:

                self.nodo_inicial = self.nodo_final = None

            else:

                ant = self.nodo_inicial
                act = ant.ptr

                while (act.ptr != self.nodo_inicial):

                    ant = act
                    act = act.ptr

                del act
                ant.ptr = self.nodo_inicial
                self.nodo_final = ant

    def eliminar_primero(self):
        
        if self.vacia():

            if self.nodo_inicial == self.nodo_final:

                self.nodo_inicial = self.nodo_final = None

            else:

                siguiente_nodo = self.nodo_inicial.ptr
                self.nodo_final.ptr = siguiente_nodo
                del self.nodo_inicial
                self.nodo_inicial = siguiente_nodo
```
::: 

### 4.7. Lista Circular Doble

Una lista circular doble es una lista doblemente enlazada donde el último nodo apunta al primero y el primero apunta al último, permitiendo un recorrido en ambas direcciones en forma circular.

:::tip Implementación

```python
class Nodo():

    def __init__(self, dato: int):

        self.dato = dato
        self.ptr_siguiente = None
        self.ptr_anterior = None
        
class ListaDobleCircular():

    def __init__(self):

        self.nodo_inicial = None
        self.nodo_final = None

    def vacia(self):

        return self.nodo_inicial == self.nodo_final == None

    def insertar_final(self, dato: int):

        nuevo_nodo = Nodo(dato)

        if self.vacia():

            self.nodo_inicial = self.nodo_final = nuevo_nodo

        else:

            self.nodo_final.ptr_siguiente = nuevo_nodo

            nuevo_nodo.ptr_anterior = self.nodo_final
            nuevo_nodo.ptr_siguiente = self.nodo_inicial

            self.nodo_inicial.ptr_anterior = nuevo_nodo

            self.nodo_final = nuevo_nodo

    def insertar_principio(self, dato: int):

        nuevo_nodo = Nodo(dato)

        if self.vacia():

            self.nodo_inicial = self.nodo_final = nuevo_nodo

        else:

            nuevo_nodo.ptr_siguiente = self.nodo_inicial
            nuevo_nodo.ptr_anterior = self.nodo_final

            self.nodo_inicial.ptr_anterior = nuevo_nodo

            self.nodo_final.ptr_siguiente = nuevo_nodo

            self.nodo_inicial = nuevo_nodo

    def recorrido_hacia_adelante(self):

        nodo = self.nodo_inicial

        while (nodo != None):

            print(nodo.dato)
            nodo = nodo.ptr_siguiente

            if nodo == self.nodo_inicial:

                break

    def recorrido_hacia_atras(self):

        nodo = self.nodo_final

        while (nodo != None):

            print(nodo.dato)
            nodo = nodo.ptr_anterior

            if nodo == self.nodo_final:

                break

    def eliminar_ultimo(self):

        if self.vacia():

            if self.nodo_inicial == self.nodo_final:

                self.nodo_inicial = self.nodo_final = None

            else:

                ultimo = self.nodo_final
                penultimo = ultimo.ptr_anterior

                penultimo.ptr_siguiente = self.nodo_inicial

                self.nodo_inicial.ptr_anterior = penultimo

                del self.nodo_final

                self.nodo_final = penultimo

    def eliminar_primero(self):
        
        if self.vacia():

            if self.nodo_inicial == self.nodo_final:

                self.nodo_inicial = self.nodo_final = None

            else:

                segundo = self.nodo_inicial.ptr_siguiente

                segundo.ptr_anterior = self.nodo_final

                self.nodo_final.ptr_siguiente = segundo

                del self.nodo_inicial

                self.nodo_inicial = segundo
```
:::

### 4.8. Árboles binarios

Un árbol binario es una estructura de datos en la que cada nodo puede tener, como máximo, dos descendientes denominados hijo izquierdo y hijo derecho. Esta estructura es eficiente para organizar y buscar datos.

#### 4.8.1. Características

- Cada nodo tiene un valor y dos descendientes.
- El valor del hijo izquierdo de un nodo es menor que el del nodo padre.
- El valor del hijo derecho es mayor que el del nodo padre.
- Cada nodo tiene un único progenitor, excepto el nodo raíz, que no tiene padre.
- Un árbol binario puede estar vacío o contener nodos, en cuyo caso se compone de una raíz y dos subárboles binarios disjuntos: subárbol izquierdo y subárbol derecho.

#### 4.8.2. Tipos de recorrido

- **Recorrido en orden**: Visita primero el hijo izquierdo, luego la raíz y, finalmente, el hijo derecho.
- **Recorrido en preorden**: Visita primero la raíz, luego el hijo izquierdo y, finalmente, el hijo derecho.
- **Recorrido en postorden**: Visita primero el hijo izquierdo, luego el hijo derecho y, finalmente, la raíz.

:::tip Implementación

```python
class Nodo():
    
    def __init__(self, valor: int = None, padre: int = None, es_raiz: bool = False, es_izquierdo: bool = False, es_derecho: bool = False):
        
        # Valor del nodo
        self.valor = valor   
        # Nodo hijo izquierdo          
        self.izquierdo = None   
        # Nodo hijo derecho            
        self.derecho = None            
        # Nodo padre     
        self.padre = padre                  
        # Indica si el nodo es la raíz
        self.es_raiz = es_raiz              
        # Indica si el nodo es un hijo derecho
        self.es_derecho = es_derecho        
        # Indica si el nodo es un hijo izquierdo
        self.es_izquierdo = es_izquierdo    

class ArbolBinario():

    def __init__(self):

        # Nodo raíz del árbol
        self.nodo_raiz = None              

    def esta_vacio(self):

        return self.nodo_raiz is None

    def agregar_nodo(self, dato: int):

        if self.esta_vacio():

            self.nodo_raiz = Nodo(valor = dato, es_raiz = True)

        else:

            nodo = self._obtener_sitio(dato)

            if dato <= nodo.valor:

                nodo.izquierdo = Nodo(valor = dato, padre = nodo, es_izquierdo = True)

            else:

                nodo.derecho = Nodo(valor = dato, padre = nodo, es_derecho = True)

    def _obtener_sitio(self, valor):

        nodo = self.nodo_raiz

        while nodo is not None:

            temp = nodo

            if valor <= nodo.valor:

                nodo = nodo.izquierdo

            else:

                nodo = nodo.derecho

        return temp

    # Método para mostrar el árbol en orden (izquierda, raíz, derecha)
    def mostrar_en_orden(self, nodo):

        if nodo:

            self.mostrar_en_orden(nodo.izquierdo)
            print(nodo.valor)
            self.mostrar_en_orden(nodo.derecho)

    # Método para mostrar el árbol en postorden (izquierda, derecha, raíz)
    def mostrar_en_postorden(self, nodo):

        if nodo:

            self.mostrar_en_postorden(nodo.izquierdo)
            self.mostrar_en_postorden(nodo.derecho)
            print(nodo.valor)

    # Método para mostrar el árbol en preorden (raíz, izquierda, derecha)
    def mostrar_en_preorden(self, nodo):

        if nodo:

            print(nodo.valor)
            self.mostrar_en_preorden(nodo.izquierdo)
            self.mostrar_en_preorden(nodo.derecho)

    def buscar(self, nodo, valor):

        if nodo == None:

            return None

        else:

            if valor == nodo.valor:

                return nodo

            elif valor <= nodo.valor:

                return self.buscar(nodo.izquierdo, valor)

            else:

                return self.buscar(nodo.derecho, valor)
```
:::