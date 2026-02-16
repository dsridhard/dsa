//Palindrome
//check using two pointer

function palindrome (str){
let left = 0
let right = str.length-1
while(left<right){
if (str[left] !== str[right]) {
      return false; // mismatch found
    }
    left++;
    right--;
  }
   return true;
}
console.log(palindrome('abccba'))