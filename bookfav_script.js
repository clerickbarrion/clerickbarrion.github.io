/* commands run every second*/
runClock();
setInterval('runClock()', 1000)

countdown();
setInterval('countdown()', 1000)

/*keeps track of current day and time*/
function runClock() {
	
	var thisDay = new Date();
	var localDate = thisDay.toLocaleDateString();
	var localTime = thisDay.toLocaleTimeString();
	/*Shows current time and date on webpage*/
	document.getElementById('time').innerHTML = '<span>'+localDate+' </span><span>'+localTime+'</span>';
	
}

/* countdown to september 26, 2023 */
function countdown() {
	var thisDay = new Date();
	var relDate = new Date('September 26, 2023')
	var days = (relDate - thisDay)/(1000*60*60*24);
	/* math method */
	var hrs = (days - Math.floor(days))*24;
	var mins = (hrs - Math.floor(hrs))*60;
	var secs = (mins - Math.floor(mins))*60;
	/*Displays calculations on the clock*/
	/* number gets converted to text when added with a string */
	document.getElementById('timeLeft').textContent = Math.floor(days) + ' days ' + Math.floor(hrs) + ' hours ' + Math.floor(mins) + ' minutes ' + Math.floor(secs) + ' seconds '
}

/* sends alert when sumbit button is pressed */
function windowalert() {
	alert('Submitted if all fields were inputted correctly');
}