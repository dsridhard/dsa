// Example array and target sum
let arr = [1, 2, 3, 4, 5, 6];
let k = 7;

// Initialize two pointers
let left = 0;
let right = arr.length - 1;

// Two-pointer search
while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === k) {
        console.log(`Element Found: ${arr[left]} + ${arr[right]} = ${k}`);
        left++;
        right--;
    } else if (sum < k) {
        left++; // Need a bigger sum
    } else {
        right--; // Need a smaller sum
    }
}
