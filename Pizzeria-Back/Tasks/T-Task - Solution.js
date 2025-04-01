// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.


//My Solution 
function arraySort(arr,arr2){
    const merge = arr.concat(arr2)
    return merge.sort((a,b) => a-b)
}

console.log(arraySort([0, 3, 4, 31], [4, 6, 30]))


//Optimal Solution
function mergeSortedArrays(arr1, arr2) {
    // Initialize empty array to store merged result
    const mergedArray = [];
    
    // Initialize pointers to track current position in each input array
    let i = 0; // Pointer for arr1 
    let j = 0; // Pointer for arr2

    // Compare elements from both arrays and merge in sorted order
    // Continue while we still have elements to compare in both arrays
    while (i < arr1.length && j < arr2.length) {
        // If current element in arr1 is smaller, add it to merged array
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++; // Move arr1 pointer forward
        } else {
            // Otherwise add current element from arr2
            mergedArray.push(arr2[j]); 
            j++; // Move arr2 pointer forward
        }
    }

    // At this point, one array is exhausted
    // Add any remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add any remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    // Return the final merged and sorted array
    return mergedArray;
}