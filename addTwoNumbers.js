// inputs are 2 linked list
var addTwoNumbers = function(l1, l2) {
    // create new node for the new linked list result
    let List = new ListNode(0)
    let head = List
    //need a sums of added values and carry if the sum is more/equal than 10
    let sum = 0
    let carry = 0

    // iterate through list 1, list 2 and if the sum is bigger than 0
    while(l1 !== null || l2 !== null || sum > 0){
        // add the values to sum for each iteration
        if (l1 !== null){
            sum += l1.val
            l1 = l1.next
        }

        if (l2 !== null){
            sum += l2.val
            l2 = l2.next
        }
        
        // if the addition is more than 9, eg: 10, 11. than carry
        // needs to be 1 and added to the next value
        if(sum >= 10){
            carry = 1
            sum -= 10
        }

        // after adding both values, sign the sum value to the new list value
        head.val = sum

        // adding the carry to the next new node and later to be add
        // with other values
        // also move the pointer
        if (l1 !== null || l2 !== null || carry > 0){
            head.next = new ListNode(carry)
            head = head.next
        }

        // update the sum with the carry value if it exist
        // and update/reset carry to 0 value
        sum = carry
        carry = 0
    }

    return List
};
