import { Validate } from './validate';
export interface phones {
    phone: string;
    primary: boolean;
}
export interface pupilsSchema {
    dateOfBirth: string;
    description?: string;
    id?: string;
    image: string;
    name: {
        first: string,
        last: string,
    };
    phones: phones[];
    sex: string;
}
export class PupilsModel {
    public pupils: Map<string, pupilsSchema>;
    id: string;

    constructor() {
        this.pupils = new Map();
    }

    add(pupil: pupilsSchema):pupilsSchema {
        Validate.validateagain(pupil)
        let id: string = String(Math.floor(Math.random() * 100));
        pupil.id = id
        this.pupils = this.pupils.set(id, pupil)
        return this.pupils.get(id);
    }

    read(id:string):pupilsSchema {
            return this.pupils.get(id);
    }

    update(id:string, param:pupilsSchema):string {
        if (this.pupils.has(id) === false) {
            throw new Error('there is no such pupil');
        }
        else {
            let user = this.pupils.get(id);
            Object.assign(user, param);
            return id;
        }
    }

    remove(id:string):boolean {
        if (!id) {
            throw new Error("id is required");
        } else if (this.pupils.has(id) === false) {
            throw new Error('there is no such user');
        }
        else {
            return this.pupils.delete(id);
        }
    }
}