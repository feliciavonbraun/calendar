window.addEventListener ('load', nbrtwo);

function nbrtwo() {
    getGreet();
    // update();
    getImage();
}

// function update() {

//     //update greeting 
//     greetHolder.innerHTML = getGreet();
    
// }


function getGreet() {
    const greetHolder = document.getElementById('greeting');
    
    let hours = new Date().getHours();
    if(hours > 6, hours < 11) {
        greetHolder.innerHTML = 'Godmorgon';
    } 
    else if(hours > 11, hours < 13){
        greetHolder.innerHTML = 'Godmiddag';
    }
    else if(hours > 13, hours < 17){
        greetHolder.innerHTML = 'God eftermiddag'
    }
    else if(hours > 17, hours < 21){
        greetHolder.innerHTML = 'Godkväll'
    }
    else {
        greetHolder.innerHTML = 'Godnatt'
    }
    

    // switch (greet) {
    //     case 0: return 'Godmorgon'
    //     case 1: return 'Godmiddag'
    //     case 2: return 'Godeftermiddag'
    //     case 3: return 'Godkväll'
    //     case 4: return 'Godnatt'
    // }
}

function getImage(){
    const imageHolder = document.getElementById('skyImage')

    let hours = new Date().getHours(); 
    if(hours > 6, hours < 16) {
        imageHolder.innerHTML = ("<img src='images/day.jpg' width=50% >")    
    } 
    else if(hours > 16, hours < 18) {
        imageHolder.innerHTML = ("<img src='images/dawn.jpg' width=50% >")    
    } 
    else {
        imageHolder.innerHTML = ("<img src='images/stars.jpg' width=50% >")    
    } 
}