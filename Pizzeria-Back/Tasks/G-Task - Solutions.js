// Solution 1 - Using Math.max() and indexOf()
const indexFnd = (arr) => {
    let bigI = Math.max(...arr) // Find maximum value
    return arr.indexOf(bigI)    // Get index of max value
}

console.log(indexFnd([2,21,14,13,21])) // 1

// Solution 2 - Using reduce() to track max value and index
const findMaxIndex = (arr) => {
    return arr.reduce((maxInfo, curr, idx) => {
        // If current value is larger, update max value and index
        if (curr > maxInfo.max) {
            return { max: curr, index: idx }
        }
        return maxInfo
    }, { max: arr[0], index: 0 }).index
}

console.log(findMaxIndex([2,21,14,13,21])) // 1

// Solution 3 - Using traditional for loop
function getMaxIndex(arr) {
    let maxVal = arr[0]
    let maxIdx = 0
    
    // Loop through array to find max value and its index
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i]
            maxIdx = i
        }
    }
    return maxIdx
}

console.log(getMaxIndex([2,21,14,13,21])) // 1
