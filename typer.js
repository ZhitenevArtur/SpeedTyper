isOnPause = 0;

curT = 0;
startT = 0;
pauseT = 0;

mistakeFrom = 0;
mistakeTo = 0;

document.getElementById('start').onclick = function(){
	setStepwatch();
}
document.getElementById('stop').onclick = function(){
	clearStepwatch();
}
document.getElementById('pause').onclick = function(){
	pauseStepwatch();
}
document.getElementById('modbtn').onclick = function(){
	setHighlight(0, 1);
}

function setStepwatch() {

	startT = new Date().getTime();
	counter = setInterval(function(){
	curT = new Date().getTime()-startT + pauseT;
	showTime(curT/1000);
	}, 50);
}

function clearStepwatch() {
	clearInterval(counter);
	curT = 0;
	pauseT = 0;
}

function pauseStepwatch() {
	clearInterval(counter);
	pauseT = curT;
}

function showTime(sec) {
	base = 60;

	min = Math.floor(sec/base);
	sec = Math.trunc(sec-min*base);

	out = "";
	
	if(min<10){
		out = out + 0;
	}
	
	out = out + min;
	out = out + ':';

	if(sec<10){
		out = out + 0;
	}

	out = out + sec;

	document.getElementById('timer').innerHTML = out;
}

function setHighlight (cursorFrom, cursorTo) {
	hlText = "";

	text = document.getElementById('text').innerHTML;

	for (var i = 0; i < text.length; i++) {
		if(i == mistakeFrom){
			hlText = hlText + '<span class = "mistake">';
		}

		if(i == mistakeFrom + mistakeTo){
			hlText = hlText + '</span>';
		}

		if(i == cursorFrom){
			hlText = hlText + '<span class = "active">';
		}

		if(i == cursorFrom + cursorTo){
			hlText = hlText + '</span>';
		}

		hlText = hlText + text[i];
	}

	document.getElementById('mod').innerHTML = hlText;
}