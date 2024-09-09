// Lab 1 
// Yasaman Mirvahabi Sabet
// 101217770


// Exercise 1 :

function CapFirstLetter(str){
    // Spliting string into words
    let words = str.split(" ");

    // Capitalizing the first letters
    let capital = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Joinning the words into one string 
    return capital.join(" ");
}

// Example:
let example = "the quick brown fox";
let result = CapFirstLetter(example);
console.log(result);