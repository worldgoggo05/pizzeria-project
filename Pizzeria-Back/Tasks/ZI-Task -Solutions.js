// ZI-TASK:

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

function delayHelloWorld(str) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(str);
        }, 3000);
    });
}

async function run() {
    const result = await delayHelloWorld("Hello World");
    console.log(result);
}

run();

