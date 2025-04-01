// ZQ-TASK:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.

function findDuplicates(arr) {
    // Sonlarni sanash uchun Map yaratamiz
    const numberCount = new Map();
    // Natija uchun Set yaratamiz (takrorlanmaslik uchun)
    const duplicates = new Set();
    
    // Arrayni aylanib chiqamiz
    for (const num of arr) {
        // Map'da sonni sanash
        numberCount.set(num, (numberCount.get(num) || 0) + 1);
        // Agar son 2 yoki undan ko'p marta uchrasa, duplicates'ga qo'shamiz
        if (numberCount.get(num) >= 2) {
            duplicates.add(num);
        }
    }
    
    // Set'ni array'ga o'girib qaytaramiz
    return Array.from(duplicates);
}

console.log(findDuplicates([1,2,3,4,5,4,5,3,4]))
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]