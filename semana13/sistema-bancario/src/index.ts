
import * as moment from 'moment';
import { createAccounts, getAllAccounts, addBalance } from './controller';
import { users } from './types';

moment.locale('pt-br');

const operation: string = process.argv[2];

switch(operation) {
  case 'createAccounts':
    const user: users = {
      name: process.argv[3],
      age: process.argv[4],
      cpf: process.argv[5],
      balance: 0,
      allExpenses: []
    }
    createAccounts(user)
    break;
  case 'getAllAccounts':
    getAllAccounts()
    break;
  case 'addBalance':
    const userName: string = process.argv[3];
    const userCPF: string = process.argv[4];
    const userBalance: number = Number(process.argv[5]);
    addBalance(userName, userCPF, userBalance);
}