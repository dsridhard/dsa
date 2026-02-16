//Find Zeros
let arr = [1, 3, 0, 8, 0, 4, 5, 9, 0];

// Loop backwards so splicing doesn't mess up indexes
debugger
for (let i = 0; i < arr.length; i++) {
    debugger
    if (arr[i] === 0) {
        debugger
        arr.push(arr.splice(i, 1)[0]); // Remove zero and push to end
        debugger
    }
}

console.log(arr);
// Output: [1, 3, 8, 4, 5, 9, 0, 0, 0]

 
