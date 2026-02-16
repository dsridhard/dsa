// LinkedList basic code
class Node{
  constructor(data){
    this.head = data;
	this.next = null
   }
}

let head = new Node()
head.next = new Node(10)
head.next.next = new Node(20)
head.next.next = new Node(30)
head.next.next.next = new Node(40)

let temp = head 
while(temp ! == null)
{
 process.stdout.write(temp.data + " ");
 this.next = next
}
//Dynamic code 
class LinkedList{
 constructor(){
  this.head = null
 }
 add(data){
  let newNode = new Node(data);
  if(this.head === null){
	  this.head = newNode
	  return
     }
	 let temp = this.head;
	 while(temp.next ! ==null){
		 temp = temp.next;
	 }
	 temp.next =newNode
  }
  print(){
	  let temp = this.head;
	  while(temp !== null){
		  console.log(temp.data);
		  temp = temp.next;
	  }
  }

}

//Explanation of add Method
ad(data){
	//Create a New Node
	let newNode = new Node(data);
	//Check if list is empty
	//Why check?
	// # head means starting point of the list
	// # if head is null, the list is empty
    // Before:
    // head -> null
     
    // After add(10)
    // head -> [10|null]	 
	if(this.head == null){
		 // Start traversing from head
	    // temp is a pointer/reference used to move through the list 
		this.head = newNode;
		return
	}
	//Here head is point to temp variable
	let temp = this.head;
	// Move to the last Node 
	while (temp.next ! == null){
		temp = temp.next;
	
	}
	
	//Attach the New Node
	temp.next = newNode;
}

/*
 Very Important Interview Point 
  LinkedList does not have direct access like Array
  So, to reach the end, we must traverse node by node 


 */

