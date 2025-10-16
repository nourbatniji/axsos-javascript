// 1. Always Hungry
function alwaysHungry(arr) {
    let flag = false
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            flag = true
        }
    }

    if (!flag) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

//--------------------------------------------------------
// 2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//--------------------------------------------------------
// 3. Better than average

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    var average;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        average = sum / arr.length
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//--------------------------------------------------------
// 4. Array Reverse

function reverse(arr) {
    // arr.reverse()
    // return arr;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i]   //[  ,  , c, d, e]    //temp = a, b
        arr[i] = arr[arr.length - i - 1]    // [e, d, c,  ,  ]
        arr[arr.length - i - 1] = temp      // [e, d, c, b , a]
    }
    return arr
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);


//--------------------------------------------------------
// 5. Fibonacci Array

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (let i = 0; i < n; i++) {
        let fn = fibArr[i] + fibArr[i + 1]
        fibArr.push(fn) //[0, 1, 2, 3, 5]
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); 