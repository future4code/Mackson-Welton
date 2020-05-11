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
            statements: []
        };
        controller_1.createAccounts(user);
        break;
    case 'getAllAccounts':
        controller_1.getAllAccounts();
        break;
    case 'addBalance':
        controller_1.addBalance(process.argv[3], process.argv[4], Number(process.argv[5]));
        break;
    case 'getBalance':
        controller_1.getBalance(process.argv[3], process.argv[4]);
        break;
    case 'payBill':
        const newStatement = {
            description: process.argv[5],
            amount: Number(process.argv[6]),
            date: process.argv[7],
        };
        controller_1.payBill(process.argv[3], process.argv[4], newStatement);
        break;
    case 'updateBalance':
        controller_1.updateBalance(process.argv[3], process.argv[4]);
        break;
    case 'performTransfer':
        controller_1.performTransfer(process.argv[3], process.argv[4], process.argv[5], process.argv[6], Number(process.argv[7]));
        break;
    default:
        console.log('Este comando não é válido.');
}
//# sourceMappingURL=index.js.map