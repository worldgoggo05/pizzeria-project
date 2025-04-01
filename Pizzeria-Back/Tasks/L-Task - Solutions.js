// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc";


// My solution
function revSen (str){
    let st = str.split(' ')
    return st.map(a=>a.split('').reverse().join('')).join(' ')
}

// console.log(revSen('we like coding'))

// Optimal Solution
function revSent(str) {
    return str
        .split(' ') // Split into words
        .reduce((acc, word) => acc + ' ' + [...word].reverse().join(''), '') // Reverse each word and accumulate
        .trim(); // Remove the leading space
}
console.log(revSent('we like coding'))