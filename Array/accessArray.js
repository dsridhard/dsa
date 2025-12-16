// Accessing One Dimensional array


const OneDArray = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < OneDArray.length; i++) {
    console.log(OneDArray[i])
}

// Accessing multi dimensional array 
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Loop through rows
for (let i = 0; i < matrix.length; i++) {
    // Loop through columns in the current row
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}