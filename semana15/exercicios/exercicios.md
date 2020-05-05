### EXERCÍCIO 1
a)
1. O id é definido como VARCHAR que aceita até 255 caracteres porque está é uma forma de representar uma string e também é definido como chave primária, pois todos itens devem possuir uma chave primária única.
2. O name tamém é definido como VARCHAR que aceita até 255 caracteres e NOT NULL, o que significa que o campo não pode receber um valor nulo.
3. birth_date é definido como DATE por se tratar de uma data e tamém é definido com not null.
4. gender também definido como VARCHAR e NOT NULL, porém aceita apenas 6 caracteres.

b)
1. O comando SHOW DATABASE retorna todos os bancos de dados.
2. O comando SHOW TABLES retorna todos as tabelas.

c)
1. O comando SHOW Actor retorna um erro de sintax.

### EXERCÍCIO 2
b) O erro ocorreu porque a chave primaria deve ser única para cada item de uma tabela.
c) O erro ocorreu porque a quantidade de valores é superior a quantidade de linhas definda apó o nome da tabela.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) O erro ocorreu porque a valor name não possuí um valor.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "João",
  400000,
  "1949-04-18", 
  "male"
);

e) O erro ocorreu porque o valor data deve ser difinido entre aspas.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


### Exercício 3

a) SELECT * FROM Actor WHERE gender = "female"
b) SELECT salary FROM Actor WHERE name = "Tony Ramos"
c) SELECT id, name, salary FROM Actor WHERE salary > 500.000
d) O erro ocorre porque não existe campo com a palavra nome.

### Exercício 4

a) O SELECT * represta que todas as colunas devem se retornadas, FROM Actor o nome da tabela, WHERE lugar onde se deve colocar condicionais, LIKE representa o que o campo deve conter, OR é um operador condicional que retornará o valor caso uma das condições seja verdadeira, AND é um operador condicional que retorna o valor apenas se os dois elementos forem verdadeiros, > sinal que determina que o valor retornado seja maior.

b) SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000

c) SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%")

d) SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%")
  AND salary BETWEEN 350000 AND 900000


### Eexercício 5

a) O tipo TEXT não possuí um limite de caracteres, como o tipo VARCHAR.


### Exercício 6

a) SELECT id, title, rating FROM Movie
WHERE id = "004"

b) SELECT * FROM Movie
WHERE title = "Tropa de Elite"

c) SELECT id, title, synopsis FROM Movie
WHERE rating >= 7

### Exercício 7

a) SELECT * FROM Movie
WHERE title LIKE "%vida%"

b) SELECT * FROM Movie
WHERE title LIKE "%Tropa%" OR synopsis LIKE "%Tropa%"

c) SELECT * FROM Movie
WHERE release_Date < CURDATE()

d) SELECT * FROM Movie
WHERE release_Date < CURDATE() AND (title LIKE "%Tropa%" AND synopsis LIKE "%Tropa%") AND rating > 7
