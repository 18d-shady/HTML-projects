document.getElementById("demo").innerHTML = "Hello Dolly.";
var a, b, c;
a = 5;
b = 6;
c = a + b;

function myFunction() {
	document.getElementById("demo1").innerHTML = "Hello Dolly!";
	document.getElementById("demo2").innerHTML = "How are you?";
}

var carName = "Volvo";
document.getElementById("demo").innerHTML = carName

Math.floor(Math.random() * 10);  //returns a random integer from 0 -9

var e = new Date(); //returns the set date on the device
var e = new Date(2017); //is the number of millisec since1970
var e = new Date(2017, 7): //is the year and the month
var e = getMonths(e); //returns the month in the variable
window.onload = function() // means after loading the window, the function runs


Math.floor(Math.random() * 10) + 1; //returns a random integer with the last number inclusive

function getRndInteger(min, max) {
	return
	Math.floor(Math.random() * (max - min)) + min:
} // is a function to get a rnd integer without the max value

function getRndInteger(min, max) {
	return
	Math.floor(Math.random() * (max - min + 1)) + min:
} // is a function to get a rnd integer without the max value

//== is used to for comparing values,
//=== is used for comparing values and types.

//"?" is used to assign a value to a  variable based on some conditions
var voteable = (age < 18) ? "Too young":"Old enough";
//this means that if the age is below 18, the variable value will be too young
//otherwise it will be old enough.

//CONDITIONAL STATMENT
if (hour < 18) {
	greeting = "Good day";
} else if(time < 20){
	greeting = "Good day"

} else {
	greeting = "Good evening";
}


switch (new Date().getDay()) {
	case 0:
	day = "Sunday";
	break;

	case 1:
	day = "Monday";
	break;

	case 2:
	day = "Tuesday";
	break;

	case 3:
	day = "Wednesday";
	break;

	case 4:
	day = "Thursday";
	break;

	case 5:
	day = "Friday";
	break;

	case 6:
	day = "Sarturday";
	;

}
//the break keyword is used to breal out of the switch block
//default keyword is used to run the code if the case doesnt match any of dem
// your can also use 2 or more case to run the same code
// switch uses strict(===) comparisons

//constructor property returns the constructor function fr all vvariables
// to check if the construcotor property to find outif d object is an array

function isArray(myArray){
	return myArray.constructor.toString().indexOf("Array") > -1;
}
 
 //to check if the object is an array
 function isArray(myArray) {
 	return myArray.constructor === Array;
 }

 String(x) //returns a string from d value parsed
 x.toString() //does d same tin

 Number(3)// returns a number from d value parsed
 parseFloat()
 parseInt()

d = new Date();
 Number(d) //returns d miliseconds
 d.getTime()// does the same

 function dec2bin(dec){
 	return (dec>>> 0).toString(2);
 }

 //regular expressions
 //using search and replace string method

 var str = "Visit Microsoft";
 var res = str.replace(/microsoft/i, "W3Schools");
 var n = str.find(/microsoft/i)

 
//try, catch, throw, finally are error messages that help to execute code

//there are local variables and global variables 
//local variables are declared within a function while global variables are declared outside the function

//"use strict" using strict in javascript makes bad syntax turn to real errors


var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
 //this keyword refers to the object it belongs to

 head1 = document.getElementById('head1');
 head1.style.cursor = 'pointer';

//using the let keyword to declare helps the variabe to have a block scope
//meaning that if you declare a variable outside the block quite and u use the letkeyword inside it, id doesnt change the already declared variable outside.
//let is mostly needed in block and loops

//the const keyword is used like d let.
//the diff is that it cannot be changed buj it can be modified 
// and u cannot redeclare it in d same block or scope like d let

//using the arrow => () to declare functions
//there is something you might check concerning this and arrow functions


//types of functons
//i. functions tthat does not take argument and does not return a value
//ii. function that does not take argument and return a value
//iii. functions that take argument and does not return a value
//iv. functions that take argument and return a value

//printing to the console doesnt meant ur returinga value

var number

function printname(number){
	console.log(number * 10)

}

printname(5)

//to check if a form was filled out
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}



// to check if a value is  a number
function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}

//javascript function to check for validation
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}

//if the value is too large
function myFunction() {
  var txt = "";
  if (document.getElementById("id1").validity.rangeOverflow) {
    txt = "Value too large";
  }
  document.getElementById("demo").innerHTML = txt;
}

//function call and apply are used to execute functions
//Variables created without a declaration keyword (var, let, or const)
// are always global, even if they are created inside a function.

//DOM means document object model

document.getElementById("demo").innerHTML = "Hello World!";
//changes the content of the p attribute
//in the example above, getElementById is a method, while innerHTML is a property.
//The easiest way to get the content of an element is by using the innerHTML property.

//The innerHTML property is useful for getting or replacing the content of HTML elements.

//The innerHTML property can be used to get or change any HTML element, including <html> and <body>.

document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class nam

element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element

element.setAttribute(attribute, value)	Change the attribute value of an HTML element

document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream


//to find d element main and the p tag in the element
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");

//to change the attribute
document.getElementById("myImage").src = "landscape.jpg";

//to change the css style
document.getElementById("p2").style.color = "blue";

//function to create animation
function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}


//a simple clock
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

//for coookies 
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}


/* 
It can be useful for a function to accept any number of arguments. For example,
Math.max computes the maximum of all the arguments it is given.
To write such a function, you put three dots before the function’s last parameter,
like this:
function max(...numbers) {
let result = -Infinity;
for (let number of numbers) {
if (number > result) result = number;
}
return result;
}
console.log(max(4, 1, 9, -2));
// → 9
*/



