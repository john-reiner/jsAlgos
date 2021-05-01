const makeChange = cents => {
    const values = [25, 10, 5, 1]
    let returnArray = new Array(4)
    let currentValue = cents
    for (let i = 0; i < values.length; i++) {
        if (currentValue < 1) currentValue *= 10;
        let coinCountValue = (currentValue / values[i]).toString()
        let valueArray = coinCountValue.split('.')
        let coinCount = +valueArray[0]
        let coinRemainder = valueArray.length > 1 ? +valueArray[1] : 0
        returnArray[i] = coinCount
        currentValue = values[i] * (coinRemainder / 100)
    }
    return returnArray 
}

console.log(makeChange(1000))