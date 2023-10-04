const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

const linkedListTimeing = (new2) =>{
    let timeStart = Date.now();
    for(let i = 0; i < 10000000; i++){
        new2.addToHead(i);
    }
    let timeEnd = Date.now();
    console.log(`${timeEnd - timeStart}`)
}
const new2 = new DoublyLinkedList();
linkedListTimeing(new2)
