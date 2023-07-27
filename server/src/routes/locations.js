const express = require('express');
const router = express.Router();

const { 
  getCapitals,
  getContinents,
  getCitiesCountry,
  getCountriesContinent,
  getCountries,
  getCountryCodes,
  getRandomCities,
  getRandomLocations, 
} = require('../controllers/locations');

router.get('/capitals', getCapitals);
router.get('/continents', getContinents);
router.get('/countries', getCountries);
router.get('/countrycodes', getCountryCodes);

router.get('/countries/:continent', getCountriesContinent);
router.get('/cities/:country', getCitiesCountry);

router.get('/random/:cities/:num', getRandomCities);
router.get('/random/:cities', getRandomCities);
router.get('/random/:cities/:num/country/:country', getRandomCities);
router.get('/random/:cities/:num/continent/:continent', getRandomCities);

router.get('/locations', getRandomLocations);
router.get('/locations/:num', getRandomLocations);

module.exports = router;