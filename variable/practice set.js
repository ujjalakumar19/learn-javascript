console.log("create a variable of type string and try to adda number to it ")
let a ="test"
let b =""
c= a+b
console.log(c)
// // let myString = "The number is: ";
// let myNumber = 42;

// let result = myString + myNumber;

// console.log(result); // Output: "The number is: 42"

console.log("use type of operator to find the datatype of the string in last question")
let myString = "Hello, World!";
let dataType = typeof myString;

console.log(dataType); // Output: "string"
console.log("create a const object in javascript  can you change it to hold a number later ")
const ujjala= 72
ujjala=14
console.log(ujjala)
const myObject = {
    value: "Hello, World!"
  };
  
  console.log(myObject.value); // Output: "Hello, World!"
  
  myObject.value = 42;
  
  console.log(myObject.value); // Output: 42 
  console.log("try to add a new key to the const object in problem 3 were you able to do it?")
  console.log(" write a js program to create a word- meaning dictionary of 5 words")
//   let afor= apple
//   let bfor = boy
//   let cfor= cat
// let dfor=dog
// console.log(bfor)
// Create an empty object for the dictionary
const dictionary = {};

// Add word-meaning pairs to the dictionary
dictionary["apple"] = "A round fruit with red or green skin and crisp flesh.";
dictionary["cat"] = "A small domesticated carnivorous mammal.";
dictionary["sun"] = "The star around which the earth orbits.";
dictionary["book"] = "A written or printed work consisting of pages glued or sewn together along one side.";
dictionary["computer"] = "An electronic device capable of performing various tasks by executing pre-programmed instructions.";

// Access and display the meaning of a word
const word = "apple";
console.log(`Meaning of "${word}": ${dictionary[word]}`);




