"use strict";
exports.__esModule = true;
exports.TeachersModel = void 0;
var validate_1 = require("./validate");
var TeachersModel = /** @class */ (function () {
    function TeachersModel() {
        this.teachers = new Map();
    }
    TeachersModel.prototype.add = function (teacher) {
        validate_1.Validate.validateagain(teacher);
        var id = Math.floor(Math.random() * 100);
        this.teachers = this.teachers.set(id, teacher);
        return id;
        // if (Validate.validator(teacher, this.schema)) {
        //     // Validate.moreValidate(teacher);
        //     teacher.id = Math.floor(Math.random() * 100);
        //     // this.teachers.set(id, teacher);
        //     this.teachers = this.teachers.set(id, teacher)
        //     return id;
        // } else {
        //     throw new Error('invalid teacher argument');
        // }
    };
    TeachersModel.prototype.read = function (id) {
        if (this.teachers.has(id) === false) {
            throw new Error('there is no such teacher');
        }
        else if (this.teachers.has(id) === true) {
            var person = this.teachers.get(id);
            return person;
        }
    };
    TeachersModel.prototype.update = function (id, param) {
        // if(!id){
        //     throw new Error("id is required");
        // }else if(typeof param !== 'object' || !param){
        //     throw new Error("id is required and should be an object");
        // }else 
        if (this.teachers.has(id) === false) {
            throw new Error('there is no such teacher');
        }
        else {
            var user = this.teachers.get(id);
            Object.assign(user, param);
            return id;
        }
    };
    TeachersModel.prototype.remove = function (id) {
        if (!id) {
            throw new Error("id is required");
        }
        else if (this.teachers.has(id) === false) {
            throw new Error('there is no such user');
        }
        else {
            return this.teachers["delete"](id);
        }
    };
    return TeachersModel;
}());
exports.TeachersModel = TeachersModel;
