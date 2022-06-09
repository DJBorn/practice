// Singly ascending Linked List where tail points to head
// - Insert 

var IncreasingLoopingLL = function() {
	var accessNode = null;
    var length = 0;
	this.insert = function(element) {
		if(element == null)
			return -1;
        
		if(accessNode == null) {
			accessNode = {
				data: element,
				next: null
            }
            accessNode.next = accessNode;
		}
		else {
            var start = accessNode;
            var curNode = accessNode;
            while(curNode.next !== start) {
                // Insert when data is max/min or is at the correct location
                if((curNode.data <= element && element <= curNode.next.data) || 
                   (curNode.data > curNode.next.data && (element >= curNode.data || element <= curNode.next.data))) {
                    var node = {
                        data: element,
                        next: curNode.next
                    }
                    curNode.next = node;
                    break;
                }
                curNode = curNode.next;
            }
            // Insert if entire linkedlist was traversed
            if(curNode.next === start) {
                var node = {
                    data: element,
                    next: curNode.next
                }
                curNode.next = node;         
            }
        }

        length++;
        // Shuffle access node
        var rand = Math.floor(Math.random()*length);
        for(let i = 0; i < rand; i++) {
            accessNode = accessNode.next;
        }
		return element;
    }
    
    this.print = function() {
        var print = "";
        var curNode = accessNode;
        for(let i = 0; i < length; i++) {
            print += curNode.data + " ";
            curNode = curNode.next;
        }
        console.log(print);
    }
}

console.log("Create new linked list");
var LL = new IncreasingLoopingLL();

for(var i = 0; i < 20; i++) {
    LL.insert(Math.floor(Math.random()*20));
    LL.print();
}