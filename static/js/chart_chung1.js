var learnerTypeCounts = {{ learner_type_1_counts | tojson }}; // Dữ liệu cho biểu đồ

// Lấy tên đầy đủ từ LearnerIDs
var learnerIDs = Object.keys(learnerTypeCounts);
var fullnames = [];
{% for learner_id in learner_ids %}
{% set index = learner_ids.index(learner_id) %}
fullnames.push("{{ fullnames[index] }}");
{% endfor %}

// Tạo biểu đồ cột
var ctx = document.getElementById('learnerTypeChart2').getContext('2d');
var learnerTypeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: fullnames, // Sử dụng tên đầy đủ thay vì LearnerID
        datasets: [{
            label: 'Số lỗi nhận được',
            data: Object.values(learnerTypeCounts), // Số lượng của từng loại learner
            backgroundColor: 'rgb(114,137,218,0.2)',
            borderColor: 'rgb(114,137,218,1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var totalData = Object.values(learnerTypeCounts).reduce((a, b) => a + b, 0);
document.querySelector(".pcr3_text2").innerText = "0" + totalData;