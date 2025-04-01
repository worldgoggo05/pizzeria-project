function missing(arr){
    const n = arr.length
    const total = n*(n+1)/2
    const actual = arr.reduce((acc,val)=> acc+val,0)
    return total-actual 
}

console.log(missing([3,0,1,5,2]))