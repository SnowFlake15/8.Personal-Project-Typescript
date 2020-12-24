
import { Validate } from './validate';
export interface subjectsSchema {
    title: string,
    lessons: number,
    description: string
}
export class SubjectsModel {
    id: number;
    title: string;
    lessons: number;
    description: string;
    constructor(object: subjectsSchema) {

        this.id = Math.floor(Math.random() * 100);
        this.title = object.title;
        this.lessons = object.lessons;
        this.description = object.description;

    }
}