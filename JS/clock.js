const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const getTime = () => {
    const date = new Date();
   
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }; 
}

setInterval(() =>{

    const {seconds, minutes, hours} = getTime();
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;

    if (hours >= 6 && hours <= 12) {
        document.body.style.backgroundColor = "rgb(114, 214, 242)";
    }
    if (hours >= 12 && hours <= 18) {
        document.body.style.backgroundColor = "rgb(248, 155, 78)";
    }
    if (hours >= 18 && hours <= 23) {
        document.body.style.backgroundColor = "rgb(28, 51, 81)";
    }
    if (hours >= 1 && hours <= 6) {
        document.body.style.backgroundColor = "rgb(14, 30, 52)";
    }  


}, 1000);

