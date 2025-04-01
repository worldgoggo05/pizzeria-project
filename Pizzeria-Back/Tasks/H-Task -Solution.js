// H-Task

function getPositive(arr){
    return arr.filter(a => a > 0).join("")
}

console.log(getPositive([-8,2,2,-1]))

// Alternative Solution 1: Using reduce
function getPositiveReduce(arr) {
    return arr.reduce((acc, curr) => curr > 0 ? acc + curr : acc, "");
}

console.log(getPositiveReduce([-8,2,2,-1])); // "22"

// Alternative Solution 2: Using for loop
function getPositiveLoop(arr) {
    let result = "";
    for(let num of arr) {
        if(num > 0) {
            result += num;
        }
    }
    return result;
}

console.log(getPositiveLoop([-8,2,2,-1])); // "22"

// Alternative Solution 3: Using map and join
function getPositiveMap(arr) {
    return arr.map(num => num > 0 ? num : "").join("");
}

console.log(getPositiveMap([-8,2,2,-1])); // "22"
