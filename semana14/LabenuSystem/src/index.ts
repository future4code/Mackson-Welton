import * as moment from 'moment';
import { FullTimeMission } from './FullTimeMission';
import { Teachers } from './Teachers';
import { Students } from './students';
import { NightMission } from './NigthMission';
import { FileManager } from './FileManager';

const teacher1 = new Teachers('Mackson', 'mackson@mackson');
teacher1.setSpecialities('React')
const teacher2 = new Teachers('José', 'jose@email');
teacher2.setSpecialities('Redux')
const teacher3 = new Teachers('Renato', 'renato@email.com');
teacher3.setSpecialities('Testes')
const teacher4 = new Teachers('Fernando', 'fernando@email.com');
teacher4.setSpecialities('POO')

const student1 = new Students('Gabriel', 'gabriel@email.com', '25/06/2020', ['Jogar Futebol', 'Jogar Basketball']);
const student2 = new Students('Welton', 'welton@email.com', '10/05/2020', ['Jogar Games', 'Natação']);


const newMissionFullTime = new FullTimeMission(moment('25/05/2020', 'DD/MM/YYYY'), moment('20/04/2020', 'DD/MM/YYYY'));
newMissionFullTime.setName('React')
newMissionFullTime.setStudents(student1);
newMissionFullTime.setTeachers(teacher1);
newMissionFullTime.setTeachers(teacher2);

const newMissionNight = new NightMission(moment('25/05/2020', 'DD/MM/YYYY'), moment('20/04/2020', 'DD/MM/YYYY'));
newMissionFullTime.setName('Redux-na-night')
newMissionFullTime.setStudents(student2);
newMissionFullTime.setTeachers(teacher3);
newMissionFullTime.setTeachers(teacher4);

new FileManager('missions.json').writeFile([newMissionFullTime, newMissionNight]);

new FileManager('students.json').writeFile([student1, student2]);

new FileManager('teachers.json').writeFile([teacher1, teacher2, teacher3, teacher4]);