const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

/*function getAverageStudentScore(students) {
  // Start coding here
  return (students.reduce((accumulator, value) => (accumulator + value.score), 0))/students.length
}*/

function makeAverageScore(accumulator, currentValue) {
  return (accumulator + currentValue.score/students.length)
}

let averageScore = (students.reduce(makeAverageScore,0))
console.log(averageScore);


//console.log(getAverageStudentScore(students)); // Output: 87.5
