function changeCount(el) {
  var h3 = el.previousElementSibling
  var span = h3.querySelector("span")
  span.innerHTML = Number(span.innerHTML) + 1;
}

