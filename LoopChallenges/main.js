//Q1 Display odd numbers
console.log("1. Odd numbers from 1 to 20:");
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//Q2 Decreasing multiples of 3
console.log("2. Numbers divisble by 3, from 100 down to 0:");
for (var i =100; i>=0;i--){
    if(i%3==0){
        console.log(i);
    }
}

//Q3 Print the given sequence
console.log("3. Values in the sequence 4, 2.5, 1, -0.5, -2, -3.5:");
for (var i = 4; i >= -3.5;) {
    console.log(i);
    i = i - 1.5
}

//Q4 Sigma
console.log("4. Sum of all numbers from 1 to 100:");
var total = 0;
for (var i = 1; i <= 100; i++) {
    total += i
}
console.log("Total is: " + total);

//Q5 Factorial
console.log("5. Multiplication of numbers from 1 to 12:");
var product = 1;
for (var i = 1; i<=12 ; i++){
    product *= i;
}
console.log("Final result of multiplication is:" + product);
