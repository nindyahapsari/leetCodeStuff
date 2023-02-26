var nextPermutation = function(nums) {
   
    const swap = (a, b) => {
        [nums[a], nums[b]] = [nums[b], nums[a]]
    }
    
    const reverse = (left) => {
        let right = nums.length - 1
        while(left < right){
            swap(left, right)
            left++
            right--
        }
        
    }

// check with two pointer if the left is bigger than the right
// the output is to find the next greater permutation in the given array nums

    for(let i = nums.length - 2; i >= 0; i--){
        for(let j = nums.length - 1; j > i; j--){
            if(nums[j] > nums[i]){
                swap(j, i)
                reverse(i + 1)
                return
            }
        }
    }

    reverse(0)
    
};
