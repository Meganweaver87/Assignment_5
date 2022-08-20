require('isomorphic-fetch');

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
         return "Invalid Input";
     } // chapter 25.9 gave us a better way to do this??? I need a window load event???
 };

 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     document.getElementById("pilotStatus") = pilotStatus;
     document.getElementById("copilotStatus") = copilotStatus;
     // why won't it let me do this? Am I reassigning this variable?
     // will only let me write this without a problem with no "let" in front
     document.getElementById("fuelStatus") = fuelStatus;
     document.getElementById("launchStatus") = launchStatus;
     document.getElementById("visibility") = visibility;
     document.getElementById("cargoStatus") = cargoStatus;
    
    for (argument in formSubmission) {
         validateInput(argument);
     } // close for
     
    //   if ( idk ) {
    //     pilotStatus.innerHTML = `${pilotName} ready!`;
    //  }

    //  if ( idk) {
    //     copilotStatus.innerHTML = `${copilotName} ready!`;
    //  }
     
     
     if (Number(fuelStatus.innerHTML) < 10000 ) {
        launchStatus.innerHTML = "Fuel level low. Shuttle not ready for launch.";
        launchStatus.innerHTML.color = "#de919a";
        visibility = "visible";
     }
     if (Number(cargoStatus.innerHTML) > 10000 ) {
        launchStatus.innerHTML = "Cargo level high. Shuttle not ready for launch.";
        launchStatus.innerHTML.color = "#de919a";
        // visibility visible
     }
     

    // does it need a return value?
 };

 // where should my button code go? Don't I need some type of event handler that will tell my code what to do when the button is clicked?

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 };
 
 function pickPlanet(planets) {
 };
 
 module.exports = {
     addDestinationInfo: addDestinationInfo,
     validateInput: validateInput,
     formSubmission: formSubmission,
     pickPlanet: pickPlanet,
     myFetch: myFetch
 };
 
 // module.exports.addDestinationInfo = addDestinationInfo;
 // module.exports.validateInput = validateInput;
 // module.exports.formSubmission = formSubmission;
 // module.exports.pickPlanet = pickPlanet; 
 // module.exports.myFetch = myFetch;