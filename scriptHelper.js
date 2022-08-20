require('isomorphic-fetch');

// pilotName = document.getElementById("pilotStatus");
//let copilotName = document.getElementById("copilotStatus");
//let fuelStatus = document.getElementById("fuelStatus");
// cargoStatus = document.getElementById("cargoStatus");


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   // NO RETURN VALUE
};
 

function validateInput(testInput) {
    if (testInput.value === "") {
        console.log("empty string");
        window.alert("All fields required! Please try again.");
        return "Empty";
    } else if (isNaN(Number(testInput.value))) { // if converting testinput results in NaN
        console.log("not a number");
        return "Not a Number";
    } else if ((Number(testInput.value).type == number)) { // if converting testinput results in number
        console.log("is a number");
        return "Is a Number";
    } else {
        return "Invalid Input. Please try again.";
    } // chapter 25.9 gave us a better way to do this??? I need a window load event???
};

 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let launchStatus = document.getElementById("launchStatus");
    let visibility = document.getElementById("visibility");

    if (validateInput(pilotName) === "Not a Number" ) {
        pilotStatus.innerHTML = `${pilotName} ready!`;
        console.log("formsubmissionpilot");
    }

    if (validateInput(pilotName) === "Not a Number") {
        copilotStatus.innerHTML = `${copilotName} ready!`;
        console.log("formsubmissioncopilot");
    }
     
    if (validateInput(fuelStatus) === "Is a Number") {
        if (Number(fuelStatus.innerHTML) < 10000 ) {
            launchStatus.innerHTML = "Fuel level low. Shuttle not ready for launch.";
            launchStatus.innerHTML.color = "#de919a";
            visibility = "visible";
            console.log("formsubmissionfuel");
        } // close if
    }

    if (validateInput(cargoStatus) === "Is a Number") {
        if (Number(cargoStatus.innerHTML) > 10000 ) {
            launchStatus.innerHTML = "Cargo level high. Shuttle not ready for launch.";
            launchStatus.innerHTML.color = "#de919a";
            visibility = "visible";
            console.log("formsubmissioncargo");
        } // close if
    } 

    
    return true;
}; // close formsubmission


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json) {
            return json;
        }); // clsoe response
    }); // close planetsReturned
}; // close myFetch
 
// DONE
function pickPlanet(planets) {
    let selectedPlanet = Math.floor(Math.random() * planets.length);
    return selectedPlanet;
}; // close pickPlanet
 

module.exports = {
     addDestinationInfo: addDestinationInfo,
     validateInput: validateInput,
     formSubmission: formSubmission,
     pickPlanet: pickPlanet,
     myFetch: myFetch
}; // close exports
 
// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;