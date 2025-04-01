    // J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

function findLongestWord(str){
    let arr = str.split(" ")
    let longWord = ""
    for(let char of arr){
        if (char.length > longWord.length) {
            longWord = char;
        }
    }return longWord
}

console.log(findLongestWord("I come from Uzbekistan"))

// Alternative Solution 1: Using reduce()
function findLongestWord2(str) {
    return str.split(" ").reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

console.log(findLongestWord2("I come from Uzbekistan"));

// Alternative Solution 2: Using sort()
function findLongestWord3(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0];
}

console.log(findLongestWord3("I come from Uzbekistan"));

// Alternative Solution 3: Using Math.max() with map()
function findLongestWord4(str) {
    const words = str.split(" ");
    const maxLength = Math.max(...words.map(word => word.length));
    return words.find(word => word.length === maxLength);
}

console.log(findLongestWord4("I come from Uzbekistan"));
