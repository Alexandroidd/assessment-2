
// Ship Movement Data/////

///Player One Ship Data///
var shipOne = document.getElementById('shipOne');
var moveOne = 100;
// var shipOneRight = window.getComputedStyle(shipOne, null).getPropertyValue('margin-right');
// var shipOnePosition = parseInt(shipOneRight,10);
// console.log(shipOnePosition);
//------------//


//Player Two Ship Data///
var ShipTwo = document.getElementById('shipTwo');
var moveTwo = 100;
// var shipTwoRight = window.getComputedStyle(shipTwo,null).getPropertyValue('right');
// var shipTwoPosition = parseInt(shipTwoRight,10);
// console.log(shipTwoPosition);

//-------------//
//Finish Line Data//
var finishline = document.getElementById('finishLine');
var finishLineRight = window.getComputedStyle(finishLine, null).getPropertyValue('left');
var finishLinePosition = parseInt(finishLineRight,10);
console.log(finishLinePosition);
//--------------//



//Player One Ship Controls //
document.addEventListener('keydown', function(event) {
	if(event.code === "KeyL") {
		console.log("I'm Moving right!");
		shipOne.style.left = moveOne + "px" ;
		//----
		var shipOneRight = window.getComputedStyle(shipOne, null).getPropertyValue('left');
		var shipOnePosition = parseInt(shipOneRight,10);
		console.log(shipOnePosition);
		console.log(finishLinePosition);
		//---//
		winCheckOne = function() {
			if (shipOnePosition >= finishLinePosition) {
			alert("PLAYER One WINS!");
			}
		};
		winCheckOne();
		//----
		moveOne += 100;
	}
});
//---------------//



// Player Two Ship Controls ///
document.addEventListener('keydown', function(event) {
	if(event.code === "KeyA") {
		console.log("I'm Moving right Too!");
		shipTwo.style.left = moveTwo + "px";
		//---//
		var shipTwoRight = window.getComputedStyle(shipTwo,null).getPropertyValue('left');
		var shipTwoPosition = parseInt(shipTwoRight,10);
		console.log(shipTwoPosition);
		//--//
		winCheckTwo = function() {
			if (shipTwoPosition >= finishLinePosition) {
			alert("PLAYER Two WINS!");
			}
		};
		winCheckTwo();
		//--//
		moveTwo += 100;
	}
});
//----------------//

