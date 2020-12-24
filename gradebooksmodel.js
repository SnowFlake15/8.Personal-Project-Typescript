"use strict";
exports.__esModule = true;
exports.GradebooksModel = void 0;
var GradebooksModel = /** @class */ (function () {
    // private grades = new Map();
    function GradebooksModel(groupsO, teachersO, lmsO) {
        this.grades = new Map();
        this.groups = groupsO;
        this.teachers = teachersO;
        this.lms = lmsO;
    }
    GradebooksModel.prototype.add = function (level, gradeId) {
        gradeId = String(Math.floor(Math.random() * 100));
        this.grades = this.grades.set(gradeId, { level: level, records: new Array() });
        // this.gradeId = gradeId;
        return gradeId;
    };
    GradebooksModel.prototype.clear = function (parameter) {
        if (parameter) {
            throw new Error("this method doesn't need parameters");
        }
        else {
            this.grades.clear();
        }
    };
    GradebooksModel.prototype.addRecord = function (gradebookId, record) {
        return this.grades.get(gradebookId).records.push(record);
    };
    GradebooksModel.prototype.readAll = function (gradebookId) {
        return Array.from(this.grades);
    };
    GradebooksModel.prototype.read = function (gradebookId, pupilId) {
        return this.grades.get(gradebookId);
    };
    return GradebooksModel;
}());
exports.GradebooksModel = GradebooksModel;
