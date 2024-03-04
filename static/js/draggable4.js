var dragg6 = document.querySelector('.setting_box');
var ofset6x = 0;
var ofset6y = 0;
var isdr6 = false;

dragg6.addEventListener("mousedown", function (event) {
    ofset6x = event.clientX - dragg6.offsetLeft;
    ofset6y = event.clientY - dragg6.offsetTop;
    isdr6 = true;
});

document.addEventListener("mousemove", function (event) {
    if (isdr6) {
        dragg6.style.left = (event.clientX - ofset6x) + "px";
        dragg6.style.top = (event.clientY - ofset6y) + "px";
    }
});

document.addEventListener("mouseup", function () {
    isdr6 = false;
});