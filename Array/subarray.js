// declared array
let arr = [1,2,3,4,5]
// window size
let k = 3


//This is brute force method
//outter loop for restrict size of the window
//Time Complexity of this code if 
 
for(let i = 0 ; i < arr.length - k ; i++){
	//variable to store sub array
	let subarry =[]
    //inner loop for assigning the value to J variable 
	for(let j = i ; j < i+k;j++){
		// value is push into the array
	 subarry.push(arr[j])
	}
	
}

/* Note
how to it works
first i = 0 and it run till arr.length-k which is 5-3 =2  and increment
then it goes to second loop which assign value to j by pushing value into subarray from 0 index till index 2 
again it i value increase to 1 and j point to value 1 and push value

If you want to count the number of subarray just add a variable after j loop like 
 subarrcount +=1 which keeps the count 
*/

