// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

const addDestinationInfo = require("./scriptHelper.js");
const myFetch = require('./scriptHelper.js');
const validateInput = require("./scriptHelper.js");
const formSubmission = require("./scriptHelper.js");
const pickPlanet = require("./scriptHelper.js");


window.addEventListener("load", function() {

   let listedPlanets;
   //let listedPlanetsResponse = value returned by calling myfetch, which is a promise;
   listedPlanetsResponse = planetsReturned;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
         console.log(listedPlanets);
         let form = document.querySelector("form");
         form.addEventListener("submit", function() {
            console.log("submit");
            let pilotName = document.querySelector("input[name=pilotName]");
            let copilotName = document.querySelector("input[name=copilotName");
            let fuelStatus = document.querySelector("input[name=fuelLevel]");
            let cargoStatus = document.querySelector("input[name=cargoMass]");
            formSubmission(document, pilotName.value, copilotName.value, fuelStatus.value, cargoStatus.value);
            preventDefault();
         }); // close event listener
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   }); // close then



 
});