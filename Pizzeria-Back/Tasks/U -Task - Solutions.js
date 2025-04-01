// U-TASK:

// Shunday function yozing, uni number parametri bolsin 
// va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

function sumOdds (int) {
    let count = 0
    for (let i = 0 ; i<int ; i++){
        if(i%2 == 1){
            count++
        }
    }return count
}

console.log(sumOdds(9))


// Solution 2
function sumOdd(int) {
    // More optimal solution using Math.floor
    // For any number n, there are Math.floor(n/2) odd numbers from 0 to n
    return Math.floor(int/2);
}