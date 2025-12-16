// how to declare array 

// Integer array
const integerArray = [1, 2, 3, 4, 5, 6];
// String array
const stringArray = ["hello", "world"]

// Dimensional of array 

// One dimensional array 
// Only a single row exists in the one-dimensional array and every element within the array is accessible by the index
const OneDArray = [1, 2, 3, 4, 5, 6];
// MultiDimensional array 
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Array with object 
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 }
];

// Array with an object inside
const data = [
    {
        id: 1,
        name: "Alice",
        // This property holds an array with an object that has no named key
        items: [
            { color: "red", size: "M" }, // anonymous object in array
            { color: "blue", size: "L" }
        ]
    }
];
