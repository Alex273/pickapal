// Get the modal
var modalSignIn = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modalSignIn.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalSignIn.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignIn) {
        modalSignIn.style.display = "none";
    }
}

// Change first smile color
function changeSmileSignIn1() {
    var inputLogin = document.getElementById("sign-in-input-login-popup").value;
    console.log(inputLogin);
if (inputLogin !== "") {   
   document.getElementById("smile-icon1-sign-in-popup").className = "green-smile-icon1-popup";
   document.getElementById("sign-in-input-login-popup").style = " border-bottom:2px solid #72b287;";
   return;
}
 document.getElementById("smile-icon1-sign-in-popup").className = "red-smile-icon1-popup";
   document.getElementById("sign-in-input-login-popup").style = " border-bottom:2px solid #e82f3a;";
}

// Change second smile color
function changeSmileSignIn2() {   
    var inputPassword = document.getElementById("sign-in-input-password-popup").value;     
if (inputPassword !== "") {   
   document.getElementById("smile-icon2-sign-in-popup").className = "green-smile-icon2-popup";
   document.getElementById("sign-in-input-password-popup").style = " border-bottom:2px solid #72b287;";
    return;
} 
   document.getElementById("smile-icon2-sign-in-popup").className = "red-smile-icon2-popup";
   document.getElementById("sign-in-input-password-popup").style = " border-bottom:2px solid #e82f3a;";
}