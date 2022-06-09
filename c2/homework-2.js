// For kilograms
document.querySelector("#kg_output").style.visibility = "hidden";
document.querySelector("#kgInput").addEventListener("input", function (kg) {
  document.querySelector("#kg_output").style.visibility = "visible";
  // 1 way of converting the output value to a number
  let num = kg.target.valueAsNumber;
  document.querySelector("#gramsOutput").innerHTML = num * 1000.0;
  document.querySelector("#lbsOutput").innerHTML = num * 2.20462;
  document.querySelector("#ozOutput").innerHTML = num * 35.274;
  document.querySelector("#tonOutput").innerHTML = num * 0.001;
  document.querySelector("#stOutput").innerHTML = num * 0.1574;
});

// For kilometers
document.querySelector("#km_output").style.visibility = "hidden";
document.querySelector("#kmInput").addEventListener("input", function (km) {
  document.querySelector("km_output").style.visibility = "visible";
  // 2nd way of converting the output value to a number
  num = Number(km.target.value);
  document.querySelector("#milesOutput").innerHTML = num * 0.621371;
  document.querySelector("#feetOutput").innerHTML = num * 3280.84;
  document.querySelector("#inchOutput").innerHTML = num * 39370.1;
});

// For Liters
document.querySelector("#lt_output").style.visibility = "hidden";
document.querySelector("#ltInput").addEventListener("input", function (lt) {
  document.querySelector("#lt_output").style.visibility = "visible";
  // 3rd way of converting the output value to a number
  num = parceInt(lt.target.value);
  document.querySelector("#gallonOutput").innerHTML = num * 0.219969;
  document.querySelector("#quartOutput").innerHTML = num * 1.05669;
  document.querySelector("#pintOutput").innerHTML = num * 2.11338;
  document.querySelector("#cupsOutput").innerHTML = num * 4.16667;
});
