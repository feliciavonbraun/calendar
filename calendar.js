window.addEventListener('load', main);

let date = new Date();

function main() {
    addEventListeners();
    calendarDays();
    monthDay();
}

function addEventListeners() {
    document.getElementById('prev').addEventListener('click', changeMonth)
    document.getElementById('next').addEventListener('click', changeMonth)
}


function calendarDays() {
    let dayNumber = date.getDate();
    document.getElementById("day").innerHTML = date.getDate();
}

function monthDay() {
    const lang = navigator.language;
    let month = date.getMonth();
    let monthName = date.toLocaleString(lang,{month: 'long'})
    document.getElementById('current-month').innerHTML = monthName;
    
    changeMonth();
}

function changeMonth() {
    //alert('You changed!');
}





//url: 'http://sholiday.faboul.se/dagar/v2.1/2015/02',
