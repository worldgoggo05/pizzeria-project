// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda.

// Function to calculate the sum of all numbers in a nested array
function reduceNestedArray(arr){
    let sum = 0; // Initialize sum to 0
    // Iterate through each element in the array
    for(let i = 0; i < arr.length; i++){
        // Check if the current element is an array
        if(Array.isArray(arr[i])){
            // Recursively call reduceNestedArray for nested arrays
            sum += reduceNestedArray(arr[i]);
        }else{
            // Add the current number to the sum
            sum += arr[i];
        }
    }
    return sum; // Return the total sum
}

// Test the function with a nested array
console.log(reduceNestedArray([1, [1, 2, [4]]])); // Expected output: 8