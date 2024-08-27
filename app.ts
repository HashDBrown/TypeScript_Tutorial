console.log('Hello World');
// types
// numbers- all numbers, no difference between integers and floats
// strings- all text values 'Hi', "Hi", `Hi`
// boolean- true or false

function add(num1: number, num2: number, showResult: boolean, phrase: string){
    // console.log(typeof num1);
    const result: number = num1 + num2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return num1 + num2;
    }
}

const number1 = 10;
const number2 = 2.8;
const printResult = true;
const phrase = 'Result is: ';

// const result = add(number1, number2, printResult);
add(number1, number2, printResult, phrase);
