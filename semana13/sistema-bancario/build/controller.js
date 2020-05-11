"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment = require("moment");
function createAccounts(newUser) {
    const date1 = moment(newUser.age, 'DD/MM/YYYY');
    const date2 = moment(moment(), 'DD/MM/YYYY');
    const date = date2.diff(date1, 'year');
    const cpf = getAllAccounts().map(item => item.cpf);
    if (date > 18 && cpf.indexOf(newUser.cpf) === -1) {
        let accounts = getAllAccounts();
        accounts.push(newUser);
        try {
            fs_1.writeFileSync('users.json', JSON.stringify(accounts, null, '\t'));
            console.log('Novo usuário cadastrado com sucesso!');
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        console.log('Este usuário não pode ser cadastrado');
    }
}
exports.createAccounts = createAccounts;
function getAllAccounts() {
    try {
        return JSON.parse(fs_1.readFileSync('users.json', 'utf-8'));
    }
    catch (err) {
        console.error(err);
    }
}
exports.getAllAccounts = getAllAccounts;
function addBalance(userName, userCPF, userBalance) {
    const userValidation = getAllAccounts().filter(item => item.name === userName && item.cpf === userCPF);
    if (userValidation.length > 0) {
        const newBalance = getAllAccounts().map((item) => {
            if (item.cpf === userCPF) {
                return Object.assign(Object.assign({}, item), { balance: item.balance + userBalance });
            }
            else {
                return item;
            }
        });
        try {
            fs_1.writeFileSync('users.json', JSON.stringify(newBalance, null, '\t'));
            console.log('Saldo atualizado com sucesso!');
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        console.error('Usuário não encontrado');
    }
}
exports.addBalance = addBalance;
function getBalance(userName, userCPF) {
    const userValidation = getAllAccounts().filter(item => item.name === userName && item.cpf === userCPF);
    if (userValidation.length > 0) {
        getAllAccounts().map(item => {
            if (item.cpf === userCPF)
                console.log(item.balance);
        });
    }
    else {
        console.error('Usuário não encontrado');
    }
}
exports.getBalance = getBalance;
function payBill(userName, userCPF, userData) {
    const payDay = moment(userData.date, 'DD/MM/YYYY');
    const currentDate = moment(moment(), 'DD/MM/YYYY');
    const userValidation = getAllAccounts().filter(item => item.name === userName && item.cpf === userCPF);
    userData.date = userData.date ? userData.date : moment().format('DD/MM/YYYY');
    if (userValidation.length > 0 && payDay.diff(currentDate, 'days') >= 0 && userValidation[0].balance > userData.amount) {
        const newStatement = getAllAccounts().map((item) => {
            if (item.cpf === userCPF) {
                userData.amount = -userData.amount;
                item.statements.push(userData);
                return item;
            }
            else {
                return item;
            }
        });
        try {
            fs_1.writeFileSync('users.json', JSON.stringify(newStatement, null, '\t'));
            console.log('Extrato atualizado!');
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        console.error('Não foi pssível inserir novas informações.');
    }
}
exports.payBill = payBill;
function updateBalance(userName, userCPF) {
    const userValidation = getAllAccounts().filter(item => item.name === userName && item.cpf === userCPF);
    const currentDate = moment(moment(), 'DD/MM/YYYY');
    if (userValidation.length > 0) {
        let statements = [];
        getAllAccounts().map((item, i) => {
            if (item.name === userName && item.cpf === userCPF) {
                statements = item.statements;
            }
        });
        const amounts = [];
        statements.map(item => {
            if (moment(item.date, 'DD/MM/YYYY').diff(currentDate, 'days') <= 0) {
                amounts.push(item.amount);
            }
        });
        const newBalance = getAllAccounts().map((item) => {
            if (item.name === userName && item.cpf === userCPF) {
                return Object.assign(Object.assign({}, item), { balance: item.balance + amounts.reduce((sum, item) => sum += item, 0) });
            }
            else {
                return item;
            }
        });
        console.log(newBalance);
        try {
            fs_1.writeFileSync('users.json', JSON.stringify(newBalance, null, '\t'));
            console.log('Saldo atualizado com sucesso!');
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        console.error('Usuário não encontrado');
    }
}
exports.updateBalance = updateBalance;
function performTransfer(userName1, userCPF1, userName2, userCPF2, amount) {
    const statement = {
        description: 'Transferência entre contas internas.',
        amount: amount,
        date: moment().format('DD/MM/YYYY')
    };
    let newTransfer = [];
    if (getAllAccounts().filter(item => item.name === userName1 && item.cpf === userCPF1).length > 0) {
        newTransfer = getAllAccounts().map(item => {
            if (item.cpf === userCPF1) {
                item.statements.push(Object.assign(Object.assign({}, statement), { amount: -amount }));
                return item;
            }
            else {
                return item;
            }
        });
    }
    else {
        console.error('Nome de usuário ou cpf do remetente estão incorretos.');
    }
    if (getAllAccounts().filter(item => item.name === userName2 && item.cpf === userCPF2).length > 0) {
        newTransfer = newTransfer.map(item => {
            if (item.cpf === userCPF2) {
                item.statements.push(statement);
                return item;
            }
            else {
                return item;
            }
        });
    }
    else {
        console.error('Nome de usuário ou cpf  do destinatário estão incorretos.');
    }
    try {
        fs_1.writeFileSync('users.json', JSON.stringify(newTransfer, null, '\t'));
        console.log('Transferência realizada com sucesso!');
    }
    catch (error) {
        console.error(error);
    }
}
exports.performTransfer = performTransfer;
//# sourceMappingURL=controller.js.map