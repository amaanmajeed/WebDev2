$(function () {
    
    
    
    $("#barbtn").click(function () {
        $("#bar").toggleClass("fa-bars");
        $("#bar").toggleClass("fa-xmark");
    })
    
})








/*
let barbtn = document.getElementById("barbtn");

let isOpen = false;

barbtn.addEventListener("click", () => {

    if (isOpen === false) {
        // console.log("clicked");
        document.getElementById('bar').classList.remove("fa-bars");
        document.getElementById('bar').classList.add("fa-xmark");

        // document.getElementsByClassName('mobile-menu')[0].style.display = 'block';
        document.getElementsByClassName('mobile-menu')[0].style.height = 'auto';
        // document.getElementsByClassName('mobile-menu')[0].classList.add('showmenu');
        isOpen = true;
    } else {
        // console.log("Else");
        document.getElementById('bar').classList.add("fa-bars");
        document.getElementById('bar').classList.remove("fa-xmark");
        
        // document.getElementsByClassName('mobile-menu')[0].style.display = 'none';
        document.getElementsByClassName('mobile-menu')[0].style.height = '0px';
        // document.getElementsByClassName('mobile-menu')[0].classList.remove('showmenu');

        isOpen = false;
    }
    
})

*/