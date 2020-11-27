"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: 'bruno@email.com',
        password: 'qwerty',
        techs: [
            'Node',
            { title: 'JS', experience: 100 }
        ]
    });
    console.log(user);
    return response.json(user);
}
exports.helloWorld = helloWorld;
