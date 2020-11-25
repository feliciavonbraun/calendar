window.addEventListener('load', main);

let date = new Date();

function main() {
    addEventListeners();
    calendarDays();
    monthName();
    fullYear();

}

function addEventListeners() {
    document.getElementById('prev').addEventListener('click', prevMonth)
    document.getElementById('next').addEventListener('click', nextMonth)
}


function calendarDays() {
    let dayNumber = date.getDate();
    document.getElementById("day").innerHTML = date.getDate();
}

function monthName() {
    const lang = navigator.language;
    let month = date.getMonth();
    let monthName = date.toLocaleString(lang, { month: 'long' })
    document.getElementById('current-month').innerHTML = monthName;
    
}

function fullYear() {
    let year = date.getFullYear();
    document.getElementById("current-year").innerHTML = date.getFullYear();
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
    var now = new Date();
    if (now.getMonth() == 11) {
    var current = new Date(now.getMonth() + i++);
    } 
    document.getElementById('current-month').innerHTML = current;
  
}


function prevMonth() {
    //alert("Don't look back!")
}

