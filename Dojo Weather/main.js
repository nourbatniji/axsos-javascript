var acceptBtn = document.getElementById("accept-cookie")
var cookiesEl = document.getElementById("cookies")

function change(el) {
    var option = el.value
    var currentTemps = document.querySelectorAll(".temp")

      currentTemps.forEach(el => {
        var currentTemp = Number(el.innerText)
        
        if (option == "celsius") {
            var C = Math.round((currentTemp - 32) * (5/9))
            el.innerText = C
        }
        if (option == "fehrenheit") {
           var F = Math.round((currentTemp * (9/5)) + 32)
           el.innerText = F
        }
    })
}

acceptBtn.addEventListener("click", function () {
    cookiesEl.remove()
})

function showAlert() {
    alert("This page says Loading weather report..")
}
