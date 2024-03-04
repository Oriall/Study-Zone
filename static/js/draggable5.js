var dgwr = document.getElementById("wrapper2");
var dgwrX = 0;
var dgwrY = 0;
var isdgwr = false;

dgwr.addEventListener("mousedown", function (event) {
    dgwrX = event.clientX - dgwr.dgwrLeft;
    dgwrY = event.clientY - dgwr.dgwrTop;
    isdgwr = true;
});

document.addEventListener("mousemove", function (event) {
    if (isdgwr) {
        dgwr.style.left = (event.clientX - dgwrX) + "px";
        dgwr.style.top = (event.clientY - dgwrY) + "px";
    }
});

document.addEventListener("mouseup", function () {
    isdgwr = false;
});