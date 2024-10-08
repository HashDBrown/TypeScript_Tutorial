// Javascript Superset
// Browsers can't understand/execute TS
// typescript compiler generates JS code
// adds types to JS language
// Identify errors earlier.

// ! tells TS that the element will never be null
// as HTMLInputElement tells TS that the element is of type HTMLInputElement (type casting)
const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// :number tells TS that the function will return a number
function add(num1: number, num2: number){
    return num1 + num2;
}

// + converts string to number
button.addEventListener("click", function(){
    console.log(add(+input1.value, +input2.value));
});