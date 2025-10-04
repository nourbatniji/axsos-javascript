var likesCount = document.getElementById("likes-count")
var likesButton = document.getElementById("likes-Btn")

function countingLikes() {
    likesCount.innerText = Number(likesCount.innerText) + 1
}

likesButton.addEventListener("click", countingLikes)