"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const operation = process.argv[4];
const param2 = process.argv[5];
const param3 = process.argv[6];
const param4 = process.argv[7];
if (operation === 'getPost') {
    const result = axios_1.default.get(`${baseUrl}/${param2}`);
    result.then((value) => {
        console.log(value.data);
    }).catch(err => {
        console.log(err);
    });
}
else if (operation === 'getPosts') {
    const result1 = axios_1.default.get(`${baseUrl}/${param2}`);
    const result2 = axios_1.default.get(`${baseUrl}/${param3}`);
    const result3 = axios_1.default.get(`${baseUrl}/${param4}`);
    Promise.all([result1, result2, result3]).then((values) => {
        console.log(values.map(item => item.data));
    }).catch(err => {
        console.log(err);
    });
}
else if (operation === 'getPostComments') {
    const result = axios_1.default.get(`${baseUrl}/${param2}/comments`);
    result.then((value) => {
        console.log(value.data);
    }).catch(err => {
        console.log(err);
    });
}
//# sourceMappingURL=posts.js.map