---
sidebar_position: 1  
authors:
  - name: Daniel Bazo Correa  
description: Creación y gestión de entornos virtuales de Python con VENV y Anaconda.  
title: Gestión de entornos en Python  
toc_max_heading_level: 4  
---
## Introduction

**Anaconda** is an open-source platform that makes it easy to create and manage Python virtual environments, designed especially for data science and machine learning projects. It provides a Python distribution with numerous pre-installed libraries, an efficient package manager, and advanced tools for working with Jupyter notebooks. Package management is done through the [**Conda**](https://anaconda.org/anaconda/repo) package manager, although the [**PIP**](https://pypi.org/) package manager can also be used.

On the other hand, **VENV** is a lighter option that allows you to create virtual environments without the additional dependencies of Anaconda. Package management is done through the [**PIP**](https://pypi.org/) package manager.

This tutorial assumes the use of a Linux-based system, particularly a Debian-derived distribution. Note that some commands might vary depending on the distribution or operating system used.

## 1. Creating a virtual environment

### 1.1. Using VENV

Follow these steps to set up a virtual environment using **VENV**:

1. **Upgrade the operating system**:

```bash
sudo apt update && sudo apt upgrade -y
```

2. **Add the latest Python repository**:

```bash
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
```

3. **Install a specific version of Python** (for example, Python 3.10):

```bash
sudo apt install python3.10
```

4. **Install VENV, PIP, and development tools**:

```bash
sudo apt install python3.10-venv python3.10-dev python3-pip
```

5. **Create the virtual environment**:

```bash
python -m venv environment_name
```

6. **Activate the environment**:

```bash
source environment_name/bin/activate
```

### 1.2. Using Anaconda

If you prefer to use Anaconda, follow these steps:

1. **Open Anaconda Prompt**.

2. **Create a new environment**:

```bash
conda create --name environment_name
```

3. **Activate the environment**:

```bash
conda activate environment_name
```

4. **(Optional) Install and update PIP with Anaconda**: In case we want to use Anaconda but with the packages managed by PIP:

```bash
conda install anaconda::pip
pip install --upgrade pip
```

## 2. Utilities for managing environments

### 2.1. PIP cache management

#### 2.1.1. Using PIP

To free up space on the system or fix dependency issues, we can purge the PIP cache with the following command:

```bash
pip cache purge
```

#### 2.1.2. Using Anaconda

Similarly, if you are using Anaconda, you can use the following command:

```bash
conda clean --all
```

### 2.2. Updating packages

It is important to keep your project's dependencies up to date. Here are the steps to do so:

#### 2.2.1. Using PIP

##### Updating all packages

You can use the following command to update all packages:

```bash
pip freeze | grep -v "^\-e" | cut -d = -f 1 | xargs -n1 pip install -U
```

Where:
- `pip freeze`: Generates a list of installed packages.
- `grep -v "^\-e"`: Excludes installations in editable mode.
- `cut -d = -f 1`: Extracts only package names, without versions.
- `xargs -n1 pip install -U`: Upgrades each package.

##### Upgrading a specific package

To upgrade a specific package:

```bash
pip install --upgrade package_name
```

#### 2.2.2. Using Anaconda

##### Upgrading all packagesAlthough Anaconda allows installing packages with PIP, it is recommended to avoid mixing packages from the Anaconda repository and PIP, as this may cause conflicts. If you decide to use Anaconda packages, you can update all packages with:

```bash
conda update --all
```

##### Updating a specific package

To update a specific package:

```bash
conda update package_name
```

### 2.3. Installing packages from a requirements file

When a project needs specific dependencies, it is useful to use a `requirements.txt` file:

1. **Create a `requirements.txt` file** with the desired packages and versions:

```plaintext
numpy==1.21.0
pandas>=1.3.0
requests
```

2. **Install the packages from the file**:

```bash
pip install -r requirements.txt
```

### 2.4. Deleting an environment

#### 2.4.1. Using VENV

To delete an environment created with VENV, go to the directory where it was created and delete the corresponding folder:

```bash
rm -rf environment_name
```

#### 2.4.2. Using Anaconda

1. **List available environments**:

```bash
conda env list
```

2. **Remove an environment**:

```bash
conda env remove --name environment_name
```

### 2.5. Add the environment in Jupyter

To add the virtual environment created, regardless of whether it is Anaconda or VENV, we can follow the steps below:

1. **Install `ipykernel` for integration with Jupyter**:

```bash
pip install ipykernel
```

2. **Add the environment to Jupyter**:

```bash
python -m ipykernel install --user --name=environment_name
```

### 2.6. Remove installed packages from an environment

#### 2.6.1. Using PIP

##### Remove all packages

1. **List all installed packages**:
```bash
pip list --format=freeze > installed.txt
```

2. **Remove all listed packages**:
```bash
pip uninstall -r installed.txt -y
```

##### Remove a specific package

1. **Remove a specific package**:
```bash
pip uninstall package_name
```

#### 2.6.2. Using Anaconda

##### Remove all packages

1. **Remove an entire Anaconda environment**:
If you have specific environments you want to remove, you can do so with:
```bash
conda remove --name environment_name --all
```

2. **Remove packages from a specific environment without removing the environment**:
First, activate the environment:
```bash
conda activate environment_name
```

3. **Remove all packages from the active environment**:
```bash
conda list --export > installed_conda.txt
conda remove --yes --file installed_conda.txt
```

##### Remove a specific package

1. **Remove a specific package**:
```bash
conda remove package_name
```