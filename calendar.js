window.addEventListener('load', main);

let date = new Date();

function main() {
    addEventListeners();
    calendarDays();
    monthDay();
}

function addEventListeners() {
    document.getElementById('prev').addEventListener('click', prevMonth)
    document.getElementById('next').addEventListener('click', nextMonth)
}


function calendarDays() {
    let dayNumber = date.getDate();
    document.getElementById("day").innerHTML = date.getDate();
}

function monthDay() {
    const lang = navigator.language;
    let month = date.getMonth();
    let monthName = date.toLocaleString(lang, { month: 'long' })
    document.getElementById('current-month').innerHTML = monthName;
}

function nextMonth() {
    //alert("You changed!");

    const months = [
        {
            months: 'Januari'
        },
        {
            months: 'Februari'
        },
        {
            months: 'Mars'
        },
        {
            months: 'April'
        },
        {
            months: 'Maj'
        },
        {
            months: 'Juni'
        },
        {
            months: 'Juli'
        },
        {
            months: 'Augusti'
        },
        {
            months: 'September'
        },
        {
            months: 'Oktober'
        },
        {
            months: 'November'
        },
        {
            months: 'December'
        }
    ]
  
}


function prevMonth() {
    //alert("Don't look back!")
}





//url: 'http://sholiday.faboul.se/dagar/v2.1/2015/02',
