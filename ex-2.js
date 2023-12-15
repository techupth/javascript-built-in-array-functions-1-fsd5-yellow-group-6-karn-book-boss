let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.length > 4
}

let fiveChar = words.filter(get5CharWords);
console.log(fiveChar);


const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
