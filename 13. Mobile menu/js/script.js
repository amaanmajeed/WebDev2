
let barBtn = document.getElementsByClassName('fa-bars')[0];

let isOpen = false;

barBtn.addEventListener("click", () => {

    if (isOpen === false) {
        console.log("if");
        document.getElementById('bar').classList.remove('fa-bars');
        document.getElementById('bar').classList.add('fa-xmark');

        document.getElementsByClassName('mobile-menu')[0].style.display = 'block';
        isOpen = true;
    } else {
        console.log("Else");
        document.getElementById('bar').classList.remove('fa-xmark');
        document.getElementById('bar').classList.add('fa-bars');
    
        document.getElementsByClassName('mobile-menu')[0].style.display = 'none';
        document.getElementsByClassName('menu')[0].style.display = 'block';    
        isOpen = false;
    }
    
})
