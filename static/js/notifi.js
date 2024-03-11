let notifications = document.querySelector('.notifications');
let timeout;
let countdown = 600; // 5 minutes in seconds
let warningShown = false;

function createToast(type, icon, title, text) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
            <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
            </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(
        () => newToast.remove(), 10000
    )
}

function createToast2(type, icon, title, text) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
            <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
            </div>`;
    notifications.appendChild(newToast);
}
//
// success.onclick = function () {
//     let type = 'success';
//     let icon = 'fa-solid fa-circle-check';
//     let title = 'Success';
//     let text = 'This is a success toast.';
//     createToast(type, icon, title, text);
// }
// error.onclick = function () {
//     let type = 'error';
//     let icon = 'fa-solid fa-circle-exclamation';
//     let title = 'Error';
//     let text = 'This is a error toast.';
//     createToast(type, icon, title, text);
// }
// warning.onclick = function () {
//     let type = 'warning';
//     let icon = 'fa-solid fa-triangle-exclamation';
//     let title = 'Warning';
//     let text = 'This is a warning toast.';
//     createToast(type, icon, title, text);
// }
// info.onclick = function () {
//     let type = 'info';
//     let icon = 'fa-solid fa-circle-info';
//     let title = 'Info';
//     let text = 'This is a info toast.';
//     createToast(type, icon, title, text);
// }
const eventSource = new EventSource("https://gs.tmath.vn/get_messages");
eventSource.onmessage = function (event) {
    let type = 'error';
    let icon = 'fa-solid fa-circle-exclamation';
    let title = 'Error';
    let text = event.data;
    createToast2(type, icon, title, text);
};

function resetCountdown() {
    clearTimeout(timeout);
    countdown = 600; // Reset countdown to 5 minutes
    warningShown = false;
    updateCountdown();
}

function updateCountdown() {
    countdown--;
    if (!warningShown && countdown <= 10) {
        // Show warning and countdown div when only 10 seconds left
        let type = 'warning';
        let icon = 'fa-solid fa-triangle-exclamation';
        let title = 'Warning';
        let text = 'Cảnh Báo không Tương Tác !!!'
        createToast(type, icon, title, text);
        warningShown = true;
    }
    if (countdown === 0) {
        window.location.href = 'http://gs.tmath.vn/login'; // Redirect to login page after 5 minutes
    } else {
        let minutes = Math.floor(countdown / 60);
        let seconds = countdown % 60;
        // document.getElementById('countdown').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeout = setTimeout(updateCountdown, 1000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Start countdown when the page is loaded
    updateCountdown();
});

document.addEventListener('click', function () {
    // Reset countdown on any click event
    resetCountdown();
});
document.addEventListener('keypress', function () {
    // Reset countdown on any keypress event
    resetCountdown();
});