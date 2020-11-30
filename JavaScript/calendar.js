
let date = new Date();


/** Start of calendar */
function calendar() {
    renderCalendar();
    showCurrentMonth();
    showYear();
}

/* Hämta månad */
function renderCalendar() {
    
    let fakeMonth = ['', '', '', '', '', '', '01', '02', '03', '04', '05', '06', '07', '08', '09', 
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
        27, 28, 29, 30];

    createElementForEachDay(fakeMonth);    
}


/* Skapa element för alla dagar i månad */
function createElementForEachDay(fakeMonth) {
    const daysContainer = document.getElementById("day-container");
    daysContainer.innerHTML = "";

    
    for (let i = 0; i < fakeMonth.length; i++) {
        const dates = fakeMonth[i];
        let id = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + fakeMonth[i];
        const day = createDay(dates, id);
        daysContainer.appendChild(day);
    

        let count = 0; /* Todos / dag */
        for(const todo of todos) {
            if(todo.date == id) {
                count++
            }
        }

        /* Om det finns minst en todo, visa den/dom */
        if (count > 0){  
            const countText = document.createElement('p')
            countText.classList.add('count-of-todo-text')
            countText.innerHTML = count;
            day.append(countText);
        }
    }
}

/* Skapa dag div */
function createDay(dates, id) {
    day = document.createElement('div');
    day.classList.add('date', 'grid', 'center', 'date:hover');
    
    const date = document.createElement('p');
    date.innerHTML = dates;
 
    day.id = id;
    day.appendChild(date);
    
    return day;
}


/* HEADER */
function showYear() {
    let year = date.getFullYear();
    document.getElementById('current-year').innerHTML = year;
}


function showCurrentMonth() {
    let months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
        'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']
    document.getElementById('current-month').innerHTML =
        months[date.getMonth()];
}