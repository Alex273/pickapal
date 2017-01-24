function openNav() { 
var deviceWidth = window.innerWidth;   
console.log(deviceWidth);
if (deviceWidth > 580) {
if  (document.getElementById("mySidenav").style.width == "250px") {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
 }
 else {
   document.getElementById("mySidenav").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
 } 
}  else {

 if  (deviceWidth <= 580) {
 if (document.getElementById("mySidenav").style.width == "100%") {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.display = "block";
 }
 else {
   document.getElementById("mySidenav").style.width = "100%";
   document.getElementById("main").style.display = "none";
  } 
 }
 }
}