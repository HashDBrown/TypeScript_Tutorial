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

//we don't have types here because typescript is smart enough to know that number1 is a number
//this is called type inference
const number1 = 10;
const number2 = 2.8;
const printResult = true;
const phrase = 'Result is: ';

//difference between const and let is that const is immutable
//what is immutable? it means that the value of the variable cannot be changed

//let n1 = 10; is bad practice because we are not using typescript to its full potential

// const result = add(number1, number2, printResult);
add(number1, number2, printResult, phrase);
