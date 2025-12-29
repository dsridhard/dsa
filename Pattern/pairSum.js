//Check if pair with the given Sum exits in an array
let arr = [0, -1, 2, -3, 1]
let target = -2
let n = arr.length


function twoSum(arr, target) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + [arr[j] === target]) {
                return true
            }
        }
    }
    return false
}

if (twoSum(arr, target))
    console.log("true");
else
    console.log("false");