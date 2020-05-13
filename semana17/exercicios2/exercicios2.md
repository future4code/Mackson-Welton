### Exercício 1

a) O salt é a função resposável por gerar o hash e o round é a quantidade de rodadas para gerar o hash.
O round é definido para tornar a criação do hash mais lenta para evitar ataques "rainbow table".

b, c)

import * as bcrypt from "bcryptjs";

export class HashManager {
  public async hash(s: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

  public async compare(s: string, hash: string): Promise<boolean> {
    return bcrypt.compare(s, hash);
  }
}

### Exercício 2
a) O cadastro, pois ele vai gerar a senha com o hash para cadastrar no banco de dados e que posteriormente será utilizado para comparar com o hash gerado no momento do login.

b) 
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }

    if (userData.password.length < 6 || userData.email.length === 0 && !userData.email.includes("@")) {
      throw new Error('Oooops! E-mail ou senha são invalidos.');
    } else {

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password);

      const idGenerator: any = new IdGenerator();
      const id: string = idGenerator.generate();

      const userDatabase: any = new UserDatabase();
      await userDatabase.createUser(id, userData.email, hashPassword);

      const authenticator = new Authenticator()
      const token = authenticator.generateToken({
        id,
      });

      res.status(200).send({ token });
    }
  } catch (err) {
    res.status(402).send({
      messager: err.message
    })
  }
})

c)
app.post("/login", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }

    if (userData.password.length < 6 || userData.email.length === 0 && !userData.email.includes("@")) {
      throw new Error('Oooops! E-mail ou senha são invalidos.');
    }

    const userDatabase: any = new UserDatabase();
    const user = await userDatabase.getUserEmail(userData.email);

    const hashManager = new HashManager();
    const comapreResult = await hashManager.compare(
      userData.password,
      user.password
    );
    
    if (!comapreResult) {
      throw new Error('Oooops! Senha incorreta.');
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({ token });


  } catch (err) {
    res.status(402).send({
      message: err.message
    });
  }
})

d) Não é necessário modificar a função só por que há criptografia, mas apenas se houver usuários que necessitam de determinados privilégios.

### Exercício 3

a) 

b) export class Authenticator {
  private static EXPIRES_IN = process.env.EXPIRES_IN;
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
  role: string;
}

c) app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    }

    if (userData.password.length < 6 || userData.email.length === 0 && !userData.email.includes("@")) {
      throw new Error('Oooops! E-mail ou senha são invalidos.');
    } else {

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password);

      const idGenerator: any = new IdGenerator();
      const id: string = idGenerator.generate();

      const userDatabase: any = new UserDatabase();
      await userDatabase.createUser(id, userData.email, hashPassword, userData.role);

      const authenticator = new Authenticator()
      const token = authenticator.generateToken({
        id,
        role: userData.role
      });

      res.status(200).send({ token });
    }
  } catch (err) {
    res.status(402).send({
      messager: err.message
    })
  }
})

d) app.post("/login", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }

    if (userData.password.length < 6 || userData.email.length === 0 && !userData.email.includes("@")) {
      throw new Error('Oooops! E-mail ou senha são invalidos.');
    }

    const userDatabase: any = new UserDatabase();
    const user = await userDatabase.getUserEmail(userData.email);

    const hashManager = new HashManager();
    const comapreResult = await hashManager.compare(
      userData.password,
      user.password
    );
    
    if (!comapreResult) {
      throw new Error('Oooops! Senha incorreta.');
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role
    });

    res.status(200).send({ token });


  } catch (err) {
    res.status(402).send({
      message: err.message
    });
  }
})


### Exercício 4

a) 
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Você não tem autorização para acessar este recurso.");
    }

    const userDb = new UserDatabase();
    const user = await userDb.getUserId(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role
    });
  } catch (err) {
    res.status(402).send({
      message: err.message
    });
  }
});


### Exercício 5

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "admin") {
      throw new Error("Você não tem autorização para acessar este recurso.");
    }

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    await userDatabase.deleteUser(id);

  } catch (err) {
    res.status(402).send({
      message: err.message
    })
  }
})

  public async deleteUser(id: string): Promise<void> {
    await this.connection
      .delete()
      .from(UserDatabase.TABLE_NAME)
      .where({ id })
  }

  ### Exercício 6

  app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    authenticator.getData(token);

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserId(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(402).send({
      message: err.message,
    });
  }

})

### Exercício 7

a) 

import knex from "knex";

export abstract class BaseDatabase {
  private static connection: knex | null = null;

  protected getConnection(): knex {
    if (BaseDatabase.connection === null) {
      BaseDatabase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE_NAME,
        },
      });
    }
    return BaseDatabase.connection;
  }

  public static async destroyConnection(): Promise<void> {
    if (BaseDatabase.connection) {
      await BaseDatabase.connection.destroy();
      BaseDatabase.connection = null;
    }
  }
}

import knex from "knex";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
        role
      })
		.into(UserDatabase.TABLE_NAME);
  }

  public async getUserEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return result[0];
  }

  public async getUserId(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deleteUser(id: string): Promise<void> {
    await this.getConnection()
      .delete()
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
  }
}

b)

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    }

    if (userData.password.length < 6 || userData.email.length === 0 && !userData.email.includes("@")) {
      throw new Error('Oooops! E-mail ou senha são invalidos.');
    } else {

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password);

      const idGenerator: any = new IdGenerator();
      const id: string = idGenerator.generate();

      const userDatabase: any = new UserDatabase();
      await userDatabase.createUser(id, userData.email, hashPassword, userData.role);

      const authenticator = new Authenticator()
      const token = authenticator.generateToken({
        id,
        role: userData.role
      });

      res.status(200).send({ token });
    }
  } catch (err) {
    res.status(402).send({
      messager: err.message
    })
  }
  await BaseDatabase.destroyConnection();
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }

    if (userData.password.length < 6 || userData.email.length === 0 && !userData.email.includes("@")) {
      throw new Error('Oooops! E-mail ou senha são invalidos.');
    }

    const userDatabase: any = new UserDatabase();
    const user = await userDatabase.getUserEmail(userData.email);

    const hashManager = new HashManager();
    const comapreResult = await hashManager.compare(
      userData.password,
      user.password
    );
    
    if (!comapreResult) {
      throw new Error('Oooops! Senha incorreta.');
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role
    });

    res.status(200).send({ token });


  } catch (err) {
    res.status(402).send({
      message: err.message
    });
  }
  await BaseDatabase.destroyConnection();
})

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "admin") {
      throw new Error("Você não tem autorização para acessar este recurso.");
    }

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    await userDatabase.deleteUser(id);

  } catch (err) {
    res.status(402).send({
      message: err.message
    })
  }
  await BaseDatabase.destroyConnection();
})

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    authenticator.getData(token);

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserId(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(402).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
})