console.log('Hello World');
// types
// numbers- all numbers, no difference between integers and floats
// strings- all text values 'Hi', "Hi", `Hi`
// boolean- true or false
function add(num1, num2, showResult, phrase) {
    // console.log(typeof num1);
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 10;
var number2 = 2.8;
var printResult = true;
var phrase = 'Result is: ';
// const result = add(number1, number2, printResult);
add(number1, number2, printResult, phrase);
