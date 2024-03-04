var myDiv5 = document.querySelector('.bigb');
var myDiv6 = document.querySelector('.wrapper5');
function bt1() {
    document.getElementById("bt1").style.background = "rgba(89, 87, 96, 0.84)";
    document.getElementById("bt2").style.background = "transparent";
    document.getElementById("bt3").style.background = "transparent";
    document.getElementById("bt4").style.background = "transparent";
    document.getElementById("bt5").style.background = "transparent";
    document.getElementById("bt6").style.background = "transparent";
    if (myDiv5.style.display == "flex") {
        myDiv5.classList.remove('animation-status6');
        myDiv5.classList.add('animation-status7');
        setTimeout(function () {
            myDiv5.style.display = "none";
        }, 300);
    }
    else if (myDiv6.style.display === "flex") {
        myDiv6.classList.remove('animation-status6');
        myDiv6.classList.add('animation-status7');
        setTimeout(function () {
            myDiv6.style.display = "none";
        }, 300);
    }
    else if (document.getElementById('wrapper3').style.display === "flex") {
        document.getElementById('wrapper3').classList.remove('animation-status6');
        document.getElementById('wrapper3').classList.add('animation-status7');
        setTimeout(function () {
            document.getElementById('wrapper3').style.display = "none";
        }, 300);
    }

}
function bt2() {
    document.getElementById("bt2").style.background = "rgba(89, 87, 96, 0.84)";
    document.getElementById("bt1").style.background = "transparent";
    document.getElementById("bt3").style.background = "transparent";
    document.getElementById("bt4").style.background = "transparent";
    document.getElementById("bt5").style.background = "transparent";
    document.getElementById("bt6").style.background = "transparent";
    if (myDiv6.style.display === "flex") {
        myDiv6.classList.remove('animation-status6');
        myDiv6.classList.add('animation-status7');
        setTimeout(function () {
            myDiv6.style.display = "none";
        }, 300);
    }
    else
        if (document.getElementById('wrapper3').style.display === "flex") {
            document.getElementById('wrapper3').classList.remove('animation-status6');
            document.getElementById('wrapper3').classList.add('animation-status7');
            setTimeout(function () {
                document.getElementById('wrapper3').style.display = "none";
            }, 300);
        }
    myDiv5.classList.add('animation-status6');
    myDiv5.style.display = 'flex'; // Display the div

}
function bt3() {
    document.getElementById("bt3").style.background = "rgba(89, 87, 96, 0.84)";
    document.getElementById("bt2").style.background = "transparent";
    document.getElementById("bt1").style.background = "transparent";
    document.getElementById("bt4").style.background = "transparent";
    document.getElementById("bt5").style.background = "transparent";
    document.getElementById("bt6").style.background = "transparent";
    if (myDiv5.style.display == "flex") {
        myDiv5.classList.remove('animation-status6');
        myDiv5.classList.add('animation-status7');
        setTimeout(function () {
            myDiv5.style.display = "none";
        }, 300);
    }
    else
    if (document.getElementById('wrapper3').style.display === "flex") {
        document.getElementById('wrapper3').classList.remove('animation-status6');
        document.getElementById('wrapper3').classList.add('animation-status7');
        setTimeout(function () {
            document.getElementById('wrapper3').style.display = "none";
        }, 300);
    }
    myDiv6.classList.add('animation-status6');
    myDiv6.style.display = 'flex'; // Display the div

}
function bt4() {
    document.getElementById("bt4").style.background = "rgba(89, 87, 96, 0.84)";
    document.getElementById("bt2").style.background = "transparent";
    document.getElementById("bt3").style.background = "transparent";
    document.getElementById("bt1").style.background = "transparent";
    document.getElementById("bt5").style.background = "transparent";
    document.getElementById("bt6").style.background = "transparent";
    if (myDiv5.style.display == "flex") {
        myDiv5.classList.remove('animation-status6');
        myDiv5.classList.add('animation-status7');
        setTimeout(function () {
            myDiv5.style.display = "none";
        }, 300);
    }
    else if (myDiv6.style.display === "flex") {
        myDiv6.classList.remove('animation-status6');
        myDiv6.classList.add('animation-status7');
        setTimeout(function () {
            myDiv6.style.display = "none";
        }, 300);
    }
    document.getElementById('wrapper3').classList.add('animation-status6');
    document.getElementById('wrapper3').style.display = 'flex'; // Display the div

}
function bt5() {
    document.getElementById("bt5").style.background = "rgba(89, 87, 96, 0.84)";
    document.getElementById("bt2").style.background = "transparent";
    document.getElementById("bt3").style.background = "transparent";
    document.getElementById("bt4").style.background = "transparent";
    document.getElementById("bt1").style.background = "transparent";
    document.getElementById("bt6").style.background = "transparent";
    if (myDiv5.style.display == "flex") {
        myDiv5.classList.remove('animation-status6');
        myDiv5.classList.add('animation-status7');
        setTimeout(function () {
            myDiv5.style.display = "none";
        }, 300);
    }
    else if (myDiv6.style.display === "flex") {
        myDiv6.classList.remove('animation-status6');
        myDiv6.classList.add('animation-status7');
        setTimeout(function () {
            myDiv6.style.display = "none";
        }, 300);
    }

}
function bt6() {
    document.getElementById("bt6").style.background = "rgba(89, 87, 96, 0.84)";
    document.getElementById("bt2").style.background = "transparent";
    document.getElementById("bt3").style.background = "transparent";
    document.getElementById("bt4").style.background = "transparent";
    document.getElementById("bt5").style.background = "transparent";
    document.getElementById("bt1").style.background = "transparent";
    if (myDiv5.style.display == "flex") {
        myDiv5.classList.remove('animation-status6');
        myDiv5.classList.add('animation-status7');
        setTimeout(function () {
            myDiv5.style.display = "none";
        }, 300);
    }
    else if (myDiv6.style.display === "flex") {
        myDiv6.classList.remove('animation-status6');
        myDiv6.classList.add('animation-status7');
        setTimeout(function () {
            myDiv6.style.display = "none";
        }, 300);
    }

}