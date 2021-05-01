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

// loop over array and check to see if complement is stored in object 
// if not, store it in the object 
// if it is return true 

const findSums1 = (arr, target) => {
    let map = {}
    for (let i = 0; i < arr.length; i ++) {
        let complement = target - arr[i]
        if (map[arr[i]]) {
            let pair = [complement, arr[i]]
            return pair
        }
        map[complement] = true
    }
    return false
}


console.log(findSums1(arr2, target1))