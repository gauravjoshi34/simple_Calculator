let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let result = document.getElementById("result")

function myadd(){
    let num1 = parseInt(input1.value)
    let num2 = parseInt(input2.value)
    result.textContent = "Result:" + (num1 + num2);
}

function mysub(){
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    result.textContent = "Result:" + (num1 - num2);
}

function mymul(){
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    result.textContent = "Result:" + (num1*num2)
}

function mydivide(){
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    result.textContent = "Result:" + (num1/num2)
}
document.getElementById("add-btn").addEventListener("click",myadd);
document.getElementById("add-btn1").addEventListener("click",mysub);
document.getElementById("add-btn2").addEventListener("click",mymul);
document.getElementById("add-btn3").addEventListener("click",mydivide);