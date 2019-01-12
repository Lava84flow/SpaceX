// JavaScript Document

//apiPull("launches/latest", test);

//apiPullID("launches", test, 37);

function test(){
    console.log(JSON.parse(this.response));
}

apiPull("launches/next", parseNext);

function parseNext(){
    data = JSON.parse(this.response);
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
    data = JSON.parse(this.response);
    if  (data.rocket.second_stage.payloads[0].payload_mass_kg == null ) {
       mass = "0";
    } 
    else {
        mass = data.rocket.second_stage.payloads[0].payload_mass_kg;
    }
    countUpFromTime(data.launch_date_utc, 'countup1');
    document.getElementById('payloadLatest').innerHTML = data.rocket.second_stage.payloads[0].payload_id;
    document.getElementById('latestDetails').innerHTML = 'SpaceX recentaly launched a ' + data.rocket.rocket_name + ' from ' + data.launch_site.site_name_long + ', which lofted the ' + mass + ' kg ' + data.rocket.second_stage.payloads[0].payload_type.toLowerCase() + ' '  + data.rocket.second_stage.payloads[0].payload_id + ' into a ' + data.rocket.second_stage.payloads[0].orbit + ' trajectory.';

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

console.log(JSON.stringify(x, (key, value) => {
  if (value !== null) return value
}));

//HALF figued out how to keep api data for fucntions, need to set up a return after all of the parsing and such is done

function showMoreDataNext() {
    apiPull("launches/next", parseData);
    function parseData() {
        data = JSON.parse(this.response);
        
        document.getElementById("moreOutNext").innerHTML = 'This is Flight Number ' + data.flight_number + data.rocket.rocket_name;
        
        document.getElementById("dataDumpNext").style.display = "none";
        
        document.getElementById("dataMoreNext").style.display = "block";
        
        document.getElementById("nextSlide").classList.add("tall");
        
        //working on more info
    }
    
}


function showMoreDataLatest() {
    apiPull("launches/latest", parseData);
    function parseData() {
        data = JSON.parse(this.response);
        
        document.getElementById('moreOutLatest').innerHTML = 'Blargh' ;
    }
    
    
}

function showAllDataNext () {
    apiPull("launches/next", cleanData);
    function cleanData() {
        clean = JSON.parse(this.response, (key, value) => {
          if (value !== null) return value
        });
        
        /*
        console.log(JSON.parse(this.response, (key, value) => {
          if (value !== null) return value
        }))
        */
        pretty = JSON.stringify(clean, null, 2);
    
        //console.log(pretty);
        
        document.getElementById('dumpOutNext').innerHTML = pretty;
        
        document.getElementById("dataMoreNext").style.display = "none";
        
        document.getElementById("dataDumpNext").style.display = "block";
        
        document.getElementById("nextSlide").classList.add("tall");
        
        //set the show functions to use arguments later by replacing the 'Next' bits of the ids and the like with variables at some point
        
        // double check if data already exist and don't replace it later 
        
        
    }
    
}
    
    function showAllDataLatest () {
    apiPull("launches/latest", cleanData);
    function cleanData() {
        clean = JSON.parse(this.response, (key, value) => {
          if (value !== null) return value
        });
        
        /*
        console.log(JSON.parse(this.response, (key, value) => {
          if (value !== null) return value
        }))
        */
        pretty = JSON.stringify(clean, null, 2);
    
        //console.log(pretty);
        
        document.getElementById('dumpOutLatest').innerHTML = pretty;
        
        document.getElementById("dataMoreLatest").style.display = "block";
        
        document.getElementById("latestSlide").classList.add("tall");
        
        //set the show functions to use arguments later by replacing the 'Next' bits of the ids and the like with variables at some point
        
        // double check if data already exist and don't replace it later 
        
        
    }
    
}

function hideData(section) {
    document.getElementById(section).classList.remove("tall");
}



/*JSON.stringify(undefined, undefined, 4);*/