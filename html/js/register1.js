// 验证密码
function validate() {
    var pass1 = document.getElementById("input2").value;
    var pass2 = document.getElementById("input3").value;
    if (pass1 == pass2) {
        document.getElementById("tip").innerHTML = "<font color='green'>两次密码相同</font>"
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("tip").innerHTML = "<font color='red'>两次密码不相同</font>"
        document.getElementById("submit").disabled = true;
    }
}
const inputs = document.querySelectorAll("input");
//判断输入框是否有文字，是否显示focus
function focusFunction() {
    let parentNode = this.parentNode.parentNode;
    parentNode.classList.add('focus');
}

function blurFunction() {
    let parentNode = this.parentNode.parentNode;
    if (this.value == '') {
        parentNode.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunction);
    input.addEventListener('blur', blurFunction);
});