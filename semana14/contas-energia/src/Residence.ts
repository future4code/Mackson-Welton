import { Place } from "./Place";

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }

  getResidentsQuantity() {
    return this.residentsQuantity;
  }
}