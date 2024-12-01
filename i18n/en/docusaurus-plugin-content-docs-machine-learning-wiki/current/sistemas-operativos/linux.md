---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Conoce un poco más del sistema operativo Linux.
title: Linux
toc_max_heading_level: 4
---
# References

+ [60 Linux Commands you NEED to know (in 10 minutes)](https://www.youtube.com/watch?v=gd7BXuUQ91w)

# Introduction

**Linux** is an open source Unix-based operating system created by Linus Torvalds and released in 1991. It is characterized by its robustness, security, and flexibility, being popular on both servers and personal devices. Linux has a wide variety of distributions adapted to different needs, from desktop environments to servers and embedded systems. The community of developers and users contributes to its development and continuous improvement.

## Useful commands

- `ssh username@machine-IP`: Connect to a machine via SSH.
- `pwd`: Display the current directory.
- `ls`: List the contents of the current directory.
- `ls -l`: Display the contents in list format.
- `ls -al`: Include hidden files.
- `cd`: Change the directory.
- `touch file`: Create an empty file. Example: `touch hello.txt`.
- `cat file`: Display the contents of a file. Example: `cat hello.txt`.
- `mkdir directory`: Create a directory.
- `cp destination file`: Copy a file to a destination.
- `mv destination file`: Move a file to a destination.
- `rm file`: Delete a file.
- `rmdir directory`: Delete an empty directory. Use `rmdir -rf directory` to delete a non-empty directory.
- `whoami`: Displays the current user name.
- `useradd user-name`: Creates a new user.
- `man command`: Displays the manual for a command. Example: `man cat`.
- `wget url`: Downloads a file from a URL.
- `zip name.zip file`: Compresses a file into a ZIP file.
- `unzip name.zip`: Decompresses a ZIP file.
- `less file`: Displays the contents of a file one page at a time. Example: `less hello.txt`.
- `cmp file1 file2`: Compares two files byte by byte.
- `diff file1 file2`: Displays the differences between two files.
- `find directory -name "filename"`: Finds a file in a directory.
- `chown user file`: Changes the owner of a file.