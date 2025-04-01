// ZR-Task

interface CountResult {
    number: number;
    letter: number;
}

function countNumberAndLetters(str: string): CountResult {
     // RegExp yordamida raqam va harflarni topamiz
    const numbers: string[] = str.match(/\d/g) || [];
    const letters: string[] = str.match(/[a-zA-Z]/g) || [];
    
    // Natijani object ko'rinishida qaytaramiz
    return {
        number: numbers.length,
        letter: letters.length
    };
}

// Test misollar
console.log(countNumberAndLetters("string152%\¥")); // {number: 3, letter: 6}
console.log(countNumberAndLetters("Web8Development2023")); // {number: 4, letter: 13}
console.log(countNumberAndLetters("12345")); // {number: 5, letter: 0}


