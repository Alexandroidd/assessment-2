var shipOne = document.getElementById('shipOne');
var moveOne = 100;
var ShipTwo = document.getElementById('shipTwo');
var moveTwo = 100;

document.addEventListener('keydown', function(event) {
	if(event.code === "KeyL") {
		console.log("I'm Moving right!");
		shipOne.style.left = moveOne + "px" ;
		moveOne += 100;
	}
document.

});