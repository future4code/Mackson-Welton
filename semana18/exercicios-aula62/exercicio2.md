### Exercício 2

import { User } from "../src/exercicio1/User"
import { performPurchase } from "../src/exercicio1/performPurchase"

describe("Teste da função performPurchase", () => {
  test("Teste com um usuário com o saldo maior do que o valor de compra", () => {
    const user: User = {
      name: "Mackson",
      balance: 200
    }
  
    const result = performPurchase(user, 100);
    
    expect(result?.balance).toEqual(100)
  })

  test("Teste com um usuário com o saldo igual ao valor de compra", () => {
    const user: User = {
      name: "Mackson",
      balance: 100
    }
  
    const result = performPurchase(user, 100);
    
    expect(result?.balance).toEqual(0)
  })

  test("Teste com um usuário com o saldo menor do que o valor de compra", () => {
    const user: User = {
      name: "Mackson",
      balance: 100
    }
  
    const result = performPurchase(user, 200);
    
    expect(result?.balance).toEqual(undefined)
  })

})