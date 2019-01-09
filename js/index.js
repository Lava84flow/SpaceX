// JavaScript Document

//apiPull("launches/latest", test);

//apiPullID("launches", test, 37);

function test(){
    console.log(JSON.parse(this.response));
}

apiPull("launches/latest", parseLatest);

function parseLatest(){
    apiDate = JSON.parse(this.response)
    countUpFromTime(apiDate.launch_date_utc, 'countup1');
}

apiPull("launches/next", parseNext);

function parseNext(){
    apiDate = JSON.parse(this.response)
    countDownToTime(apiDate.launch_date_utc, 'countdown1');
}

/*
 * Basic Count Down to Date and Time
 * Author: @guwii / guwii.com
 * https://guwii.com/bytes/easy-countdown-to-date-with-javascript-jquery/
*/

// Month Day, Year Hour:Minute:Second, id-of-element-container
//countDownToTime("Jan 10, 2019 00:00:00", 'countdown1'); // ****** Change this line!

function countDownToTime(countTo, id) {
    countTo = new Date(countTo).getTime();
    var now = new Date(),
        countTo = new Date(countTo),
        timeDifference = (countTo - now);

    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;

    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

    clearTimeout(countDownToTime.interval);
    countDownToTime.interval = setTimeout(function(){ countDownToTime(countTo, id); },1000);
}

/*
 * Basic Count Up from Date and Time
 * Author: @mrwigster / https://guwii.com/bytes/count-date-time-javascript/
 */

// Month Day, Year Hour:Minute:Second, id-of-element-container
//countUpFromTime('Jan 1, 2019 00:00:00', 'countup1'); // ****** Change this line!

function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = (now - countFrom);

    var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;

    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

    clearTimeout(countUpFromTime.interval);
countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}

/*JSON.stringify(undefined, undefined, 4);*/