
document.addEventListener('keydown', function (event) {
    // Check if the key combination is Ctrl + P
    if (event.ctrlKey && event.key === 'l') {
        document.getElementById('wrapper2').style.transition = "0.2s";
        document.getElementById('wrapper2').style.position = "absolute";
        document.getElementById('wrapper2').style.width = "100%";
        document.getElementById('wrapper2').style.height = "100%";
        document.getElementById('wrapper2').style.top = "0";
        document.getElementById('wrapper2').style.left = "0";
        document.getElementById('wrapper2').style.transform = "scale(1)";
        document.getElementById('wrapper2').style.borderRadius = "0px";
        document.getElementById('screen_box').style.paddingTop = "30px";
        var wrapper2Children = document.querySelectorAll('#wrapper2 > *');
        for (var i = 0; i < wrapper2Children.length; i++) {
            wrapper2Children[i].style.transform = 'scale(1)';
        }
        // Apply transform and width to elements with class .screen1 inside #wrapper2
        var screen1Elements = document.querySelectorAll('#wrapper2 .screen1');
        for (var j = 0; j < screen1Elements.length; j++) {
            screen1Elements[j].style.transform = 'scale(1)';
            screen1Elements[j].style.width = '100%';
        }
        document.getElementById('wrapper2').addEventListener('mouseenter', function () {
            // Remove border when mouse leaves the element
            this.style.border = 'none';
            this.style.cursor = 'auto';
        });

    }
});
function wrapper2_mini() {
    document.getElementById('wrapper2').style.width = "70%";
    document.getElementById('wrapper2').style.position = 'absolute';
    document.getElementById('wrapper2').style.height = "70%";
    document.getElementById('wrapper2').style.transform = "scale(0.7)";
    document.getElementById('wrapper2').style.borderRadius = "5px";
    document.getElementById('screen_box').style.paddingTop = "0px";
    document.getElementById('wrapper2').style.top = "110px";
    document.getElementById('wrapper2').style.left = "250px";
    setTimeout(function () {
        document.getElementById('wrapper2').style.transition = "0.01s";
    }, 200);
    var wrapper2Children = document.querySelectorAll('#wrapper2 > *');
    for (var i = 0; i < wrapper2Children.length; i++) {
        wrapper2Children[i].style.transform = 'scale(0.9)';
    }
    // Apply transform and width to elements with class .screen1 inside #wrapper2
    var screen1Elements = document.querySelectorAll('#wrapper2 .screen1');
    for (var j = 0; j < screen1Elements.length; j++) {
        screen1Elements[j].style.transform = 'scale(0.9)';
        screen1Elements[j].style.width = '100%';
    }
    document.getElementById('wrapper2').addEventListener('mouseenter', function () {
        // Apply border when mouse enters the element
        this.style.border = '1px solid #CAA6F9';
        this.style.cursor = 'pointer';
    });

    document.getElementById('wrapper2').addEventListener('mouseleave', function () {
        // Remove border when mouse leaves the element
        this.style.border = 'none';
        this.style.cursor = 'none';
    });
    var dgwr = document.getElementById("wrapper2");
    var dgwrX = 0;
    var dgwrY = 0;
    var isdgwr = false;

    dgwr.addEventListener('mousedown', function (event) {
        dgwrX = event.clientX - dgwr.getBoundingClientRect().left;
        dgwrY = event.clientY - dgwr.getBoundingClientRect().top;
        isdgwr = true;
    });

    document.addEventListener('mousemove', function (event) {
        if (isdgwr) {
            dgwr.style.left = event.clientX - dgwrX + 'px';
            dgwr.style.top = event.clientY - dgwrY + 'px';
        }
    });

    document.addEventListener('mouseup', function () {
        isdgwr = false;
    });
}