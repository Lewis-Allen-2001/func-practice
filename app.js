console.log("Hello world!");

function sayHello() {
  console.log("Hello world!");
}

sayHello();
sayHello();
sayHello();

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Happy shopping", "Dale");
greet("good sleepings?", "Bunk");
greet("MA NAME A", "Jeff");

let a = 100;
let b = 500;

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}
