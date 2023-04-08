export const shuffle = (array) => {
    let newArray = structuredClone(array)
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        newArray[currentIndex] = array[randomIndex]
        newArray[randomIndex] = temporaryValue
    }

    return newArray
}