// 1

function customFilterUnique (array, callback) {
    const uniqueElements = []
    const set = new Set()
    array.map(item => {
        const key = callback(item)
        if (!set.has(key)) {
            set.add(key)
            uniqueElements.push(item)
        }
    })
    return uniqueElements
}

// 2

function chunkArray (array, chunkSize) {
    const result = []
    let startIndex = 0

    while (startIndex < array.length) {
        result.push(array.slice(startIndex, startIndex + chunkSize))
        startIndex += chunkSize
    }
    return result
}

// 3

function customShuffle (array) {
    const shuffledArray = array.slice()

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    return shuffledArray
}

// 4

function getArrayIntersection (arr1, arr2) {
    const result = []
    arr1.map(elem => {
        arr2.map(item => {
            if (elem === item) {
                result.push(item)
            }
        })
    })
    return [...new Set(result)]
}

function getArrayUnion (arr1, arr2) {
    const result = []

    arr1.map(elem => {
        arr2.map(item => {
            if (elem !== item){
                result.push(elem, item)
            }
        })
    })
    return [...new Set(result)]
}

// 5

function measureArrayPerformance (func, array) {
    const start = Date.now()
    func(array)
    const end = Date.now()
    return end - start
}
