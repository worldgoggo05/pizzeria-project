//Solution 1 - Using Regular Expression
function findD(str) {
    // (\w) - Captures any word character (letters, digits, underscore)
    // \1   - Matches the same character that was captured in the first group
    // test() - Returns true if the pattern is found in the string
    return /(\w)\1/.test(str)
}
console.log(findD('hello')) // true (because of 'll')

//Solution 2 - Using Loop Comparison
function dbChars(str) {
    // str.length-1 ensures we don't go out of bounds when checking next character
    for (let i = 0; i < str.length - 1; i++) {
        // str[i]     - current character
        // str[i+1]   - next character
        // Check if current and next characters are identical
        if (str[i] == str[i + 1]) {
            return true   
        }
    }
    return false    
}
console.log(dbChars('hello')) //true 



// Common RegExp Methods:

// test() - Returns true/false if pattern matches string
let pattern = /cat/;
console.log(pattern.test('cat')); // true

// exec() - Returns array with match details or null
let str = 'The cat and the dog';
console.log(/cat/.exec(str)); // ['cat', index: 4, input: 'The cat and the dog']

// match() - Returns array of matches or null
console.log(str.match(/cat/)); // ['cat']

// search() - Returns index of first match or -1
console.log(str.search(/cat/)); // 4

// replace() - Replaces matches with new string
console.log(str.replace(/cat/, 'bird')); // 'The bird and the dog'

// Common RegExp Patterns:
// \w - Word characters (letters, numbers, _)
// \d - Digits
// \s - Whitespace
// [] - Character set
// () - Capturing group
// + - One or more
// * - Zero or more
// ? - Zero or one
// ^ - Start of string
// $ - End of string

// Examples:
let email = 'test@example.com';
let emailPattern = /^\w+@\w+\.\w+$/;
console.log(emailPattern.test(email)); // true

let phone = '123-456-7890';
let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
console.log(phonePattern.test(phone)); // true
