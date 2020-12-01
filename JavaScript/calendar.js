
// Global scope
let date = new Date();


/* Start of calendar */
function calendar() {
    getDecemberMonth();
    showCurrentMonth();
    showCurrentYear();
}

/* Get days of December */
function getDecemberMonth() {
    
    const december = ['', '01', '02', '03', '04', '05', '06', '07', '08', '09', 
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
        27, 28, 29, 30, 31];

        renderCalendar(december);    
}

/**
 * Render calendar to update count.  
 * @param {(string | number)[]} december 
 */
    function renderCalendar(december) {
    const daysContainer = document.getElementById("day-container");
    daysContainer.innerHTML = "";

    
    for (let i = 0; i < december.length; i++) {
        const dates = december[i];
        let id = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + december[i];
        const day = createDay(dates, id);
        daysContainer.appendChild(day);
    
        // Todos / day
        let count = 0; 
        for(const todo of todos) {
            if(todo.date == id) {
                count++
            }
        }

        // Display amount of todos, if there is any
        if (count > 0){  
            const countText = document.createElement('p')
            countText.classList.add('count-of-todo-text')
            countText.innerHTML = count;
            day.append(countText);
        }
    }
}

/**
 * Design and add content for each day
 * @param {string | number} dates 
 * @param {string} id 
 */
function createDay(dates, id) {
    day = document.createElement('div');
    day.classList.add('date', 'grid', 'center', 'date:hover');
    
    const date = document.createElement('p');
    date.innerHTML = dates;
 
    day.id = id;
    day.appendChild(date);
    
    return day;
}


//HEADER

/* Show current year in header */
function showCurrentYear() {
    let year = date.getFullYear();
    document.getElementById('current-year').innerHTML = year;
}

/* Show current month in header */
function showCurrentMonth() {
    let months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
        'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']
    document.getElementById('current-month').innerHTML =
        months[date.getMonth()];
}