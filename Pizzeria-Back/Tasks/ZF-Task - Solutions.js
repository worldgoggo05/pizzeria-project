// ZF-Task
// Shunday function yozing, uni string parametri bolsin.
// String ichidagi har bir sozni bosh harflarini katta 
// harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// 1-usul
function capitalizeWords(str){
    // split(' ') - Stringni bo'sh joy bo'yicha massivga ajratadi
    // map() - Har bir element uchun yangi qiymat qaytaradi
    // charAt(0) - So'zning 1-harfini oladi (0-index)
    // toUpperCase() - Harfni katta harfga o'zgartiradi
    // slice(1) - So'zning 1-indeksidan keyingi qismini oladi
    // join(' ') - Massivni stringga qaytaradi, elementlar orasiga bo'sh joy qo'yadi
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
console.log(capitalizeWords('name should be a string')) // Name Should be a String


// 2-usul
function capitalizeWords(str){
    // split(' ') - Stringni bo'sh joy bo'yicha massivga ajratadi
    // map() - Har bir element uchun yangi qiymat qaytaradi
    // word.length > 2 - So'z uzunligi 2 dan katta bo'lsa katta harf bilan boshlanadi
    // : word - aks holda so'z o'zgarishsiz qoladi
    return str.split(' ').map(word => 
        word.length > 2 
            ? word.charAt(0).toUpperCase() + word.slice(1)
            : word
    ).join(' ')
}
console.log(capitalizeWords('name should be a string')) // Name Should be a String
console.log(capitalizeWords('i am in NY')) // i am in NY
