"use strict";
exports.__esModule = true;
exports.GroupsModel = void 0;
var GroupsModel = /** @class */ (function () {
    function GroupsModel() {
        this.groups = new Map();
        this.pupils = new Map();
    }
    GroupsModel.prototype.add = function (roomsnum) {
        var id = String(Math.floor(Math.random() * 100));
        this.groups.set(id, { id: id, room: roomsnum });
        return id;
    };
    GroupsModel.prototype.addPupil = function (groupId, pupil) {
        if (this.groups.has(groupId) === false) {
            throw new Error("there is no such group");
        }
        else {
            this.pupils.set(pupil.id, pupil);
        }
    };
    GroupsModel.prototype.removePupil = function (groupId, pupilId) {
        var pupilGroup = this.groups.get(groupId);
        if (this.groups.has(groupId) === false) {
            throw Error("This group does not exist.");
        }
        if (pupilGroup.id === pupilId) {
            this.pupils["delete"](pupilId);
        }
        ;
    };
    GroupsModel.prototype.update = function (groupId, obj) {
        if (this.groups.has(groupId)) {
            this.groups.get(groupId).room = obj.room;
        }
        else {
            throw new Error("ther is no such group!");
        }
    };
    GroupsModel.prototype.read = function (gid) {
        if (this.groups.has(gid) === false) {
            throw new Error("group not found");
        }
        else {
            return this.groups.get(gid);
        }
    };
    GroupsModel.prototype.readAll = function () {
        return Array.from(this.groups);
    };
    return GroupsModel;
}());
exports.GroupsModel = GroupsModel;
