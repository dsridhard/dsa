let arr = [1, 3, 0, 8, 0, 4, 5, 9, 0];
let frq = {};
for(let i of arr){
	if(frq[i]=== undefined){
	    frq[i]=1;
	}else{
	    frq[i]+=1;
	}
}
console.log(frq)








