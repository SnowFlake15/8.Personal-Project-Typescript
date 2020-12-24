import { Validate } from './validate';

interface phones {
    phone: string,
    primary: boolean
}
interface emails {
    email: string,
    primary: boolean
}
interface subjects {
    subject: string
}
export interface teachersSchema {
    name: {
        first: string,
        last: string
    },
    image: string,
    dateOfBirth: string,
    emails: emails[],
    phones: phones[],
    sex: string,
    subjects: subjects[],
    description?: string,
}
export class TeachersModel {
    teachers: Map<number, teachersSchema>;
    id: number;
    constructor() {
        this.teachers = new Map();
    }

    add(teacher: teachersSchema): number {
        Validate.validateagain(teacher)
        let id: number = Math.floor(Math.random() * 100);
        this.teachers = this.teachers.set(id, teacher)
        return id
    }

    read(id: number): teachersSchema {
        if (this.teachers.has(id) === false) {
            throw new Error('there is no such teacher');
        } else if (this.teachers.has(id) === true) {
            let person: teachersSchema = this.teachers.get(id);
            return person;
        }
    }

    update(id: number, param: object): number {
        if (this.teachers.has(id) === false) {
            throw new Error('there is no such teacher');
        }
        else {
            let user: teachersSchema = this.teachers.get(id);
            Object.assign(user, param);
            return id;
        }
    }

    remove(id:number):boolean {
        if (!id) {
            throw new Error("id is required");
        } else if (this.teachers.has(id) === false) {
            throw new Error('there is no such user');
        }
        else {
            return this.teachers.delete(id);
        }
    }
}