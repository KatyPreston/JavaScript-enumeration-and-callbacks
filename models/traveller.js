const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(){
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation;
});
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function (){
  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getModesOfTransport = function (){
   const modes = this.journeys.map((journey) => {
     return journey.transport;
   })
   return modes;
};

Traveller.prototype.getJourneysByTransport = function (transport){
  const modes = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return modes;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance){
  const minJourneys = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  return minJourneys;

};

Traveller.prototype.calculateTotalDistanceTravelled = function (){
  const total = this.journeys.reduce((acc, journey) => {
    return journey.distance + acc;
  }, 0);
  return total;
};

// Traveller.prototype.getUniqueModesOfTransport = function (){
//   const uniqueModes = this.journeys.reduce((acc, journey) => {
//     return journey.transport !=== acc.journey;
//   })
//   return uniqueModes;
//
// };
// 

module.exports = Traveller;
