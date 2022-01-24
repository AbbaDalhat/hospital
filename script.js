let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["password"].value;
    if (x == "" || y == "") {
        alert("All Spaces must be filled out");
        return false;
        }
    else {
        alert("Login successfully");
        return false;
        
        
        }
}

function validateForm1() {
    var a = document.forms["myForm1"]["firstname"].value;
    var b = document.forms["myForm1"]["lastname"].value;
    var c = document.forms["myForm1"]["sex"].value;
    var d = document.forms["myForm1"]["age"].value;
    var e = document.forms["myForm1"]["email"].value;
    var f = document.forms["myForm1"]["password"].value;
    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "") {
        alert("All Spaces must be filled out");
        return false;
        }
    else {
        alert("Signin successfully");
        return false;
        
        
        }
}