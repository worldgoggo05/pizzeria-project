// R-TASK
// Define 
function calculate(str){
    const getNumber = str.split('+').map(Number);
    return getNumber.reduce((num, ele) => num + ele);
    
}
// // Call
const result = calculate("1+3");
console.log('R-TASK:', result);


//Alternative
function calculate1(str) {
    // Using eval() is simpler but less secure approach
    // For basic arithmetic expressions, we can use it
    return eval(str);
}

const result1 = calculate1("22+3");
console.log('R-TASK:', result1);