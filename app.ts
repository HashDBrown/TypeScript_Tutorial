console.log('Hello World');
// types
// numbers- all numbers, no difference between integers and floats
// strings- all text values 'Hi', "Hi", `Hi`
// boolean- true or false

function add(num1: number, num2: number) :number{
    console.log(typeof num1);
    return num1 + num2;
}

const number1 = 10;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);