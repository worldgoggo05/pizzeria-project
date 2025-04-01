// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin.
// Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// OPTIMAL SOLUTION - O(n) time complexity and O(1) space complexity
function areParenthesesBalanced(str) {
    let count = 0;
    
    for (let char of str) {
        if (char === '(') {
            count++;
        } else if (char === ')') {
            count--;
        }
        
        // If count becomes negative, it means we found a closing parenthesis
        // before its corresponding opening parenthesis
        if (count < 0) {
            return false;
        }
    }
    
    // If count is 0, parentheses are balanced
    return count === 0;
}

// LESS OPTIMAL SOLUTION - O(n) time complexity and O(n) space complexity
function areParenthesesBalancedLessOptimal(str) {
    const stack = [];
    
    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            // If we find a closing bracket but stack is empty,
            // it means we don't have a matching opening bracket
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    
    // If stack is empty, all parentheses are matched
    return stack.length === 0;
}

// Test cases
const testCases = [
    "string()ichida(qavslar)soni()balansda",  // true
    "((()))",                                  // true
    "(())",                                    // true
    "((())",                                   // false
    ")()",                                     // false
    "",                                        // true
    "hello(world)",                            // true
    "((hello)world))",                         // false
];

console.log("Testing Optimal Solution:");
testCases.forEach(test => {
    console.log(`"${test}": ${areParenthesesBalanced(test)}`);
});

console.log("\nTesting Less Optimal Solution:");
testCases.forEach(test => {
    console.log(`"${test}": ${areParenthesesBalancedLessOptimal(test)}`);
});
