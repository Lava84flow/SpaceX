// JavaScript Document

//apiPull("launches/latest", test);

//apiPullID("launches", test, 37);

function test(){
    console.log(JSON.parse(this.response));
}

apiPull("launches/next", parseNext);

function parseNext(){
    data = JSON.parse(this.response)
    if  (data.rocket.second_stage.payloads[0].payload_mass_kg == null ) {
       mass = "0";
    } 
    else {
        mass = data.rocket.second_stage.payloads[0].payload_mass_kg;
    }
    countDownToTime(data.launch_date_utc, 'countdown1');
    document.getElementById("payloadNext").innerHTML = data.rocket.second_stage.payloads[0].payload_id;
    document.getElementById("nextDetails").innerHTML = 'SpaceX will launch a ' + data.rocket.rocket_name + ' from ' + data.launch_site.site_name_long + ', lofting the ' + mass + ' kg ' + data.rocket.second_stage.payloads[0].payload_type + ' '  + data.rocket.second_stage.payloads[0].payload_id + ' into a ' + data.rocket.second_stage.payloads[0].orbit + ' trajectory.';
    
}

apiPull("launches/latest", parseLatest);

function parseLatest(){
    data = JSON.parse(this.response)
    countUpFromTime(data.launch_date_utc, 'countup1');
    document.getElementById('payloadLatest').innerHTML = data.rocket.second_stage.payloads[0].payload_id;
    document.getElementById('latestDetails').innerHTML = 'SpaceX recentaly launched a ' + data.rocket.rocket_name + ' from ' + data.launch_site.site_name_long + ', which lofted the ' + data.rocket.second_stage.payloads[0].payload_mass_kg + ' kg ' + data.rocket.second_stage.payloads[0].payload_type.toLowerCase() + ' '  + data.rocket.second_stage.payloads[0].payload_id + ' into a ' + data.rocket.second_stage.payloads[0].orbit + ' trajectory.';

}

console.log(JSON.stringify(x, (key, value) => {
  if (value !== null) return value
}))

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