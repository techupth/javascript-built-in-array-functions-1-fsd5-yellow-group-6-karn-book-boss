let words = ["apple", "cat", "dog", "elephant"];

function checkWord(words) {
  return words.filter((words) => words.length >= 5);
}

const result = checkWord(words);
console.log(result);
