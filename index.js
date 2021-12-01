// Christmas Countdown

const countdownDisplay = document.getElementById("countdown-display")
const activeCountdown = document.getElementById('active--countdown')

let countdownDate = new Date('December 25, 2021 00:00:00').getTime();

let countdownInterval = setInterval(() => {
    let currentTime = new Date().getTime();
    let distance = countdownDate - currentTime;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000 * 60))  / (1000*60));
    let seconds = Math.floor((distance % (1000*60))  / 1000);
    
    activeCountdown.textContent = "🎄 " + days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "🎄 ";
    countdownDisplay.textContent = days
    
    if (distance < 0) {
        clearInterval(countdownInterval);
        activeCountdown.textContent = "MERRY CHRISTMAS!";
    }
}, 1000); 