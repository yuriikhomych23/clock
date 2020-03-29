
let stopwatch = document.querySelector('.stopwatch');
let clock = document.querySelector('.clock');



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



let sec = 0;
let min = 0;
let hr = 0;

let startClock = function stopWatch() {
        sec++;
        if(sec / 60 === 1) {
            sec = 0;
            min++;
            if(min / 60 === 1) {
                min = 0;
                hr++;
            }
        }

        document.querySelector('.zero').innerHTML = hr + ':' + min + ':' + sec;
    }

start.addEventListener('click', function () {
    setInterval(startClock, 1000);
})



document.getElementById('stop').addEventListener('click', function() {
    clearInterval(startClock);
    console.log('Привіт')
})










