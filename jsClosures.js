function say667() {
	// Local variable that ends up within closure
	var num = 42;
	var say = function() { console.log(num); }
	num++;
	return say;
}
var sayNumber = say667();
sayNumber(); // logs 43

////////////////////////////////////////////////////////////////////
var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
	// Local variable that ends up within closure
	var num = 42;
	// Store some references to functions as global variables
	gLogNumber = function() { console.log(num); }
	gIncreaseNumber = function() { num++; }
	gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber(); // 43
gSetNumber(5);
gLogNumber(); // 5

var oldLog = gLogNumber;

setupSomeGlobals();
gLogNumber(); // 42

oldLog() // 5


////////////////////////////////////////////////////////////////////

function sayAlice() {
	var say = function() { console.log(alice); }
	// Local variable that ends up within closure
	var alice = 'Hello Alice';
	return say;
}
sayAlice()();// logs "Hello Alice"

// https://stackoverflow.com/questions/111102/how-do-javascript-closures-work?rq=1