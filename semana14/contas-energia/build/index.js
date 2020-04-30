"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Industry_1 = require("./Industry");
const Commerce_1 = require("./Commerce");
const Residence_1 = require("./Residence");
const residence = new Residence_1.Residence(4, '567');
const commerce = new Commerce_1.Commerce(10, '456');
const industry = new Industry_1.Industry(80, '453');
console.log(residence.getCep());
console.log(commerce.getCep());
console.log(industry.getCep());
//# sourceMappingURL=index.js.map