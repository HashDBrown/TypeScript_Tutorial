//objects

// {} is a type of object
//typescrips notation for objects is key value pairs
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'] //infered hobbies is an array of strings
};

let favoriteActivities: string[]; //array of strings

//array of type any can store any type of data
// let favoriteActivities: any[]; //array of strings

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

console.log(person.name);