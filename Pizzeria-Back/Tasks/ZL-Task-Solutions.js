// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin.
// Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab("I love Kebab") return "i-love-kebab"

function kebab(str) {
    // Convert to lowercase first
    // Replace any non-alphanumeric characters with spaces
    // Split by any whitespace, filter out empty strings, join with hyphens
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ' ')
        .split(/\s+/)
        .filter(Boolean)
        .join('-');
}
console.log(kebab('I Love Kebab'));