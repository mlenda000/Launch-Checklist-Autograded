// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML =`  
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
`
 }  
 
 function validateInput(testInput) {
    if (testInput === ''){
        return 'Empty';
    }else if ((!isNaN(Number(testInput)))){
        return 'Is a Number';
    }else{
        return 'Not a Number';
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus');
    let coPilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');

if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty'){
    alert('All fields are required');
}else if(validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
    alert('Fuel Level and Cargo Mass must be numbers');
}else if(validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'){
    alert('Please enter valid names for pilot and copilot');
}else{
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    coPilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = 'hidden';
}

if (fuelLevel < 10000){
    list.style.visibility ='visible';
    fuelStatus.innerHTML = 'Fuel level too low for launch';
    launchStatus.innerHTML ='Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
}else if (cargoLevel > 10000){
    list.style.visibility ='visible';
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
    cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
    launchStatus.innerHTML ='Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
}else if ( fuelLevel < 10000 && cargoLevel > 10000){
    list.style.visibility ='visible';
    fuelStatus.innerHTML = 'Fuel level too low for launch';
    cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
    launchStatus.innerHTML ='Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
}else{
    list.style.visibility ='visible';
    launchStatus.style.color = 'green';
    launchStatus.innerHTML ='Shuttle is Ready for Launch';
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
}

}

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()     
    
    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;