### Exercício 1

a) Uma chave estrageira é uma chave que aponta para uma chave primaria de outra tabela para estabelecer uma relação entre as mesmas.

b) CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

INSERT INTO Rating (id, comment, movie_id)
VALUES("001", "É um dos melhores filmes que já assisti.", "002");

c) Não é possível adicionar ou atualizar uma linha, pois há uma restrição de chave estrangeira.

d) ALTER TABLE Movie
DROP COLUMN rating;

e) Não é possível adicionar ou atualizar uma linha, pois há uma restrição de chave estrangeira.


### Exercício 2

a) A tabela armazena as chaves estrangeiras da relação de atores com os filmes.

b) INSERT INTO MovieCast (movie_id, actor_id)
VALUES("002", "002");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("003", "002");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("004", "002");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("002", "003");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("002", "004");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("002", "005");

c) Não é possível adicionar ou atualizar uma linha, pois há uma restrição de chave estrangeira.

d) Não é possível excluir ou atualizar uma linha, pois há uma restrição de chave estrangeira.

### Exercício 3

a) O operador ON é um operador condicional.

b) SELECT m.title as movie_title, m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

### Exercício 4

a) SELECT m.title as movie_title, m.id as movie_id, r.rate as rating, r.comment as comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;

b) SELECT m.title as movie_title, m.id as movie_id, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON m.id = mc.actor_id;

c) SELECT m.title, AVG(r.rate)  FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY m.title;

### Exercício 5

a) As tabelas movie e actor não possuem uma relação direta e é por isso que usamos o Join.

b) SELECT m.id as movie_id, m.title as movie_title, a.id as actor_id, a.name as actor_name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

e) Error Code: 1054. Unknown column 'm' in 'field list'
Há um erro de sintax "m,title" sendo que o correto é m.title

d) SELECT m.title as movie_title, a.name as actor_name, r.rate as rating FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
LEFT JOIN Actor a ON a.id = mc.actor_id
LEFT JOIN Rating r ON m.id = r.movie_id;

### Exercício 6

a) É uma relação M:N, pois um filme pode receber vários oscars e um oscar pode ser dado a filmes diferentes.

b) CREATE TABLE Oscar (
id VARCHAR(255) PRIMARY KEY NOT NULL,
title VARCHAR(255) NOT NULL,
movie_id VARCHAR(255) NOT NULL,
date_winner Date NOT NULL,
FOREIGN KEY (movie_id) REFERENCES Movie(id)
);


c)

INSERT INTO Oscar (id, title, movie_id, date_winner)
VALUES("001", "Óscar de melhor filme", "004", "2008-01-02");

INSERT INTO Oscar (id, title, movie_id, date_winner)
VALUES("002", "Óscar de melhor filme", "004", "2008-01-02");

INSERT INTO Oscar (id, title, movie_id, date_winner)
VALUES("003", "Óscar de melhor direção", "003", "2014-03-02");

INSERT INTO Oscar (id, title, movie_id, date_winner)
VALUES("004", "Óscar de melhor filme", "003", "2014-03-02");


INSERT INTO Oscar (id, title, movie_id, date_winner)
VALUES("005", "Óscar de melhor filme", "002", "2018-02-12");

INSERT INTO Oscar (id, title, movie_id, date_winner)
VALUES("006", "Óscar de melhor direção", "002", "2018-02-12");

d) SELECT m.id as movie_id, m.title, o.title as oscar FROM Movie m
LEFT JOIN Oscar o ON m.id = o.movie_id;
