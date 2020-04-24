"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const controller_1 = require("./controller");
moment.locale('pt-br');
const operation = process.argv[2];
switch (operation) {
    case 'createAccounts':
        const user = {
            name: process.argv[3],
            age: process.argv[4],
            cpf: process.argv[5],
            balance: 0,
            allExpenses: []
        };
        controller_1.createAccounts(user);
        break;
    case 'getAllAccounts':
        controller_1.getAllAccounts();
        break;
    case 'addBalance':
        const userName = process.argv[3];
        const userCPF = process.argv[4];
        const userBalance = Number(process.argv[5]);
        controller_1.addBalance(userName, userCPF, userBalance);
}
//# sourceMappingURL=index.js.map