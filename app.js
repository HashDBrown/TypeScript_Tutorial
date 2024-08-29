//objects
// {} is a type of object
//typescrips notation for objects is key value pairs
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'], //infered hobbies is an array of strings
    role: [2, 'author'] //union type
};
person.role.push('admin');
var favoriteActivities; //array of strings
//array of type any can store any type of data
// let favoriteActivities: any[];
//we can be more specific
// const person2: {
//     name: string;
//     age: number;
// } = {
//     name: 'Maximilian',
//     age: 30
// };
//Arrays in typescript
//types of arrays can be flexible or strict
//for-loop
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
    // console.log(hobby.map()); // !!! ERROR !!!
}
//enum (custom type)
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
//Role.ADMIN = 0, Role.READ_ONLY = 1, Role.AUTHOR = 2
var person2 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person2.role === Role.ADMIN) {
    console.log('is admin');
}
console.log(person.name);
