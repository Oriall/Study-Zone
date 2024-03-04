var test2 = document.getElementById("myDiv2");
var offX = 0;
var offY = 0;
var isD = false;

test2.addEventListener("mousedown", function (event) {
    offX = event.clientX - test2.offsetLeft;
    offY = event.clientY - test2.offsetTop;
    isD = true;
});

document.addEventListener("mousemove", function (event) {
    if (isD) {
        test2.style.left = (event.clientX - offX) + "px";
        test2.style.top = (event.clientY - offY) + "px";
    }
});

document.addEventListener("mouseup", function () {
    isD = false;
});