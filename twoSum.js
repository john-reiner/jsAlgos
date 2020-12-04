// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const array = [1,2,3,4,5,6,7,8,9]
const target = 8

const twoSum = (array, target) => {
    returnedPair = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] + array[j] === target) {
                returnedPair = [i, j]
            }
        }
    }
    return returnedPair
}

console.log(twoSum(array, target))