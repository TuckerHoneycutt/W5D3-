class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = undefined
  }

  addToHead(val) {
    const node3 = new LinkedListNode(val);
    node3.next = this.head;
    this.head = node3;
    this.length++;
  }

  addToTail(val) {
    const newNode = new LinkedListNode(val);
    if(!this.head){
      this.head = newNode;
    }else{
      let curr = this.head;
      while(curr.next){
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++
    return this.length;
}





  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}


module.exports = LinkedList;
