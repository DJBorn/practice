module.exports = {
    constructLLFromArr: function (arr) {
        if(arr.length == 0)
            return null;
        let head = {
            data: arr[0],
            next: null
        };
        let curNode = head;
    
        for(let i = 1; i < arr.length; i++) {
            let newNode = {
                data: arr[i],
                next: null
            }
            curNode.next = newNode;
            curNode = curNode.next;
        }
        
        return head;
    },
    compareLL: function (a, b) {
        if(a == null && b == null)
            return true;
        if((a == null && b != null) || (a != null && b == null))
            return false;
        let curA = a;
        let curB = b;
    
        while(curA != null && curB != null) {
            if(curA.data != curB.data)
                return false;
            curA = curA.next;
            curB = curB.next;
        }
        if(curA != null || curB != null)
            return false;
        return true;
    }
}