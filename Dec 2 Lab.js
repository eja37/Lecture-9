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
function retrieveNumber(){
    let numb1 = document.getElementById('num1').value;
    let numb2 = document.getElementById('num2').value;

    let sum = numb1 + numb2;

    document.getElementById('result').innerText = "result: " + sum;

}