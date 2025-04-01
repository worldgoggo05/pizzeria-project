// TASK V
// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

// HINTS:
// 1. Split the string into array of characters
// 2. Create empty object to store counts
// 3. Loop through characters:
//    - If character exists in object, increment count
//    - If not, add character with count 1
// 4. Return the object

function countChars(str){
    let list = str.split('')
    let sum = {}
    for(const ele of list){
        // This line counts the occurrences of each character:
        // 1. sum[ele] checks if the character exists in the object
        // 2. If it exists, use its current value, if not use 0 (that's what || 0 does)
        // 3. Add 1 to whichever value was used
        // For example, for 'hello':
        // First 'l': sum['l'] = (undefined || 0) + 1 = 1
        // Second 'l': sum['l'] = (1 || 0) + 1 = 2
        sum[ele] = (sum[ele] || 0) +1
    }
    console.log(sum)
}
countChars('engineer')