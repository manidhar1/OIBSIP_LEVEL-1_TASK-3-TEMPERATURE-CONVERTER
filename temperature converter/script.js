function convertTemp() {
    var temp = document.getElementById("temp-input").value;
    var unit = document.getElementById("unit-select").value;
    var convertedTemp;
  
    if (unit === "celsius") {
      convertedTemp = (temp * 9/5) + 32;
      document.getElementById("output").innerHTML = temp + "°C = " + convertedTemp + "°F";
    } else if (unit === "fahrenheit") {
      convertedTemp = (temp - 32) * 5/9;
      document.getElementById("output").innerHTML = temp + "°F = " + convertedTemp + "°C";
    } else {
      convertedTemp = parseFloat(temp) + 273.15;
      document.getElementById("output").innerHTML = temp + "K = " + convertedTemp + "°C";
    }
  }
  