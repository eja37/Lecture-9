let house;

let number = 100;

if (number > 90){
    house = "Grade A"; 
    console.log(house);
}

else if(number > 80){
    house = "Grade B"
    console.log(house)
}

else if(number > 70){
    house = "Grade C"
    console.log(house)
}

else{
    house = "Fail"
    console.log(house);
}

number > 90 ? "Grade A" : "Grade B"

for(let i=1; i<=50; i++)
    {
        console.log("harry");
    }

//DOuble quotes is a string//
let Firstname = "Edna Janeth";
let Lastname ="Argueta-Estrada";

console.log(`Hello, ${Firstname} ${Lastname}`);

let book = "Harry Potter";

console.log( book.replace("Potter", "Gryffindor"));


function AddNumbers(){
    let a = 10;
    let b = 100;
    console.log(a+b);
    document.getElementById('heading-two').innerText = (a+b);
    document.getElementById('para1').innerHTML = '<h1>This is final sum</h1?';
}

document.getElementById('btn1').addEventListener('click', AddNumbers);

let firstname = 'Harry'; 
let pass = 'potter';

document.getElementById('form1').addEventListener('submit', function(event)){
    if(document.getElementById('username').value == firstname && document.getElementById('password').value == password){
        console.log('login success')
    }
else{
    event.preventDefault();
}
}

document.querySelector('.div1 #id1')