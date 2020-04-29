import { Client } from "./Client";

export class ClientManager {
  private clients: Client[];

  getClientsQuantity(): number {
    return this.clients.length;
  }

  public registerClient(client: Client): void {
    this.clients.push(client)
  }

  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber
    })

    if (foundClient) {
      // verificando se o usuário existe
      return foundClient.calculateBill()
    }

    return 0;
  }

  public calculateTotalIncome(): number {
    return this.clients.reduce((sum, item) => sum += item.calculateBill(), 0);
  }

  public deleteUser(registrationNumber: number): void {
    let registration = undefined;

    this.clients.forEach((item, i
      ) => {
      if (item.registrationNumber === registrationNumber) {
        registration = i
      }
    })

    if (registration !== undefined) {
      this.clients.splice(registration, 1);
    }
  }
}