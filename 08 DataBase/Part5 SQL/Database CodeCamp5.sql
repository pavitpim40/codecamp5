SELECT distinct sname FROM Sailors S WHERE S.sid IN
(SELECT distinct S.sid
FROM sailors S LEFT JOIN reserves R ON S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid 
WHERE B.color = 'red')
AND S.sid IN 
(SELECT distinct S.sid
FROM sailors S LEFT JOIN reserves R ON S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid 
WHERE B.color = 'green');

SELECT *
FROM sailors S LEFT JOIN reserves R ON S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid;

SELECT distinct sid FROM Sailors S WHERE S.sid IN
(SELECT distinct S.sid
FROM sailors S LEFT JOIN reserves R ON S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid 
WHERE B.color = 'red')
AND S.sid NOT IN 
(SELECT distinct S.sid
FROM sailors S LEFT JOIN reserves R ON S.sid = R.sid LEFT JOIN boats B on R.bid = B.bid 
WHERE B.color = 'green');



SELECT count(age) FROM boatrental.sailors;
SELECT  * FROM boatrental.sailors WHERE rating = 10 ;
SELECT sum(age) FROM boatrental.sailors WHERE rating = 10 ;
SELECT avg(age) FROM boatrental.sailors WHERE rating = 10 ;

SELECT * FROM sailors S ;
SELECT * FROM sailors  S1 WHERE S1.age = (SELECT max(S.age) FROM Sailors S);
SELECT S1.sname, S1.age FROM sailors  S1 WHERE S1.age = (SELECT max(S.age) FROM Sailors S);


SELECT * FROM Sailors S WHERE S.age BETWEEN 25 and 35;
SELECT distinct sname, age FROM Sailors S WHERE S.age BETWEEN 25 and 35;
SELECT distinct sname, age FROM Sailors S WHERE S.age NOT BETWEEN 25 and 35;












