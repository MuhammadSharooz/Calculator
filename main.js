let result = document.querySelector('.input');
let total = document.querySelector('.text')

function display(number) {
    result.innerHTML += number;
}
function clr() {
    result.innerHTML = "";
    total.innerHTML = "0";
}
function delt() {
    result.innerHTML = result.innerHTML.slice(0, -1);
}
function equal() {
    try { 
        result.innerHTML = eval(result.innerHTML);
        total.innerHTML = eval(result.innerHTML)
    } catch (error) {
        total.innerHTML = 'Error';
        setTimeout(() => {
            total.innerHTML = '0';
            result.innerHTML= '';
        }, 1000);
    }
}