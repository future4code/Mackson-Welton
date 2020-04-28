import {Transaction} from './Transaction';

export class UserAccount {

  balance: number;
  cpf: string;
  name: string;
  age: number;
  transactions: Transaction[];

  constructor(balance: number, cpf: string, name: string, age: number, transactions: Transaction[]) {
    this.balance = balance;
    this.cpf = cpf;
    this.name = name;
    this.age = age;
    this.transactions = transactions;
  }

  getBalance(): number {
    return 1
  }

  addBalance(): void {
    
  }
}