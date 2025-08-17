const arr = [3,9,11,17]

function arraySummation(arr) {

    return arr.reduce((sum,num) => sum + num, 0);
    
}
console.log(arraySummation(arr));