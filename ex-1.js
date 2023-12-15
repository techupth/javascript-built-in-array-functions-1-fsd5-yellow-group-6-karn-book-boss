let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  /*return words.length*/ //วิธีอีกแบบ1
  let length = words.map((countChar) => countChar.length)
  return length
}

/*let length = words.map(getWordLengths); //วิธีอีกแบบ1
console.log(length)*/ //วิธีอีกแบบ1


const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
