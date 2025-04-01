// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1

const unli = (str) => {
    let vl = ['a', 'e', 'i', 'o', 'u']
    let counter = 0;
    let st = str.toLowerCase()
    for(let i of st){
        if (vl.includes(i)){
            counter++
        }
    }return counter
}
console.log(unli("stringaa"))


// Alternative solution 1: Using regex
const countVowels = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowels("stringaa")); // 3

// Alternative solution 2: Using filter
const getVowels = (str) => {
    return str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
}

console.log(getVowels("stringaa")); // 3

// Alternative solution 3: Using reduce
const vowelCount = (str) => {
    return str.toLowerCase().split('').reduce((acc, char) => {
        return 'aeiou'.includes(char) ? acc + 1 : acc;
    }, 0);
}

console.log(vowelCount("stringaa")); // 3

// Alternative solution 4: Using forEach
const countVowelsForEach = (str) => {
    let count = 0;
    str.toLowerCase().split('').forEach(char => {
        if ('aeiou'.includes(char)) count++;
    });
    return count;
}

console.log(countVowelsForEach("stringaa")); // 3
