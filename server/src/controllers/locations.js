const prisma = require('../db/prisma');
const { locations } = require('../data/capitals');

const getContinents = async (req, res) => {
  const result = await prisma.continent.findMany();
  res.status(200).json(result);
}

const getCountries = async (req, res) => {
  const result = await prisma.country.findMany();
  res.status(200).json(result);
}

const getRandomCities = async (req, res) => {
  let { num, country, continent } = req.params;
  country = (country) ? country.toUpperCase() : '';
  continent = (continent) ? continent.toUpperCase() : '';
  num = (num > 0) ? ((num <= 50) ? num : 50) : 1;
  num = parseInt(num);

  if(country){
    const result = await prisma.$queryRaw`
      SELECT * FROM cities 
      WHERE iso2=${country}
      ORDER BY random()
      LIMIT ${num}
    `;
    res.status(200).json(result);
  }else if(continent){
    const result = await prisma.$queryRaw`
      SELECT * FROM cities
      LEFT JOIN countries ON iso2=country_code
      WHERE continent=${continent}
      ORDER BY RANDOM()
      LIMIT ${num}
    `;
    res.status(200).json(result);
  }else{
    const result = await prisma.$queryRaw`
      SELECT * from cities LIMIT ${num}
      OFFSET floor(random() * (SELECT count(*) FROM cities));
    `;
    res.status(200).json(result);
  }
}

const getCountryCodes = async (req, res) => {
  const result = await prisma.country.findMany({
    select: {
      country_code: true,
      country_name: true
    }
  });
  res.status(200).json(result);
}

const getCapitals = async (req, res) => {
  const result = await prisma.city.findMany({
    where: {
      capital: 'primary'
    }
  });
  res.status(200).json(result);
}

const getCountriesContinent = async (req, res) => {
  const { continent } = req.params;
  const result = await prisma.country.findMany({
    where: {
      continent: continent.toUpperCase()
    }
  });
  res.status(200).json(result);
}

const getCitiesCountry = async (req, res) => {
  const { country } = req.params;
  const result = await prisma.city.findMany({
    where: {
      iso2: country.toUpperCase()
    }
  });
  res.status(200).json(result);
}

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
  getCapitals,
  getContinents,
  getCountriesContinent,
  getCitiesCountry,
  getCountryCodes,
  getCountries,
  getRandomCities,
  getRandomLocations,
};