//My Solution

function digit(str){ 
    return str.split('').map(Number).filter(a=>!isNaN(a)).join('')
   }

   console.log(digit('sdsd34sd5'))

// Alternative solution 1: Using reduce
function digitReduce(str) {
    return str.split('').reduce((acc, char) => !isNaN(Number(char)) ? acc + char : acc, '');
}
console.log(digitReduce('sdsd34sd5')); // 345

// Alternative solution 2: Using regex
function digitRegex(str) {
    return (str.match(/\d/g) || []).join('');
}
console.log(digitRegex('sdsd34sd5')); // 345

// Alternative solution 3: Using for...of loop
function digitLoop(str) {
    let result = '';
    for (let char of str) {
        if (!isNaN(Number(char))) {
            result += char;
        }
    }
    return result;
}
console.log(digitLoop('sdsd34sd5')); // 345
