//union type

function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    // console.log(typeof num1);
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') { //union type
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }

}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('Max', 'Anna' , 'as-text');
console.log(combineStringAges);