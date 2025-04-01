//---------- C-TASK -----------------

// My Solution 
const letterExist =  (str,str2) => {
    const string1 = str.split('').sort().join('');
    const string2 = str2.split('').sort().join('');
    if( string1 == string2){
        return true
    }else{
        return false
    }
}
console.log(letterExist("mitgroup", "gmtiprou")) // true


// Alternative Solution 1
const letterExist2 = (str,str2) => {
    return str.split('').sort().join('') === str2.split('').sort().join('')
}
console.log(letterExist2("mitgroup", "gmtiprou")) // true




