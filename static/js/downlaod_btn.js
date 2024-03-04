document.querySelector('.down_img_btn').addEventListener('click', function() {
    // Lấy đường dẫn từ thẻ img
    var imagePath = document.getElementById('modalImg').src;
    var downloadLink = document.createElement('a');
    downloadLink.href = imagePath;
    downloadLink.download = 'downloaded_image.jpg';
    downloadLink.click();
});