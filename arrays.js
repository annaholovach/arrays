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

const people = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Bob' },
    { id: 6, name: 'Jane' },
];
const getName = (person) => person.name
const numbers = [1, 2, 3, 4, 5, 6, 7, 7, 6 ,8, 4, 3, 2, 32, 45, 42]

const uniquePeople = customFilterUnique(people, getName);
const uniqueNumbers = customFilterUnique(numbers, (number) => number)
// console.log(uniqueNumbers)
// console.log(uniquePeople);

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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray = chunkArray(arr, 3);
console.log(chunkedArray);

// 3

function customShuffle (array) {
    const shuffledArray = array.slice()

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    return shuffledArray
}

console.log(customShuffle(arr))

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
let sigma = [1, 2, 3, 4, 5, 7]
let alpha = [1, 2, 4, 6, 8]
console.log(getArrayIntersection(arr, numbers))

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

console.log(getArrayUnion(sigma, alpha))

// 5

function measureArrayPerformance (func, array) {
    const start = Date.now()
    func(array)
    const end = Date.now()
    return end - start
}

const test = Array.from({ length: 100000 }, (_, index) => index + 1);
const mapTime = measureArrayPerformance((arr) => arr.map((num) => num * 2), test);
console.log('map time:', mapTime, 'ms');

const filterTime = measureArrayPerformance((arr) => arr.filter((num) => num % 2 === 0), test);
console.log('filter time:', filterTime, 'ms');

const reduceTime = measureArrayPerformance((arr) => arr.reduce((acc, num) => acc + num, 0), test);
console.log('reduce time:', reduceTime, 'ms');
