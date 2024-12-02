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
    document.getElementById('btn2').addEventListener('click', retrieveNumber)
}