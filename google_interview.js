const arr1 = [1,2,3,4,9,7,4,5,6]
const target1 = 7

const arr2 = [1,2,3,4,5]
const target2 = 20

const findSums = (arr, target) => {
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] + arr[j] === target) {
                    return true 
                }
            }
        }
    }
    return false
}


console.log(findSums(arr2, target1))