---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Ejercicios típicos de entrevistas.
title: Ejercicios SQL
---

# Ejercicios básicos

#### Get job details for BOTH 'Data Analyst' or 'Business Analyst' positions for 'Data Analyst', I want jobs only > $100k, and for 'Business Analyst', I only want jobs > $70k. Only include jobs located in EITHER 'Boston, MA' and 'Anywhere'.

<details>

<summary>
Solución
</summary>

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
        -- Utilizamos parentesis para encapsular condiciones una dentro de otra
        (job_title_short  = 'Data Analyst' AND salary_year_avg > 100000) OR
        (job_title_short = 'Business Analyst' AND salary_year_avg > 70000)
    )
```

</details>

#### Look for non-senior data analyst or business analyst roles. Get the job title, location, and average yearly salary.

<details>

<summary>
Solución
</summary>

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
    job_title LIKE '%Analyst%'
```

</details>

#### Calculates the current month's total earnings per project. Calcuulate a scenario where the hourly rate increases by $5.

<details>

<summary>
Solución
</summary>

```sql
SELECT
    invoices_fact.project_id AS Project,
    SUM(invoices_fact.hours_spent * invoices_fact.hours_rate) AS Coste_original,
    SUM(invoices_fact.hours_spent * (invoices_fact.hours_rate + 5)) AS Coste_incremento 
FROM
    invoices_fact
GROUP BY
    Project
ORDER BY
    project_id
```

</details>

#### Find the average salary and number of job postings for each skill.

<details>
<summary>
Solución
</summary>

```sql
SELECT
    skills_dim.skills AS skill_name,
    COUNT(job_postings_fact.job_title) AS number_of_job_posting,
    AVG(job_postings_fact.salary_year_avg) AS average_salary_for_skill
FROM
    skills_dim
LEFT JOIN skills_job_dim ON skills_dim.skill_id = skills_job_dim.skill_id
LEFT JOIN job_postings_fact ON skills_job_dim.job_id = job_postings_Fact.job_id
GROUP BY
    skill_name
ORDER BY
    average_salary_for_skill DESC
```

</details>