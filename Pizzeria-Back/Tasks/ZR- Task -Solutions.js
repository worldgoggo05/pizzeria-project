// ZR-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters("string152%\¥") return {number:3, letter:6}

function countNumberAndLetters(str) {
    // RegExp yordamida raqam va harflarni topamiz
    const numbers = str.match(/\d/g) || [];
    const letters = str.match(/[a-zA-Z]/g) || [];
    
    // Natijani object ko'rinishida qaytaramiz
    return {
        number: numbers.length,
        letter: letters.length
    };
}

// Test misollar:
console.log(countNumberAndLetters("string152%\¥")); // {number: 3, letter: 6}
console.log(countNumberAndLetters("Web8Development2023")); // {number: 4, letter: 13}
console.log(countNumberAndLetters("12345")); // {number: 5, letter: 0}
