SELECT * FROM branch B LEFT JOIN account A ON B.branch_name = A.branch_name WHERE branch_city  = 'Riverside';
SELECT A.account_number FROM branch B LEFT JOIN account A ON B.branch_name = A.branch_name WHERE branch_city  = 'Riverside';
SELECT account_number FROM account A WHERE branch_name IN (SELECT branch_name FROM branch B WHERE branch_city = 'riverside');

SELECT * FROM account where branch_name = 'A' OR branch_name = 'B';
SELECT account_number FROM account where branch_name = 'A' OR branch_name = 'B';
SELECT account_number FROM account where branch_name IN  ('A','B') ;


SELECT customer_name,sum(balance)
FROM  depositor D LEFT JOIN account A 
ON   D.account_number = A.account_number
GROUP BY D.customer_name;

SELECT customer_name,sum(balance)
FROM  depositor D LEFT JOIN account A 
ON   D.account_number = A.account_number
GROUP BY D.customer_name HAVING count(*) > 1;

SELECT customer_name,sum(balance)
FROM  depositor D LEFT JOIN account A 
ON   D.account_number = A.account_number
GROUP BY D.customer_name HAVING count(*) > 1 order by sum(balance) DESC;