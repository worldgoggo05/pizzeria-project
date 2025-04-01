// Y-Task

// Shunday function yozing, uni 2 ta array parametri bolsin.
// Function ikkala arrayda ham ishtirok etgan qiymatlarni 
// bir arrayda qaytarsin
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]


function common(arr1, arr2) {
    // Convert second array to Set for O(1) lookups
    const set = new Set(arr2);
    
    // Filter first array checking against Set
    return arr1.filter(num => set.has(num));
}

// Test cases
console.log(common([1,2,3], [3,1,5])); // [1,3]
console.log(common([1,2,3], [3,2,0])); // [2,3]



// My solution
function abc(arr3,arr4){
    return arr3.filter(b=> arr4.includes(b))
}

console.log(abc([9,8,7],[6,7,8]))
