function expand(num) {
    var hiddentextElements = document.getElementsByClassName("hiddentext");

    if (hiddentextElements[num].style.display !== "flex") {
        console.log("show " + num);
        Array.from(hiddentextElements).forEach(element => {
            element.style.display = "none";
        });
        hiddentextElements[num].style.display = "flex";
    } else {
        hiddentextElements[num].style.display = "none";
        console.log("hide " + num);
    }

    
}
