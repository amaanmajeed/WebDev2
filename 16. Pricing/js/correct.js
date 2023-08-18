let enterbtn = document.getElementById("enterbtn");

let res = document.getElementById('units')
res.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        enterbtn.click();
    }
});

let outputbtn = document.getElementById("output");

enterbtn.addEventListener("click", () => {
    units = document.getElementById("units").value;    

    let temp = 0;
    let myamount = 0;
    let mystr = "Your bill is: ";

    if (units > 300) {
        temp = units - 300;
        myamount = temp * 80;
        mystr += "<br>300: " + temp + " x 80 = " + myamount + "<br>200: 100 x 70 = 7000 <br>100: 100 x 60 = 6000 <br>000: 100 x 50 = 5000";
        myamount += 100 * 70;
        myamount += 100 * 60;
        myamount += 100 * 50;
        mystr += "<br>Total: " + myamount;
    } else if (units > 200) {
        temp = units - 200;
        myamount = temp * 70;
        mystr += "<br>200: " + temp + " x 70 = " + myamount + "<br>100: 100 x 60 = 6000 <br>000: 100 x 50 = 5000";
        myamount += 100 * 60;
        myamount += 100 * 50;
        mystr += "<br>Total: " + myamount;
    } else if (units > 100) {
        temp = units - 100;
        myamount = temp * 60;
        mystr += "<br>100: " + temp + " x 60 = " + myamount + "<br>000: 100 x 50 = 5000";
        myamount += 100 * 50;
        mystr += "<br>Total: " + myamount;
    } else {
        myamount = units * 50;
        mystr += "<br>" + units + " x 50 = " + myamount;
        mystr += "<br>Total: " + myamount;
    }

    document.getElementById("output").innerHTML = mystr;
        
})
