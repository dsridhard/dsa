function productSelf(nums) {
    let n = nums.length;
    let res = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                res[i] *= nums[j]
            }
        }

    }

    return res

}


let arr = [10, 3, 5, 6, 2];
console.log(productSelf(arr))

// This is navive approach , better logic can be used to do.