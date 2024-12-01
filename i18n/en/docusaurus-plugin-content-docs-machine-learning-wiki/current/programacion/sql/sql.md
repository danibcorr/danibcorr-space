---
sidebar_position: 4
authors:
  - name: Daniel Bazo Correa
description: Gestiona y manipula bases de datos de manera eficiente utilizando SQL.
title: SQL
toc_max_heading_level: 4
---
# References

+ [SQL for Data Analytics - Learn SQL in 4 Hours](https://youtu.be/7mz73uXD9DA?si=hGvaEhnRn0z7ExQI)

# Introduction

**SQL** (Structured Query Language) is a standard programming language for managing and manipulating relational databases. Developed in the 1970s by IBM, SQL allows you to perform queries, update data, delete records, and create and modify database structures. Its syntax is simple and intuitive, making it easy to learn and use. SQL is compatible with database management systems such as MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.

## 1. Basic concepts

### 1.1. Introduction

**SQL** (Structured Query Language) is a language for managing and manipulating databases. Unlike tools like *Excel*, which have a limit of around 1 million rows, SQL databases manage large volumes of data.

Databases are classified into two main types:

- **Relational**: They store structured data in tables with rows and columns. Each table has a unique identifier to relate it to other tables.
- **Non-relational**: Also known as *Non-SQL* (Not Only SQL), they store unstructured data in formats such as graphs, documents, or key-value pairs.

The following table summarizes the advantages and disadvantages of each type of database:

| | Relational data | Non-relational data |
|---|-------------------|----------------------|
| **Pros** | Standardized schema<br/>Large user community<br/>Standardized query language<br/>ACID | Continuous availability<br/>Query speed<br/>Agility<br/>Cost |
| **Cons** | Difficulty of clustering<br/>Data normalization<br/>Schema first<br/>Resource-intensive scaling | No standardized query language<br/>Smaller user community<br/>Developer skills required<br/>Inconsistency in data retrieval |

**Standardized schema** in relational databases refers to all tables having to follow a predefined template, which can be a disadvantage due to the need to create and maintain this template.

The acronym **ACID** stands for *Atomicity*, *Consistency*, *Isolation*, and *Durability*. These properties ensure data integrity and reliability in transactional environments such as ATMs, online banking, cash registers, and e-commerce. The **ACID** properties are:

1. **Atomicity**: A transaction either executes in its entirety or does not occur at all. If one part fails, the transaction is rolled back.
2. **Consistency**: A transaction takes the database from one consistent state to another consistent state. Transactions must comply with the integrity rules of the database.
3. **Isolation**: A running transaction is not visible to other transactions until it is complete, preventing interference.
4. **Durability**: Once committed, a transaction persists even in the face of system failures.

Relational databases face difficulties in scaling because scaling is vertical, i.e. increasing the capacity of the machine. *NewSQL* seeks to combine relational data management with the scalability of *NoSQL* systems.

*NoSQL* databases offer advantages such as cost reduction and scalability through distributed systems, but they lack a standard syntax, which can complicate management.

To interact with a database using SQL, queries are used, which are grouped under the acronym **CRUD**: *Create*, *Read*, *Update* and *Delete*.

Databases can be stored locally or on servers. Servers are divided into two types:

- **On-Prem**: The server is owned by the company.- **Serverless**: The server is in the cloud and is provided by third parties, such as *AWS* or *Azure*.

The **ERD** (Entity Relationship Diagram) is a tool to visualize and understand the relationships between tables in a database.

Tables in a database can be of two types:

- **Fact tables**: They contain primary data for analysis. They measure and store events.
- **Dimension tables**: They describe attributes or dimensions of the data, providing additional context. For example, a fact table can record sales, while a dimension table can detail information about customers, such as location and market segment.

### 1.2. Keywords and structure of SQL queries

SQL queries use various keywords to select, filter, sort, and limit data from a database. Below is a summary of the most important keywords and their use:

- **SELECT**: Specifies the columns to retrieve from the database. Example:
```sql
SELECT 
job_title_short, 
job_location
FROM 
job_posting_fact
```
To select all columns, use the `*` symbol:
```sql
SELECT *
FROM 
job_posting_fact
```

- **FROM**: Indicates the table from which the data is retrieved. Example:
```sql
SELECT 
job_title_short, 
job_location
FROM 
job_posting_fact
```

- **WHERE**: Filters the retrieved rows based on a condition. Example:
```sql
SELECT 
job_title_short, 
job_location, 
job_via, 
salary_year_avg
FROM 
job_posting_fact
WHERE 
job_title_short = 'Machine Learning Engineer'
```

- **ORDER BY**: Sorts the retrieved rows. By default, the order is ascending, but you can use `DESC` for descending order. Example:
  
```sql
SELECT 
job_title_short, 
job_location, 
job_via, 
salary_year_avg
FROM 
job_posting_fact
ORDER BY 
salary_year_avg DESC
```

- **LIMIT**: Limits the number of rows retrieved. Example:
```sql
SELECT 
job_title_short, 
job_location
FROM 
job_posting_fact
LIMIT 5
```

- **SELECT DISTINCT**: Retrieves only unique rows. Example:
```sql
SELECT DISTINCT 
salary_year_avg
FROM 
job_posting_fact
```

The correct order of keywords in a SQL query is:

1. `SELECT`
2. `FROM`
3. `WHERE`
4. `GROUP BY`
5. `HAVING`
6. `ORDER BY`
7. `LIMIT`

Keywords are not case sensitive, although they are usually capitalized by convention. Comments can be added to SQL queries using `--` for single-line comments and `/* */` for multi-line comments. Example:

```sql
-- This is a single-line comment

/*
This is a multi-line comment
*/
```

### 1.3. Operators and Comparators in SQL

In SQL, operators and comparators are used to perform logical operations and comparisons between values. Here are some of the most common ones:

- `AND`: Combines conditions in a `WHERE` clause. All conditions separated by `AND` must be true for the row to be included in the result. Example:
```sql
WHERE
condition1 AND condition2
```

- `OR`: Combines conditions in a `WHERE` clause. At least one of the conditions separated by `OR` must be true for the row to be included in the result. Example:
```sql
WHERE
condition1 OR condition2
```

- `NOT` or `<>`: Negates a condition in a `WHERE` clause. If the condition after `NOT` is false, the row is included in the result. Example:
```sql
WHERE
NOT condition
```

- `BETWEEN`: Selects values ​​within a range. Example:
```sql
WHERE
column BETWEEN value1 AND value2
```- `LIKE`: Searches for a specific pattern in a column using wildcard characters. `%` represents zero, one, or more characters. Example:
```sql
WHERE
column LIKE 'pattern%'
```

- `IN`: Checks whether a value is in a list of specified values. Example:
```sql
WHERE
column IN (value1, value2, value3)
```

- `>`, `<`: Compares whether a value is greater than or less than the specified value. Example:
```sql
WHERE column > value

- `>=`, `<=`: Compares whether a value is greater than or equal to, or less than or equal to, the specified value. Example:
```sql
WHERE
column >= value
```

##### Example

For example, if you wanted to select the jobs 'Data Scientist' or 'Machine Learning Engineer' with an average annual salary between 50000 and 100000, you could combine the `AND`, `OR`, and `BETWEEN` operators to form a complex condition in the `WHERE` clause, resulting in the following query:

```sql
SELECT
job_title_short,
job_location,
job_via,
salary_year_avg
FROM
job_posting_fact
WHERE
(job_title_short = 'Data Scientist' OR job_title_short = 'Machine Learning Engineer') AND
salary_year_avg BETWEEN 50000 AND 100000;
```

### 1.4. Wildcards in SQL

Wildcards are special characters used in SQL to search for patterns in text strings. They are used in combination with the `LIKE` operator in a `WHERE` clause. The most common wildcards in SQL are:

- `%`: This wildcard represents zero, one, or more characters. For example, if you wanted to find all jobs that contain the word 'Analyst' anywhere in the title, you could use the following query:

```sql
WHERE
job_title LIKE '%Analyst%'
```

- `_`: This wildcard represents exactly one character. For example, if you want to find all jobs with a job title that is exactly 10 characters long, you could use the following query:

```sql
WHERE
job_title LIKE '__________'
```

In this case, each underscore `_` represents one character, and since there are 10 underscores, you will find job titles that are exactly 10 characters long.

It is important to note that using wildcards can make queries slower, especially if you use the `%` wildcard at the beginning of a pattern, since then SQL has to search for the pattern in every position of every value in the column. Therefore, it is recommended that you use wildcards carefully and only when necessary.

### 1.5. Aliases

Aliases assign temporary names to columns or tables, making queries easier to read. Example:

```sql
SELECT
job_title_short AS job_title
FROM
job_posting_fact
```

### 1.6. Operations

SQL allows you to perform arithmetic operations such as addition, subtraction, multiplication, division, and modulus. Example:

```sql
SELECT
hours_spent,
hours_rate + 5 AS rate_hike
FROM
job_posting_fact
WHERE
rate_hike * hours_spent > 1000
```

In this case, a new hourly wage (`rate_hike`) is being calculated by adding 5 to the current hourly wage (`hours_rate`). The results are then filtered to show only those where the product of `rate_hike` and `hours_spent` is greater than 1000.

### 1.7. Aggregation in SQL

Aggregation functions calculate a single result from a set of values. Some common functions are:

- `SUM()`: Sums all the values ​​in a column.
- `COUNT()`: Counts the number of rows that match a criterion.
- `AVG()`: Calculates the average of a column.
- `MAX()`: Finds the maximum value in a set.
- `MIN()`: Finds the minimum value in a set.

These functions can be used with the `GROUP BY` and `HAVING` clauses:

- `GROUP BY`: Groups rows that share a property to apply aggregation functions.
- `HAVING`: Filters groups based on the result of an aggregate function.

Usage example:

```sql
SELECT
-- Sum all salariesSUM(job_posting_fact.salary_year_avg) AS salary_sum,

-- Count the number of rows in the database
COUNT(*) AS count_rows,

-- Count the number of different jobs
COUNT(DISTINCT job_posting_fact.job_title_short) AS job_type,

-- Average salary
AVG(job_posting_fact.salary_year_avg) AS average_salary
FROM
job_posting_fact
WHERE
-- Now we can apply all the filters above but
-- only in those cases where the job title contains the
-- Machine Learning term
job_posting_fact.job_title LIKE '%Machine%Learning%'
```

And here is another example that shows how these functions and clauses can be used to get more detailed information about jobs:

```sql
SELECT
-- We stick with the job types
job_posting_fact.job_title_short as Jobs,

-- We get the minimum salary for each position
MIN(job_posting_fact.salary_year_avg) as MIN_SAL_YER,

-- We get the maximum salary for each position
MAX(job_posting_fact.salary_year_avg) as MAX_SAL_YER,

-- We get the average salary for each position
AVG(job_posting_fact.salary_year_avg) as AVG_SAL_YER,

-- We count the number of times a job appears
COUNT(job_posting_fact.job_title_short) as JOB_COUNT
FROM
job_posting_fact
GROUP BY
-- We group the data by the type of job
Jobs
HAVING
-- We filter out those jobs that are not repeated more than 100 times
-- It is very useful in case of calculating the average, there is no large
-- deviations
JOB_COUNT > 100
ORDER BY
-- Sort rows by average annual salary
AVG_SAL_YER
```

### 1.8. NULL values ​​in SQL

`NULL` values ​​in SQL represent the absence of information. We can filter these values ​​by using the `IS NOT NULL` clause in a `WHERE` query. For example:

```sql
WHERE
salary_year_avg IS NOT NULL
```

Another strategy is to replace `NULL` values ​​with a calculated value, such as the average of the non-null values ​​belonging to the same category. For example, if we have a table of job openings where some records have posted salaries and others do not, we could fill the `NULL` values ​​with the average of the salaries in the same job category. This can be done as follows:

```sql
UPDATE employees
SET salary = (
SELECT AVG(salary)
FROM employees AS e2
WHERE e2.job = employees.job
AND e2.salary IS NOT NULL
)
WHERE salary IS NULL;
```

This code will update the `salary` column in the `employees` table, setting the `NULL` values ​​to the average salary for each job type. The subquery calculates the average salary for each job type, excluding the `NULL` values. Note that this command will update the `employees` table instead. If we don't want to modify the original table, you could create a new table or view with the `NULL` values ​​replaced.

### 1.9. Joins in SQL

There are four types of `JOIN`:

- `LEFT JOIN`: Returns all the data from the left table and the matches from the right table.
- `RIGHT JOIN`: Returns all data from the right table and any matches from the left table.
- `INNER JOIN`: Returns only the data that matches in both tables.
- `FULL JOIN`: Returns all data from both tables, whether they match or not.

For example, if two tables contain a common identifier and we want to combine them to obtain the data associated with that identifier, such as the company name, we can do the following:

```sql
SELECT
job_postings_fact.job_id,
company_dim.name as Company
FROM
job_postings_fact
LEFT JOIN company_dim ON job_postings_fact.company_id = company_dim.company_id
```In this case, we are using a `LEFT JOIN` to combine the `job_postings_fact` and `company_dim` tables based on the `company_id` column that is common to both tables. As a result, we will get a table that includes the `job_id` and the company name (`Company`) for each record in `job_postings_fact`. If a `job_id` in `job_postings_fact` does not have a match in `company_dim`, the `Company` value will be `NULL` for that record. 

## 2. Advanced Concepts

### 2.1. Installing PostgreSQL on Linux

To install PostgreSQL on Linux (PopOS in this case), follow these steps:

1. **Installing PostgreSQL**:
You can install PostgreSQL from the official PostgreSQL repository or from your distribution's repositories. On PopOS, which is based on Ubuntu, you can use `apt`. Open a terminal and run the following commands:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

This will install PostgreSQL and some additional utilities.

2. **Graphical User Interface (GUI)**:
Although PostgreSQL does not come with a graphical interface by default, you can install pgAdmin, which is a popular graphical interface for PostgreSQL. You can install pgAdmin from the official repository or by downloading it from their website.

Alternatively, you can use command-line tools like `psql`, or integrate PostgreSQL with text editors like VS Code via extensions.

3. **Firewall Settings**:
PostgreSQL uses port 5432 by default. To allow traffic to this port, make sure that UFW (Uncomplicated Firewall) is configured correctly:

```bash
sudo ufw allow 5432/tcp
sudo ufw status verbose
```

Verify that the port is enabled and that the firewall is working as expected.

4. **Creating a user and a database**:
Once PostgreSQL is installed, you can create a user and a database. First, switch to the `postgres` user and access the `psql` console:

```bash
sudo -i -u postgres
psql
```

In the `psql` console, run the following commands to create a user and a database:

```sql
CREATE USER username WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE database_name OWNER username;
```

Replace `username` and `database_name` with the desired names, and `password` with the desired password.

5. **Installing Extensions in VS Code**:
To work with PostgreSQL in VS Code, install the following extensions:

- **SQLTools**: Provides support for SQL queries and database management.
- **SQLTools PostgreSQL**: A specific plugin for PostgreSQL.

You can find and install these extensions from the extensions tab in VS Code.

6. **User Permissions**:
The created user does not have permissions to create databases by default. To grant permissions, run the following command in `psql`:

```sql
ALTER USER username CREATEDB;
```

This allows the created user to create new databases.

Also, some useful commands in `psql` are:

- **List databases**:
```sql
\l
```

- **List users**:
```sql
\du
```

These commands allow you to view the databases and users available in your PostgreSQL instance. Use these commands to check the status and configuration of your database and users.

### 2.2. Data types in SQL

In SQL, various data types are used to define the columns in a database, ensuring integrity and efficiency in query processing. The most common data types are:

- `INT`: This data type is used to store integers. For example, if you have a table of `employees` and you want to store the `age` of each employee, you can use the `INT` data type.

```sql
CREATE TABLE employees (
id INT,
name VARCHAR(100),
age INT);
```

- `VARCHAR` or `TEXT`: These data types are used to store character strings. `VARCHAR` requires you to specify a maximum length for characters. `TEXT` is used for variable length character strings. For example, you can use `VARCHAR` to store the `name` of employees.

```sql
CREATE TABLE employees (
id INT,
name VARCHAR(100),
age INT
);
```

- `BOOLEAN`: This data type is used to store boolean values, i.e. true or false (1 or 0). For example, if we want to store whether an employee has completed a task, you can use the `BOOLEAN` data type.

```sql
CREATE TABLE tasks (
id INT,
description VARCHAR(255),
completed BOOLEAN
);
```

- `TIMESTAMP`: This data type is used to store dates and times. For example, you can use `TIMESTAMP` to store an employee's `hire_date`.

```sql
CREATE TABLE employees (
id INT,
name VARCHAR(100),
hire_date TIMESTAMP
);
```

- `NUMERIC`: This data type is used to store decimal or exact-precision numbers. For example, you can use `NUMERIC` to store an employee's `salary`.

```sql
CREATE TABLE employees (
id INT,
name VARCHAR(100),
salary NUMERIC(10, 2)
);
```

In the example above, `NUMERIC(10, 2)` means that the salary can have up to 10 digits in total, of which 2 are decimals.

### 2.3. Manipulating tables in SQL

The following statements are used to manipulate tables in SQL:

- `CREATE TABLE`: Creates new tables. For example:

```sql
CREATE TABLE job_applied(
job_id INT,
application_sent_date DATE,
custom_resume BOOLEAN,
resume_file_name VARCHAR(255),
cover_letter_sent BOOLEAN,
cover_letter_file_name VARCHAR(255),
status VARCHAR(50)
);
```
In the code above, `job_applied` is the name of the table and the parameters inside the parentheses are the names of the columns with their respective data types.

- `INSERT INTO`: Adds data to a table. For example:

    ```sql
    INSERT INTO job_applied(
        job_id,
        application_sent_date,
        custom_resume,
        resume_file_name,
        cover_letter_sent,
        cover_letter_file_name,
        status
    )
    VALUES (1,
        '2024-02-01',
        TRUE,
        'CV_01.pdf',
        true,
        'cover_letter_01.pdf',
        'submitted'),
        (2,
        '2024-03-01',
        TRUE,
        'CV_02.pdf',
        true,
        'cover_letter_02.pdf',
        'submitted');
    ```

- `ALTER TABLE`: Modifies the structure of an existing table. For example, we can add a new column to an existing table as follows:

```sql
ALTER TABLE employees
ADD COLUMN email VARCHAR(255);
```

In the above example, a new column called `email` is added to the `employees` table. The data type of the new column is `VARCHAR(255)`.

You can also drop an existing column from a table using the `ALTER TABLE` statement. For example:

```sql
ALTER TABLE employees
DROP COLUMN email;
```

In this case, the `email` column is dropped from the `employees` table.

- `DROP TABLE`: Drops a table and its data. For example, if we want to drop the `employees` table, we can do so as follows:

```sql
DROP TABLE employees;
```

Please note that this operation will delete the table and all data in it, so you should be careful when using it. It is good practice to back up your data before performing operations that may result in data loss.

### 2.4. Updating data in SQLThe `UPDATE` statement in SQL is used to modify existing data in a table. This statement is very useful when you need to change the values ​​of certain rows or columns.

The basic syntax of the `UPDATE` statement is as follows:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

In this syntax:

- `table_name` is the name of the table you want to update.
- `SET` is the clause used to specify the columns to update and the new values ​​you want to assign to those columns. You can update one or more columns at a time.
- `WHERE` is the clause used to specify the rows you want to update. If you omit the `WHERE` clause, all rows in the table will be updated, which may not be desired.

For example, if you have a table called `employees` and you want to increase the salary of all employees who have a salary less than 30000 by 10%, you could do it like this:

```sql
UPDATE employees
SET salary = salary * 1.1
WHERE salary < 30000;
```

In this case, the `WHERE` clause is used to select only the rows where the salary is less than 30000. Then, the `SET` clause is used to increase the salary of those rows by 10%.

It is very important to use the `WHERE` clause when using the `UPDATE` statement, to avoid unwanted changes to the data. It is always good practice to backup the data before performing operations that may modify it.

### 2.5. Handling columns

In SQL, you can perform several operations on columns in a table:

- **Rename columns** using `RENAME COLUMN`. For example:

```sql
ALTER TABLE job_applied
RENAME COLUMN contact TO contact_name;
```

- **Change the type of a column** using `TYPE`. For example:

```sql
ALTER TABLE job_applied
ALTER COLUMN contact_name TYPE TEXT;
```

- **Delete a column** using `DROP COLUMN`. For example:

```sql
ALTER TABLE job_applied
DROP COLUMN contact_name;
```

### 2.6. Loading data into a SQL database

The `COPY` statement is used to import data from a CSV file into a table. The syntax is:

```sql
COPY table_name
FROM csv_file_path
DELIMITER ',' CSV HEADER;
```

Here, `table_name` is the target table, `csv_file_path` is the file location, and `DELIMITER ',' CSV HEADER` indicates the delimiter and that the first row contains the column names.

### 2.7. Functions for dates

SQL offers several functions to operate with dates and times:

- `::DATE`: Converts a date and time value to just a date. Example:

```sql
SELECT date_time::DATE FROM table_name;
```

- `AT TIME ZONE`: Converts a date and time to a specific time zone. Example:

```sql
SELECT NOW() AT TIME ZONE 'UTC';
```

- `EXTRACT`: Gets specific parts of a date. Example to filter dates in January:

```sql
WHERE EXTRACT(MONTH FROM fecha) = 1;
```

In this case, `EXTRACT(MONTH FROM fecha)` returns the month of the date, and the condition `= 1` selects only the dates that correspond to the month of January.

### 2.8. CASE Expressions in SQL

`CASE` expressions in SQL are used to create different results based on different conditions. They are similar to `if-then-else` statements in other programming languages. For example, if you want to rank jobs based on salary, you could use the following query:

```sql
SELECT job_title,
CASE
WHEN salary_year_avg > 100000 THEN 'High'
WHEN salary_year_avg > 50000 THEN 'Medium'
ELSE 'Low'
END AS salary_category
FROM job_posting_fact;
```

In this case, the `CASE` expression ranks jobs as 'High', 'Medium', or 'Low' based on average annual salary.

### 2.9. Subqueries and CTEs in SQLSubqueries and CTEs (*Common Table Expressions*) are advanced SQL techniques that allow you to perform more complex queries. For example, if you wanted to get the average salary for 'Data Scientist' jobs, you could use a subquery like this:

```sql
SELECT AVG(salary_year_avg)
FROM (
SELECT salary_year_avg
FROM job_posting_fact
WHERE job_title = 'Data Scientist'
) AS subquery;
```

In this case, the subquery selects the salaries for 'Data Scientist' jobs, and the main query calculates the average salary.

A CTE is similar to a subquery, but it is defined before the main query and can be referenced multiple times in the query. For example:

```sql
WITH data_scientist_jobs AS (
SELECT *
FROM job_posting_fact
WHERE job_title = 'Data Scientist'
)
SELECT AVG(salary_year_avg)
FROM data_scientist_jobs;
```

In this case, the `data_scientist_jobs` CTE selects 'Data Scientist' jobs, and is then used in the main query to calculate the average salary.

### 2.10. UNION in SQL

The `UNION` operation combines the results of multiple `SELECT` queries. Example to get unique job titles for 'Data Scientist' and 'Machine Learning Engineer':

```sql
SELECT job_title
FROM job_posting_fact
WHERE job_title = 'Data Scientist'
UNION
SELECT job_title
FROM job_posting_fact
WHERE job_title = 'Machine Learning Engineer';
```