// JavaScript Document

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("wrapper").style.opacity = "1";
}

function stickyToggle(header, sticky) {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function apiPull(type, callback) {
    
    var xhttp = new XMLHttpRequest;

    xhttp.open("GET", "https://api.spacexdata.com/v3/" + type);
    xhttp.onload = callback;
    xhttp.send();

}

function apiPullID(type, callback, id) {
    
    var xhttp = new XMLHttpRequest;

    xhttp.open("GET", "https://api.spacexdata.com/v3/" + type + "/" + id);
    xhttp.onload = callback;
    xhttp.send();

}
