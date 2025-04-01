// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 
// 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi 
// raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

function changeNumberInArray(index, arr, newNumber) {
    // Input validation
    if (!Array.isArray(arr)) return [];
    if (index < 0 || index >= arr.length) return arr;
    
    // Create a new array instead of mutating the original
    const newArr = [...arr];
    newArr[index] = newNumber;
    return newArr;
}

console.log(changeNumberInArray(1, [1,3,7,2], 2))