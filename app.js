//union type
function combine(input1, input2) {
    // console.log(typeof num1);
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') { //union type
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26);
console.log(combineAges);
var combineStringAges = combine('Max', 'Anna');
console.log(combineStringAges);
