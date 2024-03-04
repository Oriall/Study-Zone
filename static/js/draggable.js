var draggableElement = document.getElementById("myDiv");
var offsetX = 0;
var offsetY = 0;
var isDragging = false;

draggableElement.addEventListener("mousedown", function (event) {
    offsetX = event.clientX - draggableElement.offsetLeft;
    offsetY = event.clientY - draggableElement.offsetTop;
    isDragging = true;
});

document.addEventListener("mousemove", function (event) {
    if (isDragging) {
        draggableElement.style.left = (event.clientX - offsetX) + "px";
        draggableElement.style.top = (event.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", function () {
    isDragging = false;
});