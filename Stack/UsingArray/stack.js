class stack {
	constructor(){
	 this.items=[]
	 }
	  // Push element onto the stack
	 push(element){
           if(element === undefined||null){
			   console.error("Cannot push 'undefined' value to the stack.")
			   return;
		   }
          this.items.push(element);
          console.log(`Pushed: ${element}`);	  
	 }
	 // Pop element from the stack
	 pop(element){
		 if(this.items.isEmpty()){
			 console.error("Stack Underflow! Cannot pop from an empty stack.");
            return null;
		 }
		 const removed = this.items.pop()
		 console.error("Stack Underflow! Cannot pop from an empty stack.");
            return null;
	 }
	  // Peek at the top element without removing it
	  peek(){
		  if(this.isEmpty()){
			  console.error("Stack is empty. Nothing to peek.")
			  return null;
			  
		  }
		  return this.items[this.items.length - 1];
	  }
	  
	  isEmpty(){
		 return this.items.length ===0;
	  }
	  size(){
		  return this.items.length
	  }
	  printStack() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
        } else {
            console.log("Stack elements:", this.items.join(" -> "));
        }
    }
	  
	  
	  
	  
	 
}
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.printStack(); // Stack elements: 10 -> 20 -> 30

console.log("Top element:", stack.peek()); // 30

stack.pop(); // Removes 30
stack.printStack(); // Stack elements: 10 -> 20

console.log("Stack size:", stack.size()); // 2
console.log("Is stack empty?", stack.isEmpty()); //