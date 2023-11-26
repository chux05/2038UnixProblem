var countDownDate = new Date("Jan 19, 2038 03:14:08");

// Update the count down every 1 second
var x = setInterval(function () {
	// Get today's date and time depending on the computer at use.
	var now = new Date();

	// Find the distance between now and the count down date
	var distance = countDownDate.getTime() - now.getTime();

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		const f = document.querySelector(".clock-container");
		f.classList.remove("time-block");

		f.innerHTML = "Unix Time has Elapsed! Did the world end!?";
		return;
	}

	var weeks = Math.floor(distance / (1000 * 60 * 60 * 24) / 7);
	var days = Math.floor((distance / (1000 * 60 * 60 * 24)) % 7);
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.querySelector(".weeks-time").innerHTML = weeks;
	document.querySelector(".days-time").innerHTML = days;
	document.querySelector(".hours-time").innerHTML = hours;
	document.querySelector(".minutes-time").innerHTML = minutes;
	document.querySelector(".seconds-time").innerHTML = seconds;
}, 1000);

let myMediaQuery = window.matchMedia("(min-width: 769px)");
function widthChangeCallback(myMediaQuery) {
	if (myMediaQuery.matches) {
		document.querySelector(".weeks-label").textContent = "Weeks";
		document.querySelector(".days-label").textContent = "Days";
		document.querySelector(".hours-label").textContent = "Hours";
		document.querySelector(".minutes-label").textContent = "Minutes";
		document.querySelector(".seconds-label").textContent = "Seconds";
	} else {
		document.querySelector(".weeks-label").textContent = "Wks";
		document.querySelector(".days-label").textContent = "d";
		document.querySelector(".hours-label").textContent = "h";
		document.querySelector(".minutes-label").textContent = "min";
		document.querySelector(".seconds-label").textContent = "sec";
	}
}
myMediaQuery.addEventListener("change", widthChangeCallback);
widthChangeCallback(myMediaQuery);
