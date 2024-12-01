---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Ejercicios típicos de entrevistas de trabajo.
title: Ejercicios SQL
toc_max_heading_level: 4
---
# Basic SQL exercises

## Example table

### job_posting_fact

| job_id | job_title_short | job_title | salary_year_avg | job_location |
|--------|---------|-------------------- ------|-----------------|--------------|
| 1 | Data Analyst | Junior Data Analyst | 95000 | Boston, MA |
| 2 | Business Analyst | Senior Business Analyst | 120000 | Anywhere |
| 3 | Data Analyst | Data Analyst | 105000 | Boston, MA |
| 4 | Business Analyst | Business Analyst | 75000 | Anywhere |

### invoices_fact

| invoice_id | project_id | hours_spent | hours_rate |
|---------|------------|-------------|--------- ---|
| 101 | 1 | 10 | 50 |
| 102 | 2 | 20 | 60 |
| 103 | 1 | 15 | 55 |
| 104 | 3 | 25 | 65 |

### skills_dim

| skill_id | skills |
|---------|--- -------------|
| 1 | SQL |
| 2 | Data Analysis |
| 3 | Business Analysis |

### skills_job_dim

| skill_id | job_id |
|--------- -|--------|
| 1 | 1 |
| 2 | 1 |
| 2 | 3 |
| 3 | 2 |
| 3 | 4 |

## Exercise 1: Get job details for 'Data Analyst' or 'Business Analyst'

### Statement
Get job details for 'Data Analyst' or 'Business Analyst' positions. For 'Data Analyst', I only want jobs with salary > \$100k, and for 'Business Analyst', I only want jobs with salary > \$70k. Include only jobs located in 'Boston, MA' or 'Anywhere'.

<details>
<summary>Solution</summary>

```sql
SELECT
    job_posting_fact.job_title_short,
    job_posting_fact.salary_year_avg,
    job_posting_fact.job_location
FROM
    job_posting_fact
WHERE
    job_location IN ('Boston, MA', 'Anywhere') AND
    (
        (job_title_short = 'Data Analyst' AND salary_year_avg > 100000) OR
        (job_title_short = 'Business Analyst' AND salary_year_avg > 70000)
    );
```

</details>

## Exercise 2: Search for non-senior analyst roles

### Statement
Look for non-senior 'Data Analyst' or 'Business Analyst' roles. Get the job title, location, and average annual salary.

<details>
<summary>Solution</summary>

```sql
SELECT
    job_posting_fact.job_title,
    job_posting_fact.job_location,
    job_posting_fact.salary_year_avg 
FROM
    job_posting_fact
WHERE
    job_title NOT LIKE '%Senior%' AND
    (job_title LIKE '%Data%' OR job_title LIKE '%Business%') AND
    job_title LIKE '%Analyst%';
```

</details>

## Exercise 3: Calculate total earnings for the current month by project

### Statement
Calculate the total earnings for the current month by project. Calculate a scenario where the hourly rate increases by \$5.

<details>
<summary>Solution</summary>

```sql
SELECT
invoices_fact.project_id AS Project,
SUM(invoices_fact.hours_spent * invoices_fact.hours_rate) AS Original_cost,
SUM(invoices_fact.hours_spent * (invoices_fact.hours_rate + 5)) AS Cost_increment 
FROM
invoices_fact GROUP BY
Project
ORDER BY
project_id;
```

</details>

## Exercise 4: Find the average salary and the number of job openings by skill

### Statement
Find the average salary and the number of job openings for each skill.

<details>
<summary>Solution</summary>

```sql
SELECT
    skills_dim.skills AS skill_name,
    COUNT(job_postings_fact.job_title) AS number_of_job_posting,
    AVG(job_postings_fact.salary_year_avg) AS average_salary_for_skill
FROM
    skills_dim
LEFT JOIN skills_job_dim ON skills_dim.skill_id = skills_job_dim.skill_id
LEFT JOIN job_postings_fact ON skills_job_dim.job_id = job_postings_fact.job_id
GROUP BY
    skill_name
ORDER BY
    average_salary_for_skill DESC;
```

</details>