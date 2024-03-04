document.addEventListener('keydown', function (event) {
    // Check if the key combination is Ctrl + P
    if (event.ctrlKey && event.key === 'i') {
        document.getElementById('wrapper5').style.transition = "0.2s";
        document.getElementById('wrapper5').style.position = "absolute";
        document.getElementById('wrapper5').style.width = "100%";
        document.getElementById('wrapper5').style.height = "100%";
        document.getElementById('wrapper5').style.top = "0";
        document.getElementById('wrapper5').style.left = "0";
        document.getElementById('wrapper5').style.transform = "scale(1)";
        document.getElementById('wrapper5').style.borderRadius = "0px";
        var wrapper5Children = document.querySelectorAll('#wrapper5 > *');
        for (var i = 0; i < wrapper5Children.length; i++) {
            wrapper5Children[i].style.transform = 'scale(1)';
        }
        // Apply transform and width to elements with class .screen1 inside #wrapper5
        document.getElementById('wrapper5').addEventListener('mouseenter', function () {
            // Remove border when mouse leaves the element
            this.style.border = 'none';
            this.style.cursor = 'auto';
        });

    }
});
function wrapper5_mini() {
    document.getElementById('wrapper5').style.width = "70%";
    document.getElementById('wrapper5').style.position = 'absolute';
    document.getElementById('wrapper5').style.height = "70%";
    document.getElementById('wrapper5').style.transform = "scale(0.7)";
    document.getElementById('wrapper5').style.borderRadius = "5px";
    document.getElementById('wrapper5').style.top = "110px";
    document.getElementById('wrapper5').style.left = "250px";
    setTimeout(function () {
        document.getElementById('wrapper5').style.transition = "0.01s";
    }, 200);
    var wrapper5Children = document.querySelectorAll('#wrapper5 > *');
    for (var i = 0; i < wrapper5Children.length; i++) {
        wrapper5Children[i].style.transform = 'scale(0.9)';
    }
    // Apply transform and width to elements with class .screen1 inside #wrapper5
    document.getElementById('wrapper5').addEventListener('mouseenter', function () {
        // Apply border when mouse enters the element
        this.style.border = '1px solid #CAA6F9';
        this.style.cursor = 'pointer';
    });

    document.getElementById('wrapper5').addEventListener('mouseleave', function () {
        // Remove border when mouse leaves the element
        this.style.border = 'none';
        this.style.cursor = 'none';
    });
    var ditmode = document.getElementById("wrapper5");
    var ditmodeX = 0;
    var ditmodeY = 0;
    var isditmode = false;

    ditmode.addEventListener('mousedown', function (event) {
        ditmodeX = event.clientX - ditmode.getBoundingClientRect().left;
        ditmodeY = event.clientY - ditmode.getBoundingClientRect().top;
        isditmode = true;
    });

    document.addEventListener('mousemove', function (event) {
        if (isditmode) {
            ditmode.style.left = event.clientX - ditmodeX + 'px';
            ditmode.style.top = event.clientY - ditmodeY + 'px';
        }
    });

    document.addEventListener('mouseup', function () {
        isditmode = false;
    });
}
