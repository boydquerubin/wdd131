document.addEventListener("DOMContentLoaded", () => {
  const temperature = 30;
  const windSpeed = 10;
  const conditions = "Clear skies";

  function calculateWindChill(temp, windSpeed) {
      return (
          35.74 +
          0.6215 * temp -
          35.75 * Math.pow(windSpeed, 0.16) +
          0.4275 * temp * Math.pow(windSpeed, 0.16)
      ).toFixed(2);
  }

  const windChillValue = windSpeed > 3 && temperature <= 50
      ? calculateWindChill(temperature, windSpeed)
      : "N/A";

  document.getElementById("temperature").textContent = `Temperature: ${temperature} °F`;
  document.getElementById("conditions").textContent = `Conditions: ${conditions}`;
  document.getElementById("wind").textContent = `Wind: ${windSpeed} mph`;
  document.getElementById("windChill").textContent = `Wind Chill: ${windChillValue} °F`;
});
