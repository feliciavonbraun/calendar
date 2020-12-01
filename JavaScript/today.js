/* Start of today */
function today() {
    startIntervals();
}

/* Start intervals */
function startIntervals() {
    updateImage();
    setInterval(updateImage, 60000);

    updateGreeting();
    setInterval(updateGreeting, 60000)

    updateTimeAndDateOfToday();
    setInterval(updateTimeAndDateOfToday, 1000);
}

/* Update image on interval */
function updateImage(){
    const imageHolder = document.getElementById('sky-image')
    
    let hours = new Date().getHours(); 
    if(hours > 5, hours < 10) {
        imageHolder.innerHTML = ("<img src='images/sunrise.jpg' width=100% >")    
    } 
    else if(hours >= 10, hours < 17) {
        imageHolder.innerHTML = ("<img src='images/day.jpg' width=100% >")    
    } 
    else if(hours >= 17, hours < 20) {
        imageHolder.innerHTML = ("<img src='images/dawn.jpg' width=100% >")    
    } 
    else {
        imageHolder.innerHTML = ("<img src='images/stars.jpg' width=100% >")    
    } 
}

/* Update greeting on interval */
function updateGreeting() {
    const greetHolder = document.getElementById('greeting');
    
    let hours = new Date().getHours();
    if(hours > 5, hours < 10) {
        greetHolder.innerHTML = 'Godmorgon ha en fin dag!';
    } 
    else if(hours >= 10, hours < 12){
        greetHolder.innerHTML = 'God förmiddag';
    }
    else if(hours >= 12, hours < 13){
        greetHolder.innerHTML = 'Godmiddag, smaklig måltid';
    }
    else if(hours >= 13, hours < 17){
        greetHolder.innerHTML = 'God eftermiddag'
    }
    else if(hours >= 17, hours < 20){
        greetHolder.innerHTML = 'Godkväll'
    }
    else {
        greetHolder.innerHTML = 'Godnatt, bra jobbat idag!'
    }
}

/* Update time and day for today */
function updateTimeAndDateOfToday() {
    
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = formateTimeCounter(hours); 
    minutes = formateTimeCounter(minutes); 

    const timeHolder = document.getElementById('todays-time');
    timeHolder.innerHTML = hours + ':' + minutes;

    //update weekday
    const weekdayHolder = document.getElementById('weekday')
    weekdayHolder.innerHTML = getWeekday(date);

    //Update month
    const monthHolder = document.getElementById('month'); 
    monthHolder.innerHTML = getMonth(date);
}

/**
 * Add '0' before hours and minutes if less than 10.
 * @param {number} counter 
 */
function formateTimeCounter(counter) {
    if (counter < 10) {
        return '0' + counter; 
    }
    return counter;
}

/**
 * Translate weekday index to weekday name.
 * @param {Date} date 
 */
function getWeekday(date) {
    const weekday = date.getDay();

    switch (weekday) {
        case 0: return 'Söndag'
        case 1: return 'Måndag'
        case 2: return 'Tisdag'
        case 3: return 'Onsdag'
        case 4: return 'Torsdag'
        case 5: return 'Fredag'
        case 6: return 'Lördag'
    }
}

/**
 * Translate month index to month name and adds todays date.
 * @param {Date} date 
 */
function getMonth(date) {
    const dayOfMonth = date.getDate();
    const month = date.getMonth();
    
    const prefix = dayOfMonth + ' ';
    switch (month) {
        case 0: return prefix + 'Januari'; 
        case 1: return prefix + 'Februari'; 
        case 2: return prefix + 'Mars'; 
        case 3: return prefix + 'April'; 
        case 4: return prefix + 'Maj'; 
        case 5: return prefix + 'Juni'; 
        case 6: return prefix + 'Juli'; 
        case 7: return prefix + 'Augusti'; 
        case 8: return prefix + 'September'; 
        case 9: return prefix + 'Oktober'; 
        case 10: return prefix + 'November'; 
        case 11: return prefix + 'December'; 
    }
}
