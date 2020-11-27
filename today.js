window.addEventListener ('load', main);

function main() {
    startEverything();
}

function startEverything() {
    updateEverything();
    getImage();
    getGreeting();
    // getTime();
    getWeekday();
    getMonth();
    setInterval(updateEverything, 1000);
}

// ÄNDRAR BAKGRUNDBILDEN
function getImage(){
    const imageHolder = document.getElementById('skyImage')
    
    let hours = new Date().getHours(); 
    if(hours > 5, hours < 9) {
        imageHolder.innerHTML = ("<img src='images/sunrise.jpg' width=50% >")    
    } 
    else if(hours >= 9, hours < 17) {
        imageHolder.innerHTML = ("<img src='images/day.jpg' width=50% >")    
    } 
    else if(hours >= 17, hours < 20) {
        imageHolder.innerHTML = ("<img src='images/dawn.jpg' width=50% >")    
    } 
    else {
        imageHolder.innerHTML = ("<img src='images/stars.jpg' width=50% >")    
    } 
}

// ÄNDRAR HÄLSNINGEN
function getGreeting() {
    const greetHolder = document.getElementById('greeting');
    
    let hours = new Date().getHours();
    if(hours > 5, hours < 10) {
        greetHolder.innerHTML = 'Godmorgon ha en fin dag!';
    } 
    else if(hours >= 10, hours < 13){
        greetHolder.innerHTML = 'God förmiddag';
    }
    else if(hours >= 11, hours < 13){
        greetHolder.innerHTML = 'Godmiddag';
    }
    else if(hours >= 13, hours < 17){
        greetHolder.innerHTML = 'God eftermiddag'
    }
    else if(hours >= 17, hours < 21){
        greetHolder.innerHTML = 'Godkväll'
    }
    else {
        greetHolder.innerHTML = 'Godnatt, bra jobbat idag!'
    }
    
    // switch (greet) {
    //     case 0: return 'Godmorgon'
    //     case 1: return 'God förmiddag'
    //     case 2: return 'Godmiddag'
    //     case 3: return 'Godeftermiddag'
    //     case 4: return 'Godkväll'
    //     case 5: return 'Godnatt'
    // }
}

function updateEverything() {
    
    const date = new Date();

    // OM JAG ANVÄNDER DETTA ISTÄLLET FÖR EN SEPARAT FUNKTION SÅ FUNKAR DET
    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = formateDateCounter(hours); 
    minutes = formateDateCounter(minutes); 

    const timeHolder = document.getElementById('time');
    timeHolder.innerHTML = hours + ':' + minutes;

    //Update time 
    // const timeHolder = document.getElementById('time')
    // timeHolder.innerHTML = getTime(date);

    //update weekday
    const weekdayHolder = document.getElementById('weekday')
    weekdayHolder.innerHTML = getWeekday(date);

    //Update month
    const monthHolder = document.getElementById('month'); 
    monthHolder.innerHTML = getMonth(date);
}

// SKRIVER UT TIDEN 
// function getTime(date) {

    

//     let hours = date.getHours();
//     let minutes = date.getMinutes();
    
//     hours = formateDateCounter(hours); 
//     minutes = formateDateCounter(minutes); 

//     // const timeHolder = document.getElementById('time');
//     // timeHolder.innerHTML = hours + ':' + minutes;
// }

function formateDateCounter(counter) {
    if (counter < 10) {
        return '0' + counter; 
    }
    return counter;
}

//SKRIVER UT VECKODAGEN
function getWeekday(date) {
    let weekday = date.getDay();

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

// SKRIVER UT DATUM OCH MÅNAD 
function getMonth(date) {
    // const date = new Date();
    let dayOfMonth = date.getDate();
    let month = date.getMonth();
    
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
