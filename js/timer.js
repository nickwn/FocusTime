'use strict';

$.getJSON('data.json', function(data) {
    console.log(data);
    var time = time.data;
});

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function initializePage() {
	$("button").click(buttonClick);
}

function buttonClick(e) {
	//var deadline = new Date("February 16, 2020 14:37:25").getTime();
	var deadline = new Date();//gets current date and time
	deadline.setHours(deadline.getHours());//adds 1 to the current hours
	deadline.setMinutes(deadline.getMinutes() + time);
	deadline.setSeconds(deadline.getSeconds());

  //starter code from https://www.geeksforgeeks.org/create-countdown-timer-using-javascript/
	var x = setInterval(function() {
	var now = new Date().getTime();
	var t = deadline - now;
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
	var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((t % (1000 * 60)) / 1000);
	document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	    if (t < 0) {
	        clearInterval(x);
	        document.getElementById("timer").innerHTML = "You're Done!";
	    }
	}, 1000);
}
