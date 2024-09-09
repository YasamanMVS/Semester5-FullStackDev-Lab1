// Lab 1 
// Yasaman Mirvahabi Sabet
// 101217770


// Exercise 5 :

function ArrayMaxSum(arr, k){
    let maxSum = 0;
    let tempSum = 0;

    // Initializing the first window sum of size k
    for (let i = 0; i < k; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // Compute the sum
    for (let i = k; i < arr.length; i++){
        tempSum = tempSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
}

// Example:
console.log(ArrayMaxSum([1, 2, 3, 14, 5], 2));
console.log(ArrayMaxSum([2, 3, 5, 1, 6], 3));
console.log(ArrayMaxSum([9, 3, 5, 1, 7], 2));