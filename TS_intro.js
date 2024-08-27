// Javascript Superset
// Browsers can't understand/execute TS
// typescript compiler generates JS code
// adds types to JS language
// Identify errors earlier.
// ! tells TS that the element will never be null
// as HTMLInputElement tells TS that the element is of type HTMLInputElement (type casting)
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// :number tells TS that the function will return a number
function add(num1, num2) {
    return num1 + num2;
}
// + converts string to number
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
