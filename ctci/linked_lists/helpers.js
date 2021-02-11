module.exports = {
    constructLLFromArr: function (arr) {
        let head = null;
    
        for(let i = arr.length-1; i >= 0; i--) {
            let newNode = {
                data: arr[i],
                next: head
            }
            head = newNode;
        }
        
        return head;
    },
    compareLL: function (a, b) {
        while(a != null && b != null) {
            if(a.data != b.data)
                return false;
            a = a.next;
            b = b.next;
        }
        return a == null && b == null;
    }
}