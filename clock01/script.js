var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function clockStart24(){
    // define the source
    showTimeEl          = document.querySelector("#container24 .show-time");
    showDateEl          = document.querySelector("#container24 .show-date");
    showDayEl           = document.querySelector("#container24 .show-day");
    let today           = new Date();
    let h               = today.getHours();
    let m               = today.getMinutes();
    let s               = today.getSeconds();
    let day             = days[today.getDay()-1];
    let dd              = today.getDate();
    let mm              = months[today.getMonth()];
    let yy              = today.getFullYear();
    //check number, how many digits?
    h = checkNumber(h);
    m = checkNumber(m);
    s = checkNumber(s);
    // how to display the time
    showDayEl.innerHTML     = day + ", "
    showDateEl.innerHTML    = dd + " " + mm + " " + yy;
    showTimeEl.innerHTML    = h + " " + m + " " + s;
    setTimeout(clockStart24, 1000);
}

function clockStart12(){
    showTimeEl          = document.querySelector("#container12 .show-time");
    showDateEl          = document.querySelector("#container12 .show-date");
    showDayEl           = document.querySelector("#container12 .show-day");
    let today           = new Date();
    let h               = today.getHours();
    let m               = today.getMinutes();
    let s               = today.getSeconds();
    let day             = days[today.getDay()-1];
    let dd              = today.getDate();
    let mm              = months[today.getMonth()];
    let yy              = today.getFullYear();
    //check number, how many digits?
    h = checkNumber(h);
    m = checkNumber(m);
    s = checkNumber(s);
    showDayEl.innerHTML = day + ", "
    showDateEl.innerHTML = dd + " " + mm + " " + yy;
    // how to display the time
    if (h >= 12){
        showTimeEl.innerHTML = "0" + h%12 + " " + m + " " + s + " PM"
    }
    else {
        showTimeEl.innerHTML = "0" + h + " " + m + " " + s + " PM"
    }
    setTimeout(clockStart12, 1000);
}
// if the number is one digit, then add 0 before number
function checkNumber(i){
    if (i<10){
        i = "0" + i;
    }
    return i;
}

    function changeTime(){
        let elem1 = document.getElementById("container24");
        let elem2 = document.getElementById("container12");
        if (window.getComputedStyle(elem1, null).getPropertyValue("display") == "block"){
            elem2.style.display = "block";
            elem1.style.display = "none";
        }
        else {
            elem1.style.display = "block";
            elem2.style.display = "none";
        }
    }
clockStart24();
clockStart12();