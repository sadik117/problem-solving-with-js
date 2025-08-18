function findEvenNumbers(array) {
    return array.filter(num => num % 2 === 0);
}

console.log(findEvenNumbers([2,6,7,9,12,13,16,17,20]));