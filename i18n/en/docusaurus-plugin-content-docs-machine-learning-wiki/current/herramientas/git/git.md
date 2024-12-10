---
sidebar_position: 3
authors:
  - name: Daniel Bazo Correa
description: Controla versiones de tu código con Git.
title: Git
toc_max_heading_level: 4
---
# References

* [Git Hooks](https://githooks.com/)

# Introduction

**Git** is a distributed version control system that manages the history of changes in software projects, facilitating collaboration between developers.

## 1. Version control

Version control manages changes to files over time, allowing recovery of previous versions when necessary.

### 1.1. Terminology

- **Local repository**: Database that stores versions of files locally.
- **Local copy**: Version of the file that the user modifies in his/her directory.
- **Remote repository**: Project hosted on an external network, e.g. GitHub, GitLab, etc.
- **History (***Log***)**: Record of changes made to the repository.
- **Conflict**: Occurs when two users modify the same lines of a file or when one deletes it and another modifies it.

### 1.2. File states

- **Untracked**: File not recorded in the previous snapshot.
- **Committed**: Data stored in the local database.
- **Modified**: Altered file whose changes have not been committed.
- **Staged**: File marked for inclusion in the next commit.
- **Ignored**: File that Git has been instructed not to record.

### 1.3. Operations

- ***Clone***: Creates a local copy of a remote repository.
- ***Add***: Adds changes to the staging area.
- ***Commit***: Check in a new version to the local repository.
- ***Push***: Sync local changes with a remote repository.
- ***Pull***: Update the local repository with changes from the remote repository.
- ***Fork***: Create a copy of a project to modify it independently.
- ***Pull Request***: Request the integration of changes into a project.

## 2. Git

Git is a distributed version control system that allows you to manage and track changes to code over time. On the other hand, platforms such as GitHub or GitLab use Git to facilitate project management and online collaboration, offering graphical interfaces and additional functionalities such as continuous integration, issue management, and collaboration between distributed teams.

### 2.1. Basic Linux Commands

Git-Bash is a command line interface that allows interaction with Git using Linux commands, making it easy to manage the file system and perform various operations. Some fundamental commands and examples of their usage are described below:

| Command | Function | Usage example |
| --------- | --------------------------------------------------- | ----------------------------------------------------------------------------- |
| **pwd** | Displays the full path of the current directory. | `pwd` - This command displays the full path, for example: `/home/user/` |
| **mkdir** | Creates a new directory at the desired location. | `mkdir new_directory` - Creates a directory named "new_directory". |
| **cd** | Changes to the specified directory. | `cd new_directory` - Changes to the directory "new_directory". |
| **ls** | Lists the files and subdirectories in the current directory. | `ls` - Displays the files in the current directory. `ls -la` - Shows additional details such as permissions and modification dates. `ls -a` - Shows all files in the directory including hidden ones. |
| **rm** | Removes the specified file or directory. | `rm file.txt` - Removes the file "file.txt". To remove directories, use `rm -r directory/`. || **mv** | Moves or renames a file or directory. | `mv file.txt new_location/` - Moves "file.txt" to the "new_location" folder. It can also be used to rename files, for example: `mv file.txt new_file.txt`. |

For more information on Linux, you can [visit the following notes](../../sistemas-operativos/linux.md).

### 2.2. Commands for local version control

Below are some of the most commonly used commands for managing version control locally in a Git repository, along with usage examples:

| Command | Function | Usage example |
| --- | --- | --- |
| **git init** | Creates a new local repository. | `git init` - Initializes a repository in the current directory. |
| **git clone** | Clone an existing repository to a local location. | `git clone https://github.com/user/repository.git` - Clone the repository from the given URL. |
| **git add** | Staging files for commit. | `git add file.txt` - Adds "file.txt" to the staging area. |
| **git commit** | Commit changes to the local repository. | `git commit -m "Commit message"` - Commit changes with the message "Commit message". |
| **git reset HEAD** | Revert staging of files that were ready to be committed. | `git reset HEAD file.txt` - Undo staging of "file.txt". |
| **git commit --amend** | Amends the last commit, allowing the message to be changed or additional files to be added. | `git commit --amend -m "Corrected message"` - Amends the message of the last commit. |
| **git status** | Show the current status of files in the repository. | `git status` - Show modified, unstaged, or pending commit files. |
| **git checkout** | Switch between branches or discard changes to specific files. | `git checkout new-branch` - Switch to the branch "new-branch".<br />`git checkout -- file.txt` - Undo changes to "file.txt". |
| **git branch** | Manage branches in the local repository. | `git branch` - List existing branches in the repository.<br />`git branch new-branch` - Create a new branch called "new-branch". |
| **git merge** | Merge a branch into the current branch. | `git merge new-branch` - Merge the branch "new-branch" into the branch you are currently on. |
| **git fetch** | Download changes from the remote repository, but do not merge them. | `git fetch origin` - Fetch changes from the remote repository named "origin", but do not apply them. |
| **git pull** | Fetch and merge changes from the remote repository into the current branch. | `git pull origin main` - Fetch and merge changes from the "main" branch of the remote repository "origin". |
| **git push** | Push committed changes to a remote repository. | `git push origin main` - Push committed local changes to the "main" branch of the remote repository "origin". |
| **git log** | Show the commit history of the repository. | `git log` - Show the commit history.<br />`git log --oneline` - Show the commit history in summary form. |
| **git diff** | Show the differences between modified and committed files. | `git diff` - Show the differences between modified files in the workspace. |
| **git stash** | Temporarily store uncommitted changes to clean up the workspace. | `git stash` - Save changes to a temporary area.<br />`git stash pop` - Retrieve changes saved to the stash. |
| **git rm** | Remove files from the repository and staging area. | `git rm file.txt` - Remove the file "file.txt" from the repository and staging area. |

### 2.3. Basic Git Setup for GitHub/GitLabBefore working with GitHub or GitLab, you need to set up your local Git environment. This includes establishing your identity and setting up authentication with the platforms.

#### 2.3.1. Setting username and email

Git uses the configured username and email to identify your contributions. You can set them globally so that they apply to all your repositories:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

To verify the settings:

```bash
git config --global --list
```

If you want to set them only for a specific repository, omit the `--global` option and run the commands inside the repository directory.

#### 2.3.2. Setting up SSH authentication for GitHub/GitLab

Setting up SSH keys simplifies authentication with GitHub/GitLab:

1. Generate an SSH key if you don't have one:
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```
If your system doesn't support `ed25519`, use:
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

2. Copy the generated public key:
```bash
cat ~/.ssh/id_ed25519.pub
```

3. Go to your GitHub or GitLab account, go to **Settings** > **SSH and GPG keys**, and add the copied public key.

4. Test the connection:
```bash
ssh -T git@github.com
```
(For GitLab: `ssh -T git@gitlab.com`).

#### 2.3.3. Setting up authentication with personal tokens

If you prefer to use HTTPS instead of SSH, you can create a personal access token on GitHub/GitLab and use it as a password when cloning or pushing. To set it up:

1. Go to **Settings** > **Developer Settings** > **Personal Access Tokens**.
2. Generate a token with the necessary permissions.
3. When performing an operation that requires authentication, use your user as the username and the token as the password.

## 3. Version control strategy

Both **Trunk-Based Development** and **Git Flow** are popular version control strategies, each with their own advantages and use cases. Below is a detailed comparison of both methodologies.

### 3.1. Trunk-Based Development

In this strategy, developers frequently merge small updates into a single main branch (often called *trunk* or *main*).

The main advantages of this strategy are:

- **Facilitates Continuous Integration (CI) and Continuous Deployment (CD)**: This methodology is ideal for environments where CI/CD is practiced, allowing for fast and frequent deployments. This is due to merging small and frequent changes.
- **Encourages rapid iteration and collaboration**: Developers can work in parallel and merge their changes quickly, which speeds up the development cycle.

However, it has the following disadvantages:

- **Management in large teams**: It can be difficult to manage in large teams without strict discipline and coordination.
- **Tracking individual changes**: It is less capable of tracking individual changes compared to Git Flow, which can make it difficult to identify specific issues.

### 3.2. Git Flow

This strategy uses multiple branches for different purposes (e.g. feature branches, release branches, fix branches).

The main advantages of this strategy are:

- **Organization and structure**: Git Flow is highly organized and structured, which makes it easy to manage complex projects.
- **Detailed change tracking**: Allows detailed tracking of individual changes, which is useful for audits and code reviews.- **Suitable for long release cycles**: It is ideal for projects with longer release cycles, where detailed planning and management is required.

However, it has the following disadvantages:

- **Complexity**: Managing multiple branches can be more complex and require more effort and coordination.
- **Slowing down development**: If not managed correctly, it can slow down the development process due to the need to maintain and merge multiple branches.

### 3.3. When to use Trunk-Based Development or Git Flow

- **Trunk-Based Development**: It is ideal for teams that practice CI/CD, need fast iterations, and work on projects with frequent updates. It is especially useful in agile environments where speed and flexibility are crucial.
- **Git Flow**: Suitable for projects with longer release cycles, which require detailed change tracking, and for teams that prefer a more structured approach. It is ideal for projects where stability and long-term planning are a priority.

## 4. Git Hooks

Git Hooks are a built-in feature in Git that allows you to automate tasks and enforce policies throughout your workflow. This allows Git to execute actions at key moments in the development process, ensuring code quality and enforcing project-specific policies.

### 4.1. Definition and use of Git Hooks

Git Hooks are scripts that are automatically executed in response to specific events within Git, such as before or after a `commit`, `push`, or `merge`.

To use Git Hooks, you need to create scripts in the `.git/hooks` directory at the root of your Git repository. These scripts must be executable and named after the event they are triggered for, such as `pre-commit`, `pre-push`, or `post-merge`. It is essential that the file is given the proper permissions, which can be done with the command:

```bash
chmod +x pre-commit
```

By placing these scripts in the correct directory and with the necessary permissions, Git will automatically execute them when the corresponding event occurs.

- **pre-commit**: Runs before creating a commit. It is used to verify that the code complies with the format, perform unit tests, validate that commit messages comply with certain standards, or avoid spelling errors.

```bash
# !/bin/bash
# Pre-commit hook to run Black only on the main branch
# This script uses Black to check the style of the code
# If there are errors, the commit is blocked and a message is displayed to the user.

# Get the current branch
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Check if we are on the main branch
if [ "$branch_name" != "main" ]; then
echo "Black will not be run because you are not on the 'main' branch."
# Exit without errors
exit 0 
else
# Run Black in the current directory
black . --check

# Check the status of the last operation (exit code)
if [ $? -ne 0 ]; then
echo "Style errors detected."
# Block the commit if there are errors
exit 1 
fi

echo "The commit has been completed successfully."
fi
```

- **pre-push**: Runs before sending changes to a remote repository. Used to prevent pushes to protected branches or to run additional tests before changes are pushed to the server. 

```bash
  # !/bin/bash
  # Hook pre-push to update pip, install Poetry, install dependencies and run tests

  # Update pip
  echo "Updating pip..."
  python -m pip install --upgrade pip

  # Install Poetry if not installed
  if ! command -v poetry &> /dev/null; then
      echo "Installing Poetry..."
      pip install poetry
  fi

  # Check if Poetry was installed correctly
  if ! command -v poetry &> /dev/null; thenecho "Error: Poetry failed to install."
exit 1
fi

# Install Poetry dependencies
echo "Installing Poetry dependencies..."
poetry install

# Run tests with Pytest
echo "Running tests with Pytest..."
poetry run pytest -v ./tests

# Check the status of tests
if [ $? -ne 0 ]; then
echo "Error: Tests failed. Blocking push."
exit 1
fi

# Generate requirements.txt from Poetry
echo "Generating requirements.txt..."
poetry export -f requirements.txt --output requirements.txt --without-hashes

echo "The push has completed successfully."
```

- **post-commit**: Runs after a commit is made. This hook can be used to perform post-commit tasks, such as sending automatic notifications to the team, informing them about changes introduced in the project.

```bash
# Post-commit hook to send an email notification
# This script sends an email to the team informing about the new commit.

# Get the message of the last commit
commit_message=$(git log -1 --pretty=%B)

# Send an email (using sendmail as an example)
echo "New commit made: $commit_message" | sendmail -v team@example.com
```

- **post-merge**: Runs after a merge is complete. Useful for actions such as updating dependencies or regenerating documentation. 

```bash
# !/bin/bash
# Post-merge hook to update dependencies with Poetry 

# Check if Poetry is installed
if ! command -v poetry &> /dev/null; then
echo "Error: Poetry is not installed."
echo "Installing Poetry..."
pip install poetry
fi

# Update dependencies
echo "Updating Poetry dependencies..."
poetry update

# Check Poetry configuration
echo "Checking Poetry configuration..."
poetry check

# Install new dependencies if they have been added in pyproject.toml
echo "Installing new dependencies..."
poetry install

# Run tests to verify that everything works correctly
echo "Running tests with Pytest..."
poetry run pytest -v ./tests

# Check the status of the tests
if [ $? -ne 0 ]; then
echo "Error: Tests failed. Check for errors."
exit 1
fi

# Generate requirements.txt if needed
echo "Generating requirements.txt..."
poetry export -f requirements.txt --output requirements.txt --without-hashes

echo "Post-merge completed successfully. Dependencies updated and tests executed."
```

- **pre-receive** and **post-receive**: These hooks are run on the remote server when receiving changes via push. The `pre-receive` allows you to verify that commits comply with project policies before accepting changes, while the `post-receive` can be used to perform automatic deployments to a production environment.

- **pre-receive**: An example of this hook that blocks the push if problems are detected with the commit messages is presented below.

```bash
# !/bin/bash
# Pre-receive hook to validate commit messages
# This script verifies that all commit messages follow a specific format.

while read oldrev newrev refname; do
# Iterate over the commits being pushed
for commit in $(git rev-list $oldrev..$newrev); do
# Get the message of the current commit
commit_message=$(git log --format=%B -n 1 $commit)

# Check if the commit message complies with the required format
if ! [[ $commit_message =~ ^\[JIRA-[0-9]+\] ]]; then
echo "Commit message '$commit_message' does not comply with the required format."
# Block the push if the format is incorrect
exit 1 
fi
done
done
```- **post-receive**: An example of a `post-receive` hook that performs an automatic deployment to production after receiving a push.

```bash
# Post-receive hook to automatically deploy code to production
# This script is run on the server after changes are accepted.

echo "Deploying changes to production..."

# Switch to the production directory
cd /var/www/my-app

# Get the latest version of the code
# Assuming the main branch is 'main'
git pull origin main 

# Restart the web server to apply changes (e.g. with PM2)
pm2 restart my-appDescription: 
```

### 4.2. Recommendations for Git Hooks

When writing and managing Git Hooks, it is suggested to follow these guidelines:

- **Fast and reliable**: Hooks should be fast so as not to slow down the workflow, and they should work reliably, avoiding interruptions in development processes.

- **Clear documentation**: It is essential that scripts are well documented, with comments describing their functionality, so that any team member can understand their purpose and modify them if necessary.

- **Non-intrusive**: It is important to prevent hooks from automatically modifying code or files without the developer's consent, as this could lead to unwanted conflicts.

## 5. Practical use cases

### 5.1. Common mistakes

#### 5.1.1. Merge conflicts

These conflicts arise when two people modify the same line in a file or make changes that are not compatible.

Solution:
+ Use merge tools to resolve conflicts efficiently.
+ Coordinate with the team to better manage changes and minimize conflicts.

#### 5.1.2. Diverging branches

This happens when branches become so far apart that integration becomes difficult.

Solution:
+ Integrate changes frequently (continuous integration) to avoid significant divergences.
+ Implement branch management strategies such as GitFlow or GitHub Flow to keep code in sync.
+ Review and validate changes before merging highly divergent branches.

#### 5.1.3. Abandoned branches

Old, unused branches remain in the repository, creating clutter.

Solution:
+ Delete local and remote branches that are no longer needed with `git branch -d` and `git push origin --delete`.
+ Keep an organized record of active branches and their purposes.
+ Perform periodic cleanups on the repository to keep it tidy and efficient.

#### 5.1.4. Unversioned code

Not committing regularly can result in the loss of work or important changes.

Solution:
+ Make frequent and significant commits to protect project progress.
+ Use `git stash` to store temporary changes without altering the project history.
+ Implement task management tools to link commits to specific activities or requirements.

#### 5.1.5. Out of sync between local and remote

When the local repository is out of sync with the remote, integration issues can occur.

Solution:
+ Perform `git pull` regularly to keep your local copy up to date with the remote.
+ Use `git push` to send your changes to the remote repository, avoiding out of sync.
+ Set up alerts or notifications to stay on top of updates to the remote repository.

#### 5.1.7. Loss of change history

This happens when changes are made directly to the remote repository, bypassing the local commit history.

Solution:
+ Use `git fetch` and `git rebase` to properly integrate remote changes into the local history.
+ Avoid making changes directly to the main branch without following a proper review process.+ Use pull requests to perform reviews and merges, ensuring a clear and orderly history of changes.