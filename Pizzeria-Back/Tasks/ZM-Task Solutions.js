// ZM-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

function rotateArray(arr, index) {
    if (index < 0 || index >= arr.length) {
      throw new Error("Index out of bounds");
    }
    
    const part1 = arr.slice(0, index + 1);
    const part2 = arr.slice(index + 1);
    
    return [...part2, ...part1];
  }
  
  const ZM_TASK= rotateArray([1, 2, 3, 4, 5, 6], 3);
  console.log(ZM_TASK); 