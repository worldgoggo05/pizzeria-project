// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 
// 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan 
// keyin ishini toxtatsin.
// MASALAN: printNumbers()

function printNumbers() {
    let count = 1; // Initialize counter
    const intervalId = setInterval(() => {
        if (count <= 5) {
            console.log(count); // Print the current count
            count++; // Increment the counter
        } else {
            clearInterval(intervalId); // Stop the interval after 5
        }
    }, 1000); // Execute every second

    // Stop the function after 5 seconds
    setTimeout(() => {
        clearInterval(intervalId); // Clear the interval
    }, 5000); // Stop after 5 seconds
}

// Call the function to execute
printNumbers();

