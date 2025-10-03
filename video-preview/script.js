console.log("page loaded...");

var x = document.getElementById("myVideo");

function playVideo() { //built in function cannot be used
    x.play();
}

function pauseVideo() {
    x.pause()
}