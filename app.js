//union type
function combine(input1, input2, resultConversion) {
    // console.log(typeof num1);
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') { //union type
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combineStringAges = combine('Max', 'Anna', 'as-text');
console.log(combineStringAges);
