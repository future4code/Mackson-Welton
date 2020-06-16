### Exercício 3

b)

import { Casino, User, Result, LOCATION, NACIONALITY} from "./interfaces";

export function verifyAge(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    }
  }

  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((user) => user.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((user) => user.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((user) => user.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((user) => user.name),
    },
  };
}

c) Foi mais difícil realizar a implementação da função.