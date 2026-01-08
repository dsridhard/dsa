// declared array
let arr = [1,2,3,4,5]
// window size
let k = 3

//outter loop for restrict size of the window 
for(let i = 0 ; i < arr.length - k ; i++){
	//variable to store sub array
	let subarry =[]
    //inner loop for assigning the value to J variable 
	for(let j = i ; j < i+k;j++){
		// value is push into the array
	 subarry.push(arr[j])
	}
	
}

