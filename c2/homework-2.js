// For kilograms
document.getElementById("kg_output").style.visibility = "hidden";
document.getElementById("kgInput").addEventListener("input", function (kg) {
  document.getElementById("kg_output").style.visibility = "visible";
  let num = kg.target.value;
  document.getElementById("gramsOutput").innerHTML = num * 1000.0;
  document.getElementById("lbsOutput").innerHTML = num * 2.20462;
  document.getElementById("ozOutput").innerHTML = num * 35.274;
  document.getElementById("tonOutput").innerHTML = num * 0.001;
  document.getElementById("stOutput").innerHTML = num * 0.1574;
});

// For kilometers
document.getElementById("km_output").style.visibility = "hidden";
document.getElementById("kmInput").addEventListener("input", function (km) {
  document.getElementById("km_output").style.visibility = "visible";
  num = km.target.value;
  document.getElementById("milesOutput").innerHTML = num * 0.621371;
  document.getElementById("feetOutput").innerHTML = num * 3280.84;
  document.getElementById("inchOutput").innerHTML = num * 39370.1;
});

// For Liters
document.getElementById("lt_output").style.visibility = "hidden";
document.getElementById("ltInput").addEventListener("input", function (lt) {
  document.getElementById("lt_output").style.visibility = "visible";
  num = lt.target.value;
  document.getElementById("gallonOutput").innerHTML = num * 0.219969;
  document.getElementById("quartOutput").innerHTML = num * 1.05669;
  document.getElementById("pintOutput").innerHTML = num * 2.11338;
  document.getElementById("cupsOutput").innerHTML = num * 4.16667;
});
