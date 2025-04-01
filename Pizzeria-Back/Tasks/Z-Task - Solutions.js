    // TASK-Z

    // MASALAN:
    // sumEvens([1, 2, 3]); return 2;
    // sumEvens([1, 2, 3, 2]); return 4;

    // Yuqoridagi misolda, bizning funktsiya
    // berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
    // sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

    // Original solution using filter and reduce
    function sumEvens(arr){
        return arr.filter(a => a%2 ==0).reduce((a,b) => a+b,0)
    }
    
    console.log(sumEvens([1,2,3,2])) // 4
    
    // Alternative solution 1: Using reduce only (more optimal)
    function sumEvensReduce(arr) {
        return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
    }
    
    console.log(sumEvensReduce([1,2,3,2])) // 4
    
    // Alternative solution 2: Using for...of loop (most performant)
    function sumEvensLoop(arr) {
        let sum = 0;
        for (let num of arr) {
            if (num % 2 === 0) sum += num;
        }
        return sum;
    }
    
    console.log(sumEvensLoop([1,2,3,2])) // 4