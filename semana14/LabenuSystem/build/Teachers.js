"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Teachers {
    constructor(name, email, specialities = []) {
        this.name = name;
        this.email = email;
        this.specialities = specialities;
        this.id = moment().unix();
    }
    setSpecialities(speciality) {
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
exports.Teachers = Teachers;
var TEACHER_SPECIALITIES;
(function (TEACHER_SPECIALITIES) {
    TEACHER_SPECIALITIES["REACT"] = "React";
    TEACHER_SPECIALITIES["REDUX"] = "Redux";
    TEACHER_SPECIALITIES["CSS"] = "CSS";
    TEACHER_SPECIALITIES["TESTES"] = "Testes";
    TEACHER_SPECIALITIES["TYPESCRIPT"] = "TypeScript";
    TEACHER_SPECIALITIES["POO"] = "POO";
    TEACHER_SPECIALITIES["BACKEND"] = "BackEnd";
})(TEACHER_SPECIALITIES || (TEACHER_SPECIALITIES = {}));
//# sourceMappingURL=Teachers.js.map