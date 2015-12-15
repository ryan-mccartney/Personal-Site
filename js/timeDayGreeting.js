/* Changes the greeting depending on time of day */

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good evening.';
}
else if (hourNow > 12) {
	greeting = 'Good afternoon.';
}
else if (hourNow > 0) {
	greeting = 'Good mornin\'';
}
else {
	greeting = 'Hello.';
}

document.write('<h1 class="text-inverse">' + greeting + '</h1>');
