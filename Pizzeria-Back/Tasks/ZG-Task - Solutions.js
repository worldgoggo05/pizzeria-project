// ZG-Task

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin. 
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

// My Solution
function lowerc(str){
    return str.split(' ').join('_').toLowerCase()
}

console.log(lowerc('Name should be String'))

// Alternative solution
function toSnakeCase(str) {
    return str
        .trim() //removes whitespace from both the beginning and end of a string
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // Remove special characters
        .replace(/\s+/g, '_');    // Replace spaces with underscore
}

console.log(toSnakeCase('Name should be String')); // name_should_be_string