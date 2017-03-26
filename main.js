
// Ship Movement Data/////

///Player One Ship Data///
var shipOne = document.getElementById('shipOne');
var moveOne = 100;
var shipOneRight = window.getComputedStyle(shipOne, null).getPropertyValue('right');
//------------//


//Player Two Ship Data///
var ShipTwo = document.getElementById('shipTwo');
var moveTwo = 100;
var finishline = document.getElementById('finishLine');
var finishLineLeft = window.getComputedStyle(finishLine, null).getPropertyValue('left');
var finishLinePosition = parseInt(finishLineLeft,10);
console.log(finishLinePosition);

// var finishLinePosition = .getAttribute('top');

// var finishLinePosition = parseInt(finishLine, 10);
var shipOnePosition = shipOne.style.right;
var shipTwoPosition = shipTwo.style.right;



document.addEventListener('keydown', function(event) {
	if(event.code === "KeyL") {
		console.log("I'm Moving right!");
		shipOne.style.left = moveOne + "px" ;
		moveOne += 100;
	}
});

winCheck = function() {
	if (shipOnePosition === finishLine) {
		alert("PLAYER WINS!");
	}
};
winCheck();

document.addEventListener('keydown', function(event) {
	if(event.code === "KeyA") {
		console.log("I'm Moving right Too!");
		shipTwo.style.left = moveTwo + "px";
		moveTwo += 100;
	}


});