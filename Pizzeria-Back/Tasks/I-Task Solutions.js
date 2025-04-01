// This function finds the most frequently occurring number in an array
// Input: Array of numbers
// Output: The number that appears most frequently


function majorityElement(arr) {
    // Create an object to store the count of each number
    // Example: {1: 1, 2: 1, 3: 2, 4: 3} for array [1,2,3,4,3,4,4]
    const frequencyMap = {};
    
    // Count the frequency of each number in the array
    // Loop through each number and increment its count in frequencyMap
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    
    // Variables to keep track of the number with highest frequency
    let maxCount = 0;        // Stores the highest frequency found
    let majorityNum = null;  // Stores the number with highest frequency
    
    // Loop through the frequencyMap to find the number with highest count
    for (const num in frequencyMap) {
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            majorityNum = Number(num);  // Convert string key back to number
        }
    }
    
    return majorityNum;
}

// Test the function
console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // Output: 4


//-----------------------------------------

// Alternative Solution 1: Using reduce method
// This solution uses array.reduce() to count frequencies and Object.entries() to find max
const majorityElementReduce = (arr) => {
    // Create frequency object using reduce
    // acc is the accumulator object that stores counts
    const counts = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    // Convert object to array of [number, count] pairs, sort by count, and get the number
    return Number(Object.entries(counts).sort((a,b) => b[1] - a[1])[0][0]);
};
console.log(majorityElementReduce([1, 2, 3, 4, 5, 4, 3, 4])); // Output: 4



// Alternative Solution 2: Using Map data structure
// This solution uses Map instead of object for counting frequencies
function majorityElementMap(arr) {
    const map = new Map();
    // Count frequencies using Map methods
    arr.forEach(num => map.set(num, (map.get(num) || 0) + 1));
    // Convert Map to array, sort by count, and get the number
    return [...map.entries()].sort((a,b) => b[1] - a[1])[0][0];
}
console.log(majorityElementMap([1, 2, 3, 4, 5, 4, 3, 4])); // Output: 4




// Alternative Solution 3: Using filter method
// This solution uses array methods filter and find
// Note: This is less efficient for large arrays due to multiple iterations
function majorityElementFilter(arr) {
    return arr.find(num => 
        // For each number, count its occurrences using filter
        arr.filter(n => n === num).length === 
        // Compare with the maximum count of any number in the array
        Math.max(...arr.map(n => arr.filter(x => x === n).length))
    );
}
console.log(majorityElementFilter([1, 2, 3, 4, 5, 4, 3, 4])); // Output: 4