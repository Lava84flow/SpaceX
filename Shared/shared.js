// JavaScript Document

function stickyToggle(header, sticky) {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}