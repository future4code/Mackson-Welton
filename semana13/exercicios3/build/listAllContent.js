"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const text1 = new Promise((resolve, reject) => {
    const handleFileRead = (err, data) => {
        try {
            const fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile(`./textos/1.txt`, handleFileRead);
});
const text2 = new Promise((resolve, reject) => {
    const handleFileRead = (err, data) => {
        try {
            const fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile(`./textos/2.txt`, handleFileRead);
});
const text3 = new Promise((resolve, reject) => {
    const handleFileRead = (err, data) => {
        try {
            const fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile(`./textos/3.txt`, handleFileRead);
});
const text4 = new Promise((resolve, reject) => {
    const handleFileRead = (err, data) => {
        try {
            const content = data.toString();
            resolve(content);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile(`./textos/4.txt`, handleFileRead);
});
const text5 = new Promise((resolve, reject) => {
    const handleFileRead = (err, data) => {
        try {
            const fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile(`./textos/5.txt`, handleFileRead);
});
Promise.all([text1, text2, text3, text4, text5]).then((values) => {
    console.log(values.join(" "));
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=listAllContent.js.map