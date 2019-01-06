// JavaScript Document

function stickyToggle(header, sticky) {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function apiPull(type, pass) {
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            pass(this);
        }
    };
    xhttp.open("GET", "https://api.spacexdata.com/v3/" + type, true);
    xhttp.send();
}

function apiPullID(type, pass, id) {
    
    Blargh
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            pass(this);
        }
    };
    xhttp.open("GET", "https://api.spacexdata.com/v3/" + type, true);
    xhttp.send();
}

