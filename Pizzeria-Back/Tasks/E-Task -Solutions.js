
// My Solution
function rvrs (str){
    return str.split('').reverse().join('')
}

console.log(rvrs('Hello')) // Olleh

// Alternative Solution 1: Using a for loop
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Alternative Solution 2: Using array reduce
function reverseStr(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

// Alternative Solution 3: Using recursion
function recursiveReverse(str) {
    if (str === '') return '';
    return recursiveReverse(str.slice(1)) + str[0];
}

// Alternative Solution 4: Using spread operator
const reverseSpread = str => [...str].reverse().join('');