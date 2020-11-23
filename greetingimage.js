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

// function getImage(){
//     const imageHolder = document.getElementById('skyImage')

//     let hours = new Date().getHours(); 
//     if(hours > 6, hours < 11) {
//         document.write("<img src='images/day.jpg'>")    
//     } 
//     else if(hours > 6, hours < 11) {
//         document.write("<img src='images/dawn.jpg'>")    
//     } 
//     else {
//         document.write("<img src='images/night.jpg'>")    
//     } 
// }