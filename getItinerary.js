
// Input:
// "Chennai" -> "Banglore"
// "Bombay" -> "Delhi"
// "Goa"    -> "Chennai"
// "Delhi"  -> "Goa"
//
// Output:
//     Bombay->Delhi, Delhi->Goa, Goa->Chennai, Chennai->Banglore,

function getItinerary(flights) {

    let flightTable = {};
    let desinationTable = {};

    for (let flight of flights) {
        flightTable[flight[0]] = flight[1];
        desinationTable[flight[1]] = true;
    }

    let startingDes;
    for (let flight of flights) {
        if (!desinationTable[flight[0]]) {
            startingDes = flight[0];
        }
    }

    let itinerary = startingDes + ' -> ';
    let currFlight = startingDes;
    while (flightTable[currFlight]) {
        const next = flightTable[currFlight];
        itinerary += next + ' -> ';
        currFlight = next;
    }

    return itinerary;

}

const flights = [
    ['Chennai','Banglore'],
    ['Bombay','Delhi'],
    ['Goa','Chennai'],
    ['Delhi','Goa'],
];

console.log(getItinerary(flights));