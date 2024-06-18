// script.js
function showAlert() {
    alert("안녕하세요. 경고 메시지입니다.");
}

function changeContent() {
    document.getElementById("demo").innerHTML = "Hello, JavaScript!";
}


document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function(event) {
        var ball = document.getElementById("ball");
        if (ball) {
            ball.style.left = event.clientX - 25 + "px";
            ball.style.top = event.clientY - 25 + "px";
        }
    });
});
