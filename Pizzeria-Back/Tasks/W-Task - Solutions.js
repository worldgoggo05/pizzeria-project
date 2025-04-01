// Step 1: Define a function that takes an array and chunk size as parameters
function chunkArray(arr, size) {
    // Step 2: Create an empty array to store the chunks
    const result = [];
    
    // Step 3: Iterate through the input array with steps of chunk size
    for (let i = 0; i < arr.length; i += size) {
        // Step 4: For each iteration:
        // - Use slice() to extract a portion of array from index i to i+size
        // - Push this chunk into the result array
        result.push(arr.slice(i, i + size));
    }
    
    // Step 5: Return the array of chunks
    return result;
}

// Test case:
// 1. Create a test array of numbers 1-10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. Call chunkArray with the numbers array and chunk size of 3
// 3. Log the result which splits array into chunks of 3
// Expected output: [[1,2,3], [4,5,6], [7,8,9], [10]]
console.log(chunkArray(numbers, 3));
  