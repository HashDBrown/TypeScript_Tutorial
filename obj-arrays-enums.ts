//objects

// {} is a type of object
//typescrips notation for objects is key value pairs
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //tuple
}= {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'], //infered hobbies is an array of strings
    role: [2, 'author'] //union type
};

person.role.push('admin');

let favoriteActivities: string[]; //array of strings

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
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
    // console.log(hobby.map()); // !!! ERROR !!!
}

//enum (custom type)
enum Role { ADMIN, READ_ONLY, AUTHOR };
//Role.ADMIN = 0, Role.READ_ONLY = 1, Role.AUTHOR = 2

const person2 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (person2.role === Role.ADMIN) {
    console.log('is admin');
}

console.log(person.name);