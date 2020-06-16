"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Students {
    constructor(name, email, dateOfBirth, hobbies) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.hobbies = hobbies;
        this.id = moment().unix();
        this.dateOfBirth = moment(dateOfBirth, 'DD/MM/YYYY').format('DD/MM/YYYY');
    }
}
exports.Students = Students;
//# sourceMappingURL=students.js.map