type Combinable = number | string; //type alias
type ConversionDescriptor = 'as-number' | 'as-text'; //type alias

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
    ) {
    // console.log(typeof num1);
    let result;
    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    }
