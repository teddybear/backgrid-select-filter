// Source: https://gist.github.com/kamermans/1441495

var _continents = [{
	label: "North America",
	value: "NA"
}, {
	label: "South America",
	value: "SA"
}, {
	label: "Europe",
	value: "EU"
}, {
	label: "Africa",
	value: "AF"
}, {
	label: "Oceania",
	value: "OC"
}, {
	label: "Antartica",
	value: "AN"
}, {
	label: "Asia",
	value: "AS"
}];

var _territories = [
  {
    "id": 1,
    "code": "AD",
    "name": "Andorra",
    "full_name": "Principality of Andorra",
    "iso3": "AND",
    "number": 20,
    "continent": "EU"
  },
  {
    "id": 2,
    "code": "AE",
    "name": "United Arab Emirates",
    "full_name": "United Arab Emirates",
    "iso3": "ARE",
    "number": 784,
    "continent": "AS"
  },
  {
    "id": 3,
    "code": "AF",
    "name": "Afghanistan",
    "full_name": "Islamic Republic of Afghanistan",
    "iso3": "AFG",
    "number": 4,
    "continent": "AS"
  },
  {
    "id": 4,
    "code": "AG",
    "name": "Antigua and Barbuda",
    "full_name": "Antigua and Barbuda",
    "iso3": "ATG",
    "number": 28,
    "continent": "NA"
  },
  {
    "id": 5,
    "code": "AI",
    "name": "Anguilla",
    "full_name": "Anguilla",
    "iso3": "AIA",
    "number": 660,
    "continent": "NA"
  },
  {
    "id": 6,
    "code": "AL",
    "name": "Albania",
    "full_name": "Republic of Albania",
    "iso3": "ALB",
    "number": 8,
    "continent": "EU"
  },
  {
    "id": 7,
    "code": "AM",
    "name": "Armenia",
    "full_name": "Republic of Armenia",
    "iso3": "ARM",
    "number": 51,
    "continent": "AS"
  },
  {
    "id": 8,
    "code": "AN",
    "name": "Netherlands Antilles",
    "full_name": "Netherlands Antilles",
    "iso3": "ANT",
    "number": 530,
    "continent": "NA"
  },
  {
    "id": 9,
    "code": "AO",
    "name": "Angola",
    "full_name": "Republic of Angola",
    "iso3": "AGO",
    "number": 24,
    "continent": "AF"
  },
  {
    "id": 10,
    "code": "AQ",
    "name": "Antarctica",
    "full_name": "Antarctica (the territory South of 60 deg S)",
    "iso3": "ATA",
    "number": 10,
    "continent": "AN"
  },
  {
    "id": 11,
    "code": "AR",
    "name": "Argentina",
    "full_name": "Argentine Republic",
    "iso3": "ARG",
    "number": 32,
    "continent": "SA"
  },
  {
    "id": 12,
    "code": "AS",
    "name": "American Samoa",
    "full_name": "American Samoa",
    "iso3": "ASM",
    "number": 16,
    "continent": "OC"
  },
  {
    "id": 13,
    "code": "AT",
    "name": "Austria",
    "full_name": "Republic of Austria",
    "iso3": "AUT",
    "number": 40,
    "continent": "EU"
  },
  {
    "id": 14,
    "code": "AU",
    "name": "Australia",
    "full_name": "Commonwealth of Australia",
    "iso3": "AUS",
    "number": 36,
    "continent": "OC"
  },
  {
    "id": 15,
    "code": "AW",
    "name": "Aruba",
    "full_name": "Aruba",
    "iso3": "ABW",
    "number": 533,
    "continent": "NA"
  },
  {
    "id": 16,
    "code": "AX",
    "name": "Åland",
    "full_name": "Åland Islands",
    "iso3": "ALA",
    "number": 248,
    "continent": "EU"
  },
  {
    "id": 17,
    "code": "AZ",
    "name": "Azerbaijan",
    "full_name": "Republic of Azerbaijan",
    "iso3": "AZE",
    "number": 31,
    "continent": "AS"
  },
  {
    "id": 18,
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "full_name": "Bosnia and Herzegovina",
    "iso3": "BIH",
    "number": 70,
    "continent": "EU"
  },
  {
    "id": 19,
    "code": "BB",
    "name": "Barbados",
    "full_name": "Barbados",
    "iso3": "BRB",
    "number": 52,
    "continent": "NA"
  },
  {
    "id": 20,
    "code": "BD",
    "name": "Bangladesh",
    "full_name": "People\\'s Republic of Bangladesh",
    "iso3": "BGD",
    "number": 50,
    "continent": "AS"
  },
  {
    "id": 21,
    "code": "BE",
    "name": "Belgium",
    "full_name": "Kingdom of Belgium",
    "iso3": "BEL",
    "number": 56,
    "continent": "EU"
  },
  {
    "id": 22,
    "code": "BF",
    "name": "Burkina Faso",
    "full_name": "Burkina Faso",
    "iso3": "BFA",
    "number": 854,
    "continent": "AF"
  },
  {
    "id": 23,
    "code": "BG",
    "name": "Bulgaria",
    "full_name": "Republic of Bulgaria",
    "iso3": "BGR",
    "number": 100,
    "continent": "EU"
  },
  {
    "id": 24,
    "code": "BH",
    "name": "Bahrain",
    "full_name": "Kingdom of Bahrain",
    "iso3": "BHR",
    "number": 48,
    "continent": "AS"
  },
  {
    "id": 25,
    "code": "BI",
    "name": "Burundi",
    "full_name": "Republic of Burundi",
    "iso3": "BDI",
    "number": 108,
    "continent": "AF"
  },
  {
    "id": 26,
    "code": "BJ",
    "name": "Benin",
    "full_name": "Republic of Benin",
    "iso3": "BEN",
    "number": 204,
    "continent": "AF"
  },
  {
    "id": 27,
    "code": "BL",
    "name": "Saint Barthélemy",
    "full_name": "Saint Barthelemy",
    "iso3": "BLM",
    "number": 652,
    "continent": "NA"
  },
  {
    "id": 28,
    "code": "BM",
    "name": "Bermuda",
    "full_name": "Bermuda",
    "iso3": "BMU",
    "number": 60,
    "continent": "NA"
  },
  {
    "id": 29,
    "code": "BN",
    "name": "Brunei Darussalam",
    "full_name": "Brunei Darussalam",
    "iso3": "BRN",
    "number": 96,
    "continent": "AS"
  },
  {
    "id": 30,
    "code": "BO",
    "name": "Bolivia",
    "full_name": "Republic of Bolivia",
    "iso3": "BOL",
    "number": 68,
    "continent": "SA"
  },
  {
    "id": 31,
    "code": "BR",
    "name": "Brazil",
    "full_name": "Federative Republic of Brazil",
    "iso3": "BRA",
    "number": 76,
    "continent": "SA"
  },
  {
    "id": 32,
    "code": "BS",
    "name": "Bahamas",
    "full_name": "Commonwealth of the Bahamas",
    "iso3": "BHS",
    "number": 44,
    "continent": "NA"
  },
  {
    "id": 33,
    "code": "BT",
    "name": "Bhutan",
    "full_name": "Kingdom of Bhutan",
    "iso3": "BTN",
    "number": 64,
    "continent": "AS"
  },
  {
    "id": 34,
    "code": "BV",
    "name": "Bouvet Island",
    "full_name": "Bouvet Island (Bouvetoya)",
    "iso3": "BVT",
    "number": 74,
    "continent": "AN"
  },
  {
    "id": 35,
    "code": "BW",
    "name": "Botswana",
    "full_name": "Republic of Botswana",
    "iso3": "BWA",
    "number": 72,
    "continent": "AF"
  },
  {
    "id": 36,
    "code": "BY",
    "name": "Belarus",
    "full_name": "Republic of Belarus",
    "iso3": "BLR",
    "number": 112,
    "continent": "EU"
  },
  {
    "id": 37,
    "code": "BZ",
    "name": "Belize",
    "full_name": "Belize",
    "iso3": "BLZ",
    "number": 84,
    "continent": "NA"
  },
  {
    "id": 38,
    "code": "CA",
    "name": "Canada",
    "full_name": "Canada",
    "iso3": "CAN",
    "number": 124,
    "continent": "NA"
  },
  {
    "id": 39,
    "code": "CC",
    "name": "Cocos (Keeling) Islands",
    "full_name": "Cocos (Keeling) Islands",
    "iso3": "CCK",
    "number": 166,
    "continent": "AS"
  },
  {
    "id": 40,
    "code": "CD",
    "name": "Congo (Kinshasa)",
    "full_name": "Democratic Republic of the Congo",
    "iso3": "COD",
    "number": 180,
    "continent": "AF"
  },
  {
    "id": 41,
    "code": "CF",
    "name": "Central African Republic",
    "full_name": "Central African Republic",
    "iso3": "CAF",
    "number": 140,
    "continent": "AF"
  },
  {
    "id": 42,
    "code": "CG",
    "name": "Congo (Brazzaville)",
    "full_name": "Republic of the Congo",
    "iso3": "COG",
    "number": 178,
    "continent": "AF"
  },
  {
    "id": 43,
    "code": "CH",
    "name": "Switzerland",
    "full_name": "Swiss Confederation",
    "iso3": "CHE",
    "number": 756,
    "continent": "EU"
  },
  {
    "id": 44,
    "code": "CI",
    "name": "Côte d\\'Ivoire",
    "full_name": "Republic of Cote d\\'Ivoire",
    "iso3": "CIV",
    "number": 384,
    "continent": "AF"
  },
  {
    "id": 45,
    "code": "CK",
    "name": "Cook Islands",
    "full_name": "Cook Islands",
    "iso3": "COK",
    "number": 184,
    "continent": "OC"
  },
  {
    "id": 46,
    "code": "CL",
    "name": "Chile",
    "full_name": "Republic of Chile",
    "iso3": "CHL",
    "number": 152,
    "continent": "SA"
  },
  {
    "id": 47,
    "code": "CM",
    "name": "Cameroon",
    "full_name": "Republic of Cameroon",
    "iso3": "CMR",
    "number": 120,
    "continent": "AF"
  },
  {
    "id": 48,
    "code": "CN",
    "name": "China",
    "full_name": "People\\'s Republic of China",
    "iso3": "CHN",
    "number": 156,
    "continent": "AS"
  },
  {
    "id": 49,
    "code": "CO",
    "name": "Colombia",
    "full_name": "Republic of Colombia",
    "iso3": "COL",
    "number": 170,
    "continent": "SA"
  },
  {
    "id": 50,
    "code": "CR",
    "name": "Costa Rica",
    "full_name": "Republic of Costa Rica",
    "iso3": "CRI",
    "number": 188,
    "continent": "NA"
  },
  {
    "id": 51,
    "code": "CU",
    "name": "Cuba",
    "full_name": "Republic of Cuba",
    "iso3": "CUB",
    "number": 192,
    "continent": "NA"
  },
  {
    "id": 52,
    "code": "CV",
    "name": "Cape Verde",
    "full_name": "Republic of Cape Verde",
    "iso3": "CPV",
    "number": 132,
    "continent": "AF"
  },
  {
    "id": 53,
    "code": "CX",
    "name": "Christmas Island",
    "full_name": "Christmas Island",
    "iso3": "CXR",
    "number": 162,
    "continent": "AS"
  },
  {
    "id": 54,
    "code": "CY",
    "name": "Cyprus",
    "full_name": "Republic of Cyprus",
    "iso3": "CYP",
    "number": 196,
    "continent": "AS"
  },
  {
    "id": 55,
    "code": "CZ",
    "name": "Czech Republic",
    "full_name": "Czech Republic",
    "iso3": "CZE",
    "number": 203,
    "continent": "EU"
  },
  {
    "id": 56,
    "code": "DE",
    "name": "Germany",
    "full_name": "Federal Republic of Germany",
    "iso3": "DEU",
    "number": 276,
    "continent": "EU"
  },
  {
    "id": 57,
    "code": "DJ",
    "name": "Djibouti",
    "full_name": "Republic of Djibouti",
    "iso3": "DJI",
    "number": 262,
    "continent": "AF"
  },
  {
    "id": 58,
    "code": "DK",
    "name": "Denmark",
    "full_name": "Kingdom of Denmark",
    "iso3": "DNK",
    "number": 208,
    "continent": "EU"
  },
  {
    "id": 59,
    "code": "DM",
    "name": "Dominica",
    "full_name": "Commonwealth of Dominica",
    "iso3": "DMA",
    "number": 212,
    "continent": "NA"
  },
  {
    "id": 60,
    "code": "DO",
    "name": "Dominican Republic",
    "full_name": "Dominican Republic",
    "iso3": "DOM",
    "number": 214,
    "continent": "NA"
  },
  {
    "id": 61,
    "code": "DZ",
    "name": "Algeria",
    "full_name": "People\\'s Democratic Republic of Algeria",
    "iso3": "DZA",
    "number": 12,
    "continent": "AF"
  },
  {
    "id": 62,
    "code": "EC",
    "name": "Ecuador",
    "full_name": "Republic of Ecuador",
    "iso3": "ECU",
    "number": 218,
    "continent": "SA"
  },
  {
    "id": 63,
    "code": "EE",
    "name": "Estonia",
    "full_name": "Republic of Estonia",
    "iso3": "EST",
    "number": 233,
    "continent": "EU"
  },
  {
    "id": 64,
    "code": "EG",
    "name": "Egypt",
    "full_name": "Arab Republic of Egypt",
    "iso3": "EGY",
    "number": 818,
    "continent": "AF"
  },
  {
    "id": 65,
    "code": "EH",
    "name": "Western Sahara",
    "full_name": "Western Sahara",
    "iso3": "ESH",
    "number": 732,
    "continent": "AF"
  },
  {
    "id": 66,
    "code": "ER",
    "name": "Eritrea",
    "full_name": "State of Eritrea",
    "iso3": "ERI",
    "number": 232,
    "continent": "AF"
  },
  {
    "id": 67,
    "code": "ES",
    "name": "Spain",
    "full_name": "Kingdom of Spain",
    "iso3": "ESP",
    "number": 724,
    "continent": "EU"
  },
  {
    "id": 68,
    "code": "ET",
    "name": "Ethiopia",
    "full_name": "Federal Democratic Republic of Ethiopia",
    "iso3": "ETH",
    "number": 231,
    "continent": "AF"
  },
  {
    "id": 69,
    "code": "FI",
    "name": "Finland",
    "full_name": "Republic of Finland",
    "iso3": "FIN",
    "number": 246,
    "continent": "EU"
  },
  {
    "id": 70,
    "code": "FJ",
    "name": "Fiji",
    "full_name": "Republic of the Fiji Islands",
    "iso3": "FJI",
    "number": 242,
    "continent": "OC"
  },
  {
    "id": 71,
    "code": "FK",
    "name": "Falkland Islands",
    "full_name": "Falkland Islands (Malvinas)",
    "iso3": "FLK",
    "number": 238,
    "continent": "SA"
  },
  {
    "id": 72,
    "code": "FM",
    "name": "Micronesia",
    "full_name": "Federated States of Micronesia",
    "iso3": "FSM",
    "number": 583,
    "continent": "OC"
  },
  {
    "id": 73,
    "code": "FO",
    "name": "Faroe Islands",
    "full_name": "Faroe Islands",
    "iso3": "FRO",
    "number": 234,
    "continent": "EU"
  },
  {
    "id": 74,
    "code": "FR",
    "name": "France",
    "full_name": "French Republic",
    "iso3": "FRA",
    "number": 250,
    "continent": "EU"
  },
  {
    "id": 75,
    "code": "GA",
    "name": "Gabon",
    "full_name": "Gabonese Republic",
    "iso3": "GAB",
    "number": 266,
    "continent": "AF"
  },
  {
    "id": 76,
    "code": "GB",
    "name": "United Kingdom",
    "full_name": "United Kingdom of Great Britain & Northern Ireland",
    "iso3": "GBR",
    "number": 826,
    "continent": "EU"
  },
  {
    "id": 77,
    "code": "GD",
    "name": "Grenada",
    "full_name": "Grenada",
    "iso3": "GRD",
    "number": 308,
    "continent": "NA"
  },
  {
    "id": 78,
    "code": "GE",
    "name": "Georgia",
    "full_name": "Georgia",
    "iso3": "GEO",
    "number": 268,
    "continent": "AS"
  },
  {
    "id": 79,
    "code": "GF",
    "name": "French Guiana",
    "full_name": "French Guiana",
    "iso3": "GUF",
    "number": 254,
    "continent": "SA"
  },
  {
    "id": 80,
    "code": "GG",
    "name": "Guernsey",
    "full_name": "Bailiwick of Guernsey",
    "iso3": "GGY",
    "number": 831,
    "continent": "EU"
  },
  {
    "id": 81,
    "code": "GH",
    "name": "Ghana",
    "full_name": "Republic of Ghana",
    "iso3": "GHA",
    "number": 288,
    "continent": "AF"
  },
  {
    "id": 82,
    "code": "GI",
    "name": "Gibraltar",
    "full_name": "Gibraltar",
    "iso3": "GIB",
    "number": 292,
    "continent": "EU"
  },
  {
    "id": 83,
    "code": "GL",
    "name": "Greenland",
    "full_name": "Greenland",
    "iso3": "GRL",
    "number": 304,
    "continent": "NA"
  },
  {
    "id": 84,
    "code": "GM",
    "name": "Gambia",
    "full_name": "Republic of the Gambia",
    "iso3": "GMB",
    "number": 270,
    "continent": "AF"
  },
  {
    "id": 85,
    "code": "GN",
    "name": "Guinea",
    "full_name": "Republic of Guinea",
    "iso3": "GIN",
    "number": 324,
    "continent": "AF"
  },
  {
    "id": 86,
    "code": "GP",
    "name": "Guadeloupe",
    "full_name": "Guadeloupe",
    "iso3": "GLP",
    "number": 312,
    "continent": "NA"
  },
  {
    "id": 87,
    "code": "GQ",
    "name": "Equatorial Guinea",
    "full_name": "Republic of Equatorial Guinea",
    "iso3": "GNQ",
    "number": 226,
    "continent": "AF"
  },
  {
    "id": 88,
    "code": "GR",
    "name": "Greece",
    "full_name": "Hellenic Republic Greece",
    "iso3": "GRC",
    "number": 300,
    "continent": "EU"
  },
  {
    "id": 89,
    "code": "GS",
    "name": "South Georgia and South Sandwich Islands",
    "full_name": "South Georgia and the South Sandwich Islands",
    "iso3": "SGS",
    "number": 239,
    "continent": "AN"
  },
  {
    "id": 90,
    "code": "GT",
    "name": "Guatemala",
    "full_name": "Republic of Guatemala",
    "iso3": "GTM",
    "number": 320,
    "continent": "NA"
  },
  {
    "id": 91,
    "code": "GU",
    "name": "Guam",
    "full_name": "Guam",
    "iso3": "GUM",
    "number": 316,
    "continent": "OC"
  },
  {
    "id": 92,
    "code": "GW",
    "name": "Guinea-Bissau",
    "full_name": "Republic of Guinea-Bissau",
    "iso3": "GNB",
    "number": 624,
    "continent": "AF"
  },
  {
    "id": 93,
    "code": "GY",
    "name": "Guyana",
    "full_name": "Co-operative Republic of Guyana",
    "iso3": "GUY",
    "number": 328,
    "continent": "SA"
  },
  {
    "id": 94,
    "code": "HK",
    "name": "Hong Kong",
    "full_name": "Hong Kong Special Administrative Region of China",
    "iso3": "HKG",
    "number": 344,
    "continent": "AS"
  },
  {
    "id": 95,
    "code": "HM",
    "name": "Heard and McDonald Islands",
    "full_name": "Heard Island and McDonald Islands",
    "iso3": "HMD",
    "number": 334,
    "continent": "AN"
  },
  {
    "id": 96,
    "code": "HN",
    "name": "Honduras",
    "full_name": "Republic of Honduras",
    "iso3": "HND",
    "number": 340,
    "continent": "NA"
  },
  {
    "id": 97,
    "code": "HR",
    "name": "Croatia",
    "full_name": "Republic of Croatia",
    "iso3": "HRV",
    "number": 191,
    "continent": "EU"
  },
  {
    "id": 98,
    "code": "HT",
    "name": "Haiti",
    "full_name": "Republic of Haiti",
    "iso3": "HTI",
    "number": 332,
    "continent": "NA"
  },
  {
    "id": 99,
    "code": "HU",
    "name": "Hungary",
    "full_name": "Republic of Hungary",
    "iso3": "HUN",
    "number": 348,
    "continent": "EU"
  },
  {
    "id": 100,
    "code": "ID",
    "name": "Indonesia",
    "full_name": "Republic of Indonesia",
    "iso3": "IDN",
    "number": 360,
    "continent": "AS"
  },
  {
    "id": 101,
    "code": "IE",
    "name": "Ireland",
    "full_name": "Ireland",
    "iso3": "IRL",
    "number": 372,
    "continent": "EU"
  },
  {
    "id": 102,
    "code": "IL",
    "name": "Israel",
    "full_name": "State of Israel",
    "iso3": "ISR",
    "number": 376,
    "continent": "AS"
  },
  {
    "id": 103,
    "code": "IM",
    "name": "Isle of Man",
    "full_name": "Isle of Man",
    "iso3": "IMN",
    "number": 833,
    "continent": "EU"
  },
  {
    "id": 104,
    "code": "IN",
    "name": "India",
    "full_name": "Republic of India",
    "iso3": "IND",
    "number": 356,
    "continent": "AS"
  },
  {
    "id": 105,
    "code": "IO",
    "name": "British Indian Ocean Territory",
    "full_name": "British Indian Ocean Territory (Chagos Archipelago)",
    "iso3": "IOT",
    "number": 86,
    "continent": "AS"
  },
  {
    "id": 106,
    "code": "IQ",
    "name": "Iraq",
    "full_name": "Republic of Iraq",
    "iso3": "IRQ",
    "number": 368,
    "continent": "AS"
  },
  {
    "id": 107,
    "code": "IR",
    "name": "Iran",
    "full_name": "Islamic Republic of Iran",
    "iso3": "IRN",
    "number": 364,
    "continent": "AS"
  },
  {
    "id": 108,
    "code": "IS",
    "name": "Iceland",
    "full_name": "Republic of Iceland",
    "iso3": "ISL",
    "number": 352,
    "continent": "EU"
  },
  {
    "id": 109,
    "code": "IT",
    "name": "Italy",
    "full_name": "Italian Republic",
    "iso3": "ITA",
    "number": 380,
    "continent": "EU"
  },
  {
    "id": 110,
    "code": "JE",
    "name": "Jersey",
    "full_name": "Bailiwick of Jersey",
    "iso3": "JEY",
    "number": 832,
    "continent": "EU"
  },
  {
    "id": 111,
    "code": "JM",
    "name": "Jamaica",
    "full_name": "Jamaica",
    "iso3": "JAM",
    "number": 388,
    "continent": "NA"
  },
  {
    "id": 112,
    "code": "JO",
    "name": "Jordan",
    "full_name": "Hashemite Kingdom of Jordan",
    "iso3": "JOR",
    "number": 400,
    "continent": "AS"
  },
  {
    "id": 113,
    "code": "JP",
    "name": "Japan",
    "full_name": "Japan",
    "iso3": "JPN",
    "number": 392,
    "continent": "AS"
  },
  {
    "id": 114,
    "code": "KE",
    "name": "Kenya",
    "full_name": "Republic of Kenya",
    "iso3": "KEN",
    "number": 404,
    "continent": "AF"
  },
  {
    "id": 115,
    "code": "KG",
    "name": "Kyrgyzstan",
    "full_name": "Kyrgyz Republic",
    "iso3": "KGZ",
    "number": 417,
    "continent": "AS"
  },
  {
    "id": 116,
    "code": "KH",
    "name": "Cambodia",
    "full_name": "Kingdom of Cambodia",
    "iso3": "KHM",
    "number": 116,
    "continent": "AS"
  },
  {
    "id": 117,
    "code": "KI",
    "name": "Kiribati",
    "full_name": "Republic of Kiribati",
    "iso3": "KIR",
    "number": 296,
    "continent": "OC"
  },
  {
    "id": 118,
    "code": "KM",
    "name": "Comoros",
    "full_name": "Union of the Comoros",
    "iso3": "COM",
    "number": 174,
    "continent": "AF"
  },
  {
    "id": 119,
    "code": "KN",
    "name": "Saint Kitts and Nevis",
    "full_name": "Federation of Saint Kitts and Nevis",
    "iso3": "KNA",
    "number": 659,
    "continent": "NA"
  },
  {
    "id": 120,
    "code": "KP",
    "name": "Korea",
    "full_name": "North",
    "iso3": "Democratic People\\'s Republic of Korea",
    "number": "PRK",
    "continent": 408
  },
  {
    "id": 121,
    "code": "KR",
    "name": "Korea",
    "full_name": "South",
    "iso3": "Republic of Korea",
    "number": "KOR",
    "continent": 410
  },
  {
    "id": 122,
    "code": "KW",
    "name": "Kuwait",
    "full_name": "State of Kuwait",
    "iso3": "KWT",
    "number": 414,
    "continent": "AS"
  },
  {
    "id": 123,
    "code": "KY",
    "name": "Cayman Islands",
    "full_name": "Cayman Islands",
    "iso3": "CYM",
    "number": 136,
    "continent": "NA"
  },
  {
    "id": 124,
    "code": "KZ",
    "name": "Kazakhstan",
    "full_name": "Republic of Kazakhstan",
    "iso3": "KAZ",
    "number": 398,
    "continent": "AS"
  },
  {
    "id": 125,
    "code": "LA",
    "name": "Laos",
    "full_name": "Lao People\\'s Democratic Republic",
    "iso3": "LAO",
    "number": 418,
    "continent": "AS"
  },
  {
    "id": 126,
    "code": "LB",
    "name": "Lebanon",
    "full_name": "Lebanese Republic",
    "iso3": "LBN",
    "number": 422,
    "continent": "AS"
  },
  {
    "id": 127,
    "code": "LC",
    "name": "Saint Lucia",
    "full_name": "Saint Lucia",
    "iso3": "LCA",
    "number": 662,
    "continent": "NA"
  },
  {
    "id": 128,
    "code": "LI",
    "name": "Liechtenstein",
    "full_name": "Principality of Liechtenstein",
    "iso3": "LIE",
    "number": 438,
    "continent": "EU"
  },
  {
    "id": 129,
    "code": "LK",
    "name": "Sri Lanka",
    "full_name": "Democratic Socialist Republic of Sri Lanka",
    "iso3": "LKA",
    "number": 144,
    "continent": "AS"
  },
  {
    "id": 130,
    "code": "LR",
    "name": "Liberia",
    "full_name": "Republic of Liberia",
    "iso3": "LBR",
    "number": 430,
    "continent": "AF"
  },
  {
    "id": 131,
    "code": "LS",
    "name": "Lesotho",
    "full_name": "Kingdom of Lesotho",
    "iso3": "LSO",
    "number": 426,
    "continent": "AF"
  },
  {
    "id": 132,
    "code": "LT",
    "name": "Lithuania",
    "full_name": "Republic of Lithuania",
    "iso3": "LTU",
    "number": 440,
    "continent": "EU"
  },
  {
    "id": 133,
    "code": "LU",
    "name": "Luxembourg",
    "full_name": "Grand Duchy of Luxembourg",
    "iso3": "LUX",
    "number": 442,
    "continent": "EU"
  },
  {
    "id": 134,
    "code": "LV",
    "name": "Latvia",
    "full_name": "Republic of Latvia",
    "iso3": "LVA",
    "number": 428,
    "continent": "EU"
  },
  {
    "id": 135,
    "code": "LY",
    "name": "Libya",
    "full_name": "Libyan Arab Jamahiriya",
    "iso3": "LBY",
    "number": 434,
    "continent": "AF"
  },
  {
    "id": 136,
    "code": "MA",
    "name": "Morocco",
    "full_name": "Kingdom of Morocco",
    "iso3": "MAR",
    "number": 504,
    "continent": "AF"
  },
  {
    "id": 137,
    "code": "MC",
    "name": "Monaco",
    "full_name": "Principality of Monaco",
    "iso3": "MCO",
    "number": 492,
    "continent": "EU"
  },
  {
    "id": 138,
    "code": "MD",
    "name": "Moldova",
    "full_name": "Republic of Moldova",
    "iso3": "MDA",
    "number": 498,
    "continent": "EU"
  },
  {
    "id": 139,
    "code": "ME",
    "name": "Montenegro",
    "full_name": "Republic of Montenegro",
    "iso3": "MNE",
    "number": 499,
    "continent": "EU"
  },
  {
    "id": 140,
    "code": "MF",
    "name": "Saint Martin (French part)",
    "full_name": "Saint Martin",
    "iso3": "MAF",
    "number": 663,
    "continent": "NA"
  },
  {
    "id": 141,
    "code": "MG",
    "name": "Madagascar",
    "full_name": "Republic of Madagascar",
    "iso3": "MDG",
    "number": 450,
    "continent": "AF"
  },
  {
    "id": 142,
    "code": "MH",
    "name": "Marshall Islands",
    "full_name": "Republic of the Marshall Islands",
    "iso3": "MHL",
    "number": 584,
    "continent": "OC"
  },
  {
    "id": 143,
    "code": "MK",
    "name": "Macedonia",
    "full_name": "Republic of Macedonia",
    "iso3": "MKD",
    "number": 807,
    "continent": "EU"
  },
  {
    "id": 144,
    "code": "ML",
    "name": "Mali",
    "full_name": "Republic of Mali",
    "iso3": "MLI",
    "number": 466,
    "continent": "AF"
  },
  {
    "id": 145,
    "code": "MM",
    "name": "Myanmar",
    "full_name": "Union of Myanmar",
    "iso3": "MMR",
    "number": 104,
    "continent": "AS"
  },
  {
    "id": 146,
    "code": "MN",
    "name": "Mongolia",
    "full_name": "Mongolia",
    "iso3": "MNG",
    "number": 496,
    "continent": "AS"
  },
  {
    "id": 147,
    "code": "MO",
    "name": "Macau",
    "full_name": "Macao Special Administrative Region of China",
    "iso3": "MAC",
    "number": 446,
    "continent": "AS"
  },
  {
    "id": 148,
    "code": "MP",
    "name": "Northern Mariana Islands",
    "full_name": "Commonwealth of the Northern Mariana Islands",
    "iso3": "MNP",
    "number": 580,
    "continent": "OC"
  },
  {
    "id": 149,
    "code": "MQ",
    "name": "Martinique",
    "full_name": "Martinique",
    "iso3": "MTQ",
    "number": 474,
    "continent": "NA"
  },
  {
    "id": 150,
    "code": "MR",
    "name": "Mauritania",
    "full_name": "Islamic Republic of Mauritania",
    "iso3": "MRT",
    "number": 478,
    "continent": "AF"
  },
  {
    "id": 151,
    "code": "MS",
    "name": "Montserrat",
    "full_name": "Montserrat",
    "iso3": "MSR",
    "number": 500,
    "continent": "NA"
  },
  {
    "id": 152,
    "code": "MT",
    "name": "Malta",
    "full_name": "Republic of Malta",
    "iso3": "MLT",
    "number": 470,
    "continent": "EU"
  },
  {
    "id": 153,
    "code": "MU",
    "name": "Mauritius",
    "full_name": "Republic of Mauritius",
    "iso3": "MUS",
    "number": 480,
    "continent": "AF"
  },
  {
    "id": 154,
    "code": "MV",
    "name": "Maldives",
    "full_name": "Republic of Maldives",
    "iso3": "MDV",
    "number": 462,
    "continent": "AS"
  },
  {
    "id": 155,
    "code": "MW",
    "name": "Malawi",
    "full_name": "Republic of Malawi",
    "iso3": "MWI",
    "number": 454,
    "continent": "AF"
  },
  {
    "id": 156,
    "code": "MX",
    "name": "Mexico",
    "full_name": "United Mexican States",
    "iso3": "MEX",
    "number": 484,
    "continent": "NA"
  },
  {
    "id": 157,
    "code": "MY",
    "name": "Malaysia",
    "full_name": "Malaysia",
    "iso3": "MYS",
    "number": 458,
    "continent": "AS"
  },
  {
    "id": 158,
    "code": "MZ",
    "name": "Mozambique",
    "full_name": "Republic of Mozambique",
    "iso3": "MOZ",
    "number": 508,
    "continent": "AF"
  },
  {
    "id": 159,
    "code": "NA",
    "name": "Namibia",
    "full_name": "Republic of Namibia",
    "iso3": "NAM",
    "number": 516,
    "continent": "AF"
  },
  {
    "id": 160,
    "code": "NC",
    "name": "New Caledonia",
    "full_name": "New Caledonia",
    "iso3": "NCL",
    "number": 540,
    "continent": "OC"
  },
  {
    "id": 161,
    "code": "NE",
    "name": "Niger",
    "full_name": "Republic of Niger",
    "iso3": "NER",
    "number": 562,
    "continent": "AF"
  },
  {
    "id": 162,
    "code": "NF",
    "name": "Norfolk Island",
    "full_name": "Norfolk Island",
    "iso3": "NFK",
    "number": 574,
    "continent": "OC"
  },
  {
    "id": 163,
    "code": "NG",
    "name": "Nigeria",
    "full_name": "Federal Republic of Nigeria",
    "iso3": "NGA",
    "number": 566,
    "continent": "AF"
  },
  {
    "id": 164,
    "code": "NI",
    "name": "Nicaragua",
    "full_name": "Republic of Nicaragua",
    "iso3": "NIC",
    "number": 558,
    "continent": "NA"
  },
  {
    "id": 165,
    "code": "NL",
    "name": "Netherlands",
    "full_name": "Kingdom of the Netherlands",
    "iso3": "NLD",
    "number": 528,
    "continent": "EU"
  },
  {
    "id": 166,
    "code": "NO",
    "name": "Norway",
    "full_name": "Kingdom of Norway",
    "iso3": "NOR",
    "number": 578,
    "continent": "EU"
  },
  {
    "id": 167,
    "code": "NP",
    "name": "Nepal",
    "full_name": "State of Nepal",
    "iso3": "NPL",
    "number": 524,
    "continent": "AS"
  },
  {
    "id": 168,
    "code": "NR",
    "name": "Nauru",
    "full_name": "Republic of Nauru",
    "iso3": "NRU",
    "number": 520,
    "continent": "OC"
  },
  {
    "id": 169,
    "code": "NU",
    "name": "Niue",
    "full_name": "Niue",
    "iso3": "NIU",
    "number": 570,
    "continent": "OC"
  },
  {
    "id": 170,
    "code": "NZ",
    "name": "New Zealand",
    "full_name": "New Zealand",
    "iso3": "NZL",
    "number": 554,
    "continent": "OC"
  },
  {
    "id": 171,
    "code": "OM",
    "name": "Oman",
    "full_name": "Sultanate of Oman",
    "iso3": "OMN",
    "number": 512,
    "continent": "AS"
  },
  {
    "id": 172,
    "code": "PA",
    "name": "Panama",
    "full_name": "Republic of Panama",
    "iso3": "PAN",
    "number": 591,
    "continent": "NA"
  },
  {
    "id": 173,
    "code": "PE",
    "name": "Peru",
    "full_name": "Republic of Peru",
    "iso3": "PER",
    "number": 604,
    "continent": "SA"
  },
  {
    "id": 174,
    "code": "PF",
    "name": "French Polynesia",
    "full_name": "French Polynesia",
    "iso3": "PYF",
    "number": 258,
    "continent": "OC"
  },
  {
    "id": 175,
    "code": "PG",
    "name": "Papua New Guinea",
    "full_name": "Independent State of Papua New Guinea",
    "iso3": "PNG",
    "number": 598,
    "continent": "OC"
  },
  {
    "id": 176,
    "code": "PH",
    "name": "Philippines",
    "full_name": "Republic of the Philippines",
    "iso3": "PHL",
    "number": 608,
    "continent": "AS"
  },
  {
    "id": 177,
    "code": "PK",
    "name": "Pakistan",
    "full_name": "Islamic Republic of Pakistan",
    "iso3": "PAK",
    "number": 586,
    "continent": "AS"
  },
  {
    "id": 178,
    "code": "PL",
    "name": "Poland",
    "full_name": "Republic of Poland",
    "iso3": "POL",
    "number": 616,
    "continent": "EU"
  },
  {
    "id": 179,
    "code": "PM",
    "name": "Saint Pierre and Miquelon",
    "full_name": "Saint Pierre and Miquelon",
    "iso3": "SPM",
    "number": 666,
    "continent": "NA"
  },
  {
    "id": 180,
    "code": "PN",
    "name": "Pitcairn",
    "full_name": "Pitcairn Islands",
    "iso3": "PCN",
    "number": 612,
    "continent": "OC"
  },
  {
    "id": 181,
    "code": "PR",
    "name": "Puerto Rico",
    "full_name": "Commonwealth of Puerto Rico",
    "iso3": "PRI",
    "number": 630,
    "continent": "NA"
  },
  {
    "id": 182,
    "code": "PS",
    "name": "Palestine",
    "full_name": "Occupied Palestinian Territory",
    "iso3": "PSE",
    "number": 275,
    "continent": "AS"
  },
  {
    "id": 183,
    "code": "PT",
    "name": "Portugal",
    "full_name": "Portuguese Republic",
    "iso3": "PRT",
    "number": 620,
    "continent": "EU"
  },
  {
    "id": 184,
    "code": "PW",
    "name": "Palau",
    "full_name": "Republic of Palau",
    "iso3": "PLW",
    "number": 585,
    "continent": "OC"
  },
  {
    "id": 185,
    "code": "PY",
    "name": "Paraguay",
    "full_name": "Republic of Paraguay",
    "iso3": "PRY",
    "number": 600,
    "continent": "SA"
  },
  {
    "id": 186,
    "code": "QA",
    "name": "Qatar",
    "full_name": "State of Qatar",
    "iso3": "QAT",
    "number": 634,
    "continent": "AS"
  },
  {
    "id": 187,
    "code": "RE",
    "name": "Reunion",
    "full_name": "Reunion",
    "iso3": "REU",
    "number": 638,
    "continent": "AF"
  },
  {
    "id": 188,
    "code": "RO",
    "name": "Romania",
    "full_name": "Romania",
    "iso3": "ROU",
    "number": 642,
    "continent": "EU"
  },
  {
    "id": 189,
    "code": "RS",
    "name": "Serbia",
    "full_name": "Republic of Serbia",
    "iso3": "SRB",
    "number": 688,
    "continent": "EU"
  },
  {
    "id": 190,
    "code": "RU",
    "name": "Russian Federation",
    "full_name": "Russian Federation",
    "iso3": "RUS",
    "number": 643,
    "continent": "EU"
  },
  {
    "id": 191,
    "code": "RW",
    "name": "Rwanda",
    "full_name": "Republic of Rwanda",
    "iso3": "RWA",
    "number": 646,
    "continent": "AF"
  },
  {
    "id": 192,
    "code": "SA",
    "name": "Saudi Arabia",
    "full_name": "Kingdom of Saudi Arabia",
    "iso3": "SAU",
    "number": 682,
    "continent": "AS"
  },
  {
    "id": 193,
    "code": "SB",
    "name": "Solomon Islands",
    "full_name": "Solomon Islands",
    "iso3": "SLB",
    "number": 90,
    "continent": "OC"
  },
  {
    "id": 194,
    "code": "SC",
    "name": "Seychelles",
    "full_name": "Republic of Seychelles",
    "iso3": "SYC",
    "number": 690,
    "continent": "AF"
  },
  {
    "id": 195,
    "code": "SD",
    "name": "Sudan",
    "full_name": "Republic of Sudan",
    "iso3": "SDN",
    "number": 736,
    "continent": "AF"
  },
  {
    "id": 196,
    "code": "SE",
    "name": "Sweden",
    "full_name": "Kingdom of Sweden",
    "iso3": "SWE",
    "number": 752,
    "continent": "EU"
  },
  {
    "id": 197,
    "code": "SG",
    "name": "Singapore",
    "full_name": "Republic of Singapore",
    "iso3": "SGP",
    "number": 702,
    "continent": "AS"
  },
  {
    "id": 198,
    "code": "SH",
    "name": "Saint Helena",
    "full_name": "Saint Helena",
    "iso3": "SHN",
    "number": 654,
    "continent": "AF"
  },
  {
    "id": 199,
    "code": "SI",
    "name": "Slovenia",
    "full_name": "Republic of Slovenia",
    "iso3": "SVN",
    "number": 705,
    "continent": "EU"
  },
  {
    "id": 200,
    "code": "SJ",
    "name": "Svalbard and Jan Mayen Islands",
    "full_name": "Svalbard & Jan Mayen Islands",
    "iso3": "SJM",
    "number": 744,
    "continent": "EU"
  },
  {
    "id": 201,
    "code": "SK",
    "name": "Slovakia",
    "full_name": "Slovakia (Slovak Republic)",
    "iso3": "SVK",
    "number": 703,
    "continent": "EU"
  },
  {
    "id": 202,
    "code": "SL",
    "name": "Sierra Leone",
    "full_name": "Republic of Sierra Leone",
    "iso3": "SLE",
    "number": 694,
    "continent": "AF"
  },
  {
    "id": 203,
    "code": "SM",
    "name": "San Marino",
    "full_name": "Republic of San Marino",
    "iso3": "SMR",
    "number": 674,
    "continent": "EU"
  },
  {
    "id": 204,
    "code": "SN",
    "name": "Senegal",
    "full_name": "Republic of Senegal",
    "iso3": "SEN",
    "number": 686,
    "continent": "AF"
  },
  {
    "id": 205,
    "code": "SO",
    "name": "Somalia",
    "full_name": "Somali Republic",
    "iso3": "SOM",
    "number": 706,
    "continent": "AF"
  },
  {
    "id": 206,
    "code": "SR",
    "name": "Suriname",
    "full_name": "Republic of Suriname",
    "iso3": "SUR",
    "number": 740,
    "continent": "SA"
  },
  {
    "id": 207,
    "code": "ST",
    "name": "Sao Tome and Principe",
    "full_name": "Democratic Republic of Sao Tome and Principe",
    "iso3": "STP",
    "number": 678,
    "continent": "AF"
  },
  {
    "id": 208,
    "code": "SV",
    "name": "El Salvador",
    "full_name": "Republic of El Salvador",
    "iso3": "SLV",
    "number": 222,
    "continent": "NA"
  },
  {
    "id": 209,
    "code": "SY",
    "name": "Syria",
    "full_name": "Syrian Arab Republic",
    "iso3": "SYR",
    "number": 760,
    "continent": "AS"
  },
  {
    "id": 210,
    "code": "SZ",
    "name": "Swaziland",
    "full_name": "Kingdom of Swaziland",
    "iso3": "SWZ",
    "number": 748,
    "continent": "AF"
  },
  {
    "id": 211,
    "code": "TC",
    "name": "Turks and Caicos Islands",
    "full_name": "Turks and Caicos Islands",
    "iso3": "TCA",
    "number": 796,
    "continent": "NA"
  },
  {
    "id": 212,
    "code": "TD",
    "name": "Chad",
    "full_name": "Republic of Chad",
    "iso3": "TCD",
    "number": 148,
    "continent": "AF"
  },
  {
    "id": 213,
    "code": "TF",
    "name": "French Southern Lands",
    "full_name": "French Southern Territories",
    "iso3": "ATF",
    "number": 260,
    "continent": "AN"
  },
  {
    "id": 214,
    "code": "TG",
    "name": "Togo",
    "full_name": "Togolese Republic",
    "iso3": "TGO",
    "number": 768,
    "continent": "AF"
  },
  {
    "id": 215,
    "code": "TH",
    "name": "Thailand",
    "full_name": "Kingdom of Thailand",
    "iso3": "THA",
    "number": 764,
    "continent": "AS"
  },
  {
    "id": 216,
    "code": "TJ",
    "name": "Tajikistan",
    "full_name": "Republic of Tajikistan",
    "iso3": "TJK",
    "number": 762,
    "continent": "AS"
  },
  {
    "id": 217,
    "code": "TK",
    "name": "Tokelau",
    "full_name": "Tokelau",
    "iso3": "TKL",
    "number": 772,
    "continent": "OC"
  },
  {
    "id": 218,
    "code": "TL",
    "name": "Timor-Leste",
    "full_name": "Democratic Republic of Timor-Leste",
    "iso3": "TLS",
    "number": 626,
    "continent": "AS"
  },
  {
    "id": 219,
    "code": "TM",
    "name": "Turkmenistan",
    "full_name": "Turkmenistan",
    "iso3": "TKM",
    "number": 795,
    "continent": "AS"
  },
  {
    "id": 220,
    "code": "TN",
    "name": "Tunisia",
    "full_name": "Tunisian Republic",
    "iso3": "TUN",
    "number": 788,
    "continent": "AF"
  },
  {
    "id": 221,
    "code": "TO",
    "name": "Tonga",
    "full_name": "Kingdom of Tonga",
    "iso3": "TON",
    "number": 776,
    "continent": "OC"
  },
  {
    "id": 222,
    "code": "TR",
    "name": "Turkey",
    "full_name": "Republic of Turkey",
    "iso3": "TUR",
    "number": 792,
    "continent": "AS"
  },
  {
    "id": 223,
    "code": "TT",
    "name": "Trinidad and Tobago",
    "full_name": "Republic of Trinidad and Tobago",
    "iso3": "TTO",
    "number": 780,
    "continent": "NA"
  },
  {
    "id": 224,
    "code": "TV",
    "name": "Tuvalu",
    "full_name": "Tuvalu",
    "iso3": "TUV",
    "number": 798,
    "continent": "OC"
  },
  {
    "id": 225,
    "code": "TW",
    "name": "Taiwan",
    "full_name": "Taiwan",
    "iso3": "TWN",
    "number": 158,
    "continent": "AS"
  },
  {
    "id": 226,
    "code": "TZ",
    "name": "Tanzania",
    "full_name": "United Republic of Tanzania",
    "iso3": "TZA",
    "number": 834,
    "continent": "AF"
  },
  {
    "id": 227,
    "code": "UA",
    "name": "Ukraine",
    "full_name": "Ukraine",
    "iso3": "UKR",
    "number": 804,
    "continent": "EU"
  },
  {
    "id": 228,
    "code": "UG",
    "name": "Uganda",
    "full_name": "Republic of Uganda",
    "iso3": "UGA",
    "number": 800,
    "continent": "AF"
  },
  {
    "id": 229,
    "code": "UM",
    "name": "United States Minor Outlying Islands",
    "full_name": "United States Minor Outlying Islands",
    "iso3": "UMI",
    "number": 581,
    "continent": "OC"
  },
  {
    "id": 230,
    "code": "US",
    "name": "United States of America",
    "full_name": "United States of America",
    "iso3": "USA",
    "number": 840,
    "continent": "NA"
  },
  {
    "id": 231,
    "code": "UY",
    "name": "Uruguay",
    "full_name": "Eastern Republic of Uruguay",
    "iso3": "URY",
    "number": 858,
    "continent": "SA"
  },
  {
    "id": 232,
    "code": "UZ",
    "name": "Uzbekistan",
    "full_name": "Republic of Uzbekistan",
    "iso3": "UZB",
    "number": 860,
    "continent": "AS"
  },
  {
    "id": 233,
    "code": "VA",
    "name": "Vatican City",
    "full_name": "Holy See (Vatican City State)",
    "iso3": "VAT",
    "number": 336,
    "continent": "EU"
  },
  {
    "id": 234,
    "code": "VC",
    "name": "Saint Vincent and the Grenadines",
    "full_name": "Saint Vincent and the Grenadines",
    "iso3": "VCT",
    "number": 670,
    "continent": "NA"
  },
  {
    "id": 235,
    "code": "VE",
    "name": "Venezuela",
    "full_name": "Bolivarian Republic of Venezuela",
    "iso3": "VEN",
    "number": 862,
    "continent": "SA"
  },
  {
    "id": 236,
    "code": "VG",
    "name": "Virgin Islands",
    "full_name": "British",
    "iso3": "British Virgin Islands",
    "number": "VGB",
    "continent": 92
  },
  {
    "id": 237,
    "code": "VI",
    "name": "Virgin Islands",
    "full_name": "U.S.",
    "iso3": "United States Virgin Islands",
    "number": "VIR",
    "continent": 850
  },
  {
    "id": 238,
    "code": "VN",
    "name": "Vietnam",
    "full_name": "Socialist Republic of Vietnam",
    "iso3": "VNM",
    "number": 704,
    "continent": "AS"
  },
  {
    "id": 239,
    "code": "VU",
    "name": "Vanuatu",
    "full_name": "Republic of Vanuatu",
    "iso3": "VUT",
    "number": 548,
    "continent": "OC"
  },
  {
    "id": 240,
    "code": "WF",
    "name": "Wallis and Futuna Islands",
    "full_name": "Wallis and Futuna",
    "iso3": "WLF",
    "number": 876,
    "continent": "OC"
  },
  {
    "id": 241,
    "code": "WS",
    "name": "Samoa",
    "full_name": "Independent State of Samoa",
    "iso3": "WSM",
    "number": 882,
    "continent": "OC"
  },
  {
    "id": 242,
    "code": "YE",
    "name": "Yemen",
    "full_name": "Yemen",
    "iso3": "YEM",
    "number": 887,
    "continent": "AS"
  },
  {
    "id": 243,
    "code": "YT",
    "name": "Mayotte",
    "full_name": "Mayotte",
    "iso3": "MYT",
    "number": 175,
    "continent": "AF"
  },
  {
    "id": 244,
    "code": "ZA",
    "name": "South Africa",
    "full_name": "Republic of South Africa",
    "iso3": "ZAF",
    "number": 710,
    "continent": "AF"
  },
  {
    "id": 245,
    "code": "ZM",
    "name": "Zambia",
    "full_name": "Republic of Zambia",
    "iso3": "ZMB",
    "number": 894,
    "continent": "AF"
  },
  {
    "id": 246,
    "code": "ZW",
    "name": "Zimbabwe",
    "full_name": "Republic of Zimbabwe",
    "iso3": "ZWE",
    "number": 716,
    "continent": "AF"
  }
];