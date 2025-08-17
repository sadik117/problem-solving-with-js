const str = "programming";

function countVowels(str) {
  const vowels = "aeiouAEIOU";

  let count = 0;
  for (let element of str) {
    if (vowels.includes(element)) {
      count++;
    }
}
return count;
}
console.log(countVowels(str));
