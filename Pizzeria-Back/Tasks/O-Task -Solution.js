// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat 
// array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

//My Solution
function calSum(arr){
    return arr.filter(a => typeof a == "number").reduce((acc,val)=> acc + val,0)
}

console.log(calSum([10,"10",{son:10},true, 35]))

//Second Solution Optimal
function calSum2(arr) {
    return arr.reduce((acc, val) => typeof val === "number" ? acc + val : acc, 0);
}

console.log(calSum2([10, "10", {son: 10}, true, 35])); // Output: 45
