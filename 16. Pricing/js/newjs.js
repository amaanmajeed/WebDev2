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
    
    let myunits = Number(units);
    let myamount = 0;
    let unitprice = 0;
    let mystr = "Your Bill is: ";

    let count300 = 0;
    let count200 = 0;
    let count100 = 0;
    let count0 = 0;

    while (myunits > 300) {
        unitprice = 80;
        count300++;
        myunits--;
    }

    if (count300) {   
        myamount += (count300 * unitprice);
        mystr += "<br> Units > 300: " + unitprice + " X " + count300 + " = " + (count300 * unitprice);
        console.log((count300 * unitprice));
    }

    while (myunits > 200) {
        unitprice = 70;
        count200++;
        myunits--;
    }

    if (count200) {   
        myamount += (count200 * unitprice);
        console.log((count200 * unitprice));
        mystr += "<br> Units > 200: " + unitprice + " X " + count200 + " = " + (count200 * unitprice);
    }

    while (myunits > 100) {
        unitprice = 60;
        count100++;
        myunits--;
    }

    if (count100) {   
        myamount += (count100 * unitprice);
        console.log((count100 * unitprice));
        mystr += "<br> Units > 100: " + unitprice + " X " + count100 + " = " + (count100 * unitprice);
    }

    while (myunits > 0) {
        unitprice = 50;
        count0++;
        myunits--;
    }

    if (count0) {   
        myamount += (count0 * unitprice);
        console.log((count0 * unitprice));
        mystr += "<br> Units < 100: " + unitprice + " X " + count0 + " = " + (count0 * unitprice);
        mystr += "<br> Total: " + myamount;
    }
    
    document.getElementById("output").innerHTML = mystr;
        
})
