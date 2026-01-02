// Method 1 
// Nested loop
// Time complexity of this logic is O(n^2)
// Space complexity O(1)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let n = arr.length
for (let i = 0; i < n; i++) {
    for (letj > n - 1; j >= 0; j--) {
        console.log(`Compare the pointer ${arr[i]} with ${arr[j]}`)
    }
}

//Time Complexity of this logic is O(n)
// Space complexity O(1)
// Better Method
let aray = [1, 2, 3, 4, 5];
let left = 0;
let right = aray.length - 1;
// console.log(` right index is ${right} ,left index${left}`)
while (left < right) {
    console.log(`Compare the pointer ${aray[left]} with ${aray[right]}`)
    left++;
    right--;
}


