document.addEventListener('keydown', function (event) {
    // Check if the key combination is Ctrl + P
    if (event.ctrlKey && event.key === 'b') {
        document.getElementById('wrapper4').style.transition = "0.2s";
        document.getElementById('wrapper4').style.position = "absolute";
        document.getElementById('wrapper4').style.width = "100%";
        document.getElementById('wrapper4').style.height = "100%";
        document.getElementById('wrapper4').style.top = "0";
        document.getElementById('wrapper4').style.left = "0";
        document.getElementById('wrapper4').style.transform = "scale(1)";
        document.getElementById('wrapper4').style.borderRadius = "0px";
        var wrapper4Children = document.querySelectorAll('#wrapper4 > *');
        for (var i = 0; i < wrapper4Children.length; i++) {
            wrapper4Children[i].style.transform = 'scale(1)';
        }
        // Apply transform and width to elements with class .screen1 inside #wrapper4
        document.getElementById('wrapper4').addEventListener('mouseenter', function () {
            // Remove border when mouse leaves the element
            this.style.border = 'none';
            this.style.cursor = 'auto';
        });

    }
});
function wrapper4_mini() {
    document.getElementById('wrapper4').style.width = "70%";
    document.getElementById('wrapper4').style.position = 'absolute';
    document.getElementById('wrapper4').style.height = "70%";
    document.getElementById('wrapper4').style.transform = "scale(0.7)";
    document.getElementById('wrapper4').style.borderRadius = "5px";
    setTimeout(function () {
        document.getElementById('wrapper4').style.transition = "0.01s";
    }, 200);
    var wrapper4Children = document.querySelectorAll('#wrapper4 > *');
    for (var i = 0; i < wrapper4Children.length; i++) {
        wrapper4Children[i].style.transform = 'scale(0.9)';
    }
    // Apply transform and width to elements with class .screen1 inside #wrapper4
    document.getElementById('wrapper4').addEventListener('mouseenter', function () {
        // Apply border when mouse enters the element
        this.style.border = '1px solid #CAA6F9';
        this.style.cursor = 'pointer';
    });

    document.getElementById('wrapper4').addEventListener('mouseleave', function () {
        // Remove border when mouse leaves the element
        this.style.border = 'none';
        this.style.cursor = 'none';
    });
    var datab = document.getElementById("wrapper4");
    var databX = 0;
    var databY = 0;
    var isdatab = false;

    datab.addEventListener('mousedown', function (event) {
        databX = event.clientX - datab.getBoundingClientRect().left;
        databY = event.clientY - datab.getBoundingClientRect().top;
        isdatab = true;
    });

    document.addEventListener('mousemove', function (event) {
        if (isdatab) {
            datab.style.left = event.clientX - databX + 'px';
            datab.style.top = event.clientY - databY + 'px';
        }
    });

    document.addEventListener('mouseup', function () {
        isdatab = false;
    });
}
