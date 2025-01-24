document.addEventListener("DOMContentLoaded", () => {
  // Example weather data
  const temperature = 30; // Temperature in °F
  const windSpeed = 10;   // Wind speed in mph
  const conditions = "Clear skies"; // Example conditions
  const unit = "F"; // Use "C" for Celsius or "F" for Fahrenheit

  // Wind chill calculation function
  function calculateWindChill(temp, windSpeed, unit = "F") {
      return unit.toUpperCase() === "F"
          ? (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2)
          : (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
  }

  // Determine if wind chill is viable and return result
  function displayWindChill(temp, windSpeed, unit = "F") {
      const isViable =
          (unit.toUpperCase() === "F" && temp <= 50 && windSpeed > 3) ||
          (unit.toUpperCase() === "C" && temp <= 10 && windSpeed > 4.8);

      return isViable ? calculateWindChill(temp, windSpeed, unit) : "N/A";
  }

  // Calculate wind chill
  const windChillValue = displayWindChill(temperature, windSpeed, unit);

  // Update the DOM with weather data
  document.getElementById("temperature").textContent = `Temperature: ${temperature} °${unit}`;
  document.getElementById("wind").textContent = `Wind Speed: ${windSpeed} ${unit === "F" ? "mph" : "km/h"}`;
  document.getElementById("conditions").textContent = `Conditions: ${conditions}`;
  document.getElementById("windChill").textContent = `Wind Chill: ${windChillValue} °${unit}`;
});
