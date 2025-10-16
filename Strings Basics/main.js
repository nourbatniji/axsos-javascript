// 1.Remove Blanks
function removeBlanks(string) {
    return string.split(" ").join("");
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

//-----------------------------------------------------------
// 2. Get Digits
function getDigits(str) {
    //method I
    let number = str.split('').filter(char => !isNaN(char) && char !== ' ').join('');
    console.log(number);

    //method II
    let elements = str.split("");
    let output = "";
    elements.map((el) => {
        if (!isNaN(el)) {
            output += el;
        }
    })
    return output;
}
console.log(getDigits("abc8c0d1ngd0j0!8")); // ********* when i use number method it doesnt return 0s WHY?
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); 


//-----------------------------------------------------------
// 3. Acronyms
function acronym(str) {
    let elements = str.split(" ")
    let result = ''
    elements.forEach((element) => {
        result += element.charAt(0).toUpperCase()
    });
    return result
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));


//-----------------------------------------------------------
// 4. Count Non-Spaces
function countNonSpaces(str) {
    let elements = str.split(" ")
    let result = 0
    for (let i = 0; i < elements.length; i++) {
        let str = elements[i]
        result += str.length
    }
    return result
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !")) 

//-----------------------------------------------------------
// 5. Remove Shorter Strings

function removeShorterStrings(arr, minLength) {
    var array1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            array1.push(arr[i])
        }
    }
    return array1
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
