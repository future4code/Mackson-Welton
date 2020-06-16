import { User } from "./User";
import moment = require("moment");

export class Teachers implements User {
  
  public id: number;

  constructor(
    public name: string,
    public email: string,
    private specialities: TEACHER_SPECIALITIES[] = []
  ) {
    this.id = moment().unix();
  }

  public setSpecialities(speciality: string): void {
    switch (speciality) {
      case 'React':
        this.specialities.push(TEACHER_SPECIALITIES.REACT);
        break;
      case 'Redux':
        this.specialities.push(TEACHER_SPECIALITIES.REDUX);
        break;
      case 'CSS':
        this.specialities.push(TEACHER_SPECIALITIES.CSS);
        break;
      case 'Testes':
        this.specialities.push(TEACHER_SPECIALITIES.TESTES);
        break;
      case 'TypeScript':
        this.specialities.push(TEACHER_SPECIALITIES.TYPESCRIPT);
        break;
      case 'POO':
        this.specialities.push(TEACHER_SPECIALITIES.POO);
        break;
      case 'BackEnd':
        this.specialities.push(TEACHER_SPECIALITIES.BACKEND);
        break;
      default:
        console.error('Opção invalida!');
    }
  }

}

enum TEACHER_SPECIALITIES {
  REACT = 'React',
  REDUX = 'Redux',
  CSS = 'CSS',
  TESTES = 'Testes',
  TYPESCRIPT = 'TypeScript',
  POO = 'POO',
  BACKEND = 'BackEnd'
}