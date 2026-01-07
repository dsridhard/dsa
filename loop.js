// Different examples of loop traversing in JavaScript

// Sample array to iterate over
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Sample object to iterate over
const person = {
  fname: 'John',
  lname: 'Doe',
  age: 25,
};

// 1. for loop
console.log('--- for loop ---');
for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}

// 2. for...in loop (for iterating over object properties)
// Note: Not recommended for arrays, but useful for objects.
console.log('\n--- for...in loop (for objects) ---');
for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// 3. for...of loop (for iterating over iterable objects like arrays, strings, etc.)
console.log('\n--- for...of loop (for arrays) ---');
for (const fruit of fruits) {
  console.log(fruit);
}

// 4. while loop
console.log('\n--- while loop ---');
let j = 0;
while (j < fruits.length) {
  console.log(fruits[j]);
  j++;
}

// 5. do...while loop
// This loop will execute at least once, even if the condition is false.
console.log('\n--- do...while loop ---');
let k = 0;
do {
  if (fruits.length > 0) {
      console.log(fruits[k]);
  }
  k++;
} while (k < fruits.length);


// 6. forEach() method for arrays
// Note: forEach is a method on the Array prototype, not a standalone loop.
console.log('\n--- forEach method for arrays ---');
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// --- Advanced Looping Patterns ---

const numbers = [10, 20, 30, 40, 50, 60, 70];

// 1. Loop from the first index (standard forward loop)
console.log('\n--- Loop from First Index ---');
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

// 2. Loop from the last index (standard backward loop)
console.log('\n--- Loop from Last Index (Backwards) ---');
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

// 3. Two pointers moving towards each other from opposite ends
console.log('\n--- Two Pointers from Opposite Ends ---');
let left = 0;
let right = numbers.length - 1;
while (left < right) {
    console.log(`Left Pointer: ${numbers[left]}, Right Pointer: ${numbers[right]}`);
    left++;
    right--;
}
// If the array has an odd number of elements, the middle one is missed.
if (left === right) {
    console.log(`Middle Element: ${numbers[left]}`);
}


// 4. Two adjacent pointers starting from the beginning
console.log('\n--- Two Adjacent Pointers from Start ---');
// This runs until the second pointer reaches the end of the array
for (let i = 0; i < numbers.length - 1; i++) {
    let pointer1 = i;
    let pointer2 = i + 1;
    console.log(`Pair: ${numbers[pointer1]} (index ${pointer1}), ${numbers[pointer2]} (index ${pointer2})`);
}

