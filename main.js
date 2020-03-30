//CLOCK 
setInterval(function() {
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    if(hours < 10) hours = '0' + hours; 
    if(minutes < 10) minutes = '0' + minutes; 
    if(seconds < 10) seconds = '0' + seconds; 
    let times = document.querySelector('.times');
    times.innerHTML = hours + ':' + minutes + ':' + seconds
}, 1000)


//DATE
setInterval(function() {
    let date = new Date ();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;

    let d = document.querySelector('.day');

    d.innerHTML = day + '.' + month + '.' + year;
}, 1000);


//STOPWATCH

let millisecond = 0;
let sec = 0;
let min = 0;
let hr = 0;
let sw;  // StopWatch

let btnStart = document.getElementById('start')
let btnLoop = document.getElementById('loop');
let btnStop = document.getElementById('stop');
let btnReset = document.getElementById('reset');

let result = document.querySelector('.result')
let timer = document.querySelector('.timer');


//BTN START
btnStart.addEventListener('click', function() {
    sw = setInterval(stopwatch, 10);
})

//BTN STOP
btnStop.addEventListener('click', function() {
    clearInterval(sw);
})

// BTN RESET
btnReset.addEventListener('click', function () {
    clearInterval(sw);
    timer.innerHTML = '00' + ':' + '00' + ':' + '00' + ':' + '000';
    result.innerHTML = '';
    millisecond = 0;
    sec = 0;
    min = 0;
    hr = 0;
})

//BTN LOOP
btnLoop.addEventListener('click', function() {
    let div = document.createElement('div');
    div.innerHTML += timer.innerHTML;
    result.appendChild(div);
});


//FUNCTION STOPWATCH
function stopwatch() {
    millisecond++;
    if(millisecond == 100) {
        millisecond = 0;
        sec++;
    }
    if(sec == 60) {
        min++;
        sec = 0;
    }
    if(min == 60) {
        hr++;
        min = 0;
    }
    if (hr < 10) hr = "0" + parseFloat(hr);
    if (min < 10) min = "0" + parseFloat(min);
    if (sec < 10) sec = "0" + parseFloat(sec);
    if (millisecond < 10) millisecond = "0" + parseFloat(millisecond);
    timer.innerHTML = hr + ":" + min + ":" + sec + ":" + millisecond;
}



//TIMER 
//btn plus minus
let btnPlus = document.querySelector('.plus');
let btnMinus = document.querySelector('.minus')



let counting = document.querySelector('.counting');
let countingTimer = counting.innerHTML;

//BTN PLUS
btnPlus.addEventListener('click', function() {
    counting.innerHTML++;
})

//BTN MINUS
btnMinus.addEventListener('click', function(){
    counting.innerHTML--;
    if(counting.innerHTML == 0) {
        alert('Smaller countdown is impossible');
        counting.innerHTML = 1;
    }
})


//btn timer 
let btnStartTimer = document.querySelector('.start__timer');
let btnStopTimer = document.querySelector('.stop__timer');
let btnResetTimer = document.querySelector('.reset__timer');


let secondsTimer = 60;
let countdown;

//BTN START TIMER 
btnStartTimer.addEventListener('click', function() {
    countdown = setInterval(countdown, 1000)
})

//BTN STOP TIMER 
btnStopTimer.addEventListener('click', function() {
    clearInterval(countdown);
})

//BTN RESET TIMER 
btnResetTimer.addEventListener('click', function() {
    clearInterval(countdown);
    nuww.innerHTML = "00" + ":" + '00'
})



function countdownTimer() {

}




















