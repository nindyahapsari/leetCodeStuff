var intersect = function(nums1, nums2) {
    const result = []
    
    for(let i=0; i<nums1.length; i+=1){
        for (let j=0; j<nums2.length; j+=1) {
            if (nums1[i] === nums2[j]) {
                result.push(nums1[i])
                nums2.splice(j, 1)
                break
            }
        }
    }
    
    return result
};
