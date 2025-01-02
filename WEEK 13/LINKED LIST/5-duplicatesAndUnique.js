function removeDuplicateNodeFromSorted(head){
    let current = head;
    while(current && current.next){
        if(current.data === current.next.data){
            current.next = current.next.next;
        } else {
            current = current.next;
        } 
    }
    return head;
}

function removeDuplicateNodeFromUnSorted(head){
    let seen = new Set();
    let current = head;
    let prev = null;
    while(current){
        if(seen.has(current.data)){
            prev.next = current.next;
        } else{
            seen.add(current.data);
            prev = current;
        }

        current =current.next;
    }
    return head;
}

