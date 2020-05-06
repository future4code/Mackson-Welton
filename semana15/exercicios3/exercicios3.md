### Exercício 1

a) Apenas um objeto é retornado.

b) const getNameActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}

c) const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};

### Exercício 2

a) const updateSalaryActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

b) const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor")
    .del()
    .where("id", id);
};

c) const averageSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};


### Exercícios 3

a) Para que ele pegue o id da url
b) Retorna status 200 se a requisição for um sucesso e 400 se ocorreu um erro
c) 

const countGenderActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;

}


app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countGenderActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


### Exercício 4

a) 
const updateSalary = async (id: string, salary: Number): Promise<any> => {
  const result = await connection.raw(`
    UPDATE Actor
    SET salary = ${salary}
    WHERE id = ${id}
  `);
  const count = result[0][0].coun;
  return count;

}


app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
 
b) 
const deleteActor = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  DELET FROM Actor WHERE id = ${id};
`);
}

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


### Exercício 5

const newMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  playingLimitDate: Date
) => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      releas_date: releaseDate,
      playing_limit_date: playingLimitDate,
    })
    .into("Movie");
};

const createMovie = async (id: string, title: string, synopsis: string, releaseDate: Date, playingLimitDate: Date): Promise<any> => {
  const result = await connection.raw(`
  INSERT INTO Actor (id, title, synopsis, release_Date, playing_limit_date)
  VALUES (${id}, ${title}, ${synopsis}, ${releaseDate}, ${playingLimitDate})
`);
}

app.post("/movie/:id", async (req: Request, res: Response) => {
  try {
    await newMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate,
      req.body.playingLimitDate
    );

    res.status(200).send({
      message: "Success"
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


### Exercícios 6

const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);

  return result[0];
};

app.post("/movie/:id", async (req: Request, res: Response) => {
  try {
    const allMovies = await getAllMovies();

    res.status(200).send({
      allMovies: allMovies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

### Exercício 7

const searchMovies = async (text: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Movie WHERE name LIKE '%${text}%' OR synopsis LIKE '%${text}%' `);

    return result[0];
}

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovies(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});