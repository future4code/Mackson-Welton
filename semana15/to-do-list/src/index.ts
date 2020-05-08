import express, { Request, Response } from "express";
import moment from 'moment';
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const createUser = async (name: string, nickname: string, email: string): Promise<void> => {
  await connection
    .insert({
      id: `${new Date().getTime()}`,
      name: `${name}`,
      nickname: `${nickname}`,
      email: `${email}`
    })
    .into('TodoListUser')
}

app.put("/user", async (req: Request, res: Response) => {
  try {
    const user = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email
    }

    if (user.name.length === 0 || user.nickname.length === 0 || user.email.length === 0) {
      throw new Error('Oooops! Campos não podem ficar em branco.');
    } else {
      await createUser(user.name, user.nickname, user.email);
      res.status(200).send({
        sucess: "Dados gravados com sucesso."
      });
    }
  } catch (err) {
    res.status(404).send({
      messager: err.message
    })
  }
})

const getUser = async (id: string): Promise<any> => {
  const result = await connection
    .select("id", "nickname")
    .where({ id: `${id}` })
    .from("TodoListUser");

  return result;
}

app.get("/user/:id", async (req: Request, res: Response) => {
  try {

    const user = {
      id: req.params.id
    }

    const result = await getUser(user.id);

    if (result.length === 0) {
      throw new Error('Oooops! Usuário não encontrado.');
    } else {
      res.status(200).send(result[0])
    }
  } catch (err) {
    res.status(404).send({
      messager: err.message
    })
  }
})


const editUser = async (id: string, name: string, nickname: string, email: string): Promise<any> => {

  const result = await connection
    .select("*")
    .from("TodoListUser")
    .where({ id: `${id}` });

  if (`${name}` !== result[0].name) {
    await connection('TodoListUser')
      .where({ id: `${id}` })
      .update({
        name: `${name}`
      })
  }

  if (`${nickname}` !== result[0].nickname) {
    await connection('TodoListUser')
      .where({ id: `${id}` })
      .update({
        nickname: `${nickname}`
      })
  }

  if (`${email}` !== result[0].email) {
    await connection('TodoListUser')
      .where({ id: `${id}` })
      .update({
        email: `${email}`
      })
  }

  return result[0];
}


app.post("/user/edit", async (req: Request, res: Response) => {
  try {
    const user = {
      id: req.body.id,
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email
    }

    if (user.id.length === 0 || user.name.length === 0 || user.nickname.length === 0 || user.email.length === 0) {
      throw new Error('Oooops! Campos não pode ficar em branco.');
    } else {
      const result = await editUser(user.id, user.name, user.nickname, user.email);

      if (result.length === 0) {
        throw new Error('Oooops! Usuário não encontrado.');
      } else {
        res.status(200).send(result)
      }
    }
  } catch (err) {
    res.status(402).send({
      messager: err.message
    })
  }
})

const createToDo = async (title: string, description: string, limitDate: string, creatorUserId: string): Promise<void> => {
  await connection
  .insert({
    id: `${new Date().getTime()}`,
    title: `${title}`,
    description: `${description}`,
    limit_date: `${moment(`${limitDate}`).format("YYYY-MM-DD")}`,
    creator_user_id: `${creatorUserId}`
  })
  .into('TodoListTask')
}

app.put("/task", async (req: Request, res: Response) => {
  try {
    const task = {
      title: req.body.title,
      description: req.body.description,
      limitDate: req.body.limitDate,
      creatorUserId: req.body.creatorUserId
    }
  
    if (task.title.length === 0 || task.description.length === 0 || task.limitDate.length === 0 || task.creatorUserId.length === 0) {
      throw new Error('Oooops! Campos não pode ficar em branco.');
    } else {
      await createToDo(task.title, task.description, task.limitDate, task.creatorUserId);
      res.status(200).send({
        sucess: "Dados gravados com sucesso."
      })
    }
  } catch (err) {
    res.status(402).send({
      messager: err.message
    })
  }

})


const getTask = async (id: string): Promise<any> => {
  const result = await connection
  .select("*")
  .from('TodoListTask')
  .where({id: `${id}`});

  return result[0];
}


app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const task = {
      id: req.params.id
    }

    if (task.id.length === 0) {
      throw new Error('Oooops! Campos não pode ficar em branco.');
    } else {
      const result = await getTask(task.id);

      res.status(200).send(result)
    }

  } catch (err) {
    res.status(402).send({
      messager: err.message
    })
  }
})

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});