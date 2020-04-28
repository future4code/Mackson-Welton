"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("./Bank");
const UserAccount_1 = require("./UserAccount");
const JSONFileManager_1 = require("./JSONFileManager");
const operation = process.argv[4];
switch (operation) {
    case 'createAccounts':
        console.log('Fui chamado!');
        const user = new UserAccount_1.UserAccount(0, process.argv[5], process.argv[6], Number(process.argv[7]), []);
        new Bank_1.Bank([user], new JSONFileManager_1.JSONFileManager('users.json')).createAccount();
        break;
    default:
        console.log('está função não existe.');
}
//# sourceMappingURL=index.js.map