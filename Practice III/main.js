//Q1 Basic Function
function welcome() {
    return "Welcome to coding!"
}
console.log(welcome());

//Q2 With Arguments
let num;
function square(num) {
    let squaredNum = num * num;
    return squaredNum;
}
console.log("Square of " + num + " is " + square(8));

//Q3 With Return Value
let F, C;
function converToCelsius(F) {
    let C = ((F - 32) * 5) / 9
    return C;
}
let fahrenheit = 77
console.log(fahrenheit + " F in Celsius is: " + converToCelsius(fahrenheit));


//Q4 Reusable Function
let number;
function isEven(number) {
    if (number % 2 == 0) return true
    else return false
}
console.log(isEven(2));
