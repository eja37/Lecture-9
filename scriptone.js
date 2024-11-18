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