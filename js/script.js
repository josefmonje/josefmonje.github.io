var date_element = document.getElementById('date')
var input_element = document.getElementById('input')
var input
var date = new Date().toLocaleDateString("en-US", {weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})

date_element.innerHTML = date

var cmd = function (input) {
  input_element.style.width = ((input_element.value.length + 1) * 8) + 'px';
}
var enter = function () {
  var keycode
  var e = window.event
  if(window.event) { // IE
    keycode = e.keyCode
  } else if(e.which){ // Netscape/Firefox/Opera
    keycode = e.which
  }
  if (keycode == 13) {
    input = input_element.value
    input_element.value = ''
    input_element.style.width = '8px'
    console.log(input)
  }
}
