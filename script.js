
var popup = document.getElementById("popup")
var popup_siemens = document.getElementById("popup_siemens")
//Button that open OrigoEnergia details
var btn = document.getElementById("btn_origoenergia");
var btn_siemens = document.getElementById("btn_siemens");

//Element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_siemens = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  popup.style.display = "block";
}

btn_siemens.onclick = function() {
    popup_siemens.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popup.style.display = "none";
}

span_siemens.onclick = function() {
    popup_siemens.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

window.onclick = function(event) {
    if (event.target == popup_siemens) {
      popup_siemens.style.display = "none";
    }
}