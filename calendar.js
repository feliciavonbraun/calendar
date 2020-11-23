window.addEventListener('load', main);

let date = new Date();

function main() {
    calendarDays();
    monthDay();
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

}






//url: 'http://sholiday.faboul.se/dagar/v2.1/2015/02',
