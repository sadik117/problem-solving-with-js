const arr = [2, 1, 1, 5, 6, 6, 4];

function removeDuplicate(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicate(arr));