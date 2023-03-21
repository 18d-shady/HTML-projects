// first declare variables
// second target them to the html
// generate random numbers
// add the random numbers together
//compare them to the display
//define the number of times you can pick
//run it again

// first declare variables
var adder, cm, ran1, ran2, ran3, ran4, ran5, ran6, ran7, ran8, ran9, r, n, ran, no, compare, start, check1, score1;

var scr = 0;

window.onload = function myfunction() {
	start()
	
}

// second target them to the html
function start(){
	adder = 0;
	no = 0;
	cm = document.getElementById("display");
	ran1 = document.getElementById("b1");
	ran2 = document.getElementById("b2");
	ran3 = document.getElementById("b3");
	ran4 = document.getElementById("b4");
	ran5 = document.getElementById("b5");
	ran6 = document.getElementById("b6");
	ran7 = document.getElementById("b7");
	ran8 = document.getElementById("b8");
	ran9 = document.getElementById("b9");
	check1 = document.getElementById("check")
	score1 = document.getElementById("score")
	score1.innerHTML = scr;

	ran = [ran1, ran2, ran3, ran4, ran5, ran6, ran7, ran8, ran9]

	// generate random numbers
	r = Math.floor((Math.random() * 100) + 1);
	cm.innerHTML = r;

	for (var i = 0; i < 9; i++) {
		n = Math.floor(Math.random() * r);
		ran[i].innerHTML = n;
	}

	// add the random numbers together

	for (var i = 0; i < 9; i++) {
		ran[i].addEventListener('click', add);
	}
}

function add(eventId){
	x = eventId.target.textContent;
	adder += parseInt(x);
	no += 1
	console.log(`adder -> ${adder} no -> ${no}`);
	//define the number of times you can pick
	if (no == 3) {
		compare()
	}
}

//compare them to the display
function compare(){
	if (adder == r) {
		check1.innerHTML = "Correct";
		scr += 1;
		score1.innerHTML = scr;
		run()
	}

	else {
		check1.innerHTML = "Wrong"
		run()
	}
}


function run(){
	adder = 0;
	no = 0;
	// generate random numbers
	r = Math.floor((Math.random() * 100) + 1);
	cm.innerHTML = r;

	for (var i = 0; i < 9; i++) {
		n = Math.floor(Math.random() * r);
		ran[i].innerHTML = n;
	}
}





