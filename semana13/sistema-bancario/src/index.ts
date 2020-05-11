
import * as moment from 'moment';
import { users, statements } from './types';

import { 
  createAccounts, 
  getAllAccounts, 
  addBalance, 
  getBalance, 
  payBill, 
  updateBalance, 
  performTransfer
} from './controller';

moment.locale('pt-br');

const operation: string = process.argv[2];

switch (operation) {
  case 'createAccounts':
    const user: users = {
      name: process.argv[3],
      age: process.argv[4],
      cpf: process.argv[5],
      balance: 0,
      statements: []
    }
    createAccounts(user)
    break;
  case 'getAllAccounts':
    getAllAccounts()
    break;
  case 'addBalance':
    addBalance(process.argv[3], process.argv[4], Number(process.argv[5]));
    break;
  case 'getBalance':
    getBalance(process.argv[3], process.argv[4]);
    break;
  case 'payBill':
    const newStatement: statements = {
      description: process.argv[5],
      amount: Number(process.argv[6]),
      date: process.argv[7],
    }
    payBill(process.argv[3], process.argv[4], newStatement)
    break;
  case 'updateBalance':
    updateBalance(process.argv[3], process.argv[4])
  break;
  case 'performTransfer':
    performTransfer(process.argv[3], process.argv[4], process.argv[5], process.argv[6], Number(process.argv[7]))
  break;
  default:
    console.log('está função não existe.')
}