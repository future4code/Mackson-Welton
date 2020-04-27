import * as moment from 'moment';

import { Bank } from './Bank';
import { UserAccount } from './UserAccount';
import { JSONFileManager } from './JSONFileManager';

// moment.locale('pt-br');

const operation: string = process.argv[4];

switch (operation) {
  case 'createAccounts':
    console.log('Fui chamado!')
    const user: UserAccount = new UserAccount(
      0,
      process.argv[5],
      process.argv[6],
      Number(process.argv[7]),
      []);

      new Bank([user], new JSONFileManager('users.json')).createAccount();

    break;
  // case 'getAllAccounts':
  //   // getAllAccounts()
  //   break;
  // case 'addBalance':
  //   // addBalance(process.argv[3], process.argv[4], Number(process.argv[5]));
  //   break;
  // case 'getBalance':
  //   // getBalance(process.argv[3], process.argv[4]);
  //   break;
  // // case 'payBill':
  // //   const newStatement: statements = {
  // //     description: process.argv[5],
  // //     amount: Number(process.argv[6]),
  // //     date: process.argv[7],
  // //   }
  //   // payBill(process.argv[3], process.argv[4], newStatement)
  //   break;
  // case 'updateBalance':
  //   // updateBalance(process.argv[3], process.argv[4])
  //   break;
  // case 'performTransfer':
  //   // performTransfer(process.argv[3], process.argv[4], process.argv[5], process.argv[6], Number(process.argv[7]))
  //   break;
  default:
    console.log('está função não existe.')
}