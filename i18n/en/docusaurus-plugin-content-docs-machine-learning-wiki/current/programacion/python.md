---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Aprende todo lo necesario sobre el lenguaje de programación Python.
title: Python
toc_max_heading_level: 4
---
# References

* [Python Docs](https://docs.python.org/3/)
* [Python Bootcamps Udemy](https://www.udemy.com/course/complete-python-bootcamp/)

# Introduction

**Python** is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and released in 1991. It is characterized by its clear and readable syntax, which makes it easy to learn and write code. It also has a large developer community and a large number of libraries and frameworks that allow the development of diverse projects, such as web applications, data analysis, and machine learning.

## 1. Installation

### 1.1. Miniconda and Jupyter Notebooks

**Miniconda** is a lightweight version of **Conda** that includes only the essentials: Conda, Python, and some basic packages. Its main function is to facilitate the creation of virtual environments to isolate dependencies and avoid conflicts between package versions. Miniconda should be installed following the official instructions available on the [Miniconda page](https://docs.anaconda.com/miniconda/).

To work with Python in test environments, **Jupyter Notebooks** are often used, an interactive tool that combines code, visualizations, and text in a single document. The main advantages of Jupyter Notebooks include:

- **Interactivity**: It allows you to run blocks of code independently, facilitating experimentation and testing of ideas.
- **Integrated documentation**: It supports text in Markdown format, allowing you to document code alongside its execution.
- **Visualization**: Allows you to integrate graphics and visualizations from libraries such as **Matplotlib** or **Seaborn** directly into the document.

### 1.2. Creating and configuring the environment

Once Miniconda is installed, it is necessary to create a virtual environment by configuring the Python version and the packages required for each project. To do this,
you can follow the steps in the [tools section, environment management in Python](../herramientas/entornos_python.md).

### 1.3. Useful commands for the terminal

Below are some useful commands for the terminal in Linux, along with their function:

| Command | Function |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| `pwd` | Displays the full path of the current directory. |
| `ls` | Lists the files and folders in the current directory. |
| `ls -l` | Displays a detailed list of the files and folders. |
| `cd directory_name` | Changes to the specified directory. |
| `cd ..` | Navigates to the top (parent) directory. |
| `cd /` | Navigates to the system root directory. |
| `mkdir folder_name` | Creates a new folder with the specified name. |
| `rm file_name` | Deletes a specified file. |
| `rm -r folder_name` | Deletes a folder and its contents recursively. |
| `touch file_name` | Creates an empty file with the specified name. |
| `mv source destination` | Moves or renames files or folders. || `cp source destination` | Copy files or folders from one place to another. |
| `clear` | Clear the terminal screen. |

### 1.4. Keyboard shortcuts for Jupyter Notebooks

Here are some useful keyboard shortcuts for working in **Jupyter Notebooks**:

| Shortcut | Function |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| `ctrl + shift + p` | Opens the command palette in Visual Studio Code (includes the option to open Jupyter). |
| `shift + tab` | Displays the documentation for a function or method in Jupyter. |
| `esc + m` | Switches a cell to Markdown mode in Jupyter. |
| `esc + y` | Switches a cell to code mode in Jupyter. |
| `ctrl + enter` | Executes the current cell without advancing to the next. |
| `shift + enter` | Execute the current cell and move to the next. |

## 2. Basic Concepts

### 2.1. Data Types

Python offers several fundamental data types that allow you to define, store, and manipulate information. The main data types and their characteristics are detailed below:

| Data Type | Reserved Word | Examples |
|--------------------------------------------------|-------------------|----------------------------------|
| **Integers** | `int` | `3` |
| **Floating Numbers** | `float` | `2.3` |
| **Text Strings** | `str` | `"Hello"` |
| **Lists** (ordered and mutable collection) | `list` | `[10, "hello", 200.3]` |
| **Dictionaries** (key-value pairs) | `dict` | `{"age": 20, "name": "Dani"}` |
| **Tuples** (ordered, immutable sequence) | `tuple` | `(10, "hello", 200.3)` |
| **Sets** (single, unordered collection) | `set` | `{"a", "b"}` |
| **Booleans** (logical values) | `bool` | `True`, `False` |

### 2.2. Data operations

Python allows you to perform a wide variety of operations on numeric and other data types. The main mathematical operations and functions available are described below:

| Operator/Function | Description |
|------------------------|-------------------------------------------------------|
| `+`, `-`, `*`, `/`, `%` | Addition, subtraction, multiplication, division, and modulus (remainder of division). |
| `-x` | Changes the sign of a number. |
| `abs(x)` | Returns the absolute value of `x`. |
| `pow(x, y)` or `x**y` | Power of `x` raised to `y`. |
| `max(x, y)` | Returns the maximum value between `x` and `y`. |
| `min(x, y)` | Returns the minimum value between `x` and `y`. |
| `round(x, n)` | Rounds `x` to `n` decimal places. |
| `math.floor(x)` | Rounds down. Requires import of `math`. |
| `math.ceil(x)` | Rounds up. Requires import of `math`. |
| `math.sqrt(x)` | Returns the square root of `x`. Requires import of `math`. |
| `math.pi` | Returns the value of Pi. Requires import of `math`. || `hex(x)` | Converts `x` to hexadecimal. |
| `bin(x)` | Converts `x` to binary. |

### 2.3. Operators

#### 2.3.1. Comparison operators

Comparison operators allow you to evaluate relationships between two values, returning a boolean result (`True` or `False`).

| Expression | Description |
|-----------|----------------------------|
| `A == B` | A is equal to B. |
| `A != B` | A is not equal to B. |
| `A < B` | A is less than B. |
| `A <= B` | A is less than or equal to B. |
| `A > B` | A is greater than B. |
| `A >= B` | A is greater than or equal to B. |

#### 2.3.2. Logical Operators

Logical operators allow you to combine multiple conditions and control the flow of execution based on the results.

| Operator | Description |
|----------|----------------------------------------------------------|
| `and` | Returns `True` if **all** conditions are true. |
| `or` | Returns `True` if **at least one** condition is true. |
| `not` | Inverts the logical value of the condition. |

Logical operators are primarily used in control structures, such as conditionals and loops, to determine the flow of the program based on logical conditions. These control structures will be explained in later sections.

### 2.4. Variables

When creating variables in Python, certain rules must be followed:

* Names must not start with numbers.
* Spaces are not allowed in names.
* The following symbols must not be used: `: ''' <> / , ? | \ ( ) ! @ ## $ % ^ & * ~ - +`.
* It is recommended to use lowercase variable names. 

**Python is a dynamically typed language**, so it is not necessary to explicitly declare the data type, since it is automatically assigned based on the value. For example:

```python
my_dogs = 2
my_dogs = ["Pixel", "One"]
```

To find out the type of a variable, use the `type(variable)` function.

### 2.5. Displaying data on the screen

To display data on the screen, the `print()` function is used, for example:

```python
print("This is a test")
```

You can concatenate variables containing text strings or methods/functions that return a value using the `+` operator, for example:

```python
char_name = "Daniel"
char_age = 19

print("My name is " + char_name + " and I am " + str(char_age) + " years old.")
```

This method can be inefficient. Starting with Python 3, it is possible to format the `print()` function using a format string with `f`, which allows you to enclose variables or expressions within `{}` braces, for example:

```python
char_name = "Daniel"
char_age = 19

print(f"My name is {char_name} and I am {char_age} years old")
```

We can even modify the specific number of decimal places for a `float` value using the `{float_value:.precision}` format. For example, to display the number Pi with 5 decimal places:

```python
import math

pi = math.pi
print(f"The number pi with 5 decimal places is: {pi:.5f}")
```

### 2.6. Inputting data

Python allows you to receive information from the user using the `input(...)` function. This function always returns the entered value as a string. Therefore, a type conversion (***casting***) is necessary if a different data type is required. For example:

```python
name = input("Enter your name: ")
age = input("Enter your age: ")

print("\n\t- USER DATA - \n")
print(f"Name: {name}")
print(f"Age: {age}")
```

To convert an `input` to a number, it is necessary to do a *cast*, as in the following example, where a `string` input is converted to a `float`:

```python
number = float(input("Enter a number: "))
```This procedure is useful for manipulating numeric data or performing calculations after receiving user input.

### 2.7. Strings

A **string** is a sequence of characters that can contain letters, numbers, symbols, or spaces. A basic example of a string is shown below, along with the use of indexing:

```python
phrase = "Hello good morning"

# Print the character 'H'
print("The first character of my string is " + phrase[0])

# Print the character 'b'
print("The sixth character of my string is " + phrase[5])
```

In this case, the index of a string starts at `0`, so:
- `phrase[0]` refers to the first character of the string, which is `"H"`.
- `phrase[5]` refers to the sixth character of the string, which is `"b"`. Note how the blank space counts as one character.

Python allows you to access any character in a string using its position, or **index**. The first character has index `0`, the second character has index `1`, and so on. Negative indices can also be used to count from the end of the string to the beginning, for example, `sentence[-1]` returns the last character.

Strings are **immutable**, meaning that it is not possible to change a specific character in an already created string. Trying to directly modify an element will result in an error. For example:

```python
sentence = "Hello good"

# Trying to change the first character
sentence[0] = "h" # This will result in an error
```

This code throws a `TypeError` because you cannot directly modify a character in an existing string. To modify a string, you need to create a new one by combining parts of the original string. For example, to change the first letter of `"Hello good"` to a lowercase letter:

```python
phrase = "Hello good"

# Create a new string with the first letter changed
new_phrase = "h" + phrase[1:]

# Print: "hello good"
print(new_phrase) 
```

In this example, a new string is built by concatenating `"h"` with the rest of the original string (`phrase[1:]`), which returns the string from the second character onwards.

#### 2.7.1. Methods

Python string variables have several built-in functions to manipulate and analyze the contents of the string:

| Function | Definition |
|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `str(variable_to_convert_to_string)` | Converts a variable to a text string. |
| `variable *= x` | Duplicates the string `variable` `x` times, where `x` is an integer. |
| `variable[index:]` | Returns a substring from index to the end of the string. || `variable[::X]` | Gets characters from the string in a step of `X`, that is, takes a character every `X` characters. |
| `variable[::-1]` | Reverses the string. |
| `variable.lower()` | Converts the entire string to lowercase. |
| `variable.upper()` | Converts the entire string to uppercase. |
| `variable.isupper()` | Returns True if the entire string is uppercase, False otherwise. |
| `variable.upper().isupper()` | Converts the string to uppercase and returns True if the entire string is uppercase. |
| `variable.split()` | Splits the string into a list of substrings based on spaces. A different delimiter may be specified. |
| `len(variable)` | Returns the number of characters in the string. |
| `variable.index("a")` or `variable.index("good")`| Returns the first index where the specified parameter is found. |
| `variable.replace("hello", "my name is Daniel")` | Replaces a substring within the string with another substring. |
| `variable.count('x')` | Counts the number of times the specified character appears. |
| `variable.find('x')` | Returns the first position where the specified character is found. |
| `variable.isalnum()` | Returns True if all characters are alphanumeric. || `variable. isalpha()` | Returns True if all characters are alphabetic. |
| `variable. islower()` | Returns True if all characters are lowercase. |
| `variable. isspace()` | Returns True if all characters are whitespace. |
| `variable. istitle()` | Returns True if the first letter of each word is uppercase. |
| `variable. split('x')` | Splits the string into parts when it encounters the character `x`. |
| `variable. partition('x')` | Splits the string into two parts on the first encounter of the character `x`. |
| `variable. strip()` | Removes leading and trailing spaces from the string. |

### 2.8. Conditional Statements

Conditional statements in Python, such as `if`, `elif`, and `else`, allow different blocks of code to be executed depending on whether or not certain conditions are met. This is essential for controlling the flow of a program and making decisions based on the data or situations evaluated.

The basic conditional in Python is the `if` statement, which executes a block of code only if the specified condition is true.

```python
if condition:
# Code to execute if the condition is true
```

If the condition is false, an `else` statement can be used to execute an alternative block:

```python
if condition:
# Code to execute if the condition is true
else:
# Code to execute if the condition is false
```

To handle multiple conditions, the `elif` statement is used, which allows multiple conditions to be evaluated sequentially:

```python
if first_condition:
# Code to execute if the first condition is true
elif second_condition:
# Code to execute if the second condition is true
else:
# Code to execute if none of the previous conditions are true
```

##### Examples

Let's see how these structures are applied in practical examples. First, an `if` conditional is used to check if a number is present in a list:

```python
letter = 'y'
word = "Laguna"

if letter in word:
print(f"The word {word} contains the letter {letter}")
else:
print(f"The word {word} does not contain the letter {letter}")
```

In this case, if `letter` is found in the string `word`, the program will print a message indicating that the word contains the letter. Otherwise, the `else` block will be executed.

### 2.9. LoopsLoops in Python allow you to run a block of code repeatedly, making it easy to automate repetitive tasks by looping through sequences of items or evaluating a condition.

#### 2.9.1. `for` loop

The `for` loop is ideal for iterating over sequences such as lists or strings. Its basic syntax is:

```python
for variable in iterable:
# Code to execute for each element in the iterable
```

##### Examples

1. **Looping through a range of numbers** 
The `range(n, m, s)` function generates a sequence of numbers from `n` to `m - 1`, with a step of `s`. For example, to display numbers from 0 to 10 in steps of 2:

```python
for number in range(0, 11, 2): 
print(number)
```

2. **Iterating through characters in a string** 
You can use `range()` and `len()` to iterate over the indices of a string:

```python
my_string = "Hello snail"
for letter in range(len(my_string)):
print(my_string[letter])
```

Alternatively, you can iterate directly over the characters in the string:

```python
my_string = "Hello snail"
for letter in my_string:
print(letter)
```

3. **Iterating through two sequences simultaneously with `zip()`** 
`zip()` allows you to iterate through two sequences at the same time, matching their elements:

```python
my_list1 = "Hello"
my_list2 = "Yadi"

for item in zip(my_list1, my_list2):
print(item)
```

In this example, only the characters up to the end of the shortest string will be scanned.

4. **Using `enumerate()` to get indexes and values** 
`enumerate()` allows you to get the index and value of each item in a sequence:

```python
word = "abcde"

for idx, letter in enumerate(word):
print(f"Index {idx}: {letter}")
```

#### 2.9.2. `while` loop

The `while` loop continues to execute as long as a condition remains true. Its basic syntax is:

```python
while condition:
# Code to execute while the condition is true
```

##### Example

1. **Creating a counter** 
A `while` loop can be used to increment a counter until it reaches a certain value:

```python
counter = 0
while counter < 5:
print(counter)
counter += 1
```

In this case, the loop prints the values ​​of `counter` while it is less than 5.

#### 2.9.3. Flow control in loops: `break`, `continue`, and `pass`

The `break` statement terminates the loop immediately, even if it has not finished looping through all the elements:

```python
my_string = "Daniel"

for letter in my_string:
if letter == 'a':
break
print(letter)
```

In this example, the loop will stop upon finding the letter 'a' and will not continue with the rest of the iterations.

On the other hand, `continue` skips the rest of the code in the current iteration and goes to the next one:

```python
my_string = "Daniel"

for letter in my_string:
if letter == 'a':
continue
print(letter)
```

Here, when the loop encounters the letter 'a', it skips the `print()` and continues with the next letter.

Finally, `pass` does nothing, but is used as a placeholder when an empty block of code is needed:

```python
for letter in 'Python':
if letter == 'h':
pass # Performs no action
print('This is the letter h')
print('Current letter:', letter)
```

In this case, when the loop encounters the letter 'h', it does not perform any specific action thanks to `pass`, but the loop continues normally.

### 2.10. Using `__name__` and the `main` Function

In Python, the special variable `__name__` is used to determine whether a file is being run directly as a script or whether it is being imported as a module in another script. Understanding this behavior is useful for structuring code so that certain blocks are executed only when the file is run directly, and not when it is imported.> A script is a set of instructions or commands written in a programming language that are executed sequentially. Scripts are used to automate repetitive tasks, perform complex operations, or interact with other programs.

When a Python file is executed directly, Python assigns the variable `__name__` the value `"__main__"`. However, if the file is imported as a module into another script, `__name__` takes the name of the file (without the `.py` extension).

#### 2.10.1. Practical case

For example, consider two Python files, `one79.py` and `two79.py`, that import each other. Here is how `__name__` behaves in each case:

**File `one79.py`**

```python
# one79.py
import two79

print(f"File 1 __name__ set to: {__name__}")

if __name__ == "__main__":
print("File 1 executed directly")
else:
print("File 1 executed as imported into another module")
```

**File `two79.py`**

```python
# two79.py
import one79 as t

print(f"File 2 __name__ set to: {__name__}")

if __name__ == "__main__":
print("File 2 executed directly")
else:
print("File 2 executed as imported into another module module")
```

If the file `one79.py` is executed, the result will be:

```
File 1 __name__ set to: __main__
File 2 __name__ set to: two79
File 2 executed as imported into another module
```

In this case, `one79.py` shows that `__name__` is `"__main__"` because it is being executed directly. `two79.py`, which is imported inside `one79.py`, shows that `__name__` is `"two79"`.

It is good practice to define a `main()` function that contains the main code to be executed. This makes the code more organized and makes it easier to reuse. Here is how `main()` can be defined and used:

```python
# one79.py
import two79

def main():
print("Main code of one79.py")

if __name__ == "__main__":
main()
```

In this example, the code inside the `main()` function will only be executed if `one79.py` is run directly. If `one79.py` is imported, only the code outside the `main()` function will be executed, which could be useful for module initialization or imports.

## 3. Data Structures

In Python, data structures are fundamental to efficiently storing and manipulating data. Next, we will explore some of the most common data structures.

### 3.1. Lists

Lists in Python are data structures that allow you to store ordered, mutable sequences of elements. Unlike other languages, lists in Python can contain elements of different types. Also, their size is dynamic, meaning that it can change during program execution. Indexing starts at 0, and negative indices allow access to elements from the end of the list.

To define a list, just use square brackets and separate the elements with commas. Here is an example where each element is a string:

```python
friend_list = ["Jorge", "Fran", "Ricardo"]
```

It is also possible to initialize an empty list:

```python
list = []
```

Access to the elements is done through the index. For example:

```python
friend_list = ["Jorge", "Fran", "Ricardo"]

# Access the first element
print(f"The first friend is {friend_list[0]}")

# Access the last element
print(f"My friend from the village is {friend_list[-1]}")

# Select a range of elements
print(friend_list[0:2])

# Display the entire list
print(friend_list)

```

#### 3.1.1. Methods

| Function | Definition || ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `list[index] = x` | Changes the element at the index specified by `x`. |
| `list.extend(x)` | Adds the elements of `x` to the end of the current list. |
| `list.append(x)` | Adds an element `x` to the end of the list. |
| `list.insert(index,x)` | Inserts `x` at the specified index. |
| `list.remove(x)` | Removes the first occurrence of `x` from the list. |
| `list.clear()` | Empty the list. |
| `list.pop()` | Removes the last element from the list or the element at the specified index. |
| `list.index(x)` | Returns the index of the first occurrence of `x`. |
| `list.count(x)` | Returns the number of times `x` appears in the list. |
| `list.sort()` | Sorts the list in ascending order. |
| `list.reverse()` | Reverses the order of the elements in the list. |
| `list2 = list1.copy()` | Creates a copy of `list1` in `list2`. |
| `max(list)` | Returns the maximum value in the list. |
| `min(list)` | Returns the minimum value in the list. |
| `del list[x]` | Removes the element at index `x` from the list. |

#### 3.1.2. Using `for` loops within lists

`for` loops make it easy to iterate over the elements of a list. Additionally, Python allows you to use **list comprehension** to create new lists based on operations on a sequence of elements.

Examples of `for` loops in lists:

```python
# Create a list of characters from a string
my_list = [letter for letter in "Hello"]
print(my_list)

# Create a list of square numbers
my_list = [number ** 2 for number in range(0, 20, 2)]
print(my_list)

# Convert temperatures from Celsius to Fahrenheit
celcius = [0, 10, 20, 34.5]
fahrenheit = [((9/5) * temp + 32) for temp in celcius]
print(fahrenheit)

# Create a list of square numbers only if they are even
my_list = [number ** 2 for number in range(0, 15, 2) if number % 2 == 0]
print(my_list)
```

#### 3.1.3. Nested Lists and Arrays

Lists in Python can contain other lists, allowing for the representation of matrices or tables of data. This type of structure is useful for handling information in multiple dimensions.Example of a nested list representing an array:

```python
number_grid = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[0]
]

# Access the element in the third row and third column
print(number_grid[2][2])
```

In this case, `number_grid[2][2]` will return the value `9`, which is the element located in the third row and third column.

### 3.2. Tuples

**Tuples** in Python are ordered sequences and **immutable**, meaning that, unlike lists, their elements cannot be modified after they are created. Tuples are useful when you need to ensure that data does not change throughout the program. They are also faster to process than lists.

To define a tuple, parentheses are used:

```python
# Definition of a tuple
coordinates = (4, 5)

print(f"Full coordinate {coordinates}")
print(f"First coordinate {coordinates[0]} and second coordinate {coordinates[1]}")
```

It is also possible to combine tuples with other data structures, such as lists of tuples:

```python
tuple_list = [(1, 2), (3, 4), (5, 6)]
print(f"My list of tuples is {tuple_list}")
```

#### 3.2.1. Methods

Despite being immutable, tuples have some useful methods:

| Function | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| `tuple.count(x)` | Returns the number of times `x` appears in the tuple. |
| `tuple.index(x)` | Returns the index of the first occurrence of `x` in the tuple. |

### 3.3. Sets

Sets in Python are **unordered** collections of unique elements. Unlike lists and tuples, sets do not allow duplicates, making them a useful tool for removing repeated values ​​or performing mathematical operations such as unions and intersections.

A set can be defined using `{}` braces or with the `set()` function:

```python
# Initialize an empty set
my_set = set()

# Add elements
my_set.add(1) 
my_set.add(1) # No addition will occur, since the element is unique

# Initialize a set with elements
my_new_set = {'a', 'b', 'c'}
```

#### 3.3.1. Methods

A set can be defined using `{}` braces or with the `set()` function:

| Function | Definition |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `s.add(x)` | Adds an element `x` to the set. |
| `s.clear()` | Removes all elements from the set. |
| `sc = s.copy()` | Creates a copy of the set. |
| `s1.difference(s2)` | Returns the elements in `s1` that are not in `s2`. |
| `s1.difference_update(s2)` | Removes the elements in `s1` that are in `s2`. |
| `s.discard(elem)` | Removes the element `elem` from the set without causing an error if `elem` is not present. |
| `s1.intersection(s2)` | Returns the elements common to `s1` and `s2`. |
| `s1.issubset(s2)` | Checks if all elements of `s1` are in `s2`. || `s1.union(s2)` | Returns the union of `s1` and `s2`, combining all unique elements from both sets. |

### 3.4. Dictionaries

**Dictionaries** in Python are collections of data that store **key-value** pairs. Keys are unique and are used to access the corresponding values. Dictionaries are mutable, so they can be modified after they are created.

A dictionary is defined using `{}` braces, where each element is a key-value pair:

```python
# Defining a dictionary
conversion_months = {
"Jan": "January",
"Feb": "February",
"Mar": "March"
}

# Accessing values
print(conversion_months["Jan"]) 
print(conversion_months.get("Jan"))

# Handling missing keys
key = "Daniel"
print(conversion_months.get(key, f"Key {key} is not in dictionary"))
```

#### 3.4.1. Methods

Dictionaries offer several methods for interacting with their elements:

| Function | Definition |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| `dictionary.items()` | Returns a view of the dictionary's key-value pairs. |
| `dictionary.keys()` | Returns a view of the dictionary keys. |
| `dictionary.values()` | Returns a view of the dictionary values. |

#### 3.4.2. Practical cases

##### **Nested dictionaries**

Dictionaries can be created inside other dictionaries to represent more complex structures:

```python
dictionary = {"k3": {'insideKey': 100}}

# Access the value of 'insideKey'
print(dictionary["k3"]['insideKey'])
```

##### **Iterating over dictionaries**

You can iterate over keys, values, or key-value pairs in a dictionary:

```python
d = {'k1': 1, 'k2': 2}

for key in d.keys():
print(key)

for value in d.values():
print(value)

for item in d.items():
print(item)
```

##### **Lists of dictionaries dictionaries**

You can combine lists and dictionaries to create more elaborate structures, such as a list of clients and their animals:

```python
clients =

[
{"name": "Daniel", "animals": ["Pakito", "Pakon", "Pakonazo"]},
{"name": "Clemencia", "animals": ["Rodolfo"]},
{"name": "Carolina"}
]

for client in clients:
print(f"{client['name']} has: {client.get('animals', 'Has no animals')}")
```

These flexible and efficient data structures allow you to manipulate data in different ways in Python, offering suitable solutions for a wide variety of problems.

## 4. Methods and functions

In Python, methods and functions are essential tools for modular programming and code reuse. Next, we explore methods and functions in detail, their differences, and how to use them.

### 4.1. Methods

Methods are functions that are associated with a specific object. They act on the object and can modify its state or perform some operation on it. Methods are available for different types of objects, such as strings (`str`), lists (`list`), dictionaries (`dict`), and so on.

Each type of object has a specific set of methods. For example, methods for `str` objects (strings) allow you to perform operations such as converting to uppercase, splitting the string into words, or replacing substrings.

For more detailed and up-to-date information on methods in Python, you can visit the official documentation at [https://docs.python.org/](https://docs.python.org/).

Examples of methods for strings:

```python
text = "hello world"

# Convert to uppercase
print(text.upper()) # Output: "HELLO WORLD"

# Split into wordsprint(text. split()) # Output: ['hello', 'world']

# Replace a substring
print(text. replace("world", "Python")) # Output: "hello Python"
```

#### 4.1.1. Get a list of available methods

To get a list of all available methods for an object type, you can use the `dir()` function. For example:

```python
# Display all available methods for objects of type str
print(dir(str)) 
```

#### 4.1.2. Get help on a specific method

You can get detailed information about a specific method by using the `help()` function. For example:

```python
# Display the documentation for the upper() method
help(str.upper) 
```

This function will give you a description of the method, its usage, and possible parameters.

### 4.2. Defining Functions

Functions are reusable blocks of code that perform a specific task and can be called from anywhere in the program. Unlike methods, which are bound to objects, functions are not tied to any particular type of object.

To define a function, you use the keyword `def`, followed by the function name and parentheses with possible parameters. The code block within the function is indented.

Here is an example of how to define and use a function in Python:

```python
def greeting(name):

return f"Hello, {name}!"

print(greeting("World"))
```

In this example, `greeting` is a function that takes one parameter, `name`, and returns a text string that is a greeting to that name.

Functions can take any number of parameters, and these parameters can have default values. If a parameter has a default value, you can omit that parameter when you call the function. Here's an example:

```python
def greeting(name="World"):

return f"Hello, {name}!"

print(greeting())
print(greeting("Python"))
```

In this example, `name` has a default value of `"World"`. If you call `greeting()` without any arguments, it will use the default value. If you provide an argument, that argument will override the default value.

Functions are a great way to organize your code and make it more readable and reusable. They can also help you break complex problems into more manageable chunks.

Functions in Python can contain a variety of control structures, such as loops and calls to other functions. Here are some examples:

#### 4.2.1. Practical cases

##### Function to check a list

This function takes a list of numbers as input and separates the even and odd numbers into two different sets:

```python
def check_list(list):

# Initializes two empty sets to store even and odd numbers
return_even_list = set()
return_odd_list = set()

# Iterates over each element of the input list
for index in list:

# Checks if the number is even
if index % 2 == 0:

# If it is even, adds it to the set of even numbers
return_even_list. add(index)

else:

# If it is odd, adds it to the set of odd numbers
return_odd_list. add(index)

# Prints the even numbers found
print(f"List of even numbers from main list: {return_even_list}")

# Prints the odd numbers found
print(f"List of odd numbers from main list: {odd_list_return}")

check_list([1, 1, 1, 1, 1, 1, 23, 56, 87, 918, 23, 12, 3, 2, 4, 6, 5])
```

##### Function with tuples

This example shows a function that determines the worker with the most hours worked:

```python
worker_hours = [("Daniel", 22), ("Kike", 20), ("Ricardo", 25)]

def best_worker(list):

# Initialize variables for the maximum hours and the best worker
maximum = 0best = ""

# Iterate over each worker and their hours in the list
for employee, hours in worker_hours:

# Compare hours to current maximum
if hours > maximum:

# Update the maximum and best worker if a better one is found
maximum = hours
best = employee

# Return a tuple with the name of the best worker and their hours
return (best, maximum)

best, maximum = best_worker(worker_hours)

print(f"The best worker is {best} who has worked a total of {maximum} hours.")
```

##### Functions that call other functions

This example shows a simple game where functions call other functions. Python's `shuffle()` function is used, which randomly reorders a list:

```python
# The marble game

# We import the shuffle function to shuffle the list
from random import shuffle

# We define a list called 'cups' with three elements, representing the cups in the game.
# The character 'O' represents the marble.
glasses = [' ','O',' ']

# Function to shuffle the list of glasses
def shuffle_list(my_list):

# We shuffle the list
shuffle(my_list)

# We return the shuffled list
return my_list

def start():

# We show an initial message with the position of the ball
print("The ball is in glass 2\n")
print('glass 1: ')
print('glass 2: O')
print('glass 3: ')
print("\nMoving the ball through the different glasses...\n")

def operate():

# We ask the user to guess which glass the ball is in
result = int(input("Which glass is the ball in?: "))

# We check that the entered glass is valid
while result < 1 or result > 3:

# If it is not valid, we show an error message and we ask for the input again
print("This glass does not exist")
result = int(input("In which glass is the ball?: "))

# We call the function check to verify the answer
check(result)

def check(result):

i = 1

# We check if the ball is in the selected glass
if glasses[result-1] == 'O':

# If it is, we show a success message
print("\nYou got it right!\n")

# We show the position of the ball in each glass
for glass in glasses:

print(f"glass {i}: {glass}")
i += 1
else:

# If it is not, we show a failure message
print("\nYou failed :(\n")

# We show the position of the ball in each glass
for glass in glasses:

print(f"glass {i}: {glass}")
i += 1

# Call the start function to display the initial message
start()

# Shuffle the list of glasses
shuffle_list(glasses)

# Call the operate function to play the game
operate()
```

These examples show how functions in Python can contain complex logic and how they can interact with each other to accomplish larger tasks.

### 4.3. Arbitrary Arguments, \*Args and \*\*Kwargs

In Python, the terms **`*args`** and **`**kwargs`** are used in the definition of functions to allow functions to accept an arbitrary number of arguments.

In the following example, `a` and `b` are positional arguments. The `myfunction` function takes these two arguments, adds them together, and then multiplies the result by 0.05:

```python
def myfunction(a, b):

return sum((a, b)) * 0.05

myfunction(40,60) 
```

However, if we wanted this function to be able to handle more than two numbers, we would have to modify the function definition to include more parameters. One option would be to assign a default value to these additional parameters:

```python
def myfunction(a, b, c = 0):

return sum((a, b, c)) * 0.05
```

#### 4.3.1. Functions with \*Args

This is where **`*args`** comes in handy. It allows us to configure the function to accept an arbitrary number of arguments:

```python
def myfunction(*args):

return sum(args) * 0.05
```In this case, **`*args`** allows us to treat the input as a tuple of parameters. We can now pass as many arguments as we want. By default, Python takes all the parameters passed and sets them up as a tuple.

#### 4.3.2. Functions with \*\*Kwargs

Similarly, Python offers a way to handle an arbitrary number of keyword arguments. Instead of creating a tuple, it creates a dictionary. To do this, we use **`**kwargs`**:

```python
def myfunction(**kwargs):

if 'fruit' in kwargs:

print(f"My favorite fruit is {kwargs['fruit']}")

else:

print("Fruit not found")

if 'vegetables' in kwargs:

print(f"My favorite vegetable is {kwargs['vegetables']}")

else:

print("Vegetable not found")

myfunction(fruit = 'apple', vegetables = 'carrot')
```

#### 4.3.3. Combining \*Args and \*\*Kwargs

We can also combine **`*args`** and **`**kwargs`** in the same function:

```python
def myfunction(*args, **kwargs):

print(f"I have {args[0]} rabbit named {kwargs['animal']}")

myfunction(1,2,3,4,fruit = "apple",vegetable = "carrot",animal = "Misifu")
```

In this case, `args` is a tuple of the positional arguments and `kwargs` is a dictionary of the keyword arguments. This gives us great flexibility when defining functions in Python.

### 4.4. Anonymous Functions (Lambdas), Map, and Filter

**Lambda expressions**, along with the **`map()`** and **`filter()`** functions, are powerful tools in Python that allow for advanced data processing. 

**Lambda expressions** are a quick way to create anonymous functions, i.e. functions that are used only once. 

```python
lambda num: pow(num,2)
```

This lambda expression takes a number, squares it, and returns the result. 

The **`map()`** function applies a function to each element in a list, returning a new list with the results. 

```python
my_nums = [1,2,3,4,5]
list(map(lambda num: pow(num,2),my_nums))
```

In this example, the `map()` function applies the lambda expression to each element of `my_nums`, returning a new list with the squares of the original numbers.

The **`filter()`** function filters the elements of a list based on a filter function, returning a new list with the elements that meet the filter condition.

```python
my_nums = [1,2,3,4,5]
list(filter(lambda num: num % 2 == 0,my_nums))
```

In this example, the `filter()` function applies the lambda expression to each element of `my_nums`, returning a new list with only the even numbers.

Lambda expressions are commonly used in conjunction with the `map()` and `filter()` functions, allowing for more concise and efficient data processing.

```python
people = ['Dr. Christopher Brooks', 'Dr. Kevyn Collins-Thompson',
'Dr. VG Vinod Vydiswaran', 'Dr. Daniel Romero']

list(map(lambda person: person.split()[0] + ' ' + person.split()[-1], people))
```

In this example, the `map()` function applies the lambda expression to each element of `people`, returning a new list with only the title and last name of each person.

It is important to remember that lambda expressions can take multiple arguments, which increases their flexibility and utility. However, due to their anonymous and single-use nature, lambda expressions are best suited for simple, concise operations. For more complex operations, it is advisable to define a complete function.

### 4.5. Decorators

Decorators in Python are a powerful tool that allows you to "decorate" a function, that is, modify its behavior without altering its source code. This is useful when you want to add functionality to an existing function without modifying its definition.Decorators have many applications. For example, they are used in web development with frameworks like Flask to add behavior to route functions, such as requiring a user to be authenticated to access certain pages. They are also used to create loggers, which record when certain functions are called and with what arguments, which is useful for debugging and understanding the execution flow of a program. In short, decorators offer an elegant and powerful way to modify the behavior of functions in Python.

In Python, functions are first-class objects. This means that they can be assigned to variables, stored in data structures, passed as arguments to other functions, and even returned as values ​​from other functions. Here is an example:

```python
def greeting_function():

return "Hello"

copy = greeting_function
del greeting_function

print(copy()) # Prints: Hello
```

In this example, we have assigned the function `greeting_function` to the variable `copy`, and then removed `greeting_function`. Despite this, we can still call the original function via `copy`.

A decorator is a function that takes another function and extends its behavior without explicitly modifying its source code. Here is an example of how a decorator is defined and used:

```python
def new_decorator(original_function):

def new_function():

print("Before original function")
original_function()
print("After original function")

return new_function

@new_decorator
def function_needs_decorator():

print("Needs new decorator")

function_needs_decorator()
```

In this example, `new_decorator` is a decorator that adds two lines of print before and after the execution of the original function. The syntax `@new_decorator` before the definition of `function_needs_decorator` is what applies the decorator to the function.

### 4.6. Generators

Generators in Python are an efficient way to create iterators. Unlike regular functions, generators use the `yield` keyword instead of `return`. This allows generators to produce values ​​one at a time, and only when they are needed, rather than calculating all the values ​​at once and storing them in memory.

A generator function is a function that uses the `yield` keyword. When a generator function is called, instead of executing the entire body of the function and returning a result, it returns a generator object. This object can be iterated over to obtain the values ​​generated by `yield`. Here is an example of a generator function that generates cubes of numbers up to `n`:

```python
def cube_generator_function(n):

for x in range(n):

yield pow(x,3) 

print(list(cube_generator_function(10))) # Prints: [0, 1, 8, 27, 64, 125, 216, 343, 512, 729]
```

Generators are especially useful when working with large amounts of data that do not fit in memory. Instead of generating all the data at once, generators produce it one at a time, only when it is needed. This can significantly improve the performance of our program.

The `iter()` function in Python turns an iterable object into an iterator. This means that we can use the `next()` function on the object to access its elements one by one. Here is an example:

```python
s = "hello"
s_iterator = iter(s)
print(next(s_iterator)) # Prints: h
```

In this example, we have converted the string `s` into an iterator using the `iter()` function. Then, we have used the `next()` function to get the first element of the iterator.

### 4.7. Timing the execution time of a function

To evaluate the efficiency of our code, we can measure the time that a function takes to execute a specific action. For example:

```python
import time

def func_one(n):return [str(num) for num in range(n)]

def func_dos(n):

return list(map(str, range(n)))

# Step 1: Record the start time
start_time = time.time()

# Step 2: Run the code we want to time
result = func_uno(1000000)

# Step 3: Calculate the total execution time
end_time = time.time() - start_time
print(end_time)
```

In the code above, both functions give a very similar result, so it is difficult to see a real difference. However, we can import the *timeit* library, which allows for more precise measurements with a number of repetitions and parameters that we can assign. For example:

```python
import timeit

# Preparation for the first function
setup = '''
def func_uno(n):
return [str(num) for num in range(n)]
'''

# Declaration
stmt = 'func_uno(100)'

# Execution of timing
print(timeit. timeit(stmt, setup, number=100000))

# We do the same for the second function
setup2 = '''
def func_dos(n):
return list(map(str, range(n)))
'''

stmt2 = 'func_dos(100)'

print(timeit. timeit(stmt2, setup2, number=100000))
```

It is important to mention that Jupyter allows you to use **magic functions** (Jupyter magic functions are activated with two percent signs at the beginning of the code block), one of them is the *timeit* function:

```python
%%timeit
func_uno(100)
```

### 4.8. Nested Statements and Code Scope

In Python, it is crucial to understand how the variables we create are handled. These variables are stored in what is known as a "scope", which determines the visibility of the variable to other parts of the code.

For example:

```python
x = 25

def printer():

x = 50
return x

print(x) # Returns 25
print(printer()) # Returns 50
```

In this example, the reassignment of `x` inside the `printer()` function does not affect the overall assignment of `x`. This is due to the scope rule in Python, which follows the LEGB rule:

* **L, Local** — Names assigned in some way inside a function (`def` or `lambda`) and not declared global in that function.
* **E, Enclosing function locals** — Names in the local scope of any and all enclosing functions (`def` or `lambda`), from inner to outer.
* **G, Global (module)** — Names assigned at the top level of a module file, or declared global in a `def` inside the file.
* **B, Built-in (Python)** — Names preassigned in the built-in naming module: `open`, `range`, `SyntaxError`, etc.

This is the order in which Python will look for variables. Here is an example of how it works:

```python
# GLOBAL VARIABLE
name = "This is a global string"

def test():

# LOCAL ENCLOSURE VARIABLE
name = "Daniel"

def hello():

# LOCAL VARIABLE
name = "Carlitos"
print(f"Hello {name}")

hello()

test()
```

In this example, the `hello()` function will first print the local variable "Carlitos". If we comment out the local assignment, it will pick up the local enclosure variable "Daniel". And if we also comment out that assignment, it will pick up the global variable "This is a global string".

Now, let's see what happens when we reassign a global variable inside a function. If we do a reassignment inside the function, because of the scope, the reassigned value is only kept inside the function. Once we exit it, the value of the variable returns to the value that was assigned to it at the beginning. To change this, we can use the `global` keyword, as in the following example:

```python
x = 50

def test():

global x
print(f"Value of x before {x}")
x = 200
print(f"Value of x after {x}")

test()
print(f"Value of x after {x}")
```However, it is recommended to avoid using the `global` keyword unless absolutely necessary. It is safer to return an object and then assign it to the variable. This way, we avoid overwriting the global variable inside a function without even knowing it.

## 5. Object Oriented Programming

**Object Oriented Programming (OOP)** is a paradigm that organizes code around **objects** instead of functions and logic. These objects combine **data** (attributes) and **functions** (methods) that act on the data. This approach allows for code reuse, modularity, and scalability.

**OOP** in Python is a powerful tool that makes it easy to create clean, structured, and modular code. By using classes, inheritance, and polymorphism, you can develop flexible, maintainable programs.

### 5.1. Classes and Objects

A **class** is a mold or template for creating objects, which are instances of the class. Objects have **attributes** (characteristics) and **methods** (behaviors). Here is a basic example of a class and how an object is created:

```python
class ClassName():

def __init__(self, parameter1, parameter2):
self. parameter1 = parameter1
self. parameter2 = parameter2

def some_method(self):
print("This is a method inside the class")
```

When a function is defined inside a class, it is called a **method**. The special method `__init__` is a **constructor** that is automatically executed when a new instance of the class is created. The first argument to any method in a class is `self`, which refers to the instance of the object.

##### Example

```python
class Car():

def __init__(self, make, model, upgraded, car_access):
self. make = make
self. model = model
self. upgraded = upgraded
self. car_access = car_access

# Create an instance of the Car class
my_car = Car("Toyota", "Corolla", True, ["John", "Maria"])

print(f"My car is a {my_car. make} {my_car. model}")
```

In this example, the `Car` class is defined with attributes and methods. Then, an instance of the `Car` class, `my_car`, is created, which has its own attributes and behaviors.

### 5.2. Methods and attributes

**Attributes** are characteristics of the object, and **methods** are actions that it can perform. Some attributes are common to all instances, while others are specific to each object.

##### Example

```python
class Dog():

# Class attribute (common to all instances)
species = "mammal"

def __init__(self, breed, name, age):
# Instance attributes
self. breed = breed
self. name = name
self. age = age

# Class method
def sound(self):
return "Woof!"

# Method to display object information
def information(self):
print(f"Name: {self.name}, Breed: {self.breed}, Age: {self.age}, Species: {self.species}")

if __name__ == '__main__':

my_dog = Dog("Labrador", "Fido", 3)
my_dog. information()
```

In this example, `species` is a class attribute shared by all instances of `Dog`, while `breed`, `name`, and `age` are attributes unique to each instance.

### 5.3. Inheritance and polymorphism

#### 5.3.1. Inheritance

**Inheritance** allows you to create new classes from existing classes. The new class (subclass) inherits the attributes and methods of the parent class, but can also have its own attributes and methods or override inherited ones.

##### Example

```python
class Animal():

def __init__(self, name):
self. name = name

def who_i_am(self):
print("I am an animal")

def eat(self):
print("I am eating")

# Class Dog inherits from Animal
class Dog(Animal):

def who_i_am(self):print(f"I am a dog named {self.name}")

my_dog = Dog("Fido")
my_dog.who_i_am() # Prints: I am a dog named Fido
my_dog.eat() # Prints: I am eating
```

In this case, `Dog` inherits from `Animal`, so it can use the `eat` method. Also, the `Dog` subclass overrides the `who_i_am` method of the `Animal` class.

#### 5.3.2. Polymorphism

Polymorphism allows the same method name to be used in different classes. Even if the method has the same name, each class can implement it differently.

##### Example

```python
class Dog():

def __init__(self, name):
self. name = name

def sound(self):
print(f"The dog {self. name} barks")

class Cat():

def __init__(self, name):
self. name = name

def sound(self):
print(f"The cat {self. name} meows")

my_dog = Dog("Fido")
my_cat = Cat("Meow")

# Calling the same method with different classes
# Prints: The dog Fido barks
my_dog. sound() 
# Prints: The cat Meow meows
my_cat. sound() 
```

In this example, both the `Dog` and `Cat` classes have the `sound` method, but the behavior is different depending on the type of object that calls it.

### 5.4. Abstract Classes

An **abstract class** is one that is not expected to be instantiated directly. It only serves as a base for other classes that implement its methods.

##### Example

```python
class Animal():

def __init__(self, name):
self. name = name

def sound(self):
# Define an abstract method
raise NotImplementedError("Subclass must implement this method")

class Dog(Animal):

def sound(self):
return f"{self. name} woof!"

my_dog = Dog("Fido")

# Print: Fido woof!
print(my_dog. sound()) 
```

In this case, `Animal` is an abstract base class, and the `Dog` class must implement the `sound` method. If the method is not implemented in the subclass, an error is raised.

## 6. Modules and Packages

### 6.1. Importing Modules

In Python, **modules** are files containing Python definitions and declarations, while **packages** are collections of modules. A widely used package manager is **PIP**, which allows you to install and manage external libraries.

PIP is used in conjunction with **PyPi** (Python Package Index), a repository containing numerous third-party packages. To install a package, you can run the `pip install` command in your terminal. Here's how to install and use the `colorama` library to print colored text:

```bash
# Command to install colorama using PIP
pip install colorama
```

```python
from colorama import init, Fore

init()

# Red text
print(Fore.RED + "Test text")
```

### 6.2. Using external packages and libraries

A **module** is simply a `.py` file containing functions, variables, and classes. A **package** is a collection of modules organized in a folder. The package must contain an `__init__.py` file, which can be empty, but is necessary for Python to treat the directory as a package.

Example of how to structure a project with modules and submodules:

```python
# main.py
from package78 import some_main_script as p
from package78.Subpackages import mysubscript as s

p.main_report()
s.sub_report()
```

```python
# package78/some_main_script.py
def main_report():
print("Hello, I am a function inside my main script.")
```

```python
# package78/Subpackages/mysubscript.py
def sub_report():
print("Hello, I am a function inside my subscript.")
```

### 6.3. Advanced Python Modules

#### 6.3.1. Collection Modules

The `collections` module provides specialized data types such as `Counter`, `defaultdict`, and `namedtuple`, which are more efficient alternatives to the general Python containers (`dict`, `list`, `set`, and `tuple`).

##### 6.3.1.1. Counter`Counter` is a subclass of dictionary for quickly counting items. It stores items as keys and their count as values.

```python
from collections import Counter

list = [1, 1, 1, 2, 2, 3, 'a', 'bye']
count = Counter(list)

print(count. most_common()) # Returns the most common items
```

##### 6.3.1.2. defaultdict

`defaultdict` is a subclass of `dict` that returns a default value if the key does not exist, avoiding errors.

```python
from collections import defaultdict

d = defaultdict(lambda: 0)
print(d["nonexistent"]) # Prints: 0
```

##### 6.3.1.3. namedtuple

`namedtuple` is a subclass of tuple that allows you to access its elements by name instead of index.

```python
from collections import namedtuple

Rabbit = namedtuple("Rabbit", ["Age", "Color", "Name"])
misifu = Rabbit(Age=2, Color="White", Name="Misifu")

print(misifu.Age) # Prints: 2
```

### 6.4. Date and Time Module

The `datetime` module allows you to work with dates and times in Python. You can create date objects, perform calculations, and extract information such as the year, month, or day.

```python
import datetime
from datetime import date

# Create a time object
my_time = datetime. time(2, 20)
print(my_time. minute) # Prints: 20
print(my_time) # Prints: 02:20:00

# Get the current date
today = datetime. date. today()
print(today)

# Extract day, month, and year
print(f"Day: {today. day}, Month: {today. month}, Year: {today. year}")

# Date operations
date1 = date(2021, 11, 3)
date2 = date(2020, 11, 2)
print(date1 - date2) # Prints: 366 days, 0:00:00
```

### 6.5. Math and random modules

#### 6.5.1. Math module

The `math` module provides common mathematical functions, such as the value of pi, logarithms, and trigonometric functions.

```python
import math

# Value of pi and e
print(math.pi) # Prints: 3.141592653589793
print(math.e) # Prints: 2.718281828459045

# Logarithm to base 2 of 100
print(math.log(100, 2)) # Prints: 6.643856189774724

# Trigonometric functions
print(math.sin(math.radians(90))) # Prints: 1.0
print(math.degrees(math.pi/2)) # Prints: 90.0
```

#### 6.5.2. random module

The `random` module generates pseudo-random numbers and provides several functions for choosing elements randomly or shuffling lists.

```python
import random

# Random number between 0 and 100
print(random. randint(0, 100))

# Seed for reproducible random numbers
random. seed(101)

# List of numbers from 0 to 9
list = list(range(10))
print(list)

# Choose a random number from the list
print(random. choice(list))

# Choose multiple random numbers (can be repeated)
print(random. choices(list, k=5))

# Choose multiple random numbers without repetition
print(random. sample(list, k=4))

# Shuffle the list randomly
random. shuffle(list)
print(list)
```

With these modules and packages, you can manage and perform complex calculations, work with dates and times, and generate random numbers efficiently.

## 7. Error and Exception Handling

### 7.1. Data Validation

When creating functions that take input from the user, it is important to check those inputs to make sure they are correct. This is known as data validation.

The `input()` function in Python can be a bit tricky because it expects user interaction. If it is accidentally run twice, the program can be left waiting for a response that never comes. In that case, in Jupyter you would have to restart the kernel, keeping in mind that all previous variables will be cleared and you would have to run it again.

A convenient way to validate data is to use `while` loops to ask the user to enter a value repeatedly when it is invalid. Here is an example:

```python
def limit(choice):

return int(choice) >= 1 and int(choice) <= 10

def user_choice():

choice = input("Number from 1-10: ")while not choice.isdigit() or not limit(choice):

choice = input("Number from 1-10: ")

if not choice.isdigit():

print("The entered value is not a number")

if choice.isdigit() and not limit(choice):

print("The entered number exceeded the limit")

return int(choice)

user_choice()
```

In this example, the `user_choice()` function asks the user to enter a number between 1 and 10. If the entered value is not a number or is not in the correct range, the function asks the user to enter a new value.

If you want to clear the console when the user enters incorrect values, you can import and use the `IPython.display` library and use the `clear_output()` function:

```python
from IPython.display import clear_output
```

This function clears the output of the current cell in a Jupyter notebook, which can be useful for keeping the user interface clean. Note, however, that `clear_output()` only works in Jupyter notebooks and not in other Python environments.

### 7.2. Exception Handling

Error handling is a strategy that allows us to plan for and manage possible errors that may arise in our code. For example, if a user tries to write to a file that has been opened in read-only mode and there is no error statement in the code, the entire program will stop. To avoid this, we use exception handling, which allows us to continue the program, report the error, and continue with the code.

There are three keywords for error handling in Python:

* `try`: This is the block of code that will be attempted to be executed (may lead to an error).
* `except`: Block of code that will be executed in case there is an error in the try block.
* `finally`: A final block of code that will be executed regardless of whether there was an error or not.

Here is an example of how these keywords are used:

```python
try:

f. open("file",'w')
f. write("Test line")

except TypeError:

print("There was a problem with the type")

except OSError: 

print("There was an OSError error")

except:

print("There was a failure in another type of exceptions")

finally:

print("I continued running the code anyway")
```

In this other example, we will constantly ask the user for information until they enter a suitable value:

```python
def enter_integer():

while True:

try:

value = int(input("Enter an integer: "))

except:

print("The entered value is not a number")

else:

print(f"The value {value} is a value correct")
break

enter_integer()
```

Python has more exceptions implemented that you can check in the documentation, in the "Library → Exceptions" section.

### 7.3. Python debugger

The debugger is used to identify and correct errors in the code. Instead of using `print()` to see what happens every now and then, we can use the Python debugger, *pdb*. For example:

```python
import pdb

x = [1,2,3]
z = 2
y = 1

result1 = z + y

# By adding this debugger, we can introduce the variables that have been declared 
# with the intention of seeing the type, we can even perform operations on it,
# to see if the result is the expected one or not. # Once we have seen possible cases and the failures, we press "q" to exit 
# the debugger

pdb.set_trace()

result2 = y + x # ERROR
```

### 7.4. Unit Testing with Pylint

Unit testing is essential as we expand our projects with multiple files or start working in a team. When making any changes or updates to the code, we can run test files to make sure that the old code still runs as expected.There are several different tools for testing code, but we'll focus on two of them:

* Pylint: This is a library that analyzes your code and reports potential problems.
* Unittest: This built-in library allows you to test your own programs and check that you're getting the desired results.

To use Pylint, run the following code in the terminal:

```bash
pylint file_name.py -r y
```

### 7.5. Testing with Unittest

With `unittest`, you can implement a Python script that analyzes the results returned by your code and checks if they are what you expected. Here's an example with two files, `cap85a.py` and `cap85b.py`.

`cap85a.py`:

```python
def test(text):

return text. capitalize()
```

`cap85b.py`:

```python
import cap85a
import unittest

class Test(unittest. TestCase):

def test_1(self):

text = 'python'
result = cap85a. test(text)
self. assertEqual(result,'Python')

if __name__ == '__main__':

unittest. main()
```

In this example, `unittest` is used to check that the `test` function in the `cap85a.py` file returns the expected result. If the result is as expected, the test will pass. If not, the test will fail and an error message will be displayed. 

## 8. Working with files and directories

### 8.1. Reading and writing files

We can open a file using the `open()` function:

```python
file = open(file_address)
```

Python allows you to assign different permissions (write/read/both...) to the file, some of these permissions are:

| Permission | Definition |
| ------- | ---------- |
| r | Read only. |
| w | Write only, will overwrite existing files or create a new one. |
| a | To add information to the end of the file. |
| r+ | Read and write. |
| w+ | Write and read, will overwrite existing files or create a new one. |
| wb | File, write and binary mode. |

To be able to read a file we can use some functions like:

| Function | Definition |
| ------------- | ---------- |
| `readable()` | Returns a boolean to know if the file can be read or not. |
| `read()` | Displays all information about the file. |
| `readline()` | Reads the first line of the file. |
| `readlines()` | Reads all lines of the file and inserts them into a list. |

For example:

```python
fic_name = input("File name: ")

file = open(fic_name,"r")

if file.readable():

list = file.readlines()
```

Alternative:

```python
for employee in fic_employee: 

print(employee)

# It is recommended to close the file after dealing with the
fic_employee.close() 
```

If we read files directly with methods like `read()`, when reading the file again nothing will appear, to solve this we must use:

* `file_name.seek(0)` → Allows to put the cursor at the beginning of the file.

Another way to open a file and operate on it would be:

```python
with open('myfile.txt', mode='w') as my_new_file:

contents = my_new_file.read()

print(contents)
```

An example of how to write to a file would be:

```python
fic_name = input("File name: ")

file = open(fic_name,"a") # I'm going to add some text to the end

new_employee = input("New employee's name: ")
employee_function = input(f"Employee's position {new_employee}: ")

file.write("\\n" + new_employee + " - " + employee_function)

file.close()
```

### 8.2. Handling Files and Directories

In Python, several modules are used for opening, reading, and manipulating files and directories in the operating system. The main modules are:

* *shutil*
* *os* (OS → Operating System)

These modules allow you to perform operations such as opening and reading individual files, browsing directories, moving and deleting files, among others.

```python
import os
import shutil
import send2trash

# Creating a test file
f = open("Test.txt",'w+')f.write("This is a test write to a file")
f.close()

# Getting the current working directory
print(os.getcwd())

# Listing the items in the working directory
print(os.listdir())

# Listing the items in a specific directory
print(os.listdir('/home/user/'))

# Moving files between directories
shutil.move("Test.txt",'/home/daniel/')

# Secure file deletion with send2trash
send2trash.send2trash("Test.txt")
```

Additionally, Python allows you to list all files in a directory, including folders, subfolders, and files they contain:

```python
import os

directory = '/home/daniel/Desktop'

for folder, sub_folders, files in os.walk(directory):

print(f"We are in the folder: {folder}")
print("The subfolders are: ")

for sub_folder in sub_folders:

print(f"\t{sub_folder}")

print("The files are: ")

for file in files:

print(f"\t{file}")
```

### 8.3. CSV and JSON file manipulation

CSV (Comma Separated Values) files are a type of format used by Excel and other database programs. They are useful for manipulating data from a file, but they only contain the raw content, so we cannot get images, macros, etc., only the data.

In Python, we will work with the `csv` module included in the standard library. Other libraries to consider for data manipulation in Python would be Pandas, Openpyxl or the Google Sheets API for Python.

```python
import csv

# Open the file
data = open('example.csv',encoding = 'utf-8')

# csv.reader
csv_data = csv.reader(data)

# Convert the data to a list
data_lines = list(csv_data)

mails = []

for line in data_lines[1:]:
if line[3] not in mails:
mails.append(line[3])

for number, mail in enumerate(mails):
print(f"{number} : {mail}")
```

Now we are going to see how we can write to a CSV file:

```python
# Create a CSV file
output_file = open('test_file.csv', mode = 'w', newline = '')

# "delimiter" is a delimiter or separator, it separates one column from another
# when it finds a comma (',')
csv_escribir = csv.writer(output_file, delimiter = ',')

csv_escribir.writerow(['a', 'b', 'c'])
csv_escribir.writerows([['1', '2', '3'],['4', '5', '6']])

# We close the CSV file
output_file.close()

# We add information to the end of the file
f = open('test_file.csv', mode = 'a', newline = '')
csv_writer = csv.writer(f)

csv_writer.writerow(['First_name', 'Last_name', 'Email'])
csv_writer.writerows([['Daniel', 'BC', 'bsjhcjhs@gmail.com'], 
['Clara', 'RA', 'jsasdjb@gmail.com']])

f.close()
```

To work with JSON files, we import the `json` library.

```python
import json

# We create a variable of type JSON in Python
json_string = '{"Name":"Antonio", "LastName":"Adrian"}'
obj = json.loads(json_string)

print(f"Name: {obj['Name']} \nLastName: {obj['LastName']}")
```

Python even allows loading JSON files directly from a URL:

```python
import requests

r = requests.get("url")

print(r.json())
```

### 8.4. Compressing and Uncompressing Files

Here is an example of how to compress and uncompress files:

```python
import zipfile

# Creating test files
f = open("new_file.txt",'w+')
f.write("This is just an example of entering text")
f.close()

f = open("new_file2.txt",'w+')
f.write("A little more text")
f.close()

# Creating the zip file
zipfile = zipfile.ZipFile('zip_1.zip','w')

# Adding files to the zip
zipfile.write("new_file.txt", compress_type=zipfile.ZIP_DEFLATED)
zipfile.write('new_file2.txt', compress_type=zipfile.ZIP_DEFLATED)

# Close the zip file
zip_file.close()

# Extract files from a zip file
zip_obj = zipfile.ZipFile('compressed_1.zip', 'r')
zip_obj.extractall("extracted_contents")
```## 9. Regular Expressions

In this section, we will explore regular expressions in Python to manipulate and search for patterns in text.

### 9.1. Searching and manipulating patterns

First, we will learn how to search for and manipulate specific patterns in text strings.

```python
import re

text = "The agent's number is 111-111-1111"
pattern = "number"

# Find the word and display the index from where it starts to where it ends
search = re. search(pattern, text)

# Display the index of the word's start
print(search. start())

# Display the index of the word's end
print(search. end())

# If we want to find all the same words and not just one, we use findall
text2 = "My favorite number is the number 8"
search2 = re. findall("number", text2)

# To see in which index the word repeated several times is found
print("The word 'number' is in the following indexes:")

for word in re. findditer('number', text2):

print(f"\t{word. span()}")

# To display the word instead of index
print("\nThe word 'number' is in the following indexes:")

for word in re.finditer('number',text2):

print(f"\t{word.group()} -> {word.span()}")
```

### 9.2. General patterns

Next, we'll explore how to find more general patterns in text.

```python
import re

text = "My phone number is 11 11 11 111"

# It is important to use the 'r' to tell Python that it is a raw pattern
number = re. search(r"\d{2} \d{2} \d{2} \d{3}",text)
print(number. group())

# To extract specific areas of the pattern, we can use groups
number_groups = re. compile(r"(\d{2}) (\d{2}) (\d{2}) (\d{3})")
result = re. search(number_groups,text)

# We can access a specific index of the group
print(result. group(4))
```

### 9.3. Word patterns

Finally, we will focus on finding specific word patterns in a text.

```python
import re

text = "I have a rabbit named Misifu"

search1 = re.search(r'rabbit|dog',text)
print(search1.group())

text2 = "I have a dog named Tom"

search2 = re.search(r'rabbit|dog',text2)
print(search2.group())

text3 = "The cat in the hat sat there"

# Find words ending with 'at'
terminadas_at = re.findall(r'.at',text3)
print(terminadas_at)

# Excluding specific characters
phrase = "there are 3 numbers 34 inside 5 this sentence."
print(re.findall(r'[^\\d]+',phrase))

# Remove punctuation
test_phrase = """This is a string! But it has punctuation. How can we remove it?"""
clean = ' '.join(re.findall('[^!.? ]+',test_phrase))
print(clean)

# Find specific words that start and end with certain patterns
text = 'Hello, would you like some catfish?'
texttwo = "Hello, would you like to take a catnap?"
re.search(r'cat(fish|nap|claw)',text)
re.search(r'cat(fish|nap|claw)',texttwo)
```

## 10. Best practices and code style

### 10.1. Sustainable code

A project must be developed under a clear and sustainable code structure, using tools and methodologies to ensure its organization and cleanliness. These practices are essential during the development, production, and evolution of the project.

#### 10.1.1. Project structure

A project must be organized into two main parts:

1. **Application directory:** Contains the code logic, model configuration, logs, and other components.
2. **Settings and configurations:** Includes project configurations and dependencies, such as dependency management files (Poetry), Dockerfiles, `.yml` configuration files, etc.

This separation promotes modular, organized, and easy-to-maintain code. It facilitates collaboration between team members, simplifies the update process, and improves understanding of the project structure by new developers.

Project structure example:

```plaintextsrc (or project name)
│
├── config
│ ├── config.py
│ ├── .env
├── db
├── logs
├── model
│ ├── models
│ ├── pipeline
│ ├── inference.py
├── main.py
```

#### 10.1.2. Clean code

The [PEP 8](https://pep8.org/) style guide defines conventions for writing Python code that is readable and consistent. Its main recommendations are highlighted below. Additionally, tools like [Black](https://pypi.org/project/black/) and [Ruff](https://docs.astral.sh/ruff/) are suggested to automatically enforce these conventions in projects.

##### Code Layout

- 4-space indentation should be used, without mixing spaces and tabs.
- The maximum line length is 79 characters; for comments and docstrings, it is 72 characters.
- Long lines should be split using parentheses, brackets, or braces to improve readability.

Example:

```python
def long_function(parameter1, parameter2,
parameter3, parameter4):
return parameter1 + parameter2 + parameter3 + parameter4
```

##### File and String Encoding

- Source files should use UTF-8 encoding.
- Single or double quotes can be used for strings, but it is important to maintain consistency.
- For multiline strings, double quotes are preferred.

```python
single_string = 'Hello World'
double_string = "Hello World"
multiline_string = """
This is a string
that spans multiple lines
"""
```

##### Imports

Imports should be placed at the beginning of the file and arranged in the following order:

1. Python standard library.
2. Third-party libraries.
3. Local imports.

Absolute imports are recommended.

```python
import os
import sys

from external_lib import some_function

from local_module import local_function
```

##### Whitespace

- Do not add extra spaces around parentheses, brackets, braces, commas, or colons.
- A space must be added around assignment, comparison, and boolean operators.

```python
x = 5
y = x + 1
if x == y:
print(f"x:{x}, y:{y}")
```

##### Comments and docstrings

- Comments should be clear and concise, using complete sentences to describe the purpose of the code.
- **Docstrings** are required for modules, functions, classes, and public methods, describing their functionality and parameters.

```python
def sum(a, b):
"""
Adds two numbers and returns the result.

Args:
a (int): First number.
b (int): Second number.

Returns:
int: The sum of a and b.
"""
return a + b
```

##### Naming conventions

- **Packages and modules:** Must be written in lowercase, without spaces (e.g. `my_module`).
- **Classes:** Use CapWords style, also known as CamelCase (e.g. `MyClass`).
- **Functions and variables:** Use lowercase with underscores (e.g. `my_function`).
- **Constants:** Write in uppercase with underscores (e.g. `MY_CONSTANT`).
- **Methods and instance variables:** Like functions, with a leading underscore for non-public elements (e.g. `_internal_variable`).

```python
class MyClass:
MY_CONSTANT = 42

def __init__(self):
self._internal_variable = 10

def public_method(self):
return self._internal_variable
```