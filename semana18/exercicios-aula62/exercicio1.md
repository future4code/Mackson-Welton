### Exercício 1

a)

export interface User {
  name: string;
  balance: number;
}

b)

import { User } from './User';

export function performPurchase(user: User, value: number): User | undefined {
  if (user.balance >= value) {
    return {...user, balance: user.balance - value};
  } else {
    return undefined;
  }
}