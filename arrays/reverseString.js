const string = 'Hello World!'

const reverseString = (string) => {
    stringArray = string.split('')
    returnArray = []
    for (let i = stringArray.length; i >= 0; i--) {
        const element = stringArray[i];
        returnArray.push(element)
    }
    return returnArray.join('')
}

console.log(reverseString("John Reiner"))