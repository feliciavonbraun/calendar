
let date = new Date();

/** Start of calendar */
function calendar() {
    showCurrentMonth();
    showYear();
    getMonth();
}

/* Hämta månad */
function getMonth() {
    let fakeMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    getDaysInMonth(fakeMonth);
}

/* Få alla dagar i månad */
function getDaysInMonth(fakeMonth) {
    const daysInMonth = fakeMonth.length;

    createElementForEachDay(fakeMonth, daysInMonth);
}

/* Skapa element för alla dagar i månad */
function createElementForEachDay(fakeMonth, daysInMonth) {
    const daysContainer = document.getElementById("day-container");
    daysContainer.innerHTML = "";
    let id = 0;

    for (let i = 0; i < daysInMonth; i++) {
        const date = fakeMonth[i];
        const day = createDay(date, id);
        daysContainer.append(day)

        id++;

    }
}

/* Skapa dag div */
function createDay(date, id) {
    day = document.createElement('div');
    day.classList.add('date', 'grid', 'center', 'date:hover');
    day.innerHTML = date;
    day.id = id;
    return day;
}

function presentDays(data) {
    const container = document.getElementById('day');
    container.innerHTML = data.getDate;
    console.log(data)
}

/* HEADER */
function showYear() {
    let year = date.getFullYear();
    document.getElementById('current-year').innerHTML = date.getFullYear();
}

function showCurrentMonth() {
    let months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
        'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']
    document.getElementById('current-month').innerHTML =
        months[date.getMonth()];
}