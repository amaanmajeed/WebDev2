let isOpen = false;
$("#barbtn").click(function () {
    
    if (isOpen) {
        $("#bar").toggleClass("fa-bars fa-xmark");
        $(".mobile-menu").height(0);
        isOpen = false;
    } else {
        $("#bar").toggleClass("fa-bars fa-xmark");
        $(".mobile-menu").height("auto");
        isOpen = true;
    }
})





// let barbtn = document.getElementById("barbtn");

// let isOpen = false;

// barbtn.addEventListener("click", () => {

//     if (isOpen === false) {
//         document.getElementById('bar').classList.remove("fa-bars");
//         document.getElementById('bar').classList.add("fa-xmark");
//         document.getElementsByClassName('mobile-menu')[0].style.height = 'auto';
//         isOpen = true;
//     } else {
//         document.getElementById('bar').classList.add("fa-bars");
//         document.getElementById('bar').classList.remove("fa-xmark");
//         document.getElementsByClassName('mobile-menu')[0].style.height = '0px';
//         isOpen = false;
//     }
    
// })