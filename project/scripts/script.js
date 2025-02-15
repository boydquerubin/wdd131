document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mainNav = document.querySelector('.popularity')
const popularityButton = document.querySelector('#menu');

popularityButton.addEventListener('click', () => {
	mainNav.classList.toggle('show');
	popularityButton.classList.toggle('show');
});

const dishes = [
  {
    dish: "Adobo",
    description: "A savory and tangy Filipino dish often made with pork or chicken, soy sauce, vinegar, garlic, and bay leaves.",
    region: "Luzon",
    popularity: "Very High",
    imageSource: "images/adobo.webp"
  },
  {
    dish: "Sinigang",
    description: "A sour tamarind-based soup with pork, shrimp, or beef, served with vegetables.",
    region: "Nationwide",
    popularity: "High",
    imageSource: "images/sinigang.webp"
  },  
  {
    dish: "Lumpia",
    description: "Filipino spring rolls, filled with ground pork and vegetables, fried until crispy.",
    region: "Visayas",
    popularity: "Very High",
    imageSource: "images/lumpia.webp"
  },
  {
    dish: "Lechon",
    description: "A whole roasted pig known for its crispy skin and juicy meat, a Filipino celebration staple..",
    region: "Cebu",
    popularity: "Very High",
    imageSource: "images/lechon.webp"
  },
  {
    dish: "Sisig",
    description: "A sizzling dish made from chopped pork face, liver, calamansi, and chili peppers.",
    region: "Pampanga",
    popularity: "Medium",
    imageSource: "images/sisig.webp"
  },
  {
    dish: "Halo-Halo",
    description: "A colorful dessert with shaved ice, sweet beans, jellies, ube, and leche flan.",
    region: "Nationwide",
    popularity: "Very High",
    imageSource: "images/halohalo.webp"
  },
  {
    dish: "Ihaw-Ihaw",
    description: "Grilled Filipino barbecue, including pork belly, chicken intestines, and fish.",
    region: "Nationwide",
    popularity: "High",
    imageSource: "images/ihaw.webp"
  },
  {
    dish: "Longanisa",
    description: "A sweet and garlicky Filipino sausage, often served with garlic rice and egg.",
    region: "Ilocos",
    popularity: "High",
    imageSource: "images/longanisa.webp"
  },
  {
    dish: "Bulalo",
    description: "A rich beef shank and marrow soup, simmered with corn and cabbage.",
    region: "Tagaytay",
    popularity: "Medium",
    imageSource: "images/bulalo.webp"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const dishContainer = document.querySelector(".dish-cards");
  if (dishContainer) {
    createDishCard(dishes);
  } else {
    console.error("❌ Error: .dish-cards container not found in the document.");
  }
});

function createDishCard(dishesList) {
  dishesList.forEach(dish => {
    let card = document.createElement("section");
    card.classList.add("dish-card");

    let name = document.createElement("h2");
    let description = document.createElement("p");
    let region = document.createElement("p");
    let popularity = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = dish.dish;
    description.innerHTML = `<span class="label">Description:</span> ${dish.description}`;
    region.innerHTML = `<span class="label">Region:</span> ${dish.region}`;
    popularity.innerHTML = `<span class="label">Popularity:</span> ${dish.popularity}`;
    img.setAttribute("src", dish.imageSource);
    img.setAttribute("alt", `${dish.dish} Dish`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(region);
    card.appendChild(popularity);
    card.appendChild(img);

    document.querySelector(".dish-cards").appendChild(card);
  });
}

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

const anyLink = document.querySelector("#any");
const veryHighLink = document.querySelector("#veryHigh");
const highLink = document.querySelector("#high");
const mediumLink = document.querySelector("#medium");

const popularityList = document.querySelector(".popularity");

anyLink.addEventListener("click", () => {
  document.querySelector(".dish-cards").innerHTML = "";
  updatePopularityLabel("Any");
  createDishCard(dishes);
});

veryHighLink.addEventListener("click", () => {
  document.querySelector(".dish-cards").innerHTML = "";
  updatePopularityLabel("Very High");
  createDishCard(dishes.filter(dish => dish.popularity === "Very High"));
});

highLink.addEventListener("click", () => {
  document.querySelector(".dish-cards").innerHTML = "";
  updatePopularityLabel("High");
  createDishCard(dishes.filter(dish => dish.popularity === "High"));
});

mediumLink.addEventListener("click", () => {
  document.querySelector(".dish-cards").innerHTML = "";
  updatePopularityLabel("Medium");
  createDishCard(dishes.filter(dish => dish.popularity === "Medium"));
});

function updatePopularityLabel(selectedText) {
  document.querySelectorAll(".popularity li a").forEach(link => {
    link.classList.remove("selected");
  });

  const selectedLink = [...document.querySelectorAll(".popularity li a")].find(link => link.innerText === selectedText);
  
  if (selectedLink) {
    selectedLink.classList.add("selected");
  }
}

function countReview() {
  let reviewCount = localStorage.getItem("reviewCounter") || 0;
  reviewCount = parseInt(reviewCount) + 1;
  localStorage.setItem("reviewCounter", reviewCount);

  let counter = document.getElementById("counter");
  if (counter) {
    counter.textContent = reviewCount;
  }
}

if (window.location.pathname.includes("review.html")) {
  countReview();
}