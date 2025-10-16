console.log("Q1/ Accessing Elements");

let colors = ["red", "blue", "green", "yellow", "purple"];
console.log("First element: " + colors[0]);
console.log("Last element: " + colors[4]);
console.log("Element at 2nd position: " + colors[1]);
colors.splice(2, 0, "orange")
console.log(colors);

console.log("-----------------------------------------------------");

console.log("Q2/ Traversing an Array ");

let numbers = [10, 20, 30, 40, 50];
console.log("Elements in the array: ");
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("Elements in reverse order: ");
for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

console.log("-----------------------------------------------------");

console.log("Q3/ Searching in an Array");

let nums = [5, 10, 15, 20, 25];
if (nums.includes(25)) {   //for loop
    console.log("Found at position " + nums.indexOf(25));
} else {
    console.log("Not Found");
}
console.log("-----------------------------------------------------");

console.log("Q4/ Sorting an Array ");

let scores = [50, 20, 70, 10, 40];
//Ascending order
let ascendingSort = scores.sort((a, b) => a - b)
console.log("Ascending order: " + ascendingSort);
//Descending order
let descendingSort = scores.sort((a, b) => b - a)
console.log("Descending order: " + descendingSort);
//Alphabetical order
let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
console.log(names.sort());

console.log("-----------------------------------------------------");

console.log("Q5/ Inserting Elements");

let animals = ["dog", "cat", "rabbit"];
animals.push("elephant");
animals.unshift("lion");
animals.splice(2, 0, "tiger");
console.log(animals);

console.log("-----------------------------------------------------");

console.log("Q6/ Deleting Elements");

let fruits = ["apple", "banana", "cherry", "date"];
fruits.shift()
fruits.pop()
fruits.splice(0, 1)
console.log(fruits);

console.log("-----------------------------------------------------");

console.log("Q7/ Combining Arrays");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2)
console.log(combinedArray);

// Another way: spread operator / map and push to a new empty arr

console.log("-----------------------------------------------------");

console.log("Q8/ Splitting an Array");

let items = ["a", "b", "c", "d", "e"];
let arrayI = items.slice(0, 3);
let arrayII = items.slice(3,);
console.log(arrayI);
console.log(arrayII);

console.log("-----------------------------------------------------");

console.log("Q9/ Filtering Elements");

let numbersArr = [1, 5, 10, 15, 20, 25, 30];
let result = numbersArr.filter(num => num >= 15) //arrow func that returns num>=15
console.log(result);

//filter, goes through each element of the array and apply the arrow function on each element
//filter returns a new array of the only elements that pass the condition 
// num is each element in the numbers array when the filter method calls it

console.log("-----------------------------------------------------");

console.log("Q10/ Advanced Challenge");
console.log("Part I");

let Array1 = [1, 2, 2, 3, 6, 7, 7, 4, 4, 5]
Array1.filter((el, index) => {    // method 1
    if (Array1.indexOf(el) == index) {
        console.log(el);
    }
})
let Array2 = new Set(Array1);      // method 2
let s = [...Array2]
console.log(s);

console.log("-----------------------------------------------------");
console.log("Part II");
let arr = [1, 2, 3, 4, 5]
let n = 1  //index number 
let newArr = []

let rightSlice = arr.slice(n + 1, );
rightSlice.map((el) => {
    newArr.push(el)
})

let leftSlice = arr.slice(0, n + 1)
leftSlice.map((el) => {
    newArr.push(el)
})

console.log(newArr);

console.log("-----------------------------------------------------");

//Bonus Challenge

console.log("A program to merge two sorted arrays into a single sorted array");

let arr1 = [1, 2, 4, 8, 123, 345, 43, 92, 56431]
let arr2 = [32, 63, 123, 43, 2, 55, 1, 234]
let combinedArr = [...arr1, ...arr2]

for (let i = 0; i < combinedArr.length - 1; i++) { // -1 because we don't need to compare the last element
    for (let j = 0; j < combinedArr.length - 1 - i; j++) {
        if (combinedArr[j] > combinedArr[j + 1]) {  // compare the index with it's adjacent
            const temp = combinedArr[j]
            combinedArr[j] = combinedArr[j + 1]; //flipped
            combinedArr[j + 1] = temp
        }
    }
}

console.log(combinedArr);
