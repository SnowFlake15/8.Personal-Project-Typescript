import { pupilsSchema } from "./pupilsModel";

import { Validate } from './validate';

export interface groupsSchema {
    id?: string;
    room?: number;
    pupils?: pupilsSchema[],
    groupId?: number,
}
export class GroupsModel {
    // this.groups = new Map();
    groups: Map<string, groupsSchema>;
    pupils: Map<string, pupilsSchema>;

    constructor() {
        this.groups = new Map();
        this.pupils = new Map();
    }


    add(roomsnum: number): string {
        let id: string = String(Math.floor(Math.random() * 100));
        this.groups.set(id, {id, room:roomsnum});
        return id;
    }

    addPupil(groupId: string, pupil: pupilsSchema): void {
        if (this.groups.has(groupId) === false) {
            throw new Error("there is no such group");

        } else {
            this.pupils.set(pupil.id, pupil)
        }
    }

    public removePupil(groupId: string, pupilId: string): void {
        const pupilGroup = this.groups.get(groupId);
        if (this.groups.has(groupId) === false) {
            throw Error ("This group does not exist.");
        }
        if(pupilGroup.id === pupilId){
        this.pupils.delete(pupilId)};
    }

    update(groupId: string, obj: { room: number }): void {

        if (this.groups.has(groupId)) {

            this.groups.get(groupId).room = obj.room;
        } else {
            throw new Error("ther is no such group!");
        }

    }

    read(gid: string): groupsSchema {
        if (this.groups.has(gid) === false) {
            throw new Error("group not found")

        }
        else {
            return this.groups.get(gid);
        }

    }
    readAll() {
        return Array.from(this.groups);

    }

}