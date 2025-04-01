/* ------ Task X -------  */
/** 
Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda
*/

function countOccurrences(obj, key) {
  let count = 0;

  // Check each property in the object
  // prop represents each property name/key in the object
  for (let prop in obj) {
    // If property name matches key, increment counter
    if (prop === key) {
      count++;
    }
    
    // If property value is an object, recursively check it
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      count += countOccurrences(obj[prop], key);
    }
  }

  return count;
}

// Test cases
console.log(countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model')); // 2
console.log(countOccurrences({name: 'John', details: {name: 'John Doe', age: 20}}, 'name')); // 2
console.log(countOccurrences({id: 1, data: {id: 2, info: {id: 3}}}, 'id')); // 3



