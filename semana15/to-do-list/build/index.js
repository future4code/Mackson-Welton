"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
const connection = knex_1.default({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});
const createUser = (name, nickname, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection
        .insert({
        id: `${new Date().getTime()}`,
        name: `${name}`,
        nickname: `${nickname}`,
        email: `${email}`
    })
        .into('TodoListUser');
});
app.put("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        };
        if (user.name.length === 0 || user.nickname.length === 0 || user.email.length === 0) {
            throw new Error('Oooops! Campos não podem ficar em branco.');
        }
        else {
            yield createUser(user.name, user.nickname, user.email);
            res.status(200).send({
                sucess: "Dados gravados com sucesso."
            });
        }
    }
    catch (err) {
        res.status(404).send({
            messager: err.message
        });
    }
}));
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection
        .select("id", "nickname")
        .where({ id: `${id}` })
        .from("TodoListUser");
    return result;
});
app.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            id: req.params.id
        };
        const result = yield getUser(user.id);
        if (result.length === 0) {
            throw new Error('Oooops! Usuário não encontrado.');
        }
        else {
            res.status(200).send(result[0]);
        }
    }
    catch (err) {
        res.status(404).send({
            messager: err.message
        });
    }
}));
const editUser = (id, name, nickname, email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection
        .select("*")
        .from("TodoListUser")
        .where({ id: `${id}` });
    if (`${name}` !== result[0].name) {
        yield connection('TodoListUser')
            .where({ id: `${id}` })
            .update({
            name: `${name}`
        });
    }
    if (`${nickname}` !== result[0].nickname) {
        yield connection('TodoListUser')
            .where({ id: `${id}` })
            .update({
            nickname: `${nickname}`
        });
    }
    if (`${email}` !== result[0].email) {
        yield connection('TodoListUser')
            .where({ id: `${id}` })
            .update({
            email: `${email}`
        });
    }
    return result[0];
});
app.post("/user/edit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            id: req.body.id,
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        };
        if (user.id.length === 0 || user.name.length === 0 || user.nickname.length === 0 || user.email.length === 0) {
            throw new Error('Oooops! Campos não pode ficar em branco.');
        }
        else {
            const result = yield editUser(user.id, user.name, user.nickname, user.email);
            if (result.length === 0) {
                throw new Error('Oooops! Usuário não encontrado.');
            }
            else {
                res.status(200).send(result);
            }
        }
    }
    catch (err) {
        res.status(402).send({
            messager: err.message
        });
    }
}));
const createToDo = (title, description, limitDate, creatorUserId) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection
        .insert({
        id: `${new Date().getTime()}`,
        title: `${title}`,
        description: `${description}`,
        limit_date: `${moment_1.default(`${limitDate}`).format("YYYY-MM-DD")}`,
        creator_user_id: `${creatorUserId}`
    })
        .into('TodoListTask');
});
app.put("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = {
            title: req.body.title,
            description: req.body.description,
            limitDate: req.body.limitDate,
            creatorUserId: req.body.creatorUserId
        };
        if (task.title.length === 0 || task.description.length === 0 || task.limitDate.length === 0 || task.creatorUserId.length === 0) {
            throw new Error('Oooops! Campos não pode ficar em branco.');
        }
        else {
            yield createToDo(task.title, task.description, task.limitDate, task.creatorUserId);
            res.status(200).send({
                sucess: "Dados gravados com sucesso."
            });
        }
    }
    catch (err) {
        res.status(402).send({
            messager: err.message
        });
    }
}));
const getTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection
        .select("*")
        .from('TodoListTask')
        .where({ id: `${id}` });
    return result[0];
});
app.get("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = {
            id: req.params.id
        };
        if (task.id.length === 0) {
            throw new Error('Oooops! Campos não pode ficar em branco.');
        }
        else {
            const result = yield getTask(task.id);
            res.status(200).send(result);
        }
    }
    catch (err) {
        res.status(402).send({
            messager: err.message
        });
    }
}));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection.select("*").from("TodoListUser");
});
app.get("/user/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield getAllUsers();
        if (result.length === 0) {
            res.status(200).send([]);
        }
        else {
            res.status(200).send(result);
        }
    }
    catch (err) {
        res.status(402).send({
            messager: err.message
        });
    }
}));
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
