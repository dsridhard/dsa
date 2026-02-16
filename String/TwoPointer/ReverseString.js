// Original string
let name = 'John';

// Variable to store the reversed string
let reversed = '';

// Loop through each character using for...of
for (let a of name) {
    // Prepend each character to build the reversed string
    reversed = a + reversed;
}

console.log('Original:', name);
console.log('Reversed:', reversed);


