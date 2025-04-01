// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

function findDisappearedNumbers(arr) {
    const max = Math.max(...arr);
    const result = [];
    for (let i = 1; i <= max; i++) {
        if (!arr.includes(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(findDisappearedNumbers([1, 3, 4, 7]));
