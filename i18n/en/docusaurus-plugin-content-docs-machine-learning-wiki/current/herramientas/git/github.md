---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Utiliza Git con GitHub
title: GitHub
toc_max_heading_level: 4
---
# References

- [ML in Production: From Data Scientist to ML Engineer](https://www.udemy.com/course/ml-in-production/?couponCode=SKILLS4SALEA)

# Introduction

**GitHub** is a collaborative development platform used to manage software projects. It provides tools that enable continuous integration (*Continuous Integration*, CI), continuous delivery (*Continuous Deployment*, CD), and version control through **Git**. 

GitHub has become an essential tool, offering advanced features such as **GitHub Actions** for workflow automation and **GitHub Pages** for publishing websites directly from repositories.

## 1. CI/CD with GitHub Actions

The term **CI (*Continuous Integration*)** refers to the automation of the steps required to integrate new code into a shared repository, ensuring that changes are continuously validated through testing and builds. **CD (*Continuous Deployment*)** involves automating the steps required to bring code from the shared repository into production, facilitating the continuous creation and delivery of new versions of a product.

### 1.1. GitHub Actions and how it works

GitHub Actions is a platform that allows you to automate workflows using YAML configuration files. The GitHub Actions runner is a server that runs these workflows in the environment defined by the project. To configure a workflow, you create a YAML file inside the repository, usually under the path `.github/workflows/`, which defines the steps or actions to be performed.

### 1.2. Workflow structure

The workflow configuration file (for example, `workflow.yml`) contains ***jobs***, which represent units of work such as building the project, running tests, or deploying the application. Each job is composed of sequential steps that describe specific tasks, and requires an operating system to run. ***Triggers*** or events, such as a `push`, a `pull request`, or scheduled events, determine when the workflow should be started. Additionally, it is possible to define **permissions** that limit the workflow's access to resources in the repository.

GitHub Actions allows you to use actions defined by third parties, available at [github.com/actions](https://github.com/actions) and the [GitHub Marketplace](https://github.com/marketplace).

#### 1.2.1. Project organization

To integrate GitHub Actions into a project, you must create a `.github` folder at the root of the repository, within which you must include a `workflows` subfolder that will contain the `.yml` files with the definition of the workflows.

```plaintext
src
│
.github
| ├── workflows
│ ├── workflow.yml
```

#### 1.2.2. Examples of workflow configuration

##### 1.2.2.1. Basic example

Here is a basic example of a workflow that runs when there is a `push` or a `pull request` on the `main` branch.

```yml
name: Basic workflow

on:
push:
branches: [ "main" ]
pull_request:
branches: [ "main" ]

permissions:
contents: read

jobs:
build:
runs-on: ubuntu-latest

steps:
- name: Checkout repository
uses: actions/checkout@v4
```

This example clones the repository using the third-party action `actions/checkout@v4`, simplifying the process of preparing the environment for the workflow.

##### 1.2.2.2. Setting up Python, Poetry, and Flake8

In this example, a workflow is set up to install Python, manage dependencies with Poetry, and check in the code using Flake8, a tool that validates code style and quality.

```yml
name: Verification with Flake8

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]permissions:
contents: read

jobs:
build:
runs-on: ubuntu-latest

steps:
- name: Checkout repository
uses: actions/checkout@v4

- name: Install Python
uses: actions/setup-python@v5
with:
python-version: '3.10'

- name: Install Poetry
uses: snok/install-poetry@v1

- name: Install dependencies with Poetry
run: poetry install

- name: Check code with Flake8
run: poetry run flake8 src/
```

##### 1.2.2.3. Using cache to optimize workflows

It is possible to improve workflow performance by using cache to store dependencies, avoiding their reinstallation on each run. Below is an example of how to use the cache in an environment configured with Poetry.

```yml
name: Workflow with cache

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Install Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.10'

      - name: Install Poetry
        uses: snok/install-poetry@v1
        with:
          virtualenvs-in-project: true

      - name: Load dependency cache
        uses: actions/cache@v4
        id: cached-poetry-dependencies
        with:
          path: .venv
          key: venv-${{ runner.os }}-${{ hashFiles('**/poetry.lock') }}

- name: Installing dependencies with Poetry
if: steps.cached-poetry-dependencies.outputs.cache-hit != 'true'
run: poetry install
```

Cache usage is managed by the key `key: venv-${{ runner.os }}-${{ hashFiles('**/poetry.lock') }}`, which ensures that the cache is only updated if the `poetry.lock` file has changed.

### 1.3. Modularizing workflows and actions

It is recommended to split workflows into smaller, reusable actions to simplify configuration and improve maintenance. To do this, separate folders for actions and workflows are created inside the `.github` folder.

```plaintext
src
│
.github
| ├── actions
| ├── build-application
|           ├── action.yml
|   ├── workflows
│ ├── lint.yml
```

Example of `action.yml` in the `build-application` folder:

```yml
name: Build Application

runs:
  using: composite

  steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Set up Python
      uses: actions/setup-python@v5
      with:
        python-version: '3.10.7'

    - name: Install Poetry
      uses: snok/install-poetry@v1
      with:
        virtualenvs-in-project: true

    - name: Load dependency cache
      uses: actions/cache@v4
      id: cached-poetry-dependencies
      with:
        path: .venv
        key: venv-${{ runner.os }}-${{ hashFiles('**/poetry.lock') }}

    - name: Install dependencies with Poetry
      if: steps.cached-poetry-dependencies.outputs.cache-hit != 'true'
      run: poetry install
```

Example of `lint.yml` that reuses the action defined above:

```yml
name: Lint Workflow

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

permissions:
  contents: read

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Build application
        uses: ./.github/actions/build-application

      - name: Lint with flake8
        run: poetry run flake8 src/
```

This modular approach allows you to divide the complexity of workflows, improve efficiency, and allow reuse of configurations throughout the project.