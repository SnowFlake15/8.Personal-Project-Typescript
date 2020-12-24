"use strict";
exports.__esModule = true;
var subjectsmodel_1 = require("./subjectsmodel");
var lmsmodel_1 = require("./lmsmodel");
var teachersmodel_1 = require("./teachersmodel");
var pupilsmodel_1 = require("./pupilsmodel");
var groupsmodel_1 = require("./groupsmodel");
var gradebooksmodel_1 = require("./gradebooksmodel");
var georgian = new subjectsmodel_1.SubjectsModel({
    title: 'Georgian',
    lessons: 15,
    description: 'mom language'
});
var math = new subjectsmodel_1.SubjectsModel({
    title: 'Math',
    lessons: 15,
    description: 'plus minus'
});
var geo = new subjectsmodel_1.SubjectsModel({
    title: 'Geo',
    lessons: 25,
    description: 'rivaa'
});
// will return subjectId
console.log(georgian);
console.log(math.id);
console.log(geo.id);
var lms = new lmsmodel_1.LMSModel();
lms.add(georgian);
lms.add(math);
lms.remove(georgian);
console.log(lms);
// will return true or false. Answer will be true if we added this subject to lms
console.log(lms.verify(math));
// will return array of registered subjects
console.log(lms.readAll());
// Create new Teacher from Teacher's data
var data = {
    name: {
        first: "John",
        last: "Doe"
    },
    image: "ugly",
    dateOfBirth: "01.12.2020",
    emails: [
        {
            "email": "may@gmail.com",
            "primary": true
        },
        {
            "email": "oter@mail.com",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "85868866586",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "string"
        }
    ],
    description: "description"
};
var data2 = {
    name: {
        first: "langeris",
        last: "hihi"
    },
    image: "portals",
    dateOfBirth: "02.03.2000",
    emails: [
        {
            "email": "ttttt",
            "primary": true
        },
        {
            "email": "ttttt",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "aaaaa"
        }
    ]
};
var newTeacherInfo = {
    name: {
        first: "teacher",
        last: "teacherlastaname"
    },
    image: "adf",
    dateOfBirth: "01.11.2020",
    emails: [
        {
            "email": "ttttt",
            "primary": true
        },
        {
            "email": "ttttt",
            "primary": false
        }
    ],
    phones: [
        {
            "phone": "111111111",
            "primary": true
        }
    ],
    sex: "male",
    subjects: [
        {
            "subject": "aaaaa"
        }
    ]
};
// Create new Teacher from Teacher's data
var teachers = new teachersmodel_1.TeachersModel();
// Create a new teacher
var teacherId = teachers.add(data);
var teacherId2 = teachers.add(data2);
console.log(teacherId2);
// // will return Teachers data including teacher's id
console.log(teachers.read(teacherId));
// // will update Teacher. This method should use the same validation as a constructor method
teacherId = teachers.update(teacherId, newTeacherInfo);
console.log(teachers.read(teacherId));
// // will remove techer
// teachers.remove(teacherId);
// console.log(teachers.read(teacherId));
var pupildata = {
    name: {
        first: "juno",
        last: "dunno"
    },
    image: "afewfa",
    dateOfBirth: "02.03.2019",
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male"
};
var updatedProfile = {
    name: {
        first: "pupil2",
        last: "pupil2lastaname"
    },
    image: "strifffffff",
    dateOfBirth: "02.03.2019",
    phones: [
        {
            "phone": "4564454545",
            "primary": true
        }
    ],
    sex: "male"
};
var pupils = new pupilsmodel_1.PupilsModel();
console.log(pupils);
// Create a new pupil
var pupil = pupils.add(pupildata);
console.log(pupil);
console.log(pupils);
// will return Pupils data including pupil's id
console.log('-----------------------------------------');
console.log(pupils.read(pupil.id));
console.log('-----------------------------------------');
// console.log(teachers.read(teacherId));
// will update Pupil. This method should use the same validation as a constructor method
pupils.update(pupil.id, updatedProfile);
console.log(pupils);
// will remove pupil
console.log(pupils.remove(pupil.id));
console.log(pupils);
var room = 236;
var groups = new groupsmodel_1.GroupsModel();
// Create a new group
var groupId = groups.add(room);
console.log(groupId);
// Add this pupil to this group
groups.addPupil(groupId, pupil);
console.log(groups.readAll());
// Remove this pupil from this group
groups.removePupil(groupId, pupil.id);
// Update room for this group
groups.update(groupId, {
    room: 237
});
// Read information about group
console.log(groups.read(groupId));
// {
//   id: 'JEF5H43H'
//   room: 237
// }
// It will return array of groups
console.log(groups.readAll());
console.log(groupId);
var pupilId = pupil.id;
var teachersId = teacherId;
// const gradebooks = new GradeBooksModel(groups, teachers, lms);
var gradebooks = new gradebooksmodel_1.GradebooksModel(groups, teachers, lms);
var level = 1;
var level2 = 2;
var gradebook = gradebooks.add(level, groupId);
gradebook = gradebooks.add(level2, groupId);
console.log(gradebook);
var record = {
    pupilId: pupilId,
    teacherId: teachersId,
    subjectId: georgian.id,
    lesson: 3,
    mark: 10
};
console.log(gradebooks.addRecord(gradebook, record));
console.log("--------------------");
var oliver = gradebooks.read(gradebook, pupilId);
console.log(oliver);
var students = gradebooks.readAll(gradebook); // It will return the array of objects
console.log(students);
