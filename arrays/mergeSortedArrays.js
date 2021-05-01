let array1 = [0,3,4,31]
let array2 = [4,6,30]

const mergeSortedArrays = (array1, array2) => {
    let newArray = array1.concat(array2)
    return newArray.sort()
}

console.log(mergeSortedArrays(array1, array2))


