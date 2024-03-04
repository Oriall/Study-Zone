function phong_chung() {
    document.querySelector(".phong_chung").style.backgroundColor = '#1F1C2D';
    document.querySelector(".phong_chung").style.opacity = '0.9';
    document.querySelector(".tro_chuyen").style.backgroundColor = 'transparent';
    document.querySelector(".tro_chuyen").style.opacity = '1';
    document.querySelector(".thong_ke_right").style.display = "none";
   
}

function tro_chuyen() {
    document.querySelector(".tro_chuyen").style.backgroundColor = '#1F1C2D';
    document.querySelector(".tro_chuyen").style.opacity = '0.9';
    document.querySelector(".phong_chung").style.backgroundColor = 'transparent';
    document.querySelector(".phong_chung").style.opacity = '1';
    document.querySelector(".thong_ke_right").style.display = "block";
}
// function wr_22() {
//     document.querySelector('.video_tailieu_box').classList.remove('animation-status6');
//     document.querySelector('.video_tailieu_box').classList.add('animation-status7');
//     setTimeout(function () {
//         document.querySelector('.video_tailieu_box').style.display = "none";
//         document.getElementById('screen_box').classList.add('animation-status6');
//         document.getElementById('screen_box').style.display = 'flex'; // Display the div
//     }, 300);
// }
