let arr = [1,2,3,4,5,6]
   console.log(arr)
for(let i= arr.length-1;i>=0;i--){
    arr.push(arr.splice(i,1))
  
    
}
console.log(arr)