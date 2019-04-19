isOnPause = 0;

curT = 0;
startT = 0;
pauseT = 0;

document.getElementById('start').onclick = function(){
	setStepwatch();
}
document.getElementById('stop').onclick = function(){
	clearStepwatch();
}
document.getElementById('pause').onclick = function(){
	pauseStepwatch();
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
