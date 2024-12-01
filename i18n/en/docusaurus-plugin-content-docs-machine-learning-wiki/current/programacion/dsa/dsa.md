---
sidebar_position: 3
authors:
  - name: Daniel Bazo Correa
description: Estructuras de datos y algoritmos de programación.
title: Estructuras de datos y algoritmos
toc_max_heading_level: 4
---
# Bibliography

* [YouTube Cesar Ramos](https://www.youtube.com/@cesarramos2592)

# Introduction

This section explores various common data structures and algorithms that are typical in job interviews for software engineering positions. Additionally, these concepts are useful in software product development. All code implementations will be presented in Python.

## 1. Big O Notation

Big O notation is used to evaluate the efficiency of algorithms in terms of time and space complexity. **Time complexity** refers to how the time required by an algorithm varies based on the number of input elements, while **space complexity** refers to the memory usage based on the number of variables used by the algorithm.

### 1.1. Examples of Big O Notation

- $O\left( 1 \right)$: The execution time is constant, regardless of the size of the input. It is typical for algorithms that access a fixed number of elements, such as returning the first element of a list.

- $O\left(\log N\right)$: Running time grows logarithmically with the input size. Common for algorithms that halve the problem at each step, such as binary search.

- $O\left(N\right)$: Running time grows linearly with the input size. Typical for algorithms that perform an operation on each element of the input, such as summing all the elements of a list.

- $O\left(N\log N\right)$: Represents a combination of linear and logarithmic behavior. Common for efficient sorting algorithms, such as the quicksort algorithm.

- $O\left(N^2\right)$: Running time grows quadratically with the input size. It occurs in algorithms that perform operations on every pair of elements, such as the bubble sort algorithm.

- $O\left(2^N\right)$: The execution time grows exponentially with the size of the input. It is typical of algorithms that generate all possible combinations of elements, such as the "traveling salesman problem".

In cases where multiple operations are performed with different time costs, Big O notation is used to represent the worst case.

### 1.2. Complexity of multipart algorithms

In algorithms involving multiple data structures, the complexity can depend on more than one parameter:

```python
def function():
for i in arrayA:
...
for i in arrayB:
...
```

In this example, each loop has a complexity of $O\left(N\right)$, but since the loops operate on different arrays, the total complexity is $O\left(A + B\right)$, where $A$ and $B$ are the sizes of the arrays `arrayA` and `arrayB`, respectively.

```python
def function():
for i in arrayA:
for j in arrayB:
...
```

In this case, the complexity is $O\left(A \times B\right)$, since the nested loops operate on different arrays. It is a mistake to assume $O\left(N^2\right)$ without considering the sizes of the arrays involved.

It is important to note that Big O notation is not limited to the letter $N$; any letter can be used to represent the input size depending on the context of the problem.

## 2. Sorting Methods

This chapter introduces some of the most commonly used sorting methods in data structures and algorithms.

### 2.1. Bubble Sort

Bubble sort is a simple sorting algorithm that compares adjacent pairs of elements in a list and swaps their positions if they are in the wrong order. This process is repeated until no more swaps are required, indicating that the list is sorted.

- **Time Complexity**: $$O\left(N^2\right)$$ in the worst case, since each element is compared with every other element.
- **Space complexity**: $$O\left(1\right)$$, because it only uses a constant number of temporary variables.##### Implementation

```python
def bubble_sort(list: list[int]) -> list[int]:

# Outer loop that loops through the entire list
for i in range(len(list)):

# Inner loop that compares adjacent elements
for j in range(len(list) - 1):

# Compares whether the current element is greater than the next
if list[j] > list[j + 1]:

# Temporarily stores the value of the current element
temp = list[j]

# Swaps the elements
list[j] = list[j + 1]
list[j + 1] = temp

# Returns the sorted list
return list
```

### 2.2. Selection Sort

Selection sort selects the smallest element in the list and places it at the beginning. This process is repeated for the rest of the list until it is completely sorted.

- **Time complexity**: $$O\left(N^2\right)$$ in the worst case, because each element is compared to all the remaining elements.
- **Space complexity**: $$O\left(1\right)$$, since it only uses one additional constant space.

##### Implementation

```python
def sort_selection(list: list[int]) -> list[int]:

# Outer loop that loops through the entire list
for i in range(len(list)):

# Initializes the index of the minimum value as the current index
idx_min_value = i

# Inner loop that finds the smallest element in the unordered sublist
for j in range(i + 1, len(list)): 

# Compares if the current element is less than the minimum found so far
if list[idx_min_value] > list[j]:
idx_min_value = j

# Swaps the minimum element found with the first element of the unordered sublist
temp = list[i]
list[i] = list[idx_min_value]
list[idx_min_value] = temp

# Returns the sorted list
return list
```

### 2.3. Insertion Sort

Insertion sort works by splitting the list into an ordered and an unordered part. An element is taken from the unordered part and inserted into the correct position within the ordered part. This process continues until there are no unordered elements left.

- **Time complexity**: $$O\left(N^2\right)$$ in the worst case, when the elements are in reverse order. In the best case, with an already sorted list, it is $$O\left(N\right)$$.
- **Space complexity**: $$O\left(1\right)$$, since it only requires one additional constant space.

##### Implementation

```python
def insert_sort(list: list[int]) -> list[int]:

# Loop that traverses the list from the second element to the end
for i in range(1, len(list)):

# Initialize j as the index of the current element
j = i

# Compare and shift elements as needed
while j > 0 and list[j - 1] > list[j]:

# Swap adjacent elements
temp = list[j - 1]
list[j - 1] = list[j]
list[j] = temp

# Decrement j to continue comparing with previous elements
j -= 1

# Return the sorted list
return list
```

These sorting methods, while less efficient for large data sets, provide a good foundation for understanding more advanced and efficient algorithms.

## 3. Search Methods

This chapter explores some of the most commonly used search methods in data structures and algorithms.

### 3.1. Linear Search

Linear search is a simple search method that goes through each element in a list one by one until the desired element is found or all elements are traversed.

- **Time Complexity**: $$O\left(N\right)$$ in the worst case, where $$n$$ is the number of elements in the list, since it may be necessary to traverse all elements.- **Space complexity**: $$O\left(1\right)$$, since it only requires one additional constant space.

##### Implementation

```python
def linear_search(list: list[int], search_value: int) -> int:

# Iterate through the list using enumerate to get index and value
for idx, value in enumerate(list):

# Compare the current value with the searched value
if search_value == value:
# If the value is found, it returns its index
return idx

# If the value is not found, it returns None
return None
```

### 3.2. Binary Search

Binary search is an efficient search method that repeatedly halves the portion of the list that might contain the searched item, until the possible locations are reduced to one. This method requires the list to be sorted.

- **Time complexity**: $$O\left(\log N\right)$$ in the worst case, since with each comparison, the algorithm halves the number of elements to be examined.
- **Space complexity**: $$O\left(1\right)$$, since it only requires one additional constant space.

##### Implementation

```python
def binary_search(list: list[int], search_value: int) -> int:

# Sort the list in ascending order
list.sort()

# Initialize the indexes of the ends of the list
left = 0
right = len(list) - 1

# Main loop of binary search
while left <= right:

# Calculate the index of the midpoint
midpoint = (left + right) // 2

# Compare the searched value with the element of the midpoint
if search_value == list[midpoint]:
# If the value is found, return its index
return midpoint
elif search_value > list[midpoint]:
# If the value is greater, adjust the left limit
left = midpoint + 1
else:
# If the value is less, adjust the right limit
right = midpoint - 1

# If the value is not found, return None
return None
```

## 4. Data Structures

### 4.1. Stacks

A stack is a data structure that organizes elements sequentially following the LIFO principle (*Last In, First Out*). This implies that the last element added is the first to be removed. The main operations on a stack are:

- **Stack (*push*)**: Adds an element to the stack.
- **Pop* (*pop*)**: Removes the last element added.

Stacks can have a static or dynamic size.

##### Implementation

```python
class Stack:

    def __init__(self, size: int = None):

        self.list = []
        self.top = 0
        self.size = size
        self.dynamic = False if self.tam is not None else True

    def empty(self):

        return len(self.list) == 0

    def push(self, elem: int):

        if self.dynamic or self.top < self.size:

            self.list.append(elem)
            self.top += 1

            if self.dynamic:

                self.tam = self.top
        else:

            raiseException("Error, stack full.")

    def pop(self):

        if not self.empty():

            self.top -= 1
            return self.list.pop()

        else:

            raiseException("Error, stack empty.")

def show(self):

print(self. list)

def top(self):

if not self. empty():

return self. list[self. top - 1]

else:

raise Exception("Error, empty stack.")

def size(self):

return len(self. list)
```

### 4.2. Queues

A queue is a data structure that organizes elements sequentially under the FIFO principle (*First In, First Out*). Insertion operations are performed at one end and extraction operations at the other. 

##### Implementation

```python
class Queue():

def __init__(self, size: int = None):

self. list = []
self. top = 0
self. size = sizeself.dynamic = False if self.tam is not None else True

    def size(self):

        return len(self.list)

    def empty(self):

        return self.size() == 0

    def insert(self, elem: int):

        if self.dynamic or self.top < self.size:

            self.list.append(elem)
            self.top += 1

            if self.dynamic:

                self.tam = self.top
        else:

            raiseException("Error, queue full.")

    def delete(self):
        
        if not self.empty():

            self.list.pop(0)
            self.top -= 1

        else:

            raise Exception("Error, empty queue.")

    def search(self, elem: int):

        if not self.empty():

            for idx, value in enumerate(self.list):

                if element == value:

return idx

raise Exception("Error, value not found.")

else:

raise Exception("Error, queue empty.")

def top(self):

if not self.empty():

return self.list[ 0]

else:

raise Exception("Error, empty queue.")

def show(self):

print(self.list)
```

### 4.3. Nodes

A node is a fundamental element in data structures such as linked lists, Trees or graphs. Each node contains one or more data fields and at least one field that is a pointer or reference to another node. This allows navigation through the connected nodes of the structure.

### 4.4. Linked Lists

Linked lists are data structures where each element points to the next one using a pointer. Unlike arrays, access to elements is done through these links. A singly linked list has one link per node, which points to the next node or to `None` if it is the last node.

##### Implementation

```python
class Node():

def __init__(self, data: int):

self. data = data
self. ptr = None

class LinkedList():

def __init__(self):

self. initial_node = None
self. final_node = None

def empty(self) -> bool:

return self. initial_node is None

def insert_final(self, data: int):

new_node = Node(data)

if self. empty():

self. initial_node = self. end_node = new_node

else:

self.end_node.ptr = new_node
self.end_node = new_node

def insert_beginning(self, data: int):

new_node = Node(data)

if self.empty():

self.initial_node = self.final_node = new_node

else:

new_node.ptr = self.initial_node
self.initial_node = new_node

def traversal(self):

pointer = self.initial_node

while pointer is not None :

print(pointer.data)
pointer = pointer.ptr

def remove_last(self):

if not self. empty():

if self. start_node.ptr is None:

self. start_node = self. end_node = None

else:

previous = self. start_node
current = previous.ptr

while current.ptr is not None:

previous = current
current = current.ptr

from current
previous.ptr = None
self. end_node = previous

def remove_first(self):

if not self. empty():

if self. start_node.ptr is None:

self. start_node = self. end_node = None

else:

new_start_node = self. start_node.ptr
del self. start_node
self. start_node = new_start_node
` ``

### 4.5. Doubly Linked Lists

A doubly linked list consists of a sequence of nodes where each node has two links: one to the next node and one to the previous node. This structure allows the list to be traversed in both directions and makes it easier to remove nodes. elements.

##### Implementation

```python
class Node():def __init__(self, data: int):

self. data = data
self. next_ptr = None
self. previous_ptr = None

class DoubleLinkedList:

def __init__(self):

self. start_node = None
self. end_node = None

def empty(self):

return self. start_node is None

def insert_end(self, data: int):

new_node = Node(data)

if self. empty():

self. start_node = self. end_node = new_node

else:

self. end_node. next_ptr = new_node
new_node. previous_ptr = self. end_node
self. end_node = new_node

def insert_beginning(self, data: int):

new_node = Node(data)

if self.empty():

self.start_node = self.end_node = new_node

else:

self.start_node.previous_ptr = new_node
new_node.next_ptr = self.start_node
self.start_node = new_node

def forward_path(self):

node = self.start_node

while node is not None:

print(node.data)
node = node.next_ptr

def back_path(self):

node = self.end_node

while node is not None:

print(node.data)
node = node.previous_ptr

def delete_last(self):

if not self.empty():

if self.start_node.ptr is None:

self.start_node = self.end_node = None

else:

last = self.end_node
second_to_last = last.previous_ptr
second_to_last.next_ptr = None
del last
self.end_node = second_to_last

def remove_first(self):

if not self.empty():

if self.start_node.ptr is None:

self.start_node = self.end_node = None

else:

first = self.start_node
second = first.next_ptr
second.previous_ptr = None
del first
self.start_node = second
```

### 4.6. Simple Circular List

A simple circular list is a linked list where the link from the last node points to the first, forming a cycle. This type of list allows efficient insertion and removal operations when the previous node is known.

##### Implementation

```python
class Node():

def __init__(self, data: int):

self. data = data
self. ptr = None

class CircularList():

def __init__(self):

self. initial_node = None
self. final_node = None

def empty(self):

return self. initial_node is None

def insert_end(self, data: int):

new_node = Node(data)

if self. empty():

self. initial_node = self. final_node = new_node

else:

self. final_node. ptr = new_node
new_node. ptr = self. initial_node
self. final_node = new_node

def insert_beginning(self, data: int):

new_node = Node(data)

if self.empty():

self.initial_node = self.final_node = new_node

else:

new_node.ptr = self.initial_node
self.final_node.ptr = new_node
self.initial_node = new_node

def traversal(self):

node = self.initial_node

while (node ​​!= None):

print(node.data)
node = node.ptr

if node == self.initial_node:

break

def remove_last(self):

if self.empty():

if self.initial_node == self.final_node:

self.initial_node = self.final_node = None

else:

ant = self.initial_node
act = ant.ptr

while (act.ptr != self.start_node):

                    ant = act
                    act = act.ptr

                of the act
                ant.ptr = self.start_node
                self.end_node = antdef remove_first(self):

if self. empty():

if self. start_node == self. end_node:

self. start_node = self. end_node = None

else:

next_node = self. start_node.ptr
self. end_node.ptr = next_node
del self. start_node
self. start_node = next_node
```

### 4.7. Double Circular List

A double circular list is a doubly linked list where the last node points to the first and the first points to the last, allowing a traversal in both directions in a circular fashion.

##### Implementation

```python
class Node():

def __init__(self, data: int):

self. data = data
self. next_ptr = None
self. previous_ptr = None

class ListDoubleCircular():

def __init__(self):

self. initial_node = None
self. final_node = None

def empty(self):

return self. initial_node == self. final_node == None

def insert_final(self, data: int):

new_node = Node(data)

if self. empty():

self. initial_node = self. final_node = new_node

else:

self. final_node. next_ptr = new_node

new_node. previous_ptr = self.end_node
new_node. next_ptr = self.start_node

self.start_node. previous_ptr = new_node

self.end_node = new_node

def insert_beginning(self, data: int):

new_node = Node(data)

if self.empty():

self.start_node = self.end_node = new_node

else:

new_node. next_ptr = self.start_node
new_node. previous_ptr = self.end_node

self.start_node. previous_ptr = new_node

self.end_node. next_ptr = new_node

self.start_node = new_node

def forward_path(self):

node = self.start_node

while (node ​​!= None):

print(node. data)
node = node. next_ptr

if node == self. start_node:

break

def back_path(self):

node = self. end_node

while (node ​​!= None):

print(node. data)
node = node. previous_ptr

if node == self. end_node:

break

def remove_last(self):

if self. empty():

if self. start_node == self. end_node:

self. start_node = self. end_node = None

else:

last = self. end_node
second_to_last = last. previous_ptr

second_to_last. next_ptr = self. start_node

self. start_node. previous_ptr = second_last

del self.end_node

self.end_node = second_last

def remove_first(self):

if self.empty():

if self.start_node == self.end_node:

self.start_node = self.end_node = None

else:

second = self.start_node.next_ptr

second.previous_ptr = self.end_node

self.end_node.next_ptr = second

del self.start_node

self.start_node = second
```

### 4.8. Binary trees

A binary tree is a data structure in which each node can have at most two descendants called left child and right child. This structure is efficient for organizing and searching data.

#### 4.8.1. Characteristics

- Each node has one value and two descendants.
- The value of the left child of a node is less than that of the parent node.
- The value of the right child is greater than that of the parent node.
- Each node has only one parent, except the root node, which has no parent.- A binary tree can be empty or contain nodes, in which case it consists of a root and two disjoint binary subtrees: left subtree and right subtree.

#### 4.8.2. Types of traversal

- **In-order traversal**: Visits the left child first, then the root, and finally the right child.
- **Pre-order traversal**: Visits the root first, then the left child, and finally the right child.
- **Post-order traversal**: Visits the left child first, then the right child, and finally the root.

##### Implementation

```python
class Node():

def __init__(self, value: int = None, parent: int = None, is_root: bool = False, is_left: bool = False, is_right: bool = False):

# Node value
self. value = value 
# Left child node 
self. left = None 
# Right child node 
self. right = None 
# Parent node 
self. parent = parent 
# Indicates whether the node is the root
self. is_root = is_root 
# Indicates whether the node is a right child
self. is_right = is_right 
# Indicates whether the node is a left child
self. is_left = is_left 

class BinaryTree():

def __init__(self):

# Root node of the tree
self.root_node = None

def is_empty(self):

return self.root_node is None

def add_node(self, data: int):

if self.is_empty():

self.root_node = Node(value = data, is_root = True)

else:

node = self._get_location(data)

if data <= node.value:

node.left = Node(value = data, parent = node, is_left = True)

else:

node.right = Node(value = data, parent = node, is_right = True)

def _get_location(self, value):

node = self.root_node

while node is not None:

temp = node

if value <= node.value:

node = node.left

else:

node = node.right

return temp

# Method to display the tree in order (left, root, right)
def display_in_order(self, node):

if node:

self. display_in_order(node.left)
print(node.value)
self. display_in_order(node.right)

# Method to display the tree in postorder (left, right, root)
def display_in_postorder(self, node):

if node:

self. display_in_postorder(node.left)
self. display_in_postorder(node.right)
print(node.value)

# Method to display the tree in preorder (root, left, right)
def display_in_preorder(self, node):

if node:

print(node.value)
self.show_in_preorder(node.left)

self.show_in_preorder(node.right)

def search(self, node, value):

if node == None:

return None

else:

if value == node.value:

return node

elif value <= node.value:

return self.search(node.left, value)

else:

return self.search(node.right, value)
```