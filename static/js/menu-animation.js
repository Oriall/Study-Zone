let menu = document.getElementById('menu2');
document.addEventListener('contextmenu', function(event){
    menu.style.display = 'block';
    menu.style.top = event.y + 'px';
    menu.style.left = event.x + 'px';
    event.preventDefault();
})
document.addEventListener('click', function(event){
    menu.style.display = 'none';
})