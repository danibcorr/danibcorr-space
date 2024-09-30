---
authors:
  - name: Daniel Bazo Correa
description: Ejercicios típicos de entrevistas.
title: Ejercicios Leetcode
---

# Bibliografía

* [Leetcode BLIND-75 Solutions](https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf)
  
## Ejercicios fáciles

### Two sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

```python
nums = [2, 7, 11, 15]
target = 9

Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1]
```

<details>

<summary>
Solución
</summary>

```python
def funcion1(lista: list[int], target: int) -> list[int]:

    """
    Esta funcion es O(N^2) en tiempo, y O(1) en espacio.
    """

    for i, vali in enumerate(lista):

        for j, valj in enumerate(lista[i:]):

            if valj + vali == target:

                return [i, j]

def funcion2(lista: list[int], target: int) -> list[int]:

    """
    Esta funcion es O(N) en tiempo y O(N) en espacio.
    """

    diccionario = {}

    for i, valor in enumerate(lista):

        valor2 = target - valor

        if valor2 in diccionario:

            return [i, diccionario[valor2]]

        else:

            diccionario[valor] = i
```
</details>

### Best time to buy and sell stock

Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit. Note that you cannot sell a stock before you buy one.

Example:

```python
nums = [7,1,5,3,6,4]
output = 5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 -1 = 5. Not 7 - 1 = 6, as selling price needs to be larger than buying price.
```

<details>

<summary>
Solución
</summary>

```python
def funcion(lista: list[int]) -> list[int]:

    """
    O(N^2)
    """

    max = lista[0]

    for i, vali in enumerate(lista):

        for j, valj in enumerate(lista[i:]):

            diff = valj - vali

            if diff > max:

                max = diff
                tupla = (i, j + 1)

    return [tupla, max]

def funcion2(lista: list[int]) -> list[int]:

    """
    O(N)
    """

    ## Almacenamos indice, valor
    tupla_max = (0, float('-inf'))
    tupla_min = (0, float('inf'))

    for i, vali in enumerate(lista):

        if vali < tupla_min[-1]:

            tupla_min = (i, vali)

        elif vali > tupla_max[-1] and i > tupla_min[0]:

            tupla_max = (i, vali)
    
    return [tupla_max[0], tupla_min[0], tupla_max[-1] - tupla_min[-1]]
```
</details>

### Contains duplicate

Given an integer array nums, return true of any value appears at least twice in the array, and return false if every element is distinct.

Example:

```python
nums = [1,2,3,1]
output = true
```

<details>

<summary>
Solución
</summary>

```python
def funcion(lista: list[int]) -> bool:

    """
    O(N^2)
    """
    
    for i, vali in enumerate(lista):

        for j, valj in enumerate(lista[i + 1:]):

            if vali == valj:

                return True

    return False

def funcion2(lista: list[int]) -> bool:

    """
    O(N)
    """

    diccionario = {}

    for i, vali in enumerate(lista):

        if vali in diccionario:

            return True

        else:

            diccionario[vali] = i

    return False
```
</details>

### Maximum subarray

Given an integer array nums, fin the contiguous subarray (containing at least one number) which has the larges sum and return its sum

Example:

```python
nums = [-2,1,-3,4,-1,2,1,-5,4]
output = 6
Explanaation: [4,-1,2,1] has the largest sum = 6
```

<details>

<summary>
Solución
</summary>

```python
def funcion(lista: list[int]) -> int:

    """
    Maximo subarray
    Kadane's algorithm O(N)
    """

    suma_act = lista[0]
    suma_max = lista[0]

    for i in range(1, len(lista)):

        suma_act = max(lista[i], suma_act + lista[i])

        suma_max = max(suma_act, suma_max)

    return suma_max
```
</details>


## Ejercicios medios

### Product of array except self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(N) time and without using the division operation.

Example:

```python
nums = [1,2,3,4]
output = [24,12,8,6]
```

<details>

<summary>
Solucion
</summary>

```python
def funcion(lista: list[int]) -> bool:

    """
    O(N^2), suponiendo que no tenemos las restricciones que nos imponen
    """
    
    producto = 1

    for i, vali in enumerate(lista):

        producto *= vali

    res = []

    for i, vali in enumerate(lista):

        res.append(int(producto / vali))
        
    return res

def funcion2(lista: list[int]) -> bool:

    """
    O(N^2), sin utilizar la division
    """

    res = []
    
    for i, vali in enumerate(lista):

        if i == 0:

            izq = []

        else:

            izq = lista[:i]

        elif i == len(lista) - 1:

            der = []

        else:

            der = lista[i + 1:]
            
        new_lista = izq + der
        producto = 1

        for i, val in enumerate(new_lista):

            producto *= val

        res.append(producto)

    return res

def funcion3(lista: list[int]) -> bool:

    """
    O(N)
    """
    
    n = len(lista)

    ## Inicializar las listas de productos a la izquierda y a la derecha
    ## Inicialmente todos los valores son 1, se crean tantos elementos
    ## como elementos tenga la lista original

    izq = [1] * n
    der = [1] * n

    ## Calcular el producto acumulativo a la izquierda de cada índice
    for i in range(1, n):

        izq[i] = izq[i - 1] * lista[i - 1]

    ## Calcular el producto acumulativo a la derecha de cada índice
    for i in reversed(range(n - 1)):

        der[i] = der[i + 1] * lista[i + 1]
    
    ## Calcular el producto de los elementos excepto el mismo
    for i in range(n):

        lista[i] = izq[i] * der[i]

    return lista
```
</details>

## Ejercicios difíciles