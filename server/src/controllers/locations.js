
const { locations } = require('../data/capitals');

// Return number of random locations
function getRandomLocations(req, res) {
  res.status(200).json(generateRandomLocations(req.params.num))
}

// Generate random locations from data
function generateRandomLocations(count){
  let randomLocations = []
  for(i=0; i<count; i++){
    randomLocations.push(locations[Math.floor(Math.random() * locations.length)]);
  }
  return randomLocations
}

module.exports = {
  getRandomLocations,
};