
console.log("number is " + 1)


//1st statement is use to inititialize the variable 
//to be used in the loop, the variable ends once the
//loop is over.
//it is also the starting condition of the loop

//2nd statement is the condition for the loop to run.
//while the condition is true, the loop runs and if
//the condition becomes false, the loop stops.
//The statement can be omitted.

//the 3rd statemeent is the amount of time the code
//should run. (i++) means the code should keep on running
//till the condition becomes false. we can also use
//the decrement statement(i--)
//The statement can be omitted

//You can also add more variables in the first 
//using the comma 



for(var i = 0; i < 9; i++) {
 	console.log(i)
 }

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (var i = 0, txt = ""; i < cars.length; i++) {
    txt = cars[i]
    console.log(txt)
 }

//for of is used to loop through an array object

 

 for (i of cars) {
 	console.log(i)
 }


var p
p = "Godwin"

for (i of p) {
	console.log(i)
}

//for in is used to loop through an object
//object is a variable with a key and a value
var person = {"name":"John", "age": 12}

for (i in person) {
	console.log(person[i])
}


// a program  daa forces u to enter a name
let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

//to output a triangle
ee = "#"
for (let i = 0; i > 6; i++){
	ee += ee
	console.log(ee)
}


for (i = )