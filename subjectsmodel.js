"use strict";
exports.__esModule = true;
exports.SubjectsModel = void 0;
var SubjectsModel = /** @class */ (function () {
    function SubjectsModel(object) {
        this.id = Math.floor(Math.random() * 100);
        this.title = object.title;
        this.lessons = object.lessons;
        this.description = object.description;
    }
    return SubjectsModel;
}());
exports.SubjectsModel = SubjectsModel;
