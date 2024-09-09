// Lab 1 
// Yasaman Mirvahabi Sabet
// 101217770


// Exercise 3 :
function right(str){
    // Check for length
    if(str.length < 3){
        return str;
    }

    // Getting the last 3 characters and rest parts
    let last3 = str.slice(-3);
    let rest = str.slice(0, -3);

    // Moving last 3 to the start
    return last3 + rest;
}

// Example:
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));