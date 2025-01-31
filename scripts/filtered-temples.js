document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },  
  {
    templeName: "Mesa Arizona Temple",
    location: "Mesa, Arizona, United States",
    dedicated: "1927, October, 23",
    area: 75000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
	{
    templeName: "San Diego Caifornia",
		location: "San Diego, California",
		dedicated: "1993, April, 3",
		area: 72000,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
  },
	{
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758797-wallpaper.jpg"
  },
	{
    templeName: "Apia Samoa Temple",
    location: "Apia, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
  },
	{
    templeName: "Perth Australia Temple",
    location: "Yokine, Western Australia",
    dedicated: "2001, April, 28",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/perth-australia/400x250/perth-australia-temple-1562613-wallpaper.jpg"
  },
  {
    templeName: "Durban South Africa Temple",
    location: "Umhlanga, KwaZulu-Natal",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/4-5fcf64b0979ac41f7197d049ea8c4ffad88cd1b4.jpg"
  }, 
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".temple-cards").appendChild(card);
	})
};

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
  document.querySelector(".temple-cards").innerHTML = "";
  createTempleCard(temples);
})

oldLink.addEventListener("click", () => {
  document.querySelector(".temple-cards").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.dedicated < ("1900")));
})

newLink.addEventListener("click", () => {
  document.querySelector(".temple-cards").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.dedicated > ("2000")));
})

largeLink.addEventListener("click", () => {
  document.querySelector(".temple-cards").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area > 90000));
})

smallLink.addEventListener("click", () => {
  document.querySelector(".temple-cards").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area < 100000));
})