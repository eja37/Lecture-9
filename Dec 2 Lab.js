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
    let inputNumber1 = document.getElementById('num1').value;
    let inputNumber2 = document.getElementById('num2').value;

    let sum = number(numb1) + number(numb2);

    document.getElementById('result').innerText = "result: " + sum;

}

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