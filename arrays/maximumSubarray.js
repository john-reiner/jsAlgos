// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

nums = [-2,1,-3,4,-1,2,1,-5,4]
nums2 = [1,2]

const maxSubArray = nums => {
    let currentCount = nums[0]
    
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] > currentCount ) {
            currentCount += nums[i]
        } 
        console.log(currentCount)
    }
    return currentCount
}



console.log(maxSubArray(nums))
