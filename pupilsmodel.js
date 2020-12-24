"use strict";
exports.__esModule = true;
exports.PupilsModel = void 0;
var validate_1 = require("./validate");
var PupilsModel = /** @class */ (function () {
    function PupilsModel() {
        this.pupils = new Map();
    }
    PupilsModel.prototype.add = function (pupil) {
        validate_1.Validate.validateagain(pupil);
        var id = String(Math.floor(Math.random() * 100));
        pupil.id = id;
        this.pupils = this.pupils.set(id, pupil);
        // pupil.id = id;
        // this.pupils = this.pupils.set(id, pupil)
        return this.pupils.get(id);
        // let id: number = Math.floor(Math.random() * 100);
        // this.teachers = this.teachers.set(id, teacher)
        // return id
    };
    // public add(obj: IPupilScheme): string {
    //     const date = new Date();
    //     obj.id = obj.name.first + obj.name.last + String(73 * date.getTime());
    //     this.pupilMap.set(obj.id, obj);
    //     return obj.id;
    // }
    PupilsModel.prototype.read = function (id) {
        // if (this.pupils.has(id) === false) {
        //     throw new Error('there is no such puplil');
        // } else{
        // let person:pupilsSchema = this.pupils.get(id);
        // return person;
        return this.pupils.get(id);
        // }
    };
    PupilsModel.prototype.update = function (id, param) {
        if (this.pupils.has(id) === false) {
            throw new Error('there is no such pupil');
        }
        else {
            var user = this.pupils.get(id);
            Object.assign(user, param);
            return id;
        }
    };
    PupilsModel.prototype.remove = function (id) {
        if (!id) {
            throw new Error("id is required");
        }
        else if (this.pupils.has(id) === false) {
            throw new Error('there is no such user');
        }
        else {
            return this.pupils["delete"](id);
        }
    };
    return PupilsModel;
}());
exports.PupilsModel = PupilsModel;
