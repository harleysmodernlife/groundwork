## Introduction to SQL

SQL (Structured Query Language) is the language used to interact with relational databases. Spreadsheets are for hundreds or thousands of rows. Databases are for millions. SQL is how you ask questions of that data.

Even if you're not a developer, SQL is one of the most valuable skills in business analysis, data work, and operations. Understanding SQL means you can get answers from data without waiting for someone else to write a report.

---

## What a Relational Database Is

A relational database stores data in tables — rows and columns, like spreadsheets. Unlike spreadsheets, databases:

- Can store millions or billions of rows efficiently
- Enforce data types and rules (a "date" column always contains dates)
- Allow multiple tables to be related and queried together
- Support multiple users simultaneously
- Maintain consistency even when things go wrong

**Tables:** Each table represents one type of thing — customers, orders, products, employees. Each row is one record. Each column is one attribute.

**Relationships:** Tables link to each other. An orders table has a `customer_id` column; the customers table has an `id` column. You can join them to answer "which customers ordered what?"

Popular databases: PostgreSQL, MySQL, SQLite, SQL Server, Oracle. The SQL syntax is mostly the same across all of them with minor variations.

---

## The SELECT Statement

SELECT retrieves data from a table.

```sql
SELECT * FROM customers;
```

`*` means "all columns." `FROM customers` specifies the table. This returns every row and every column.

```sql
SELECT name, email, city FROM customers;
```

Returns only the name, email, and city columns.

---

## Filtering with WHERE

```sql
SELECT * FROM customers
WHERE city = 'Chicago';
```

Returns only rows where city is "Chicago."

**Comparison operators:**
```sql
WHERE age >= 18
WHERE salary > 50000
WHERE status != 'inactive'
WHERE order_date < '2024-01-01'
```

**Multiple conditions:**
```sql
WHERE city = 'Chicago' AND age >= 18
WHERE city = 'Chicago' OR city = 'Denver'
WHERE NOT status = 'inactive'
```

**Pattern matching with LIKE:**
```sql
WHERE email LIKE '%@gmail.com'     -- ends with @gmail.com
WHERE name LIKE 'A%'               -- starts with A
WHERE name LIKE '%son%'            -- contains "son"
```

`%` is a wildcard — matches any sequence of characters.

**Checking for NULL:**
```sql
WHERE phone IS NULL         -- has no phone number
WHERE email IS NOT NULL     -- has an email address
```

**IN operator:**
```sql
WHERE city IN ('Chicago', 'Denver', 'Austin')
```

**BETWEEN:**
```sql
WHERE salary BETWEEN 50000 AND 100000
```

---

## Sorting with ORDER BY

```sql
SELECT * FROM customers
ORDER BY last_name;             -- ascending (A to Z)

SELECT * FROM customers
ORDER BY salary DESC;           -- descending (highest first)

SELECT * FROM orders
ORDER BY order_date DESC, total_amount DESC;  -- multiple sort keys
```

---

## Limiting Results

```sql
SELECT * FROM customers
ORDER BY created_at DESC
LIMIT 10;                       -- return only the first 10 rows
```

Good for testing — check the first few rows of a large result before processing everything.

---

## Aggregate Functions

Summarize data across multiple rows:

```sql
SELECT COUNT(*) FROM orders;
SELECT SUM(amount) FROM orders WHERE status = 'completed';
SELECT AVG(salary) FROM employees;
SELECT MIN(price), MAX(price) FROM products;
```

---

## GROUP BY

Aggregate by category — the SQL version of a pivot table.

```sql
SELECT city, COUNT(*) as customer_count
FROM customers
GROUP BY city
ORDER BY customer_count DESC;
```

Returns the count of customers in each city.

```sql
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;
```

**HAVING** — filter groups (like WHERE, but applied after grouping):
```sql
SELECT city, COUNT(*) as customer_count
FROM customers
GROUP BY city
HAVING COUNT(*) > 100     -- only cities with more than 100 customers
ORDER BY customer_count DESC;
```

---

## JOINs

Combine data from multiple tables.

```sql
SELECT orders.id, customers.name, orders.total_amount
FROM orders
JOIN customers ON orders.customer_id = customers.id;
```

`JOIN` (or `INNER JOIN`) returns only rows that have a match in both tables.

**LEFT JOIN:** Returns all rows from the left table, with matching data from the right (or NULL if no match):
```sql
SELECT customers.name, orders.total_amount
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;
```

Returns all customers, including those who have never ordered (their order columns will be NULL).

---

## Aliasing

Give tables and columns shorter names or clearer labels:

```sql
SELECT c.name, o.total_amount, o.created_at
FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE c.city = 'Chicago';
```

`o` and `c` are table aliases — shorter than writing the full table name every time.

```sql
SELECT COUNT(*) AS total_customers FROM customers;
```

`AS` renames the column in the results.

---

## A Practical Query

"Show me the top 10 customers by total spending in 2024, with their email addresses":

```sql
SELECT
    c.name,
    c.email,
    SUM(o.amount) AS total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.created_at >= '2024-01-01'
  AND o.created_at < '2025-01-01'
  AND o.status = 'completed'
GROUP BY c.id, c.name, c.email
ORDER BY total_spent DESC
LIMIT 10;
```

This query joins two tables, filters by date range and status, groups by customer, sums their spending, and returns the top 10.

---

## Practicing SQL

**SQLite** is a file-based database that requires no setup — good for learning.

**Online tools:** DB Fiddle, SQLite Online, Mode Analytics — run SQL in your browser.

**Real datasets:** Download public datasets (from data.gov, Kaggle, etc.) and import them. Practice answering real questions.

The best way to learn SQL is to have a question and figure out how to answer it. The syntax is learnable; the skill is knowing how to express questions as queries.
