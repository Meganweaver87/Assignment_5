function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   document.getElementById("missionTarget").innerHTML = `
   <h2>Mission Destination</h2>
   <ul>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of moons: ${moons}</li>
   </ul>
   <img src = "${imageUrl}" alt = "cool planet">
   `;
}; // close addDestinationInfo;


function validateInput(testInput) {
   console.log("empty string");
   if (testInput == "") {
      return "Empty";
   } else if (isNaN(Number(testInput))) { //converting testinput results in NaN
       console.log("not a number");
       return "Not a Number";
   } else if ((Number(testInput.value).type == number)) { //converting testinput results in number
       console.log("is a number");
       return "Is a Number";
   } else {
       return "Invalid Input. Please try again.";
   } 
}; // close validateInput



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");

   let pilotValidation = validateInput(pilot);
   let copilotValidation = validateInput(copilot);
   let fuelLevelValidation = validateInput(fuelLevel);
   let cargoMassValidation = validateInput(cargoMass);


   if (pilotValidation == "Empty") {
      window.alert("Pilot name required! Please try again.");
   } else if (pilotValidation === "Number" ) {
      window.alert("Pilot name cannot be a number! Please try again.");
   } else {
      pilotStatus.innerHTML = `${pilotName} ready!`;
      console.log("formsubmissionpilot");
   }

   if (copilotValidation == "Empty") {
      window.alert("Copilot name required! Please try again.");
   } else if (copilotValidation === "Number" ) {
      window.alert("Copilot name cannot be a number! Please try again.");
   } else {
      copilotStatus.innerHTML = `${pilotName} ready!`;
      console.log("formsubmissioncopilot");
   }
    
   if (fuelLevelValidation == "Empty") {
      window.alert("Fuel level required! Please try again.");
   } else if (fuelLevelValidation == "Not a Number") {
      window.alert("Fuel level must be a number! Please try again.");
   } else if (fuelLevelValidation === "Is a Number") {
       if (Number(fuelLevel) < 10000 ) {
           fuelStatus.innerHTML = "Fuel level low! Minimum fuel required: 10,001 liters.";
           launchStatus.innerHTML = "Shuttle not ready for launch. Please inspect fuel tank.";
           launchStatus.style.color = "#de919a";
           faultyItems.style.visibility = "visible";
           console.log("formsubmissionfuel");
       } // close if
   } else {
      fuelStatus.innerHTML = "Fuel level sufficient for launch!"
   }

   if (cargoMassValidation == "Empty") {
      window.alert("Cargo mass required! Please try again.");
   } else if (cargoMassValidation == "Not a Number") {
      window.alert("Cargo mass must be a number! Please try again.");
   } else if (cargoMassValidation === "Is a Number") {
       if (Number(cargoMass) > 10000 ) {
           cargoStatus.innerHTML = "Cargo mass high! Maximum cargo mass allowed: 9,999 kilograms.";
           launchStatus.innerHTML = "Shuttle not ready for launch. Please inspect cargo hold.";
           launchStatus.style.color = "#de919a";
           faultyItems.style.visibility = "visible";
           console.log("formsubmissioncargo");
       } // close if
   } else {
      cargoStatus.innerHTML = "Cargo mass sufficient for launch!"
   }
   
   if (Number(fuelLevel) > 10000 && Number(cargoMass) < 10000) {
      launchStatus.innerHTML = "Shuttle ready for launch!"
      launchStatus.style.color = "#b3ccba";
   }
   
}; // close formsubmission


async function myFetch() {
   let planetsReturned;
   console.log("fetchy");
   planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   console.log("fetch");
   console.log(planetsReturned);
   return response.json();
   }); // close planetsReturned
}; // close myFetch

// DONE
function pickPlanet(planets) {
   console.log(planets);
   let planetIndex = Math.floor(Math.random() * planets.length);
   let selectedPlanet = planets[planetIndex];
   return selectedPlanet;
}; // close pickPlanet



// EVERYTHING ABOVE THIS LINE BELONGS IN SCRIPTHELPER.JS -----------------------
// EVERYTHING BELOW THIS LINE BELONGS IN SCRIPT.JS -----------------------------
// const addDestinationInfo = require("./scriptHelper.js");
// const myFetch = require('./scriptHelper.js');
// const validateInput = require("./scriptHelper.js");
// const formSubmission = require("./scriptHelper.js");
// const pickPlanet = require("./scriptHelper.js");

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      console.log("submit");
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelStatus = document.querySelector("input[name=fuelLevel]");
      let cargoStatus = document.querySelector("input[name=cargoMass]");
      formSubmission(document, pilotName.value, copilotName.value, fuelStatus.value, cargoStatus.value);
      event.preventDefault();
   }); // close event listener
   // call appropriate helper functions to pick planet from list and add info to destination
   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function(result) {
      listedPlanets = result;
   }).then(function() {
      let selectedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl);
   }); // close listedPlanetsResponse

}); // close window