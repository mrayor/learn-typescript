let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothing: null = null;
let none: undefined = undefined;

//built in object

let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, true];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let points: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations

//1) when a function returns any
//avoid variables with any at all cost

const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

//when we declare a variable on one line and re initialize later
let words = ["red", "green", "blue"];
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element === "green") {
    foundWords = true;
  }
}

//variable whose type cannot be infered= corrections

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element > 0) {
    numberAboveZero = numbers[i];
  }
}
