var addDefention = document.getElementById("definition-button")
addDefention.addEventListener("click", function () {
    addDefention.remove()
})

let navBtn = document.getElementById("navbar-btn")
navBtn.addEventListener("click", function () { //if stat. login=> logout
    if (navBtn.innerHTML == "Login") {
        navBtn.innerHTML = "Logout"
    }else if (navBtn.innerHTML == "Logout") {
        navBtn.innerHTML = "Login"
    }
})

 function likeAlert() {
    alert("Ninja was liked")
}