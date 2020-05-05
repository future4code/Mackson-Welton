### Exercício 1

a) ALTER TABLE Actors DROP COLUMN salary; 
Apaga a coluna salary.

b) ALTER TABLE Actors CHANGE gender sex VARCHAR(6);
Renomeia a coluna gender para sex e altera para o tipo VARCHAR com o até 6 caracteres.

c) ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
Munda o tipo da coluna que passa a aceitar 255 caracteres.

d) ALTER TABLE Actors CHANGE gender gender VARCHAR(100);

### Exercício 2

a) UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1936-10-05"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c) UPDATE Actor
SET name = "Wagner Moura",
salary = 500000,
birth_date = "1990-01-25",
gender = "male"
WHERE id = 005;

d) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = 500;

SELECT * FROM Actor;

### Exercício 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

### Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female"

d) SELECT SUM(salary) FROM Actor;

### Exercício 5

a) Retorna a quantidade de atores de cada genero.

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### Exercício 6

a) ALTER TABLE Movie
ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) 

UPDATE Movie
SET playing_limit_date = "2020-05-10"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2020-04-10"
WHERE id = "002";

d) Após a linha ser deletada não é possível altera-la.

DELETE FROM Movie WHERE id = "001";

UPDATE Movie
SET synopsis = "Um locutor de loja de varejo, dois trambiqueiros e um técnico de informática são obrigados a participar de um golpe: montar uma agência de casamentos para produzir a festa da filha do maior contrabandista da Rua 25 de Março, o temido Vacário."
WHERE id = "001";


### Exercício 7

a) SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b) SELECT AVG(rating) FROM Movie;

c) SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

d) SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();

e) SELECT MAX(rating) FROM Movie;

f) SELECT MIN(rating) FROM Movie;

### Exercício 8

a) SELECT * FROM Movie ORDER BY title;

b) SELECT * FROM Movie ORDER BY title LIMIT 5;

c) SELECT * FROM Movie  WHERE release_date < CURDATE()  ORDER BY release_date DESC LIMIT 3;

d) SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;