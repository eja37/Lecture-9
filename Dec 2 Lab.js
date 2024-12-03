//Q1//
function greetUser(){
    document.getElementById('output').innerHTML = 'Greeting Message for Question 1';
}

greetUser()

//Q2//
function changeText(){ 
    document.getElementById('message').innerText = "Hello World!"
}

document.getElementById('btn1').addEventListener('click', changeText)

//Q3//
function addNumber(){
    document.getElementById('result').innerText = Number(document.getElementById('num1').value) + Number(document.getElementById('num2').value);
}
document.getElementById('btn2').addEventListener('click',addNumber)

//Q4//
document.getElementById('btn3').onclick = function(){
    updateTitle();
}
function updateTitle(){
    document.getElementById('title').innerText = document.getElementById('inputField').value;
}

//Q5//
document.getElementById('btn4').onclick = function(){
    combineStrings();

}

function combineStrings(){
    document.getElementById('combinedText').innerText = document.getElementById('input1').value + document.getElementById('input2').value;
}

//Q6//

function changeBackgroundColor(){
    document.getElementById('colorbox').style.backgroundColor = "blue";
}

document.getElementById('change').addEventListener("click", changeBackgroundColor)