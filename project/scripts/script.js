document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
  const temperature = 30;
  const windSpeed = 10;
  const unit = "F";

  function calculateWindChill(temp, windSpeed) {
    return (
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
  }

  function displayWindChill(temp, windSpeed, unit = "F") {
    const isViable =
      (unit.toUpperCase() === "F" && temp <= 50 && windSpeed > 3) ||
      (unit.toUpperCase() === "C" && temp <= 10 && windSpeed > 4.8);

    if (isViable) {
      return calculateWindChill(temp, windSpeed);
    } else {
      return "N/A";
    }
  }

  const windChillValue = displayWindChill(temperature, windSpeed, unit);

  const weatherTable = document.querySelector(".weather-table tbody");
  const rows = weatherTable.querySelectorAll("tr");

  rows[0].querySelector(".weather-value").textContent = `${temperature} °${unit}`;
  rows[2].querySelector(".weather-value").textContent = `${windSpeed} mph`;
  rows[3].querySelector(".weather-value").textContent = `${windChillValue} °${unit}`;
});