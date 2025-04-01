// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. 
// String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

// Method A using Set is more optimal because:
// 1. Time complexity is O(n) vs O(n^2) for filter method
// 2. More concise and readable code
// 3. Set is specifically designed for removing duplicates
// 4. No need for explicit array iteration

// Spread operator converts Set back to array
// Set automatically removes duplicates when created
// [...new Set(str)] 

function removeDuplicate(str){
    return [...new Set(str)].join('')
}
console.log(removeDuplicate('strrringg'))


// Method B using filter
function removeDuplicateWithFilter(str) {
    return str.split('').filter((char, index, arr) => arr.indexOf(char) === index).join('');
    // arr is the array created from the input string
    // arr.indexOf(char) returns first occurrence of char
    // if current index matches first occurrence, keep the character
    // this effectively removes duplicates since indexOf always returns
    // the first position, so later duplicates won't match their index
}
console.log(removeDuplicateWithFilter('strrringg'))
