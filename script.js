class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

        append(data){
            const node = new Node(data)
            if (this.tail) {
                this.tail.next = node
            }
            this.tail = node
            if (!this.head) {
                this.head = node
            }

        }
        prepend(data){
            const node = new Node(data, this.head)
            this.head = node
            if(!this.tail){
                this.tail = node
            }
        }
    toArray() {
        const output = []
        let current = this.head
        while (current) {
            output.push(current.data)
            current = current.next
        }
        return output

    }
    find(data){
        if(!this.head){
            return
        }
        let current = this.head
        while(current){
            if(data === current.data){
                return current
            }
            current = current.next
        }
    }
    insertAfter(after, data){
        let itemBefore = find(after)
        let itemAfter = itemBefore.next

    }

}
const list = new LinkedList()
list.append('1a');
list.append('2a');
list.prepend('3p');
list.prepend('4p');
console.log(list.toArray());

