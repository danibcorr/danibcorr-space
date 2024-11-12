---
sidebar_position: 1  
authors:
  - name: Daniel Bazo Correa  
description: Creation and management of Python virtual environments using VENV and Anaconda.  
title: Managing Python Environments  
toc_max_heading_level: 4  
---

## Introduction

![Anaconda Logo](https://th.bing.com/th/id/R.7b4ee475a8fa6657174bc8477be3df41?rik=7C3cFBxzAcC5Xw&pid=ImgRaw&r=0)

**Anaconda** is an open-source platform that simplifies the creation and management of Python virtual environments, specifically designed for data science and machine learning projects. It provides a Python distribution with numerous pre-installed libraries, an efficient package manager, and advanced tools for working with Jupyter notebooks. Package management is handled via the [**Conda**](https://anaconda.org/anaconda/repo) package manager, though [**PIP**](https://pypi.org/) can also be used.

On the other hand, **VENV** is a lighter option that allows the creation of virtual environments without Anaconda's additional dependencies. Package management is done using [**PIP**](https://pypi.org/).

This tutorial assumes the use of a Linux-based system, particularly a Debian-derived distribution. Note that some commands may vary depending on the distribution or operating system used.

## 1. Creating a Virtual Environment

### 1.1. Using VENV

Follow these steps to set up a virtual environment using **VENV**:

1. **Update the operating system**:

   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Add the repository for the latest version of Python**:

   ```bash
   sudo add-apt-repository ppa:deadsnakes/ppa
   sudo apt update
   ```

3. **Install a specific version of Python** (e.g., Python 3.10):

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

4. **(Optional) Install and update PIP with Anaconda**: If you want to use Anaconda but manage packages with PIP:

   ```bash
   conda install anaconda::pip
   pip install --upgrade pip
   ```

## 2. Utilities for Environment Management

### 2.1. Managing PIP Cache

#### 2.1.1. Using PIP

To free up system space or fix dependency issues, you can purge the PIP cache with the following command:

```bash
pip cache purge
```

#### 2.1.2. Using Anaconda

Similarly, if using Anaconda, the following command can be used:

```bash
conda clean --all
```

### 2.2. Updating Packages

It is important to keep your project's dependencies up to date. Here are the steps to do so:

#### 2.2.1. Using PIP

##### Update All Packages

You can use the following command to update all packages:

```bash
pip freeze | grep -v "^\-e" | cut -d = -f 1 | xargs -n1 pip install -U
```

Where:
- `pip freeze`: Lists installed packages.
- `grep -v "^\-e"`: Excludes editable installations.
- `cut -d = -f 1`: Extracts package names only, without versions.
- `xargs -n1 pip install -U`: Updates each package.

##### Update a Specific Package

To update a specific package:

```bash
pip install --upgrade package_name
```

#### 2.2.2. Using Anaconda

##### Update All Packages

Although Anaconda allows package installation with PIP, it is recommended to avoid mixing Anaconda and PIP packages as it may cause conflicts. If you choose to use Anaconda packages, you can update all packages with:

```bash
conda update --all
```

##### Update a Specific Package

To update a specific package:

```bash
conda update package_name
```

### 2.3. Installing Packages from a Requirements File

When a project requires specific dependencies, it is useful to use a `requirements.txt` file:

1. **Create a `requirements.txt` file** with the desired packages and versions:

   ```plaintext
   numpy==1.21.0
   pandas>=1.3.0
   requests
   ```

2. **Install packages from the file**:

   ```bash
   pip install -r requirements.txt
   ```

### 2.4. Deleting an Environment

#### 2.4.1. Using VENV

To delete an environment created with VENV, go to the directory where it was created and remove the corresponding folder:

```bash
rm -rf environment_name
```

#### 2.4.2. Using Anaconda

1. **List available environments**:

   ```bash
   conda env list
   ```

2. **Delete an environment**:

   ```bash
   conda env remove --name environment_name
   ```

### 2.5. Adding the Environment to Jupyter

To add the created virtual environment to Jupyter, whether using Anaconda or VENV, follow these steps:

1. **Install `ipykernel` for Jupyter integration**:

   ```bash
   pip install ipykernel
   ```

2. **Add the environment to Jupyter**:

   ```bash
   python -m ipykernel install --user --name=environment_name
   ```