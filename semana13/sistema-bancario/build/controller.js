"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment = require("moment");
function createAccounts(newUser) {
    const date1 = moment(newUser.age, 'DD/MM/YYYY');
    const date2 = moment(moment(), 'DD/MM/YYYY');
    const date = date2.diff(date1, 'year');
    if (date > 18) {
        fs_1.readFile('users.json', (err, data) => {
            try {
                let json = JSON.parse(data.toString());
                json.push(newUser);
                fs_1.writeFile('users.json', JSON.stringify(json, null, '\t'), (err) => {
                    try {
                        console.log('Usuário cadastrado com sucesso!');
                    }
                    catch (error) {
                        console.error(err);
                    }
                });
            }
            catch (error) {
                console.error(err);
            }
        });
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
    const data = getAllAccounts();
    console.log(data.map((item) => {
        return item;
    }));
}
exports.addBalance = addBalance;
//# sourceMappingURL=controller.js.map