# MapDasher API

* Express.js
* Prisma ORM
* PostreSQL

## Random data

### Random world cities

    /api/random/cities/:num   
    /api/random/cities/5  

### Random cities from continent

    /api/random/cities/:num/continent/:continentcode
    /api/random/cities/5/continent/EU

#### List of continent codes: 
 
    AF = Africa  
    AN = Antarctica   
    AS = Asia   
    EU = Europe   
    NA = North America   
    OC = Oceania   
    SA = South America   

### Random cities from country

    /api/random/cities/:num/country/:countrycode
    /api/random/cities/5/country/FI

#### Two letter country codes

    /api/countrycodes

## Cities

### Capital cities

    /api/capitals   

### Major cities by country

    /api/cities/:countrycode   
    /api/cities/FI

## Countries

    /api/countries

### Countries by continent 

    /api/countries/:continentcode
    /api/countries/EU

## Continents

    /api/continents  