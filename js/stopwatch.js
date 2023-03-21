window.onload = function(){
	var sec = 00;
	var tens = 00;
	var appendSec = document.getElementById("sec");
	var appendTens = document.getElementById("tens");
	var buttonStart = document.getElementById("start");
	var buttonStop = document.getElementById("stop");
	var buttonReset = document.getElementById("reset");
	var interval;

	buttonStart.onclick = function(){
		clearInterval(interval);
		interval = setInterval(startTimer, 10)
	}

	buttonStop.onclick = function(){
		clearInterval(interval);
	}

	buttonReset.onclick = function(){
		clearInterval(interval);
		tens = "00";
		sec = "00"
		appendTens.innerHTML = tens;
		appendSec.innerHTML = sec;
	}

	function startTimer(){
		tens++;

		if(tens < 9){
			appendTens.innerHTML = "0" + tens;
		}

		if(tens > 9){
			appendTens.innerHTML = tens;
		}

		if (tens > 99) {
			console.log("sec");
			sec++;
			appendSec.innerHTML = "0" + sec;
			tens = 0;
			appendTens.innerHTML = "0" + 0;
		}

		if (sec > 9){
			appendSec.innerHTML = sec;
		}
	}
}


