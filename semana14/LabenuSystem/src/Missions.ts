import * as moment from 'moment';
import { Teachers } from './Teachers';
import { Students } from './students';

export abstract class Missions {
  private name: string;
  private id: number;

  constructor(
    private startDate: moment.Moment, 
    private endDate: moment.Moment,
    private teachers: Teachers [] = [],
    private students: Students [] = [],
    private currentModule: number = undefined
    ) {
      this.id = moment().unix();
    }

    public getId(): number {
      return this.id;
    }

    public getStartDate(): moment.Moment {
      return this.startDate;
    }

    public getEndDate(): moment.Moment {
      return this.endDate;
    }

    public getModule(): number {
      return this.currentModule;
    }

    public setName(name: string): void {
      this.name = name;
    }

    public setTeachers(teacher: Teachers): void {
      this.teachers.push(teacher);
    }

    public setStudents(student: Students): void {
      this.students.push(student);
    }


}