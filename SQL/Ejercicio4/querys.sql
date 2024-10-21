-- query 1
SELECT COUNT(*) AS total_records
FROM orders;

-- query 2
SELECT DISTINCT custom_name 
FROM customer;

-- query 3
SELECT s.salesman_name
FROM salesman s
JOIN orders o ON s.idsalesman = o.salesman_idsalesman
GROUP BY s.salesman_name
ORDER BY SUM(o.PURCH_AMT) DESC;

-- query 4
SELECT *
FROM customer
ORDER BY idcustomer
LIMIT 5;

-- query 5
SELECT * 
FROM orders
WHERE PURCH_AMT=(SELECT MIN(PURCH_AMT) FROM orders);

-- query 6
SELECT *
FROM orders
ORDER BY PURCH_AMT DESC
LIMIT 1;
