// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
// orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// 1. Brute force approach
function palindromCheck(str){
    return str == str.split('').reverse().join('')
}

console.log(palindromCheck('alla'))

// 2. Two pointer approach
function palindromeCheck1(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(palindromeCheck1('alla')); // true