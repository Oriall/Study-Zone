const myTimeout = setTimeout(myGreeting, 300000);

function myGreeting() {
    document.getElementById("demo").innerHTML=document.getElementById("demo").innerHTML.replace("BEGIN","TIME OUT");
    document.getElementById("MyAudio").play();
}