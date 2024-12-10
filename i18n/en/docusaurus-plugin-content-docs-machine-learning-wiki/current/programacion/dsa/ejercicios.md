---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Ejercicios típicos de entrevistas de trabajo.
title: Ejercicios Leetcode
toc_max_heading_level: 4
---
# Bibliography

* [Leetcode BLIND-75 Solutions](https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf)
  
## Easy exercises

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
Solution
</summary>

```python
def function1(list: list[int], target: int) -> list[int]:

    """
    This function is O(N^2) in time, and O(1) in space.
    """

    for i, vali in enumerate(list):

        for j, valj in enumerate(list[i:]):

            if valj + vali == target:

                return [i,j]

def function2(list: list[int], target: int) -> list[int]:

    """
    This function is O(N) in time and O(N) in space.
    """

    dictionary = {}

    for i, value in enumerate(list):

        value2 = target - value

        if value2 in dictionary:

            return [i, dictionary[value2]]

        else:

            dictionary[value] = i
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
Solution
</summary>

```python
def function(list: list[int]) -> list[int]:

    """
    O(N^2)
    """

    max = list[0]

    for i, vali in enumerate(list):

        for j, valj in enumerate(list[i:]):

            diff = valj - vali

            if diff > max:

                max = diff
                tuple = (i, j + 1)

    return [tuple, max]

def function2(list: list[int]) -> list[int]:

    """
    O(N)
    """

    ## We store index, value
    tuple_max = (0, float('-inf'))
    tuple_min = (0, float('inf'))

    for i, valid in enumerate(list):

        if vali < tuple_min[-1]:

            tuple_min = (i, vali)

        elif vali > tuple_max[-1] and i > tuple_min[0]:

            tuple_max = (i, vali)
    
    return [tuple_max[0], tuple_min[0], tuple_max[-1] - tuple_min[-1]]
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
Solution
</summary>

```python
def function(list: list[int]) -> bool:

    """
    O(N^2)
    """
    
    for i, vali in enumerate(list):

        for j, valj in enumerate(list[i + 1:]):

            if vali == valj:

                return True

    return False

def function2(list: list[int]) -> bool:

    """
    O(N)
    """

    dictionary = {}

    for i, vali in enumerate(list):

        if valid in dictionary:

            return True

        else:

            dictionary[vali] = i

    return False
```
</details>

### Maximum subarray

Given an integer array nums, fin the contiguous subarray (containing at least one number) which has the largest sum and return its sum

Example:

```python
nums = [-2,1,-3,4,-1,2,1,-5,4]
output = 6
Explanation: [4,-1,2,1] has the largest sum = 6
```

<details>

<summary>
Solution
</summary>

```python
def function(list: list[int]) -> int:

    """
    Maximum subarray
    Kadane's algorithm O(N)
    """

    act_sum = list[0]
    max_sum = list[0]

    for i in range(1, len(list)):

        act_sum = max(list[i], act_sum + list[i])

        max_sum = max(act_sum, max_sum)return max_sum
```
</details>


## Medium exercises

### Product of array except self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(N) time and without using the division operation.

Example:

```python
nums = [1,2,3,4]
output = [24,12,8,6]
```

<details>

<summary>
Solution
</summary>

```python
def function(list : list[int]) -> bool:

"""
O(N^2), assuming we don't have the restrictions imposed on us
"""

product = 1

for i, vali in enumerate(list):

product *= vali

res = []

for i, vali in enumerate(list):

res.append(int(product / vali))

return res

def function2(list: list[int]) -> bool:

"""
O(N^2), without using division
"""

res = []

for i, vali in enumerate(list):

if i == 0:

left = []

else:

left = list[:i]

elif i == len(list) - 1:

right = []

else:

right = list[i + 1:]

new_list = left + right product = 1

for i, val in enumerate(new_list):

product *= val

res.append(product)

return res

def function3(list: list[int]) -> bool:

"""
O(N)
"""

n = len(list)

## Initialize the product lists on the left and right
## Initially all values ​​are 1, as many elements are created
## as there are elements in the original list

left = [1] * n
right = [1 ] * n

## Calculate the cumulative product to the left of each index
for i in range(1, n):

left[i] = left[i - 1] * list[i - 1]

## Calculate the cumulative product to the right of each index
for i in reversed(range(n - 1)):

der[i] = der[i + 1] * list[i + 1]

## Calculate the product of the elements except the same
for i in range(n):

list[i] = left[i] * der[i]

return list
```
</details>

## Difficult exercises