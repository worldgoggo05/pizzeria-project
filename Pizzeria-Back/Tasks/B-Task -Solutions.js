//------------ B-TASK: --------------
// My Solution - Big O(n)
const countDigits = (str) => {
    return str.split('').map(Number).filter(char => !isNaN(char)).length
}
console.log(countDigits(("ad2a54y79wet0sfgb9"))); //7

// Alternative solution 1: Using reduce - Big O(n)
const countDigitsReduce = (str) => {
    return str.split('').reduce((count, char) => !isNaN(Number(char)) ? count + 1 : count, 0);
}
console.log(countDigitsReduce("ad2a54y79wet0sfgb9")); //7

// Alternative solution 2: Using regex - Big O(n)
const countDigitsRegex = (str) => {
    const regex = /\d/g; // \d matches any digit
    return (str.match(regex) || []).length;
}
console.log(countDigitsRegex("ad2a54y79wet0sfgb9")); //7

// Alternative solution 3: Using for...of loop - Big O(n)
const countDigitsLoop = (str) => {
    let count = 0;
    for (let char of str) {
        if (!isNaN(Number(char))) count++;
    }
    return count;
}
console.log(countDigitsLoop("ad2a54y79wet0sfgb9")); //7

