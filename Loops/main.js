// Q1 Print numbers 
console.log("Numbers from 1 to 10: ");
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Q2 Reverse counting
console.log("Numbers from 10 to 1: ");
for (var i = 10; i >= 1; i--) {
    console.log(i);
}

// Q3 Even numbers
console.log("Even numbers from 1 to 20: ");
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Q4 Odd numbers
console.log("Odd numbers from 1 to 20: ");
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Q5 Sum of Numbers
console.log("Sum of numbers from 1 to 10: ");
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i
}
console.log(sum);


//Q6 FizzBuzz
console.log("numbers from 1 to 3, If divisible by 3 => Fizz, If divisible by 5 => Buzz ,If divisible by 3 & 5 => FizzBuzz");

for (var i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
   else{
     console.log(i);
   }
}
