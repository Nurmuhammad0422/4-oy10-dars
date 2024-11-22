// 1-.
let products = [
  { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
];

products = products.filter((product) => product.id !== 4);

console.log(products);
// 2-.
let people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

people.sort((a, b) => a.age - b.age);
let ageDifference = people[people.length - 1].age - people[0].age;

console.log(ageDifference);
// 3-.
function countCase(str) {
  let result = { uppercase: 0, lowercase: 0 };
  for (let char of str) {
    if (char >= "A" && char <= "Z") result.uppercase++;
    else if (char >= "a" && char <= "z") result.lowercase++;
  }
  return result;
}

console.log(countCase("Hello World!"));
// 4-.
function evenOddIndexSums(arr) {
  let result = { evenIndexSum: 0, oddIndexSum: 0 };
  arr.forEach((num, index) => {
    if (index % 2 === 0) result.evenIndexSum += num;
    else result.oddIndexSum += num;
  });
  return result;
}

console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6]));
// 5-.

function rotateMatrix(matrix) {
  let rotated = [];
  for (let col = matrix[0].length - 1; col >= 0; col--) {
    let newRow = matrix.map((row) => row[col]);
    rotated.push(newRow);
  }
  return rotated;
}

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// 6-.
function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}

console.log(removeSpaces("Hello World! How are you?"));
// 7-.
function areAnagrams(str1, str2) {
  let normalize = (str) => str.split("").sort().join("");
  return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
// 8-.
function mostFrequentElement(arr) {
  let frequency = {};
  arr.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));
  return Object.keys(frequency).reduce((a, b) =>
    frequency[a] > frequency[b] ? +a : +b
  );
}

console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1]));
// 9-.
function sumOfDigits(str) {
  return str.split("").reduce((sum, char) => sum + (parseInt(char) || 0), 0);
}

console.log(sumOfDigits("abc123def45"));
// 10-.
function letterFrequency(str) {
  let frequency = {};
  for (let char of str.replace(/\s+/g, "")) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}

console.log(letterFrequency("hello world"));
