import * as moment from 'moment';
import { User } from "./User";

export class Students implements User {

  public id: number;

  constructor(
    public name: string,
    public email: string,
    public dateOfBirth: string,
    private hobbies: string[]
    ) {
      this.id = moment().unix();
      this.dateOfBirth = moment(dateOfBirth, 'DD/MM/YYYY').format('DD/MM/YYYY');
    }
}