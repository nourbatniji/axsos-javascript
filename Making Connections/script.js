var requestsNumber = document.getElementById("badge1")
var connctionsNumber = document.getElementById("badge2")
let connectionsList = document.querySelector(".card-list2")

function increase(element) {
    var iconsSpan = element.parentElement;   //selects the accept and decline buttons 
    var clickedUser = iconsSpan.parentElement;   //selects the list item (the accepted user element) //card-user-element
    
    requestsNumber.innerHTML = Number(requestsNumber.innerHTML) - 1;
    connctionsNumber.innerHTML = Number(connctionsNumber.innerHTML) + 1;
    clickedUser.remove();       //removes the user from request list
    connectionsList.prepend(clickedUser);  //adds the user to the connections list
    iconsSpan.remove();     //removes accept and decline buttons after accebting the request
}
function decrease() {
    requestsNumber.innerHTML = Number(requestsNumber.innerHTML) - 1;
    var user = document.querySelector(".card-list-item")
    user.remove()
}

const randomNames = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Wilson",
    "Eva Davis",
    "Fay Clark",
    "George Martinez",
    "Hannah Taylor",
]
var changeButton = document.getElementById("changeNameBtn")

changeButton.addEventListener("click", function changeName() {
    var username = document.getElementById("name")
    username.innerHTML = randomNames[Math.floor(Math.random() * randomNames.length)]
})