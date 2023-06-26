const buttonOne = document.getElementById("btnOne");
const buttonTwo = document.getElementById("btnTwo");
const buttonThree = document.getElementById("btnThree");
var num = document.getElementById("number");
buttonOne.addEventListener("click", function() {
    num.textContent = parseInt(num.textContent) - 1;
});
buttonTwo.addEventListener("click", function() {
    num.textContent = 0
});
buttonThree.addEventListener("click", function() {
    num.textContent = parseInt(num.textContent) + 1
});