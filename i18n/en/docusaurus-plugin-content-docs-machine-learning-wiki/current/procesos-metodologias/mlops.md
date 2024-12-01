---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Herramientas necesarias para MLOps.
title: MLOps
toc_max_heading_level: 4
---
# References

- [ML in Production: From Data Scientist to ML Engineer](https://www.udemy.com/course/ml-in-production/?couponCode=SKILLS4SALEA)
- [PEP 8 — the Style Guide for Python Code](https://pep8.org/)

## 1. Introduction to MLOps

### 1.1. Definition and objectives
### 1.2. Importance in the life cycle of ML projects

## 2. Fundamentals

### 2.1. Product and systems design

The product design must justify its need and detail its objectives and impact, following these steps:

1. **Product definition**: Identify the need for the product and describe its objectives and impact.

2. **Background**: Understand the users, their objectives, and the obstacles they face.

3. **Value proposition**: Define what the product should offer to help users achieve their goals, how it will alleviate their problems, and what benefits it will generate.

4. **Objectives**: Break down the product into key objectives.

5. **Solution**: Describe the solution to meet the objectives, including key features, integration with other services, alternatives considered, limitations, and undeveloped features.

6. **Feasibility**: Evaluate the viability of the solution and the resources needed (data, money, equipment, etc.).

For system design, the following aspects are considered:

1. **System design**: Include all necessary elements, from data consumption to model delivery.

2. **ML workloads**: Describe the data sources for training and production, the labeling process, and the selection of features and labels.

3. **Metrics**: Linking core goals to quantitative metrics that optimize the model.

4. **Model Evaluation**: Performing model evaluation against defined metrics, either on reference data (offline) or in production (online).

5. **Real-time Performance**: Measuring real-time performance before replacing the existing version of the system.

6. **Modeling**: Applying principles such as end-to-end usability, testing a simple system before moving on to complex models, complementing the decision-making process, and evaluating each approach thoroughly.

7. **Inference**: Deciding between batch (offline) or real-time (online) inference:

- **Batch Inference**: Enables batch predictions and storage for fast inference, without requiring a separate service, but with the risk of outdatedness.

- **Online Inference**: Delivers real-time predictions, improving user experience, but requires a separate service and constant monitoring.

8. **Feedback**: Collect and incorporate human and machine feedback into the next iteration.

9. **Real impact**: Ensure that ML systems generate a tangible impact, interacting with users to iterate and improve the system.

### 2.2. The importance of data flow

#### 2.2.1. Origin

Data is the starting point in any MLOps project and can come from various sources, such as databases, CSV files or web services. The hosting of this data depends on the needs of the system:

- **Simple systems**: Data can be hosted locally on servers controlled by the company.
- **Complex or scalable systems**: It is advisable to use **cloud services** such as Amazon S3 or Google Cloud Storage, which offer the flexibility and scalability necessary to handle large volumes of data and facilitate their access and processing.

#### 2.2.2. AnalysisOnce the data is obtained, an Exploratory Data Analysis (EDA) is performed, an iterative process that is applied at different stages of the project to better understand the data and ensure its suitability for the task. The main objective is to extract relevant information through graphics to evaluate the amount of data, understand the distribution, detect anomalies and possible correlations.

#### 2.2.3. Data preprocessing

With prior knowledge of the data, preprocessing techniques are applied before introducing it into a model. This process includes:

- Joining tables to consolidate information into a single view.
- Handling missing values ​​through elimination or replacement.
- Detecting and treating outliers that could distort the results.
- Performing feature engineering to extract additional information.

During preprocessing, techniques such as data augmentation, desampling, and class weighting can be used. Additionally, the data may require transformations such as:

- **Normalization or standardization**: Adjusting the scales of the features to improve processing by the models.
- **Feature encoding**: Converting categorical features into numerical representations.
- **Feature extraction**: Deriving new features from existing ones to highlight relevant information.

#### 2.2.4. Data balancing and splitting

With the data transformed, the last step is carried out, which includes:

1. **Handling data imbalance**: Imbalance can affect the performance of the model. To address this, techniques such as `train_test_split` from *Scikit-Learn* are used, which splits the data equally using the `stratify` parameter.

2. **Oversampling and undersampling techniques**:

- **Oversampling**: Increases instances of the minority class by duplicating or generating synthetic examples.
- **Undersampling**: Reduces instances of the majority class by removing records.

It is crucial to evaluate the impact of these techniques, as oversampling can lead to overfitting, while undersampling can cause the loss of useful information.

3. **Data splitting**: Splitting into training, validation, and test sets to prevent overfitting and ensure that the model generalizes properly. It is essential that these splits maintain similar distributions.

### 2.3. Model building process

#### 2.3.1. Building the base model

Developing a machine learning model begins with building a base model, which can be as simple as a set of `if-else` rules. If this approach meets the needs and requirements, there is no justification for creating more complex solutions, which would avoid unnecessary cost. If the base model is not sufficient, the complexity is gradually increased, considering factors such as latency and model size, seeking an optimal balance between complexity and performance.

#### 2.3.2. Distributed trainingDistributed training is a strategy for training machine learning models in distributed systems, especially useful when a large computational load is required. Using tools such as Ray, the scalability of these systems is leveraged. In this approach, a master node coordinates the training, while worker nodes train the model and send the results to the central node. For its implementation, each worker node receives a portion of the data, adapting the model for parallel training. It is necessary to tune the environment, configure the network, allocate resources and manage dependencies, as well as implement parallelization and synchronization techniques. The ability to save the state of the model during training must be guaranteed to facilitate resumption or debugging in case of interruptions.

#### 2.3.3. Iteration on data

Instead of iterating on models while keeping the data set fixed, another option is to keep the model constant and iterate on the data set. This approach improves data quality by correcting bad samples, transforming features, expanding classes, and adding new datasets.

#### 2.3.4. Model optimization

When data or models are too large for traditional training or when efficiency is sought, model compression techniques are applied, especially in deep learning:

- __*Pruning*__: Removes weights or entire channels from the network to reduce its size while maintaining performance.
- __*Quantization*__: Reduces the precision of weights, decreasing the memory footprint with minimal loss of precision.
- __*Distillation*__: Trains smaller networks to mimic larger networks, reproducing the outputs of the layers of the larger network.

#### 2.3.5. Hyperparameter tuning

Hyperparameter tuning optimizes the parameters of a machine learning model. Tools like Ray Tune, integrated with HyperOpt, or Optuna, allow you to define and explore a search space to identify the best hyperparameters. These tools make it easier to manage the lifecycle of machine learning projects, from tracking experiments to deploying and managing models.

#### 2.3.6. Evaluation metrics

Evaluation metrics are essential to measure the performance of a model in MLOps. It is important to avoid over-optimization of a specific metric in order not to compromise overall performance. The selection of metrics depends on the problem.

For example, F1 is useful for classification in cases of imbalanced classes. Techniques like confusion matrices and Grad-CAM help to interpret how the model makes decisions.

It is crucial to perform a comprehensive evaluation, starting with proper training and analyzing detailed results to understand performance in different classes and situations.

#### 2.3.7. Models as services

Implementing models as services is crucial for their use in real-time or batch applications, ensuring scalability and robustness. This process involves making models available in production, considering key aspects such as scalability, robustness, throughput and latency. 

Choosing the right framework depends on the specific needs of the project. Depending on the requirements, you can opt for batch inference, useful for predictions on large data sets without the need for immediate response, or real-time inference, essential for applications that demand fast decisions. 

It is necessary to customize the service, adding specific logic or setting confidence control thresholds on the predictions.Finally, the deployment and testing process, including load and functional testing, is crucial to ensure a successful and efficient deployment to the production environment.

## 3. MLOps in practice

### 3.1. Sustainable code

A project must be developed under a clear and sustainable code structure, using tools and methodologies to ensure its organization and cleanliness. These practices are essential during the development, productionization, and evolution of the project.

#### 3.1.1. Project structure

A project must be organized into two main parts:

1. **Application directory:** Contains the code logic, model configuration, logs, among other components.
2. **Settings and configurations:** Includes project configurations and dependencies, such as dependency management files (Poetry), Dockerfiles, `.yml` configuration files, etc.

This separation promotes modular, organized, and easy-to-maintain code. Facilitates collaboration between team members, simplifies the upgrade process, and improves new developers' understanding of the project structure.

Example project structure:

```plaintext
src (or project name)
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

#### 3.1.2. Clean Code

The [PEP 8](https://pep8.org/) style guide defines conventions for writing Python code that is readable and consistent. Its main recommendations are highlighted below. In addition, tools such as [Black](https://pypi.org/project/black/) and [Ruff](https://docs.astral.sh/ruff/) are suggested to automatically apply these conventions in projects.

##### Code Layout

- An indentation of 4 spaces should be used, without mixing spaces and tabs.
- The maximum line length is 79 characters; for comments and docstrings, it is 72 characters.
- Long lines should be broken up using parentheses, brackets, or braces to improve readability.

Example:

```python
def long_function(parameter1, parameter2,
parameter3, parameter4):
return parameter1 + parameter2 + parameter3 + parameter4
```

##### File and string encoding

- Source files must use UTF-8 encoding.
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

It is recommended to use absolute imports.

```python
import os
import sys

from external_lib import some_function

from local_module import local_function
```

##### Whitespace

- Extra spaces should not be added around parentheses, brackets, braces, commas, or colons.
- A space should be added around assignment, comparison, and boolean operators.

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

##### Naming Conventions- **Packages and modules:** Must be written in lowercase, without spaces (e.g. `my_module`).
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

### 3.2. Managing Project Dependencies

Dependency management for a project can be done using a `requirements.txt` file. However, tools like Poetry offer advanced functionality. 

Poetry allows automatic installation of all dependencies for a library, separates dependencies between projects, promotes reproducibility, automatically manages virtual environments, and resolves dependency issues.

To manage a project with Poetry from scratch, follow these steps:

1. Install Poetry using pip:

```bash
pip install poetry
```

2. Initialize Poetry in the project directory:

```bash
poetry init
```

This generates a `.toml` file that stores the Python environment configuration and project dependencies.

3. Add new libraries to the project with the command:

```bash
poetry add library_name
```

This updates and installs the library in a virtual environment managed by Poetry.

4. Run the project script with the configured environment:

```bash
poetry run python file.py
```

To have a contributor use the project, they must follow these steps:

1. Install Poetry:

```bash
pip install poetry
```

2. Create and install the Python environment and dependencies for the project:

```bash
poetry install
```

3. Run the main program for the project:

```bash
poetry run python file.py
```

### 3.3. Parameter management with Pydantic

Parameter management or parameterization consists of defining and adjusting the parameters that configure a system, model or function, with the aim of avoiding hard-coded values ​​and reducing errors when making changes. It is recommended to centralize the parameters in a single file to facilitate their management throughout the project.

Pydantic is used to validate and manage configuration parameters in a structured way. Here is an example of an implementation in a `config.py` file, where the variables `data_file_name`, `model_path` and `model_name` are defined, corresponding to the name of the data file, the model directory and the model name, respectively:

```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import DirectoryPath, FilePath

# Base configuration class
class Settings(BaseSettings):
model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8')

data_file_name: FilePath
model_path: DirectoryPath
model_name: str

settings = Settings()
```

A `.env` file must be created with the following English:parameters:

```plaintext
DATA_FILE_NAME=rent_apartments.csv
MODEL_PATH=models
MODEL_NAME=rf_db_v1
```

The defined parameters can be used anywhere in the code by importing the `settings` variable:

```python
from config import settings

print(f"The model name is {settings.model_name}")
```

### 3.4. Logging and recording with Loguru

Logging allows you to record and monitor application activities during execution. Unlike `print`, logs provide a more structured and sophisticated way of managing messages, which is essential in production applications.Loguru simplifies logging configuration compared to the more complex-to-configure Python `logging` library. Loguru operates through a single instance per application, regardless of the number of times the library is imported. Once Loguru is configured anywhere in your code or in a configuration file, that configuration is applied globally. In each Python environment configured with Poetry in which your project runs, you can only have one log file, all of which information belongs to a single application.

The following code shows how to create an `INFO` type log:

```python
from loguru import logger

logger.info("Hello! This is an info message")
```

This code generates a log that includes information about the date, time of execution, log type (`INFO`), function, module, and the corresponding line of code.

#### 3.4.1. Log Levels

Loguru allows you to define different log levels, organized hierarchically:

- **DEBUG**: Provides complete details about the program's operation.
- **INFO**: Reports on the program's execution flow.
- **WARNING**: Indicates possible problems that can be managed at the moment, but that could be relevant to the program.
- **ERROR**: Indicates an error in a specific part of the code.
- **CRITICAL**: Identifies critical errors that prevent the code from working.

#### 3.4.2. Storing logs in files

Loguru allows you to store logs in files. For example:

```python
from loguru import logger

logger.add("programa.log")
```

#### 3.4.3. Log rotation

It is possible to set rotations for log files:

```python
from loguru import logger

# Rotate when file reaches 1 MB
logger.add("programa.log", rotation="1 MB")

# Daily rotation at a specific time
logger.add("programa.log", rotation="13:15")
```

#### 3.4.4. Log storage by hierarchy level

Logs can be stored in different files depending on their hierarchy level:

```python
from loguru import logger

logger.add("info.log", level="INFO")
logger.add("critical.log", level="CRITICAL")
```

- `info.log` will store all logs from level `INFO` onwards, excluding `DEBUG`.
- `critical.log` will only store logs from level `CRITICAL`.

#### 3.4.5. Using decorators

Loguru allows the use of decorators to catch exceptions in functions:

```python
from loguru import logger

@logger.catch
def funcion(a, b):
return a - b
```

This decorator facilitates the automatic capture and logging of errors in functions.

### 3.5. Process automation using Bash and Makefiles

Bash proficiency is essential for process automation. To learn more about its use, we recommend consulting the [notes on Bash](../programacion/bash.md) available in this Wiki. Also, the [notes on Makefiles](../herramientas/makefile.md) offer relevant information on the implementation and management of these files to facilitate the automation of tasks.

### 3.6. CI/CD with GitHub Actions

GitHub is a platform that uses the Git tool and includes other platform-specific tools that facilitate project management and deployment. To learn more about its use, we recommend consulting the [notes on GitHub](../herramientas/git/github.md) available on this Wiki.

### 3.7. Publishing a Python package on PyPI

To publish a Python package on PyPI, the project must have an organized structure. It is recommended to host the package in a repository to facilitate version control, the implementation of CI/CD pipelines, and other development practices.

The first step is to create a `setup.py` file that contains the package configuration. An example of a basic configuration is shown below:

```python
import os
from setuptools import setup, find_packages
import codecshere = os.path.abspath(os.path.dirname(__file__))

with codecs.open(os.path.join(here, "README.md"), encoding="utf-8") as fh:
    long_description = "\n" + fh.read()

VERSION = "0.1.1"
DESCRIPTION = "Essential utilities for data scientists"
LONG_DESCRIPTION = """
    A package of essential tools and utilities for streamlining data science tasks like manipulation, 
    augmentation, visualization, among others, enhancing daily *workflows*.
"""

setup(
    name="datasu",
    version=VERSION,
    author="danibcorr (Daniel Bazo)",
    description=DESCRIPTION,
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/danibcorr/data-scientist-utilities",
    packages=find_packages(),
    install_requires=[
        "numpy",
        "numba",
        "ipywidgets",
        "matplotlib",
        "seaborn",
        "pandas",
        "scikit-learn",
    ],
    keywords=[
        "python",
        "data science",
        "machine learning",
        "deep learning",
        "artificial intelligence",
    ],
    classifiers=[
        "Development Status :: 1 - Planning",
        "Intended Audience :: Developers",
        "Programming Language::Python::3",
        "Operating System::OS Independent",
        "License :: OSI Approved :: MIT License",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
)
```

in the file `setup.py` specifies the package version, a description, requirements, and other relevant information. Additional parameters can be found in the [official setuptools guide](https://setuptools.pypa.io/en/latest/ userguide/).

Once the `setup.py` file is configured, the distribution files can be generated using the command:

```bash
python setup.py sdist bdist_wheel
```

Before publishing the package on PyPI, it is recommended to perform local tests to make sure everything works correctly. To install the package locally, use:

```bash
pip install /dist/filename.whl
```

This allows you to test the package in a local environment and run tests to verify that it works. To publish on PyPI, you need an account on the service and multi-factor authentication (2FA) setup. You then need to obtain an API token from the relevant section in your PyPI account. This token can be stored in a `.pypirc` file or saved safely.

To publish the project, use the following command:

```bash
twine upload dist/*
```

If the project name is already in use, you will receive an error and will need to select a different name for the package.