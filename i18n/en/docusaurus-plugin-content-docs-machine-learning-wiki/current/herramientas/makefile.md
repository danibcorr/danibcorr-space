---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Automatiza tus procesos con Makefile.
title: Makefile
toc_max_heading_level: 4
---
# References

- [Makefile Tutorial](https://makefiletutorial.com/)

## 1. Introduction

A **Makefile** is a configuration file used by the `make` tool, which allows the process of compiling and running software projects to be automated. It is generally used in environments with GNU/Linux-based operating systems and can contain commands in [Bash](../programacion/bash.md).

The use of Makefiles offers several benefits in software development, including:

1. Greater **efficiency** in compiling and managing projects.
2. **Ease of maintenance** in large-scale projects.
3. **Automation** of repetitive tasks, optimizing the workflow.

## 2. Basic syntax

### 2.1. Rule structure

A rule in a Makefile defines the process of building a target from its prerequisites. The basic structure of a rule is as follows:

```makefile
targets: prerequisites
command
command
command
```

- ***targets:*** These are the names of the files or tasks to be created, separated by spaces. Usually, a single *target* is defined per rule.
- ***prerequisites:*** These are the files or dependencies needed to generate the *target*, also separated by spaces.
- **commands:** These are the instructions that are executed to create the *target*. Each command must begin with a tab character, not with spaces.

An example of a simple rule could be the following:

```makefile
install: pyproject.toml
poetry install
```

In this example:

- **`install`** is the *target*, which represents the task or file to be created.
- **`pyproject.toml`** is the necessary prerequisite, a file that must exist before running the task.
- **`poetry install`** is the command that is run to create the *target*.

When the `make install` command is run, Make checks if the `pyproject.toml` file is present. If the file exists, the `poetry install` command is run to install the dependencies for a project.

### 2.2. Comments

Comments in a Makefile are written using the `#` symbol. These comments do not affect the execution of the file and serve to describe the purpose of the rules or commands. An example of a comment is:

```makefile
# This rule installs Poetry dependencies
install: pyproject.toml
poetry install
```

### 2.3. Variables

Variables in Makefiles allow you to store and reuse values, making it easier to customize commands or paths. They are defined and used as follows:

```makefile
TEST_FILE ?= ./tests

# Rule to run tests on the code
tests: 
@echo "Testing the code..."
poetry run pytest -v $(TEST_FILE)
```

In this case:

- **`TEST_FILE ?= ./tests`** defines the variable `TEST_FILE`, which stores the path of the directory where the tests will be run. Using `?=` allows you to define a default value if no other is provided when running the rule.
- In the `tests` rule, the command `poetry run pytest -v $(TEST_FILE)` uses the variable `TEST_FILE` to run the tests in the specified directory.

To run the `tests` rule and specify a different file than the one defined in the variable, use the following command:

```sh
make tests TEST_FILE=./tests/test_ejemplo.py
```

This will run the tests using the file `test_ejemplo.py` instead of the default directory.

#### 2.3.1. Automatic variables

Make uses automatic variables that simplify the writing and management of rules. These variables are automatically expanded based on the context of the rule they are in, allowing you to optimize the code in your Makefile.

| Variable | Description |
|----------|-------------|
| `$@` | Name of the current *target* |
| `$<` | First prerequisite of the rule |
| `$^` | All prerequisites of the rule |
| `$*` | Part of the name (stem) that matches the pattern `%` || `$(@D)` | Current target directory |
| `$(@F)` | Current target file name |

For example:

```makefile
build: main.o util.o
gcc -o $@ $^
```

In this case:

- **`build`** is the target.
- **`main.o`** and **`util.o`** are the prerequisites.
- **`$@`** is replaced by `build`, which is the target.
- **`$^`** is replaced by all prerequisites (`main.o util.o`), allowing the target files to be compiled into an executable named `build`.

#### 2.3.2. Target-Specific Variables and Patterns

It is possible to define variables that only apply to certain targets or target patterns, for example:

```makefile
%.o: CFLAGS += -O3
%.o: %.c
$(CC) $(CFLAGS) -c $< -o $@
```

In this example:

- **`%.o`** is a pattern that matches any file with the `.o` extension.
- **`CFLAGS += -O3`** adds the `-O3` optimization option when compiling any `.o` file.
- The **`$(CC) $(CFLAGS) -c $< -o $@`** command compiles a `.c` file into a `.o` file, using the `$(CC)` compiler and the `$(CFLAGS)` compilation flags.

This pattern is useful for compiling multiple files with the same rule, ensuring that all `.c` files are converted to `.o` files with the same compilation options.

## 3. Advanced Functions

### 3.1. Functions for text strings

Make provides several functions that allow you to manipulate and transform text strings.

#### 3.1.1. `subst` function

The `subst` function performs simple substitutions on a text string. Its syntax is as follows:

```makefile
$(subst from,to,text)
```

- **from:** The text to be replaced.
- **to:** The text to be replaced with.
- **text:** The original text to be searched for.

##### Example:

```makefile
SOURCES = file1.cpp file2.cpp file3.cpp
OBJECTS = $(subst .cpp,.o,$(SOURCES))
```

In this example, `subst` replaces all `.cpp` extensions with `.o` in the `SOURCES` variable. This results in a list of object files (`OBJECTS`): `file1.o file2.o file3.o`.

#### 3.1.2. `patsubst` function

The `patsubst` function performs text substitutions using patterns, providing greater flexibility than `subst`. Its syntax is as follows:

```makefile
$(patsubst pattern,replacement,text)
```

- **pattern:** The pattern to search for (may include wildcards such as `%`).
- **replacement:** The replacement text (you can use the pattern wildcards).
- **text:** The text to search for the pattern.

##### Example:

```makefile
SOURCES = file1.cpp file2.cpp file3.cpp
OBJECTS = $(patsubst %.cpp,%.o,$(SOURCES))
```

Here, `patsubst` uses the wildcard `%` to search for files with the extension `.cpp` and replace it with `.o`, producing the same result as the previous example, but with greater versatility.

#### 3.1.3. `filter` and `filter-out` functions

The `filter` and `filter-out` functions allow you to filter lists of words or files.

- **`filter`**: Retains the words that match the pattern.
- **`filter-out`**: Removes the words that match the pattern.

```makefile
$(filter pattern...,text)
$(filter-out pattern...,text)
```

##### Example:

```makefile
SOURCES = file1.c file2.cpp file3.h
C_FILES = $(filter %.c,$(SOURCES))
```

In this example, `filter` selects only the files with the extension `.c` from the variable `SOURCES`, assigning them to the variable `C_FILES` (`file1.c`).

#### 3.1.4. `foreach` function

The `foreach` function allows you to iterate over a list and apply an operation to each element. Its syntax is:

```makefile
$(foreach var,list,text)
```

- **var:** The name of the variable that will take the values ​​from the list in each iteration.
- **list:** The list to iterate over.
- **text:** The text to evaluate for each value in the list.

##### Example:

```makefile
DIRS = dir1 dir2 dir3
CLEAN_DIRS = $(foreach dir,$(DIRS),$(dir)/clean)
```This example generates a `CLEAN_DIRS` list containing the paths `dir1/clean`, `dir2/clean`, and `dir3/clean`, one for each value in `DIRS`.

#### 3.1.5. `if` function

The `if` function allows you to conditionally execute code in a Makefile. Its syntax is:

```makefile
$(if condition,then-part[,else-part])
```

- **condition:** The condition to evaluate.
- **then-part:** What is executed if the condition is true.
- **else-part:** (optional) What is executed if the condition is false.

##### Example:
```makefile
USE_DEBUG = yes
CFLAGS = $(if $(USE_DEBUG),-g,-O2)
```

In this example, if the variable `USE_DEBUG` is set to `yes`, the debug flag `-g` is added to `CFLAGS`. Otherwise, the `-O2` optimization is used.

### 3.2. Key Directives

Directives allow you to control the flow of execution, the inclusion of other files, and other advanced settings.

#### 3.2.1. `include` Directive

The `include` directive allows you to include other Makefiles within a main one. This is useful for breaking up a large Makefile into several smaller, more manageable modules, improving organization and maintenance.

```makefile
include config.mk
```

This allows to keep configurations and rules separated in specific files, making the main Makefile cleaner.

#### 3.2.2. `VPATH` directive

The `VPATH` directive specifies additional directories where Make will look for necessary files (prerequisites). It is useful when the files are located in different directories than the Makefile.

```makefile
VPATH = src:include
```

With this directive, Make will look for necessary files first in the `src` directory and then in the `include` directory.

#### 3.2.3. `.PHONY` directive

The `.PHONY` directive is used to declare targets that do not correspond to actual files in the file system. This prevents conflicts when the target name matches an existing file.

```makefile
.PHONY: clean all
```

In this example, the `clean` and `all` targets are specified to be "fake", i.e. they do not represent files, but commands or tasks.

#### 3.2.4. `.DELETE_ON_ERROR` directive

The `.DELETE_ON_ERROR` directive tells Make to delete the target file if a command fails during its build. This is useful to avoid corrupt or incomplete files.

```makefile
.DELETE_ON_ERROR:
```

### 3.3. Conditionals

Makefiles allow the use of conditional constructs to adapt rules to different environments or configurations.

```makefile
ifeq (condition)
action
else
action
endif
```

### 3.4. Macros and Functions

It is possible to define custom macros and functions in Make to reuse code and improve readability. These macros allow you to group multiple commands under a single name.

```makefile
define compile_rule
$(CC) $(CFLAGS) -c $< -o $@
endef

%.o: %.c
$(call compile_rule)
```

In this example, `compile_rule` is a macro that contains the rule to compile `.c` files into `.o` files. The `%.o: %.c` rule then invokes the macro with `$(call compile_rule)`.

## 4. Best Practices and Styles

Proper use of Makefiles not only makes compilation and project management easier, but also improves readability and long-term maintainability. Below are some recommended best practices and styles.

### 4.1. Makefile Organization

It is recommended to organize your Makefile in a way that makes it easy to read and maintain. Some suggestions are:

1. **Separate rules and settings:** Define variables at the beginning of the Makefile and group related rules together. This makes the file easier to maintain and understand.

2. **Use comments:** Add clear and concise comments to explain rules, variables, and functions within the Makefile.

3. **Modularization:** Break up large Makefiles into several smaller, organized files, using the `include` directive.Here is an example of an organized structure:

```makefile
# Configuration variables
CC = gcc
CFLAGS = -Wall -O2

# Targets
all: program

# Compilation rules
program: main.o utils.o
$(CC) $(CFLAGS) -o program main.o utils.o

main.o: main.c
$(CC) $(CFLAGS) -c main.c

utils.o: utils.c
$(CC) $(CFLAGS) -c utils.c

# Clean up generated files
clean:
rm -f *.o program
```

### 4.2. Debugging

Debugging Makefiles can be complex if certain practices are not followed. Some useful techniques include:

1. **Dry run (`-n`):** This option allows you to see what commands would be executed without actually executing them, which is useful for checking the execution flow.
```sh
make -n
```

2. **Verbose debugging (`-d`):** Provides verbose debugging output to help identify errors in the Makefile execution.
```sh
make -d
```

3. **Variable printing:** To check the value of variables, you can define a rule that prints them.
```makefile
debug:
@echo "CFLAGS = $(CFLAGS)"
```

Running:
```sh
make debug
```

The current value of the variable `CFLAGS` will be printed.

### 4.3. Portability and compatibility

Ensuring portability of Makefiles is crucial when the project is compiled on different platforms and operating systems. To achieve this, certain guidelines must be followed:

1. **Use variables for commands and system options:** This allows you to easily adjust commands based on the operating system or development environment. For example, if you compile on Windows and Linux, you can define a variable for the compiler.

2. **Avoid shell-specific features:** As much as possible, it is preferable not to depend on features or commands specific to a particular shell (such as `bash`), as this can limit compatibility with other systems.

## 5. Advanced use cases

The use of Makefiles is not limited to simple projects, but also extends to large projects, integrations with version control systems, and other more advanced tasks, such as generating documentation or creating packages. Below are some advanced use cases that demonstrate the flexibility and power of Make.

### 5.1. Recursive Makefiles

Recursive Makefiles are useful for projects with a subdirectory structure, where each subdirectory has its own Makefile. The main Makefile is responsible for coordinating builds in the subdirectories. This is especially handy when different modules or libraries are managed independently.

For example:

```makefile
SUBDIRS = lib src
all:
for dir in $(SUBDIRS); do \
$(MAKE) -C $$dir all; \
done
```

In this example, `SUBDIRS` contains the subdirectories `lib` and `src`. The `all` rule iterates over each subdirectory and runs `make` in each one. The `-C $$dir` option changes the working directory to the current subdirectory.

This approach allows the project to be organized in a modular way, making it easier to maintain and add new functionality without altering the main Makefile.

### 5.2. Non-recursive Makefiles

A non-recursive system is also an option for large projects. Unlike the recursive approach, the entire build process is controlled from a single Makefile, without the need to change directories. This can be more efficient by avoiding the overhead of recursive calls and providing centralized control.

For example:

```makefile
MODULES := lib src tests
SRC_DIR := $(addprefix ./,$(MODULES))
SRCS := $(foreach sdir,$(SRC_DIR),$(wildcard $(sdir)/*.c))
OBJS := $(SRCS:.c=.o)

all: $(OBJS)
$(CC) $(CFLAGS) $^ -o $(TARGET)
```In this example, functions like `addprefix` and `wildcard` are used to automatically generate paths to source files within subdirectories, and `foreach` to apply the build rule to all files. The result is a more centralized and efficient build system.

### 5.3. Other use cases

#### 5.3.1. Integration with version control systems

Makefiles can be integrated with version control systems, such as Git, to automate tasks related to code versioning. This is useful for tagging software versions or for embedding version information in binaries.

For example:

```makefile
VERSION := $(shell git describe --tags --always --dirty)

$(TARGET): CFLAGS += -DVERSION=\"$(VERSION)\"
```

In this example, the `VERSION` variable takes the version of the code from Git using `git describe`, which returns the closest tag, the number of commits since that tag, and the repository status. This version is passed as a preprocessor macro via `CFLAGS`.

## 6. GNU Make

GNU Make is one of the most widely used tools for automating software project management and build processes. Its ability to handle dependencies and automate repetitive tasks makes it a popular choice in a variety of development environments. Below are some advanced features that can improve performance and project management through GNU Make.

### 6.1. Command Line Options

GNU Make offers several options that allow you to modify its behavior from the command line. These options facilitate debugging, improve performance in parallel builds, and manage different Makefiles.

- `-j [N]`: Runs N tasks in parallel, taking advantage of multi-core systems. This option is especially useful in large builds, as it reduces build time by running tasks simultaneously. For example:

```sh
make -j4
```

In this case, four tasks are run in parallel.

- `-n` or `--dry-run`: Shows the commands that would be run, but without actually running them. This is an excellent tool to verify that rules and dependencies are correctly configured before making changes effective. For example:

```sh
make -n install
```

Shows the commands that would be run for the `install` rule without running them.

- `-B` or `--always-make`: Forces rebuilding of all targets, regardless of whether the files are up-to-date or not. For example:

```sh
make -B
```

Recompiles the entire project without considering whether the target files are already up-to-date.

- `-d`: Provides detailed debugging information, showing how Make decides which files need to be rebuilt and how rules are evaluated. For example:

```sh
make -d
```

Runs Make with detailed debugging information, useful for diagnosing complex problems in Makefiles.

- `-f [file]`: Allows you to specify an alternative Makefile. This is useful when you have more than one Makefile in your project or when you want to test a temporary file. For example:

```sh
make -f Makefile.alt
```

Runs Make using the `Makefile.alt` file instead of the default `Makefile`.

#### 6.2. Environment Variables

GNU Make uses several environment variables to tune its behavior. These variables can be used to customize the build process without directly modifying the Makefile.

- `MAKEFILES`: This is a list of Makefiles that are automatically included before processing the main Makefile. This variable is useful when you want to force the inclusion of certain files in all Make invocations without having to modify each individual Makefile. For example:

```sh
export MAKEFILES=common.mk
```Causes `common.mk` to be automatically included in all Makefiles.

- `MAKELEVEL`: Indicates the current recursion level in a Make build. This value is useful to avoid undesired behavior in recursive builds or to print specific messages only at the top level of the recursion. For example:

```makefile
ifeq ($(MAKELEVEL),0)
@echo "Running top level of Make"
endif
```

- `MAKEFLAGS`: Stores the command line options that were passed to Make. This is useful to keep the same build options across a project, especially in recursive builds. For example:

```bash
make -j4
```

After running this command, `MAKEFLAGS` will store `-j4`, ensuring that recursive calls to Make also use this option.

- `MAKEFILE_LIST`: Contains the list of all Makefiles that Make has processed. This variable is useful for debugging or generating reports that show all Makefiles that are being used in a project. For example:

```makefile
@echo "Processed Makefiles: $(MAKEFILE_LIST)"
```

Prints all Makefiles that have been processed during the run.