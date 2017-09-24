var a = prompt("Podaj a: ");
var b = prompt("Podaj b: ");
var	value = (a*a) + (2 * a * b) - (b * b);

if(value > 0) {
	alert("wynik dodatni: " + value);
	console.log("wynik dodatni: " + value);
}
else if (value == 0) {
	alert("wynik zerowy: " + value);
	console.log("wynik zerowy: " + value);
}
else{
	alert("wynik ujemny: " + value);
	console.log("wynik ujemny: " + value);	
}
