// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

const array = [-2]

const maxSubArray = array => {
    let count = 0
    let max = Math.max(...array)
    let maxIndex = array.indexOf(max)
    let array2 = []
    for (let i = maxIndex; i < array.length; i++) {
        count += array[i]
        array2.push(count)
        
    }
    return Math.max(...array2)
}

console.log(maxSubArray(array))