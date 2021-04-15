let result = document.getElementById("result");
let btn = document.getElementById("btn");
let select = document.getElementById("select");
let op = document.getElementsByClassName("option");

btn.addEventListener('click', function() {
    let firstValue = Number(document.getElementById("f_value").value);
    let secondValue = Number(document.getElementById("s_value").value);

    if (op[0].selected == true) {
        alert("Bir varyant seçin")
    } else if (op[1].selected == true) {
        result.innerHTML = firstValue + secondValue;
    } else if (op[2].selected == true) {
        result.innerHTML = firstValue - secondValue;
    } else if (op[3].selected == true) {
        result.innerHTML = firstValue * secondValue;
    } else if (op[4].selected == true) {
        result.innerHTML = firstValue / secondValue;
    } else if (firstValue == 0 || secondValue == 0) {
        alert("Xanaları doldurun")
    }
})