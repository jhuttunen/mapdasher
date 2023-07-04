
const { locations } = require('../data/capitals');

// Return number of random locations
function getRandomLocations(req, res) {
  res.status(200).json(generateRandomLocations(req.params.num))
}

// Generate random locations from data
function generateRandomLocations(count){
  // if count is not specified fetch 1, otherwise maximum of 50
  count = (count > 0) ? ((count <= 50) ? count : 50) : 1;
  let randomLocations = []
  for(i=0; i<count; i++){
    randomLocations.push(locations[Math.floor(Math.random() * locations.length)]);
  }
  return randomLocations
}

module.exports = {
  getRandomLocations,
};