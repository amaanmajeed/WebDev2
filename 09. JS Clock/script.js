// setInterval(() => {
    
//     document.getElementById('time').innerText = "Current Time is: " + time;
// }, 1000);

const dayarr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsarr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(() => {
    let d = new Date();

let day = dayarr[d.getDay()];
let month = monthsarr[d.getMonth()];
let year = d.getFullYear();

let timehours;
let timeminutes = d.getMinutes();
let timeseconds;
let ampm;

if (d.getHours() > 12) {
    timehours = d.getHours() - 12;
    ampm = "PM";
} else {
    timehours = d.getHours();
}

if (d.getSeconds() < 10) {
    timeseconds = "0" + String(d.getSeconds());
} else {
    timeseconds = String(d.getSeconds());
}

document.getElementById('day').innerText = "Today is " + day + ', ' + d.getDate() + ' ' + month + ' ' + year;
document.getElementById('time').innerText = "And the time is: " + timehours + ':' + timeminutes + ':' + timeseconds + ' ' + ampm;
    
}, 1000);
