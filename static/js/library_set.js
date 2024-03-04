document.addEventListener('keydown', function (event) {
    // Check if the key combination is Ctrl + P
    if (event.ctrlKey && event.key === 'k') {
        document.getElementById('wrapper3').style.transition = "0.2s";
        document.getElementById('wrapper3').style.position = "absolute";
        document.getElementById('wrapper3').style.width = "100%";
        document.getElementById('wrapper3').style.height = "100%";
        document.getElementById('wrapper3').style.top = "0";
        document.getElementById('wrapper3').style.left = "0";
        document.getElementById('wrapper3').style.transform = "scale(1)";
        document.getElementById('wrapper3').style.borderRadius = "0px";
        var wrapper3Children = document.querySelectorAll('#wrapper3 > *');
        for (var i = 0; i < wrapper3Children.length; i++) {
            wrapper3Children[i].style.transform = 'scale(1)';
        }
        // Apply transform and width to elements with class .screen1 inside #wrapper3
        document.getElementById('wrapper3').addEventListener('mouseenter', function () {
            // Remove border when mouse leaves the element
            this.style.border = 'none';
            this.style.cursor = 'auto';
        });

    }
});
function wrapper3_mini() {
    document.getElementById('wrapper3').style.width = "70%";
    document.getElementById('wrapper3').style.position = 'absolute';
    document.getElementById('wrapper3').style.height = "70%";
    document.getElementById('wrapper3').style.transform = "scale(0.7)";
    document.getElementById('wrapper3').style.borderRadius = "5px";
    document.getElementById('wrapper3').style.top = "110px";
    document.getElementById('wrapper3').style.left = "250px";
    setTimeout(function () {
        document.getElementById('wrapper3').style.transition = "0.01s";
    }, 200);
    var wrapper3Children = document.querySelectorAll('#wrapper3 > *');
    for (var i = 0; i < wrapper3Children.length; i++) {
        wrapper3Children[i].style.transform = 'scale(0.9)';
    }
    // Apply transform and width to elements with class .screen1 inside #wrapper3
    document.getElementById('wrapper3').addEventListener('mouseenter', function () {
        // Apply border when mouse enters the element
        this.style.border = '1px solid #CAA6F9';
        this.style.cursor = 'pointer';
    });

    document.getElementById('wrapper3').addEventListener('mouseleave', function () {
        // Remove border when mouse leaves the element
        this.style.border = 'none';
        this.style.cursor = 'none';
    });
    var dgl = document.getElementById("wrapper3");
    var dglX = 0;
    var dglY = 0;
    var isdgl = false;

    dgl.addEventListener('mousedown', function (event) {
        dglX = event.clientX - dgl.getBoundingClientRect().left;
        dglY = event.clientY - dgl.getBoundingClientRect().top;
        isdgl = true;
    });

    document.addEventListener('mousemove', function (event) {
        if (isdgl) {
            dgl.style.left = event.clientX - dglX + 'px';
            dgl.style.top = event.clientY - dglY + 'px';
        }
    });

    document.addEventListener('mouseup', function () {
        isdgl = false;
    });
}
