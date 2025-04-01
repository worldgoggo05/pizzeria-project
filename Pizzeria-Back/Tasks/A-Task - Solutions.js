// ------------ A-TASK: --------------
// My Solution - Big O(n)
const countLetters = (letter, str) => {
    return str.split('').filter(char => char === letter).length
}
console.log(countLetters("e", "engineer"));

// ----
// Alternative solution 1: Using reduce - Big O(n)
const countLettersReduce = (letter, str) => {
    return str.split('').reduce((count, char) => char === letter ? count + 1 : count, 0);
}
console.log(countLettersReduce("e", "engineer"));

// ----
// Alternative solution 2: Using match with regex - Big O(n)
const countLettersRegex = (letter, str) => {
    // Create a regex pattern to find all occurrences of the letter
    const regex = new RegExp(letter, 'g');
    // match() finds all matches and returns array, || [] handles case when no matches found
    return (str.match(regex) || []).length;

    // match() - bu stringdagi barcha qiymatlar ro'y beradigan qiymatni qaytaradi
    // RegExp() - bu regular expression (muntazam ifoda) yaratish uchun JavaScript konstruktori
    // RegExp orqali matn ichidan ma'lum pattern/shablon bo'yicha qidirish mumkin
}
console.log(countLettersRegex("e", "engineer")); 

// ----
// Alternative solution 3: Using for...of loop - Big O(n)
const countLettersLoop = (letter, str) => {
    let count = 0;
    for (let char of str) {
        if (char === letter) count++;
    }
    return count;
}
console.log(countLettersLoop("e", "engineer"));