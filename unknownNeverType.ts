let userInput: unknown;

userInput = 5;
userInput = 'Max'; //allowed cause of unknown type

let userName: string;
// userName = userInput; //error cause unknown type is not assignable to string type
if (typeof userInput === 'string') {
    userName = userInput;
}

//unknown is different from any type in that you have to do a check before you can assign it to another type
//it is more restrictive than any type

//never type
//function that never returns anything
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500); //this function will never return anything so it will crash the script