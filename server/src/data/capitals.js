const locations =
[
  {
    "city": "Tokyo",
    "lat": 35.6839,
    "lon": 139.7744,
    "country": "Japan",
    "iso2": "JP",
    "iso3": "JPN"
  },
  {
    "city": "Jakarta",
    "lat": -6.2146,
    "lon": 106.8451,
    "country": "Indonesia",
    "iso2": "ID",
    "iso3": "IDN"
  },
  {
    "city": "Manila",
    "lat": 14.6,
    "lon": 120.9833,
    "country": "Philippines",
    "iso2": "PH",
    "iso3": "PHL"
  },
  {
    "city": "Seoul",
    "lat": 37.56,
    "lon": 126.99,
    "country": "South Korea",
    "iso2": "KR",
    "iso3": "KOR"
  },
  {
    "city": "Mexico City",
    "lat": 19.4333,
    "lon": -99.1333,
    "country": "Mexico",
    "iso2": "MX",
    "iso3": "MEX"
  },
  {
    "city": "Cairo",
    "lat": 30.0444,
    "lon": 31.2358,
    "country": "Egypt",
    "iso2": "EG",
    "iso3": "EGY"
  },
  {
    "city": "Beijing",
    "lat": 39.904,
    "lon": 116.4075,
    "country": "China",
    "iso2": "CN",
    "iso3": "CHN"
  },
  {
    "city": "Moscow",
    "lat": 55.7558,
    "lon": 37.6178,
    "country": "Russia",
    "iso2": "RU",
    "iso3": "RUS"
  },
  {
    "city": "Bangkok",
    "lat": 13.75,
    "lon": 100.5167,
    "country": "Thailand",
    "iso2": "TH",
    "iso3": "THA"
  },
  {
    "city": "Dhaka",
    "lat": 23.7289,
    "lon": 90.3944,
    "country": "Bangladesh",
    "iso2": "BD",
    "iso3": "BGD"
  },
  {
    "city": "Buenos Aires",
    "lat": -34.5997,
    "lon": -58.3819,
    "country": "Argentina",
    "iso2": "AR",
    "iso3": "ARG"
  },
  {
    "city": "Kinshasa",
    "lat": -4.3317,
    "lon": 15.3139,
    "country": "Congo (Kinshasa)",
    "iso2": "CD",
    "iso3": "COD"
  },
  {
    "city": "Tehran",
    "lat": 35.7,
    "lon": 51.4167,
    "country": "Iran",
    "iso2": "IR",
    "iso3": "IRN"
  },
  {
    "city": "London",
    "lat": 51.5072,
    "lon": -0.1275,
    "country": "United Kingdom",
    "iso2": "GB",
    "iso3": "GBR"
  },
  {
    "city": "Paris",
    "lat": 48.8566,
    "lon": 2.3522,
    "country": "France",
    "iso2": "FR",
    "iso3": "FRA"
  },
  {
    "city": "Lima",
    "lat": -12.06,
    "lon": -77.0375,
    "country": "Peru",
    "iso2": "PE",
    "iso3": "PER"
  },
  {
    "city": "Luanda",
    "lat": -8.8383,
    "lon": 13.2344,
    "country": "Angola",
    "iso2": "AO",
    "iso3": "AGO"
  },
  {
    "city": "Kuala Lumpur",
    "lat": 3.1478,
    "lon": 101.6953,
    "country": "Malaysia",
    "iso2": "MY",
    "iso3": "MYS"
  },
  {
    "city": "Hanoi",
    "lat": 21.0245,
    "lon": 105.8412,
    "country": "Vietnam",
    "iso2": "VN",
    "iso3": "VNM"
  },
  {
    "city": "Bogotá",
    "lat": 4.6126,
    "lon": -74.0705,
    "country": "Colombia",
    "iso2": "CO",
    "iso3": "COL"
  },
  {
    "city": "Dar es Salaam",
    "lat": -6.8,
    "lon": 39.2833,
    "country": "Tanzania",
    "iso2": "TZ",
    "iso3": "TZA"
  },
  {
    "city": "Hong Kong",
    "lat": 22.3069,
    "lon": 114.1831,
    "country": "Hong Kong",
    "iso2": "HK",
    "iso3": "HKG"
  },
  {
    "city": "Santiago",
    "lat": -33.45,
    "lon": -70.6667,
    "country": "Chile",
    "iso2": "CL",
    "iso3": "CHL"
  },
  {
    "city": "Riyadh",
    "lat": 24.65,
    "lon": 46.71,
    "country": "Saudi Arabia",
    "iso2": "SA",
    "iso3": "SAU"
  },
  {
    "city": "Baghdad",
    "lat": 33.35,
    "lon": 44.4167,
    "country": "Iraq",
    "iso2": "IQ",
    "iso3": "IRQ"
  },
  {
    "city": "Khartoum",
    "lat": 15.6031,
    "lon": 32.5265,
    "country": "Sudan",
    "iso2": "SD",
    "iso3": "SDN"
  },
  {
    "city": "Madrid",
    "lat": 40.4167,
    "lon": -3.7167,
    "country": "Spain",
    "iso2": "ES",
    "iso3": "ESP"
  },
  {
    "city": "Nairobi",
    "lat": -1.2864,
    "lon": 36.8172,
    "country": "Kenya",
    "iso2": "KE",
    "iso3": "KEN"
  },
  {
    "city": "Rangoon",
    "lat": 16.795,
    "lon": 96.16,
    "country": "Myanmar",
    "iso2": "MM",
    "iso3": "MMR"
  },
  {
    "city": "Washington",
    "lat": 38.9047,
    "lon": -77.0163,
    "country": "United States",
    "iso2": "US",
    "iso3": "USA"
  },
  {
    "city": "Singapore",
    "lat": 1.3,
    "lon": 103.8,
    "country": "Singapore",
    "iso2": "SG",
    "iso3": "SGP"
  },
  {
    "city": "Abidjan",
    "lat": 5.3364,
    "lon": -4.0267,
    "country": "Côte d'Ivoire",
    "iso2": "CI",
    "iso3": "CIV"
  },
  {
    "city": "Kabul",
    "lat": 34.5328,
    "lon": 69.1658,
    "country": "Afghanistan",
    "iso2": "AF",
    "iso3": "AFG"
  },
  {
    "city": "Amman",
    "lat": 31.95,
    "lon": 35.9333,
    "country": "Jordan",
    "iso2": "JO",
    "iso3": "JOR"
  },
  {
    "city": "Berlin",
    "lat": 52.5167,
    "lon": 13.3833,
    "country": "Germany",
    "iso2": "DE",
    "iso3": "DEU"
  },
  {
    "city": "Algiers",
    "lat": 36.7764,
    "lon": 3.0586,
    "country": "Algeria",
    "iso2": "DZ",
    "iso3": "DZA"
  },
  {
    "city": "Addis Ababa",
    "lat": 9.0272,
    "lon": 38.7369,
    "country": "Ethiopia",
    "iso2": "ET",
    "iso3": "ETH"
  },
  {
    "city": "Brasília",
    "lat": -15.7939,
    "lon": -47.8828,
    "country": "Brazil",
    "iso2": "BR",
    "iso3": "BRA"
  },
  {
    "city": "Kuwait City",
    "lat": 29.375,
    "lon": 47.98,
    "country": "Kuwait",
    "iso2": "KW",
    "iso3": "KWT"
  },
  {
    "city": "Kyiv",
    "lat": 50.45,
    "lon": 30.5236,
    "country": "Ukraine",
    "iso2": "UA",
    "iso3": "UKR"
  },
  {
    "city": "Sanaa",
    "lat": 15.35,
    "lon": 44.2,
    "country": "Yemen",
    "iso2": "YE",
    "iso3": "YEM"
  },
  {
    "city": "Guatemala City",
    "lat": 14.6099,
    "lon": -90.5252,
    "country": "Guatemala",
    "iso2": "GT",
    "iso3": "GTM"
  },
  {
    "city": "Rome",
    "lat": 41.8931,
    "lon": 12.4828,
    "country": "Italy",
    "iso2": "IT",
    "iso3": "ITA"
  },
  {
    "city": "La Paz",
    "lat": -16.4942,
    "lon": -68.1475,
    "country": "Bolivia",
    "iso2": "BO",
    "iso3": "BOL"
  },
  {
    "city": "Pyongyang",
    "lat": 39.03,
    "lon": 125.73,
    "country": "North Korea",
    "iso2": "KP",
    "iso3": "PRK"
  },
  {
    "city": "Antananarivo",
    "lat": -18.9386,
    "lon": 47.5214,
    "country": "Madagascar",
    "iso2": "MG",
    "iso3": "MDG"
  },
  {
    "city": "Santo Domingo",
    "lat": 18.4764,
    "lon": -69.8933,
    "country": "Dominican Republic",
    "iso2": "DO",
    "iso3": "DOM"
  },
  {
    "city": "Tashkent",
    "lat": 41.3,
    "lon": 69.2667,
    "country": "Uzbekistan",
    "iso2": "UZ",
    "iso3": "UZB"
  },
  {
    "city": "Ouagadougou",
    "lat": 12.3686,
    "lon": -1.5275,
    "country": "Burkina Faso",
    "iso2": "BF",
    "iso3": "BFA"
  },
  {
    "city": "Yaoundé",
    "lat": 3.8578,
    "lon": 11.5181,
    "country": "Cameroon",
    "iso2": "CM",
    "iso3": "CMR"
  },
  {
    "city": "Accra",
    "lat": 5.6037,
    "lon": -0.187,
    "country": "Ghana",
    "iso2": "GH",
    "iso3": "GHA"
  },
  {
    "city": "Baku",
    "lat": 40.3667,
    "lon": 49.8352,
    "country": "Azerbaijan",
    "iso2": "AZ",
    "iso3": "AZE"
  },
  {
    "city": "Harare",
    "lat": -17.8292,
    "lon": 31.0522,
    "country": "Zimbabwe",
    "iso2": "ZW",
    "iso3": "ZWE"
  },
  {
    "city": "Havana",
    "lat": 23.1367,
    "lon": -82.3589,
    "country": "Cuba",
    "iso2": "CU",
    "iso3": "CUB"
  },
  {
    "city": "Phnom Penh",
    "lat": 11.5696,
    "lon": 104.921,
    "country": "Cambodia",
    "iso2": "KH",
    "iso3": "KHM"
  },
  {
    "city": "Mogadishu",
    "lat": 2.0408,
    "lon": 45.3425,
    "country": "Somalia",
    "iso2": "SO",
    "iso3": "SOM"
  },
  {
    "city": "Bamako",
    "lat": 12.6458,
    "lon": -7.9922,
    "country": "Mali",
    "iso2": "ML",
    "iso3": "MLI"
  },
  {
    "city": "Quito",
    "lat": -0.22,
    "lon": -78.5125,
    "country": "Ecuador",
    "iso2": "EC",
    "iso3": "ECU"
  },
  {
    "city": "Minsk",
    "lat": 53.9022,
    "lon": 27.5618,
    "country": "Belarus",
    "iso2": "BY",
    "iso3": "BLR"
  },
  {
    "city": "Caracas",
    "lat": 10.5,
    "lon": -66.9333,
    "country": "Venezuela",
    "iso2": "VE",
    "iso3": "VEN"
  },
  {
    "city": "Vienna",
    "lat": 48.2083,
    "lon": 16.3725,
    "country": "Austria",
    "iso2": "AT",
    "iso3": "AUT"
  },
  {
    "city": "Bucharest",
    "lat": 44.4,
    "lon": 26.0833,
    "country": "Romania",
    "iso2": "RO",
    "iso3": "ROU"
  },
  {
    "city": "Brazzaville",
    "lat": -4.2667,
    "lon": 15.2833,
    "country": "Congo (Brazzaville)",
    "iso2": "CG",
    "iso3": "COG"
  },
  {
    "city": "Warsaw",
    "lat": 52.23,
    "lon": 21.0111,
    "country": "Poland",
    "iso2": "PL",
    "iso3": "POL"
  },
  {
    "city": "Damascus",
    "lat": 33.5131,
    "lon": 36.2919,
    "country": "Syria",
    "iso2": "SY",
    "iso3": "SYR"
  },
  {
    "city": "Brussels",
    "lat": 50.8353,
    "lon": 4.3314,
    "country": "Belgium",
    "iso2": "BE",
    "iso3": "BEL"
  },
  {
    "city": "Lusaka",
    "lat": -15.4167,
    "lon": 28.2833,
    "country": "Zambia",
    "iso2": "ZM",
    "iso3": "ZMB"
  },
  {
    "city": "Budapest",
    "lat": 47.4983,
    "lon": 19.0408,
    "country": "Hungary",
    "iso2": "HU",
    "iso3": "HUN"
  },
  {
    "city": "Conakry",
    "lat": 9.538,
    "lon": -13.6773,
    "country": "Guinea",
    "iso2": "GN",
    "iso3": "GIN"
  },
  {
    "city": "Kampala",
    "lat": 0.3136,
    "lon": 32.5811,
    "country": "Uganda",
    "iso2": "UG",
    "iso3": "UGA"
  },
  {
    "city": "Abu Dhabi",
    "lat": 24.4511,
    "lon": 54.3969,
    "country": "United Arab Emirates",
    "iso2": "AE",
    "iso3": "ARE"
  },
  {
    "city": "Muscat",
    "lat": 23.6139,
    "lon": 58.5922,
    "country": "Oman",
    "iso2": "OM",
    "iso3": "OMN"
  },
  {
    "city": "Ulaanbaatar",
    "lat": 47.9214,
    "lon": 106.9055,
    "country": "Mongolia",
    "iso2": "MN",
    "iso3": "MNG"
  },
  {
    "city": "Belgrade",
    "lat": 44.8167,
    "lon": 20.4667,
    "country": "Serbia",
    "iso2": "RS",
    "iso3": "SRB"
  },
  {
    "city": "Prague",
    "lat": 50.0833,
    "lon": 14.4167,
    "country": "Czechia",
    "iso2": "CZ",
    "iso3": "CZE"
  },
  {
    "city": "Montevideo",
    "lat": -34.8667,
    "lon": -56.1667,
    "country": "Uruguay",
    "iso2": "UY",
    "iso3": "URY"
  },
  {
    "city": "Sofia",
    "lat": 42.6979,
    "lon": 23.3217,
    "country": "Bulgaria",
    "iso2": "BG",
    "iso3": "BGR"
  },
  {
    "city": "Abuja",
    "lat": 9.0556,
    "lon": 7.4914,
    "country": "Nigeria",
    "iso2": "NG",
    "iso3": "NGA"
  },
  {
    "city": "Maputo",
    "lat": -25.9153,
    "lon": 32.5764,
    "country": "Mozambique",
    "iso2": "MZ",
    "iso3": "MOZ"
  },
  {
    "city": "Doha",
    "lat": 25.3,
    "lon": 51.5333,
    "country": "Qatar",
    "iso2": "QA",
    "iso3": "QAT"
  },
  {
    "city": "Dakar",
    "lat": 14.7319,
    "lon": -17.4572,
    "country": "Senegal",
    "iso2": "SN",
    "iso3": "SEN"
  },
  {
    "city": "Nay Pyi Taw",
    "lat": 19.7475,
    "lon": 96.115,
    "country": "Myanmar",
    "iso2": "MM",
    "iso3": "MMR"
  },
  {
    "city": "Kigali",
    "lat": -1.9536,
    "lon": 30.0606,
    "country": "Rwanda",
    "iso2": "RW",
    "iso3": "RWA"
  },
  {
    "city": "Tripoli",
    "lat": 32.8752,
    "lon": 13.1875,
    "country": "Libya",
    "iso2": "LY",
    "iso3": "LBY"
  },
  {
    "city": "Tegucigalpa",
    "lat": 14.0942,
    "lon": -87.2067,
    "country": "Honduras",
    "iso2": "HN",
    "iso3": "HND"
  },
  {
    "city": "Tbilisi",
    "lat": 41.7225,
    "lon": 44.7925,
    "country": "Georgia",
    "iso2": "GE",
    "iso3": "GEO"
  },
  {
    "city": "N’Djamena",
    "lat": 12.11,
    "lon": 15.05,
    "country": "Chad",
    "iso2": "TD",
    "iso3": "TCD"
  },
  {
    "city": "Copenhagen",
    "lat": 55.6805,
    "lon": 12.5615,
    "country": "Denmark",
    "iso2": "DK",
    "iso3": "DNK"
  },
  {
    "city": "Yerevan",
    "lat": 40.1814,
    "lon": 44.5144,
    "country": "Armenia",
    "iso2": "AM",
    "iso3": "ARM"
  },
  {
    "city": "Nur-Sultan",
    "lat": 51.1333,
    "lon": 71.4333,
    "country": "Kazakhstan",
    "iso2": "KZ",
    "iso3": "KAZ"
  },
  {
    "city": "Nouakchott",
    "lat": 18.0858,
    "lon": -15.9785,
    "country": "Mauritania",
    "iso2": "MR",
    "iso3": "MRT"
  },
  {
    "city": "Bishkek",
    "lat": 42.8667,
    "lon": 74.5667,
    "country": "Kyrgyzstan",
    "iso2": "KG",
    "iso3": "KGZ"
  },
  {
    "city": "Tunis",
    "lat": 36.8008,
    "lon": 10.18,
    "country": "Tunisia",
    "iso2": "TN",
    "iso3": "TUN"
  },
  {
    "city": "Kathmandu",
    "lat": 27.7167,
    "lon": 85.3667,
    "country": "Nepal",
    "iso2": "NP",
    "iso3": "NPL"
  },
  {
    "city": "Niamey",
    "lat": 13.5086,
    "lon": 2.1111,
    "country": "Niger",
    "iso2": "NE",
    "iso3": "NER"
  },
  {
    "city": "Managua",
    "lat": 12.15,
    "lon": -86.2667,
    "country": "Nicaragua",
    "iso2": "NI",
    "iso3": "NIC"
  },
  {
    "city": "Monrovia",
    "lat": 6.3106,
    "lon": -10.8047,
    "country": "Liberia",
    "iso2": "LR",
    "iso3": "LBR"
  },
  {
    "city": "Port-au-Prince",
    "lat": 18.5425,
    "lon": -72.3386,
    "country": "Haiti",
    "iso2": "HT",
    "iso3": "HTI"
  },
  {
    "city": "Islamabad",
    "lat": 33.6989,
    "lon": 73.0369,
    "country": "Pakistan",
    "iso2": "PK",
    "iso3": "PAK"
  },
  {
    "city": "Ottawa",
    "lat": 45.4247,
    "lon": -75.695,
    "country": "Canada",
    "iso2": "CA",
    "iso3": "CAN"
  },
  {
    "city": "Stockholm",
    "lat": 59.3294,
    "lon": 18.0686,
    "country": "Sweden",
    "iso2": "SE",
    "iso3": "SWE"
  },
  {
    "city": "Asmara",
    "lat": 15.3333,
    "lon": 38.9167,
    "country": "Eritrea",
    "iso2": "ER",
    "iso3": "ERI"
  },
  {
    "city": "Freetown",
    "lat": 8.4833,
    "lon": -13.2331,
    "country": "Sierra Leone",
    "iso2": "SL",
    "iso3": "SLE"
  },
  {
    "city": "Vientiane",
    "lat": 17.9667,
    "lon": 102.6,
    "country": "Laos",
    "iso2": "LA",
    "iso3": "LAO"
  },
  {
    "city": "Jerusalem",
    "lat": 31.7833,
    "lon": 35.2167,
    "country": "Israel",
    "iso2": "IL",
    "iso3": "ISR"
  },
  {
    "city": "Bangui",
    "lat": 4.3732,
    "lon": 18.5628,
    "country": "Central African Republic",
    "iso2": "CF",
    "iso3": "CAF"
  },
  {
    "city": "Panama City",
    "lat": 9,
    "lon": -79.5,
    "country": "Panama",
    "iso2": "PA",
    "iso3": "PAN"
  },
  {
    "city": "Amsterdam",
    "lat": 52.3667,
    "lon": 4.8833,
    "country": "Netherlands",
    "iso2": "NL",
    "iso3": "NLD"
  },
  {
    "city": "Lomé",
    "lat": 6.1319,
    "lon": 1.2228,
    "country": "Togo",
    "iso2": "TG",
    "iso3": "TGO"
  },
  {
    "city": "Libreville",
    "lat": 0.3901,
    "lon": 9.4544,
    "country": "Gabon",
    "iso2": "GA",
    "iso3": "GAB"
  },
  {
    "city": "Zagreb",
    "lat": 45.8131,
    "lon": 15.9772,
    "country": "Croatia",
    "iso2": "HR",
    "iso3": "HRV"
  },
  {
    "city": "Dushanbe",
    "lat": 38.5731,
    "lon": 68.7864,
    "country": "Tajikistan",
    "iso2": "TJ",
    "iso3": "TJK"
  },
  {
    "city": "Lilongwe",
    "lat": -13.9833,
    "lon": 33.7833,
    "country": "Malawi",
    "iso2": "MW",
    "iso3": "MWI"
  },
  {
    "city": "Cotonou",
    "lat": 6.402,
    "lon": 2.518,
    "country": "Benin",
    "iso2": "BJ",
    "iso3": "BEN"
  },
  {
    "city": "Colombo",
    "lat": 6.9167,
    "lon": 79.8333,
    "country": "Sri Lanka",
    "iso2": "LK",
    "iso3": "LKA"
  },
  {
    "city": "Pretoria",
    "lat": -25.7464,
    "lon": 28.1881,
    "country": "South Africa",
    "iso2": "ZA",
    "iso3": "ZAF"
  },
  {
    "city": "Oslo",
    "lat": 59.9111,
    "lon": 10.7528,
    "country": "Norway",
    "iso2": "NO",
    "iso3": "NOR"
  },
  {
    "city": "Athens",
    "lat": 37.9842,
    "lon": 23.7281,
    "country": "Greece",
    "iso2": "GR",
    "iso3": "GRC"
  },
  {
    "city": "Bujumbura",
    "lat": -3.3825,
    "lon": 29.3611,
    "country": "Burundi",
    "iso2": "BI",
    "iso3": "BDI"
  },
  {
    "city": "Helsinki",
    "lat": 60.1756,
    "lon": 24.9342,
    "country": "Finland",
    "iso2": "FI",
    "iso3": "FIN"
  },
  {
    "city": "Skopje",
    "lat": 41.9833,
    "lon": 21.4333,
    "country": "Macedonia",
    "iso2": "MK",
    "iso3": "MKD"
  },
  {
    "city": "Chisinau",
    "lat": 47.0228,
    "lon": 28.8353,
    "country": "Moldova",
    "iso2": "MD",
    "iso3": "MDA"
  },
  {
    "city": "Riga",
    "lat": 56.9475,
    "lon": 24.1069,
    "country": "Latvia",
    "iso2": "LV",
    "iso3": "LVA"
  },
  {
    "city": "Kingston",
    "lat": 17.9714,
    "lon": -76.7931,
    "country": "Jamaica",
    "iso2": "JM",
    "iso3": "JAM"
  },
  {
    "city": "Rabat",
    "lat": 34.0253,
    "lon": -6.8361,
    "country": "Morocco",
    "iso2": "MA",
    "iso3": "MAR"
  },
  {
    "city": "Vilnius",
    "lat": 54.6833,
    "lon": 25.2833,
    "country": "Lithuania",
    "iso2": "LT",
    "iso3": "LTU"
  },
  {
    "city": "San Salvador",
    "lat": 13.6989,
    "lon": -89.1914,
    "country": "El Salvador",
    "iso2": "SV",
    "iso3": "SLV"
  },
  {
    "city": "Djibouti",
    "lat": 11.595,
    "lon": 43.1481,
    "country": "Djibouti",
    "iso2": "DJ",
    "iso3": "DJI"
  },
  {
    "city": "Dublin",
    "lat": 53.3497,
    "lon": -6.2603,
    "country": "Ireland",
    "iso2": "IE",
    "iso3": "IRL"
  },
  {
    "city": "The Hague",
    "lat": 52.08,
    "lon": 4.31,
    "country": "Netherlands",
    "iso2": "NL",
    "iso3": "NLD"
  },
  {
    "city": "Asunción",
    "lat": -25.3,
    "lon": -57.6333,
    "country": "Paraguay",
    "iso2": "PY",
    "iso3": "PRY"
  },
  {
    "city": "Lisbon",
    "lat": 38.708,
    "lon": -9.139,
    "country": "Portugal",
    "iso2": "PT",
    "iso3": "PRT"
  },
  {
    "city": "Bratislava",
    "lat": 48.1447,
    "lon": 17.1128,
    "country": "Slovakia",
    "iso2": "SK",
    "iso3": "SVK"
  },
  {
    "city": "Tallinn",
    "lat": 59.4372,
    "lon": 24.745,
    "country": "Estonia",
    "iso2": "EE",
    "iso3": "EST"
  },
  {
    "city": "Beirut",
    "lat": 33.8869,
    "lon": 35.5131,
    "country": "Lebanon",
    "iso2": "LB",
    "iso3": "LBN"
  },
  {
    "city": "Cape Town",
    "lat": -33.925,
    "lon": 18.425,
    "country": "South Africa",
    "iso2": "ZA",
    "iso3": "ZAF"
  },
  {
    "city": "Tirana",
    "lat": 41.33,
    "lon": 19.82,
    "country": "Albania",
    "iso2": "AL",
    "iso3": "ALB"
  },
  {
    "city": "Wellington",
    "lat": -41.2889,
    "lon": 174.7772,
    "country": "New Zealand",
    "iso2": "NZ",
    "iso3": "NZL"
  },
  {
    "city": "Dodoma",
    "lat": -6.1835,
    "lon": 35.746,
    "country": "Tanzania",
    "iso2": "TZ",
    "iso3": "TZA"
  },
  {
    "city": "Bissau",
    "lat": 11.8592,
    "lon": -15.5956,
    "country": "Guinea-Bissau",
    "iso2": "GW",
    "iso3": "GNB"
  },
  {
    "city": "Canberra",
    "lat": -35.2931,
    "lon": 149.1269,
    "country": "Australia",
    "iso2": "AU",
    "iso3": "AUS"
  },
  {
    "city": "Juba",
    "lat": 4.85,
    "lon": 31.6,
    "country": "South Sudan",
    "iso2": "SS",
    "iso3": "SSD"
  },
  {
    "city": "Yamoussoukro",
    "lat": 6.8161,
    "lon": -5.2742,
    "country": "Côte d'Ivoire",
    "iso2": "CI",
    "iso3": "CIV"
  },
  {
    "city": "Maseru",
    "lat": -29.31,
    "lon": 27.48,
    "country": "Lesotho",
    "iso2": "LS",
    "iso3": "LSO"
  },
  {
    "city": "Nicosia",
    "lat": 35.1725,
    "lon": 33.365,
    "country": "Cyprus",
    "iso2": "CY",
    "iso3": "CYP"
  },
  {
    "city": "Windhoek",
    "lat": -22.57,
    "lon": 17.0836,
    "country": "Namibia",
    "iso2": "",
    "iso3": "NAM"
  },
  {
    "city": "Port Moresby",
    "lat": -9.4789,
    "lon": 147.1494,
    "country": "Papua New Guinea",
    "iso2": "PG",
    "iso3": "PNG"
  },
  {
    "city": "Porto-Novo",
    "lat": 6.4833,
    "lon": 2.6167,
    "country": "Benin",
    "iso2": "BJ",
    "iso3": "BEN"
  },
  {
    "city": "Sucre",
    "lat": -19.0431,
    "lon": -65.2592,
    "country": "Bolivia",
    "iso2": "BO",
    "iso3": "BOL"
  },
  {
    "city": "San José",
    "lat": 9.9333,
    "lon": -84.0833,
    "country": "Costa Rica",
    "iso2": "CR",
    "iso3": "CRI"
  },
  {
    "city": "Ljubljana",
    "lat": 46.05,
    "lon": 14.5167,
    "country": "Slovenia",
    "iso2": "SI",
    "iso3": "SVN"
  },
  {
    "city": "Sarajevo",
    "lat": 43.8563,
    "lon": 18.4132,
    "country": "Bosnia And Herzegovina",
    "iso2": "BA",
    "iso3": "BIH"
  },
  {
    "city": "Nassau",
    "lat": 25.0667,
    "lon": -77.3333,
    "country": "The Bahamas",
    "iso2": "BS",
    "iso3": "BHS"
  },
  {
    "city": "Bloemfontein",
    "lat": -29.1,
    "lon": 26.2167,
    "country": "South Africa",
    "iso2": "ZA",
    "iso3": "ZAF"
  },
  {
    "city": "Fort-de-France",
    "lat": 14.6104,
    "lon": -61.08,
    "country": "Martinique",
    "iso2": "MQ",
    "iso3": "MTQ"
  },
  {
    "city": "New Delhi",
    "lat": 28.6139,
    "lon": 77.209,
    "country": "India",
    "iso2": "IN",
    "iso3": "IND"
  },
  {
    "city": "Gaborone",
    "lat": -24.6569,
    "lon": 25.9086,
    "country": "Botswana",
    "iso2": "BW",
    "iso3": "BWA"
  },
  {
    "city": "Paramaribo",
    "lat": 5.8667,
    "lon": -55.1667,
    "country": "Suriname",
    "iso2": "SR",
    "iso3": "SUR"
  },
  {
    "city": "Dili",
    "lat": -8.5536,
    "lon": 125.5783,
    "country": "Timor-Leste",
    "iso2": "TL",
    "iso3": "TLS"
  },
  {
    "city": "Male",
    "lat": 4.175,
    "lon": 73.5083,
    "country": "Maldives",
    "iso2": "MV",
    "iso3": "MDV"
  },
  {
    "city": "Georgetown",
    "lat": 6.7833,
    "lon": -58.1667,
    "country": "Guyana",
    "iso2": "GY",
    "iso3": "GUY"
  },
  {
    "city": "Gibraltar",
    "lat": 36.1324,
    "lon": -5.3781,
    "country": "Gibraltar",
    "iso2": "GI",
    "iso3": "GIB"
  },
  {
    "city": "Saint-Denis",
    "lat": -20.8789,
    "lon": 55.4481,
    "country": "Reunion",
    "iso2": "RE",
    "iso3": "REU"
  },
  {
    "city": "Malabo",
    "lat": 3.7521,
    "lon": 8.7737,
    "country": "Equatorial Guinea",
    "iso2": "GQ",
    "iso3": "GNQ"
  },
  {
    "city": "Podgorica",
    "lat": 42.4397,
    "lon": 19.2661,
    "country": "Montenegro",
    "iso2": "ME",
    "iso3": "MNE"
  },
  {
    "city": "Manama",
    "lat": 26.225,
    "lon": 50.5775,
    "country": "Bahrain",
    "iso2": "BH",
    "iso3": "BHR"
  },
  {
    "city": "Port Louis",
    "lat": -20.1667,
    "lon": 57.5,
    "country": "Mauritius",
    "iso2": "MU",
    "iso3": "MUS"
  },
  {
    "city": "Willemstad",
    "lat": 12.108,
    "lon": -68.935,
    "country": "Curaçao",
    "iso2": "CW",
    "iso3": "CUW"
  },
  {
    "city": "Bern",
    "lat": 46.948,
    "lon": 7.4474,
    "country": "Switzerland",
    "iso2": "CH",
    "iso3": "CHE"
  },
  {
    "city": "Papeete",
    "lat": -17.5334,
    "lon": -149.5667,
    "country": "French Polynesia",
    "iso2": "PF",
    "iso3": "PYF"
  },
  {
    "city": "Luxembourg",
    "lat": 49.6106,
    "lon": 6.1328,
    "country": "Luxembourg",
    "iso2": "LU",
    "iso3": "LUX"
  },
  {
    "city": "Reykjavík",
    "lat": 64.1475,
    "lon": -21.935,
    "country": "Iceland",
    "iso2": "IS",
    "iso3": "ISL"
  },
  {
    "city": "Praia",
    "lat": 14.9177,
    "lon": -23.5092,
    "country": "Cabo Verde",
    "iso2": "CV",
    "iso3": "CPV"
  },
  {
    "city": "Sri Jayewardenepura Kotte",
    "lat": 6.9,
    "lon": 79.9164,
    "country": "Sri Lanka",
    "iso2": "LK",
    "iso3": "LKA"
  },
  {
    "city": "Bridgetown",
    "lat": 13.0975,
    "lon": -59.6167,
    "country": "Barbados",
    "iso2": "BB",
    "iso3": "BRB"
  },
  {
    "city": "Moroni",
    "lat": -11.7036,
    "lon": 43.2536,
    "country": "Comoros",
    "iso2": "KM",
    "iso3": "COM"
  },
  {
    "city": "Thimphu",
    "lat": 27.4833,
    "lon": 89.6333,
    "country": "Bhutan",
    "iso2": "BT",
    "iso3": "BTN"
  },
  {
    "city": "Mbabane",
    "lat": -26.3208,
    "lon": 31.1617,
    "country": "Swaziland",
    "iso2": "SZ",
    "iso3": "SWZ"
  },
  {
    "city": "Nouméa",
    "lat": -22.2625,
    "lon": 166.4443,
    "country": "New Caledonia",
    "iso2": "NC",
    "iso3": "NCL"
  },
  {
    "city": "Honiara",
    "lat": -9.4333,
    "lon": 159.95,
    "country": "Solomon Islands",
    "iso2": "SB",
    "iso3": "SLB"
  },
  {
    "city": "Suva",
    "lat": -18.1333,
    "lon": 178.4333,
    "country": "Fiji",
    "iso2": "FJ",
    "iso3": "FJI"
  },
  {
    "city": "Ankara",
    "lat": 39.93,
    "lon": 32.85,
    "country": "Turkey",
    "iso2": "TR",
    "iso3": "TUR"
  },
  {
    "city": "Castries",
    "lat": 14.0167,
    "lon": -60.9833,
    "country": "Saint Lucia",
    "iso2": "LC",
    "iso3": "LCA"
  },
  {
    "city": "Cayenne",
    "lat": 4.933,
    "lon": -52.33,
    "country": "French Guiana",
    "iso2": "GF",
    "iso3": "GUF"
  },
  {
    "city": "São Tomé",
    "lat": 0.3333,
    "lon": 6.7333,
    "country": "Sao Tome And Principe",
    "iso2": "ST",
    "iso3": "STP"
  },
  {
    "city": "Port-Vila",
    "lat": -17.7333,
    "lon": 168.3167,
    "country": "Vanuatu",
    "iso2": "VU",
    "iso3": "VUT"
  },
  {
    "city": "Hamilton",
    "lat": 32.2942,
    "lon": -64.7839,
    "country": "Bermuda",
    "iso2": "BM",
    "iso3": "BMU"
  },
  {
    "city": "Bandar Seri Begawan",
    "lat": 4.9167,
    "lon": 114.9167,
    "country": "Brunei",
    "iso2": "BN",
    "iso3": "BRN"
  },
  {
    "city": "Monaco",
    "lat": 43.7396,
    "lon": 7.4069,
    "country": "Monaco",
    "iso2": "MC",
    "iso3": "MCO"
  },
  {
    "city": "Gitega",
    "lat": -3.4283,
    "lon": 29.925,
    "country": "Burundi",
    "iso2": "BI",
    "iso3": "BDI"
  },
  {
    "city": "Port of Spain",
    "lat": 10.6667,
    "lon": -61.5167,
    "country": "Trinidad And Tobago",
    "iso2": "TT",
    "iso3": "TTO"
  },
  {
    "city": "Apia",
    "lat": -13.8333,
    "lon": -171.8333,
    "country": "Samoa",
    "iso2": "WS",
    "iso3": "WSM"
  },
  {
    "city": "Tarawa",
    "lat": 1.3382,
    "lon": 173.0176,
    "country": "Kiribati",
    "iso2": "KI",
    "iso3": "KIR"
  },
  {
    "city": "Oranjestad",
    "lat": 12.5186,
    "lon": -70.0358,
    "country": "Aruba",
    "iso2": "AW",
    "iso3": "ABW"
  },
  {
    "city": "Saint Helier",
    "lat": 49.1858,
    "lon": -2.11,
    "country": "Jersey",
    "iso2": "JE",
    "iso3": "JEY"
  },
  {
    "city": "Banjul",
    "lat": 13.4531,
    "lon": -16.5775,
    "country": "The Gambia",
    "iso2": "GM",
    "iso3": "GMB"
  },
  {
    "city": "Mamoudzou",
    "lat": -12.7871,
    "lon": 45.275,
    "country": "Mayotte",
    "iso2": "YT",
    "iso3": "MYT"
  },
  {
    "city": "Majuro",
    "lat": 7.0918,
    "lon": 171.3802,
    "country": "Marshall Islands",
    "iso2": "MH",
    "iso3": "MHL"
  },
  {
    "city": "Douglas",
    "lat": 54.15,
    "lon": -4.4819,
    "country": "Isle Of Man",
    "iso2": "IM",
    "iso3": "IMN"
  },
  {
    "city": "George Town",
    "lat": 19.2866,
    "lon": -81.3744,
    "country": "Cayman Islands",
    "iso2": "KY",
    "iso3": "CYM"
  },
  {
    "city": "Victoria",
    "lat": -4.6236,
    "lon": 55.4544,
    "country": "Seychelles",
    "iso2": "SC",
    "iso3": "SYC"
  },
  {
    "city": "Kingstown",
    "lat": 13.1667,
    "lon": -61.2333,
    "country": "Saint Vincent And The Grenadines",
    "iso2": "VC",
    "iso3": "VCT"
  },
  {
    "city": "Andorra la Vella",
    "lat": 42.5,
    "lon": 1.5,
    "country": "Andorra",
    "iso2": "AD",
    "iso3": "AND"
  },
  {
    "city": "Saint John’s",
    "lat": 17.1211,
    "lon": -61.8447,
    "country": "Antigua And Barbuda",
    "iso2": "AG",
    "iso3": "ATG"
  },
  {
    "city": "Nuku‘alofa",
    "lat": -21.1347,
    "lon": -175.2083,
    "country": "Tonga",
    "iso2": "TO",
    "iso3": "TON"
  },
  {
    "city": "Ashgabat",
    "lat": 37.95,
    "lon": 58.3833,
    "country": "Turkmenistan",
    "iso2": "TM",
    "iso3": "TKM"
  },
  {
    "city": "Nuuk",
    "lat": 64.175,
    "lon": -51.7333,
    "country": "Greenland",
    "iso2": "GL",
    "iso3": "GRL"
  },
  {
    "city": "Belmopan",
    "lat": 17.25,
    "lon": -88.7675,
    "country": "Belize",
    "iso2": "BZ",
    "iso3": "BLZ"
  },
  {
    "city": "Roseau",
    "lat": 15.3,
    "lon": -61.3833,
    "country": "Dominica",
    "iso2": "DM",
    "iso3": "DMA"
  },
  {
    "city": "Basseterre",
    "lat": 17.2983,
    "lon": -62.7342,
    "country": "Saint Kitts And Nevis",
    "iso2": "KN",
    "iso3": "KNA"
  },
  {
    "city": "Tórshavn",
    "lat": 62,
    "lon": -6.7833,
    "country": "Faroe Islands",
    "iso2": "FO",
    "iso3": "FRO"
  },
  {
    "city": "Pago Pago",
    "lat": -14.274,
    "lon": -170.7046,
    "country": "American Samoa",
    "iso2": "AS",
    "iso3": "ASM"
  },
  {
    "city": "Valletta",
    "lat": 35.8978,
    "lon": 14.5125,
    "country": "Malta",
    "iso2": "MT",
    "iso3": "MLT"
  },
  {
    "city": "Gaza",
    "lat": 31.5069,
    "lon": 34.456,
    "country": "Gaza Strip",
    "iso2": "XG",
    "iso3": "XGZ"
  },
  {
    "city": "Grand Turk",
    "lat": 21.4664,
    "lon": -71.136,
    "country": "Turks And Caicos Islands",
    "iso2": "TC",
    "iso3": "TCA"
  },
  {
    "city": "Palikir",
    "lat": 6.9178,
    "lon": 158.185,
    "country": "Federated States of Micronesia",
    "iso2": "FM",
    "iso3": "FSM"
  },
  {
    "city": "Funafuti",
    "lat": -8.5243,
    "lon": 179.1942,
    "country": "Tuvalu",
    "iso2": "TV",
    "iso3": "TUV"
  },
  {
    "city": "Vaduz",
    "lat": 47.1397,
    "lon": 9.5219,
    "country": "Liechtenstein",
    "iso2": "LI",
    "iso3": "LIE"
  },
  {
    "city": "Lobamba",
    "lat": -26.4465,
    "lon": 31.2064,
    "country": "Swaziland",
    "iso2": "SZ",
    "iso3": "SWZ"
  },
  {
    "city": "Avarua",
    "lat": -21.207,
    "lon": -159.771,
    "country": "Cook Islands",
    "iso2": "CK",
    "iso3": "COK"
  },
  {
    "city": "Saint George’s",
    "lat": 12.0444,
    "lon": -61.7417,
    "country": "Grenada",
    "iso2": "GD",
    "iso3": "GRD"
  },
  {
    "city": "San Marino",
    "lat": 43.932,
    "lon": 12.4484,
    "country": "San Marino",
    "iso2": "SM",
    "iso3": "SMR"
  },
  {
    "city": "Al Quds",
    "lat": 31.7764,
    "lon": 35.2269,
    "country": "West Bank",
    "iso2": "XW",
    "iso3": "XWB"
  },
  {
    "city": "Capitol Hill",
    "lat": 15.2137,
    "lon": 145.7546,
    "country": "Northern Mariana Islands",
    "iso2": "MP",
    "iso3": "MNP"
  },
  {
    "city": "Stanley",
    "lat": -51.7,
    "lon": -57.85,
    "country": "Falkland Islands (Islas Malvinas)",
    "iso2": "FK",
    "iso3": "FLK"
  },
  {
    "city": "Vatican City",
    "lat": 41.9033,
    "lon": 12.4534,
    "country": "Vatican City",
    "iso2": "VA",
    "iso3": "VAT"
  },
  {
    "city": "Alofi",
    "lat": -19.056,
    "lon": -169.921,
    "country": "Niue",
    "iso2": "NU",
    "iso3": "NIU"
  },
  {
    "city": "Basse-Terre",
    "lat": 16.0104,
    "lon": -61.7055,
    "country": "Guadeloupe",
    "iso2": "GP",
    "iso3": "GLP"
  },
  {
    "city": "Hagåtña",
    "lat": 13.4745,
    "lon": 144.7504,
    "country": "Guam",
    "iso2": "GU",
    "iso3": "GUM"
  },
  {
    "city": "Marigot",
    "lat": 18.0706,
    "lon": -63.0847,
    "country": "Saint Martin",
    "iso2": "MF",
    "iso3": "MAF"
  },
  {
    "city": "Jamestown",
    "lat": -15.9251,
    "lon": -5.7179,
    "country": "Saint Helena, Ascension, And Tristan Da Cunha",
    "iso2": "SH",
    "iso3": "SHN"
  },
  {
    "city": "Brades",
    "lat": 16.7928,
    "lon": -62.2106,
    "country": "Montserrat",
    "iso2": "MS",
    "iso3": "MSR"
  },
  {
    "city": "Philipsburg",
    "lat": 18.0256,
    "lon": -63.0492,
    "country": "Sint Maarten",
    "iso2": "SX",
    "iso3": "SXM"
  },
  {
    "city": "Yaren",
    "lat": -0.5477,
    "lon": 166.9209,
    "country": "Nauru",
    "iso2": "NR",
    "iso3": "NRU"
  },
  {
    "city": "Pristina",
    "lat": 42.6633,
    "lon": 21.1622,
    "country": "Kosovo",
    "iso2": "XK",
    "iso3": "XKS"
  },
  {
    "city": "Gustavia",
    "lat": 17.8958,
    "lon": -62.8508,
    "country": "Saint Barthelemy",
    "iso2": "BL",
    "iso3": "BLM"
  },
  {
    "city": "Road Town",
    "lat": 18.4167,
    "lon": -64.6167,
    "country": "British Virgin Islands",
    "iso2": "VG",
    "iso3": "VGB"
  },
  {
    "city": "Ngerulmud",
    "lat": 7.5006,
    "lon": 134.6242,
    "country": "Palau",
    "iso2": "PW",
    "iso3": "PLW"
  },
  {
    "city": "Saint-Pierre",
    "lat": 46.7811,
    "lon": -56.1764,
    "country": "Saint Pierre And Miquelon",
    "iso2": "PM",
    "iso3": "SPM"
  },
  {
    "city": "The Valley",
    "lat": 18.2167,
    "lon": -63.05,
    "country": "Anguilla",
    "iso2": "AI",
    "iso3": "AIA"
  },
  {
    "city": "Mata-Utu",
    "lat": -13.2825,
    "lon": -176.1736,
    "country": "Wallis And Futuna",
    "iso2": "WF",
    "iso3": "WLF"
  },
  {
    "city": "Kingston",
    "lat": -29.0569,
    "lon": 167.9617,
    "country": "Norfolk Island",
    "iso2": "NF",
    "iso3": "NFK"
  },
  {
    "city": "Longyearbyen",
    "lat": 78.2167,
    "lon": 15.6333,
    "country": "Svalbard",
    "iso2": "XR",
    "iso3": "XSV"
  },
  {
    "city": "Tifariti",
    "lat": 26.0928,
    "lon": -10.6089,
    "country": "Morocco",
    "iso2": "MA",
    "iso3": "MAR"
  },
  {
    "city": "Adamstown",
    "lat": -25.0667,
    "lon": -130.0833,
    "country": "Pitcairn Islands",
    "iso2": "PN",
    "iso3": "PCN"
  },
  {
    "city": "Flying Fish Cove",
    "lat": -10.4167,
    "lon": 105.7167,
    "country": "Christmas Island",
    "iso2": "CX",
    "iso3": "CXR"
  },
  {
    "city": "King Edward Point",
    "lat": -54.2833,
    "lon": -36.5,
    "country": "South Georgia And South Sandwich Islands",
    "iso2": "GS",
    "iso3": "SGS"
  },
  {
    "city": "San Juan",
    "lat": 18.4037,
    "lon": -66.0636,
    "country": "Puerto Rico",
    "iso2": "PR",
    "iso3": "PRI"
  },
  {
    "city": "Charlotte Amalie",
    "lat": 18.3419,
    "lon": -64.9332,
    "country": "U.S. Virgin Islands",
    "iso2": "VI",
    "iso3": "VIR"
  }
];
module.exports = { locations };
