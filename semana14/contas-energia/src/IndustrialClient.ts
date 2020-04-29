import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client {
  constructor(
    private industrialNumber: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    machinesQuantity: number,
    cep: string
    ){
      super(machinesQuantity, cep);
    }

    public getIndustryNumber(): string {
      return this.industrialNumber;
    }

    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}