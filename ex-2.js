let words = ["apple", "cat", "dog", "elephant"];

function ii(words) {
  return words.filter((words) => words.split("").length >= 5);
}

const result = ii(words);
console.log(result);
