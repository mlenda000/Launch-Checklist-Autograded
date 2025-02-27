// Write your JavaScript code here!
window.addEventListener("load", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit',event=>{
        event.preventDefault();

        let pilotName = document.querySelector('input[name=pilotName]').value;
        let coPilotName = document.querySelector('input[name=copilotName]').value;
        let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
        let cargoMass = document.querySelector('input[name=cargoMass]').value;
        let faultyItems = document.getElementById('faultyItems');

        formSubmission(document,faultyItems,pilotName,coPilotName,fuelLevel,cargoMass);
})
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;
        
        addDestinationInfo(document, name, diameter,star,distance,moons,imageUrl)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });