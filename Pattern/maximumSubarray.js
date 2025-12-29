//maximum Subarray
//How  to find the maximum of Sub array 
function maxSubArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            console.log(nums[i], nums[j])
        }
    }


}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(arr))