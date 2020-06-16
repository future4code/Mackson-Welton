"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Missions {
    constructor(startDate, endDate, teachers = [], students = [], currentModule = undefined) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.currentModule = currentModule;
        this.id = moment().unix();
    }
    getId() {
        return this.id;
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    getModule() {
        return this.currentModule;
    }
    setName(name) {
        this.name = name;
    }
    setTeachers(teacher) {
        this.teachers.push(teacher);
    }
    setStudents(student) {
        this.students.push(student);
    }
}
exports.Missions = Missions;
//# sourceMappingURL=missions.js.map