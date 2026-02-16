const arr = [1,2,4,5,6]
const n = arr.length + 1
const expectedSum=  (n *(n+1))/2
console.log(expectedSum)
  let acutalSum =0
for(let i = 0 ; i<arr.length;i++){
  
     acutalSum+=arr[i]
}
console.log(acutalSum)
const missingElement = expectedSum - acutalSum
console.log(`Missing Element is ${missingElement}`)


