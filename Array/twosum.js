let arr = [1, 2, 3, 4, 5, 6]
let left = 0 
let right = arr.length-1
let target = 9
while(left<right){
	let sum = arr[left]+arr[right]
	if(sum === target){
	console.log(`Target found: arr[${left}] = ${arr[left]}, arr[${right}] = ${arr[right]}`);
	left++
	right--
	    }
	else if(sum <target){
		left++
	  }
	else{
	right--
	  }
	
}








