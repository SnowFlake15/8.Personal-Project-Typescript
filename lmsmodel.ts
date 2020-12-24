export class LMSModel {
    protected subjects: Map<number, any>;
    constructor() {
        this.subjects = new Map();
    }

    async add(obj: { id: number }): Promise<number> {
            // this.id = this.subjects.size + 1;
            this.subjects = this.subjects.set(obj.id, obj);
            return obj.id;
        
    }
    async readAll(): Promise<any> {

        // let arr: Array<object> = [];
        // for (let [key, value] of this.subjects) {
        //     arr.push(value);
        // }
        // return arr
        return [this.subjects]

    }
    async remove(subject: { id: number }): Promise<void> {
        if (this.subjects.has(subject.id) === false) {
            throw new Error("there is no such subject");
        } else {
            this.subjects.delete(subject.id);
        }
    }
    async verify(subject: { id: number }): Promise<boolean> {
        if (this.subjects.has(subject.id)) {
            return true
        } else if (this.subjects.has(subject.id) === false) {
            return false
        }
    }
}