// Lab 1 
// Yasaman Mirvahabi Sabet
// 101217770


// Exercise 4 :

function angleType(angle){
    if(angle > 0 && angle < 90){
        return "Acute Angle";
    } else if(angle === 90){
        return "Right Angle";
    } else if(angle > 90 && angle < 180){
        return "Obtuse Angle";
    } else if(angle === 180){
        return "Staright Angle";
    }
}

// Example:
console.log(angleType(47));
console.log(angleType(90));
console.log(angleType(145));
console.log(angleType(180));