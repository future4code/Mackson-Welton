"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(accounts, filManager) {
        this.accounts = accounts;
        this.fileManager = filManager;
    }
    createAccount() {
        let allAccounts = Object.values(this.getAllAccounts());
        console.log(allAccounts.map((item) => item.cpf));
    }
    getAllAccounts() {
        this.fileManager.fileName = 'users.json';
        const file = this.fileManager.getObjectFromFIle();
        return file;
    }
    getAccountByCpf() {
    }
    saveAccounts() {
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map