// Get the modal
var modalEmployer = document.getElementById('myModal-create-employer');

// Get the button that opens the modal
var btnEmployer = document.getElementById("myBtn-create-employer");

// Get the <span> element that closes the modal
var spanEmployer = document.getElementsByClassName("close-create-employer")[0];

// When the user clicks the button, open the modal 
btnEmployer.onclick = function() {
    modalEmployer.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanEmployer.onclick = function() {
    modalEmployer.style.display = "none";        
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalEmployer) {
        modalEmployer.style.display = "none";
    }
}


// Change first smile color
function changeSmileCreateEmp1() {
    var inputLogin = document.getElementById("create-employer-input-email-popup").value;
    console.log(inputLogin);
if (inputLogin !== "") {   
   document.getElementById("smile-icon1-create-employer-popup").className = "green-smile-icon1-popup";
   document.getElementById("create-employer-input-email-popup").style = " border-bottom:2px solid #72b287;";
   return;
}
 document.getElementById("smile-icon1-create-employer-popup").className = "red-smile-icon1-popup";
   document.getElementById("create-employer-input-email-popup").style = " border-bottom:2px solid #e82f3a;";
}

// Change second smile color
function changeSmileCreateEmp2() {   
    var inputCompany = document.getElementById("create-employer-input-company-popup").value;     
if (inputCompany !== "") {   
   document.getElementById("smile-icon2-create-employer-popup").className = "green-smile-icon2-popup";
   document.getElementById("create-employer-input-company-popup").style = " border-bottom:2px solid #72b287;";
    return;
} 
   document.getElementById("smile-icon2-create-employer-popup").className = "red-smile-icon2-popup";
   document.getElementById("create-employer-input-company-popup").style = " border-bottom:2px solid #e82f3a;";
}

function changeLineIn3() {   
    var inputPassword = document.getElementById("create-employer-input-password-popup");     
if (inputPassword.value !== "") {  
   inputPassword.style = " border-bottom:2px solid #72b287;";
    return;
}  
    inputPassword.style = " border-bottom:2px solid #e82f3a;";
}

function changeLineIn4() {   
    var inputPassword = document.getElementById("create-employer-input-confirm-password-popup");     
if (inputPassword.value !== "") {  
   inputPassword.style = " border-bottom:2px solid #72b287;";
    return;
}  
    inputPassword.style = " border-bottom:2px solid #e82f3a;";
}


