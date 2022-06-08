// Homework
/*
Have a function that converts at least 5 different values 
*/

const jsConverter = (type, value) => {
  switch (type) {
    // Kilograms
    case "kg2gram": //Kilograms to Grams
      return value * 1000.0;
    case "kg2lbs": //Kilograms to Pounds
      return value * 2.2046;
    case "kg2oz": //Kilograms to Ounces
      return value * 35.274;
    case "kg2tonne": //Kilograms to Tonne
      return value * 0.001;
    case "kg2stone": //Kilograms to Stone
      return value * 0.1574;
    // Kilometers
    case "km2mph": //Kilometers to Miles
      return value * 0.621371;
    case "km2ft": //Kilometers to Feet
      return value * 3280.84;
    case "km2inch": //Kilometers to Inches
      return value * 39370.1;
    // Liters
    case "lt2gallon": //Liter to Gallon
      return value * 0.264172;
    case "lt2quart": //Liter to Quart
      return value * 1.05669;
    case "lt2pint": //Liter to Pint
      return value * 2.11338;
    case "lt2cup": //Liter to Pint
      return value * 4.16667;
    default:
      console.log("Cannot Convert");
      break;
  }
};
// Value
let num = 1;
// Kilograms
let kg2gram = jsConverter("kg2gram", num);
let kg2lbs = jsConverter("kg2lbs", num);
let kg2oz = jsConverter("kg2oz", num);
let kg2tonne = jsConverter("kg2tonne", num);
let kg2stone = jsConverter("kg2stone", num);
// Kilometers
let km2mph = jsConverter("km2mph", num);
let km2ft = jsConverter("km2ft", num);
let km2inch = jsConverter("km2inch", num);
// Liter
let lt2gallon = jsConverter("lt2gallon", num);
let lt2quart = jsConverter("lt2quart", num);
let lt2pint = jsConverter("lt2pint", num);
let lt2cup = jsConverter("lt2cup", num);

console.log(
  "Convert result:",
  "KG to Grams:",
  kg2gram,
  ";",
  "KG to LBS:",
  kg2lbs,
  ";",
  "KG to OZ:",
  kg2oz,
  ";",
  "KG to T:",
  kg2tonne,
  ";",
  "KG to ST:",
  kg2stone,
  ";",
  "KM to MPh:",
  km2mph,
  ";",
  "KM to ft:",
  km2ft,
  ";",
  "KM to inch:",
  km2inch,
  ";",
  "Lt to Gallon:",
  lt2gallon,
  ";",
  "Lt to Quart:",
  lt2quart,
  ";",
  "Lt to Pint:",
  lt2pint,
  ";",
  "Lt to Cup:",
  lt2cup,
  ";"
);
