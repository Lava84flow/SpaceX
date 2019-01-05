// JavaScript Document

getNext();

getLatest();
        
function getNext() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var next = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", "https://api.spacexdata.com/v3/launches/next", true);
    xhttp.send();
}

function getLatest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lastest = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", "https://api.spacexdata.com/v3/launches/latest", true);
    xhttp.send();
}



/*JSON.stringify(undefined, undefined, 4);*/