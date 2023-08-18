let enterbtn = document.getElementById("enterbtn");

let res = document.getElementById('history');
res.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        enterbtn.click();
    }
});

let outputbtn = document.getElementById("output");

enterbtn.addEventListener("click", () => {    
    let english = document.getElementById("english").value;
    let maths = document.getElementById("maths").value;
    let urdu = document.getElementById("urdu").value;
    let science = document.getElementById("science").value;
    let history = document.getElementById("history").value;

    english = Number(english);
    maths = Number(maths);
    urdu = Number(urdu);
    science = Number(science);
    history = Number(history);

    let total = (english + urdu + maths + science + history) / 5;
    let grade;
    if (total >= 90) {
        grade = "A+";
    } else if (total >= 80) {
        grade = "A";
    } else if (total >= 70) {
        grade = "B";
    } else if (total >= 60) {
        grade = "C";
    } else{
        grade = "F";
    }

    document.getElementById("output").innerText = "Marks: " + total + "  Grade: " + grade;
        
})
