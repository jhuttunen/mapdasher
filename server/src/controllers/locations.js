const prisma = require('../db/prisma');
const { Prisma } = require("@prisma/client");
const { locations } = require('../data/capitals');

// Get all continents
const getContinents = async (req, res) => {
  try {
    const result = await prisma.continent.findMany();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({message: "Something went wrong",})
  }
}

// Get all countries
const getCountries = async (req, res) => {
  try {
    const result = await prisma.country.findMany();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({message: "Something went wrong",})
  }
}

// Get desired number of random cities from world, continent or country
const getRandomCities = async (req, res) => {
  let { num, country, continent, cities } = req.params;
  country = (country) ? country.toUpperCase() : '';
  continent = (continent) ? continent.toUpperCase() : '';
  capital = (cities === 'capitals') ? 'primary' : false;
  num = (num > 0) ? ((num <= 50) ? num : 50) : 1;
  num = parseInt(num);
  // Create search conditions for the where clauses
  const searchConditions = [];
  if (country) {
    searchConditions.push(Prisma.sql`iso2=${country}`)
  }
  if (continent) {
    searchConditions.push(Prisma.sql`continent=${continent}`)
  }
  if (capital) {
    searchConditions.push(Prisma.sql`is_capital=${capital}`)
  }
  const where = searchConditions.length ? 
    Prisma.sql`WHERE ${Prisma.join(searchConditions, ' AND ')}` : 
    Prisma.empty;

  try {
    if(country){
      const result = await prisma.$queryRaw`
        SELECT * FROM cities 
        ${where}
        ORDER BY random()
        LIMIT ${num}
      `;
      res.status(200).json(result);
    }else if(continent){
      const result = await prisma.$queryRaw`
        SELECT * FROM cities
        LEFT JOIN countries ON iso2=country_code
        ${where}
        ORDER BY RANDOM()
        LIMIT ${num}
      `;
      res.status(200).json(result);
    }else{
      const result = await prisma.$queryRaw`
        SELECT * from cities ${where} LIMIT ${num}
        OFFSET floor(random() * (SELECT count(*) FROM cities ${where}));
      `;
      res.status(200).json(result);
    }
  } catch (e) {
    res.status(500).json({message: "Something went wrong",})
  }
}

// Get all country codes
const getCountryCodes = async (req, res) => {
  try {
    const result = await prisma.country.findMany({
      select: {
        countryCode: true,
        countryName: true
      }
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({message: "Something went wrong",})
  }
}

// Get all capital cities
const getCapitals = async (req, res) => {
  try {
    const result = await prisma.city.findMany({
      where: {
        capital: 'primary'
      }
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({message: "Something went wrong",})
  }
}

// Get all countries from a continent
const getCountriesContinent = async (req, res) => {
  const { continent } = req.params;
  try {
    const result = await prisma.country.findMany({
      where: {
        continent: continent.toUpperCase()
      }
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({message: "Something went wrong",})
  }
}

// Get all cities from a country
const getCitiesCountry = async (req, res) => {
  const { country } = req.params;
  try {
    const result = await prisma.city.findMany({
      where: {
        iso2: country.toUpperCase()
      }
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({message: "Something went wrong",})
  }
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