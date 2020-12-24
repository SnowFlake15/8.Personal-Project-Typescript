import { teachersSchema, TeachersModel } from './teachersModel';
import { groupsSchema, GroupsModel } from './groupsmodel';
import { subjectsSchema } from './subjectsmodel';
import { LMSModel } from './lmsmodel';
import { PupilsModel } from './pupilsmodel';

interface recordsScheme {
    pupilId: string;
    teacherId: number;
    subjectId: number;
    lesson: number;
    mark: number;
}
interface gradebookScheme {
    level: number;
    records: recordsScheme[];
}
export class GradebooksModel {
    
    private groups: GroupsModel;
    private teachers: TeachersModel;
    private lms: LMSModel;
    private groupID: string;
    // private gradebookMap: Map<string, gradebookScheme>;
    private grades: Map<string, gradebookScheme>;
    // private grades = new Map();

    constructor(groupsO:GroupsModel, teachersO:TeachersModel, lmsO:LMSModel) {
        this.grades = new Map();
        this.groups = groupsO ;
        this.teachers = teachersO;
        this.lms = lmsO;
    }

    add(level:number, gradeId:string): string {
            gradeId = String(Math.floor(Math.random() * 100));
            this.grades = this.grades.set(gradeId, { level, records: new Array() })
            // this.gradeId = gradeId;
            return gradeId;
        
    }
    clear(parameter):void {
        if (parameter) {
            throw new Error("this method doesn't need parameters");
        } else {
            this.grades.clear();
        }
    }

    addRecord(gradebookId:string, record:recordsScheme):number {

        return this.grades.get(gradebookId).records.push(record);

    }

    
    readAll(gradebookId:string){
        return Array.from(this.grades)
    }
    
    read(gradebookId:string, pupilId:string){
        return this.grades.get(gradebookId)
    }

}