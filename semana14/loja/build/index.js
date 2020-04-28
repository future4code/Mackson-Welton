"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Seller_1 = require("./Seller");
const newSeller = new Seller_1.Seller('55', 'email', 'MMM', '123', new Date(), 1500);
newSeller.setSalesQuantity(400);
console.log(newSeller.calculateTotalSalary());
//# sourceMappingURL=index.js.map