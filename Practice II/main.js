//1
let num = -5;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//2
let time = 4;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}

//3
let grade = 78;
if (grade >= 90 || grade == 100) {
    console.log("Your grade is A");
} else if (grade >= 80 || grade == 89) {
    console.log("Your grade is B");
} else if (grade >= 70 || grade == 79) {
    console.log("Your grade is C");
} else {
    console.log("Your grade is F");

}

//4
let dayOfTheWeek = "Tuesday"
switch(dayOfTheWeek){
    case "Friday":
        console.log("Weekend");
        break
    case "Saturday":
        console.log("Weekend");
        break
    case "Sunday":
        console.log("Weekday");
        break
    case "Monday":
        console.log("Weekday");
        break
    case "Tuesday":
        console.log("Weekday");
        break
    case "Wednesday":
        console.log("Weekday");
        break
    case "Thursday":
        console.log("Weekday");
        break
}