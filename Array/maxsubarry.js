// kandane alogorithm
// declared array
let arr = [1,2,-3,-4,-5]
// window size
let k = 4
let maxSum = -Infinity
for(let i = 0 ; i <= arr.length - k ; i++){
	//variable to store sub array
     let sum = 0
    //inner loop for assigning the value to J variable 
	for(let j = i ; j < i+k;j++){
		// value is push into the array
	  sum += arr[j]
	}
	
	maxSum = Math.max(maxSum,sum)
}
console.log(maxSum)