document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", function () {
const selectProduct = document.getElementById('productName');

if (selectProduct) {
  products.forEach(item => {
      const option = document.createElement('option');
      option.value = item.name;
      option.textContent = item.name;
      selectProduct.appendChild(option);
  });
} 
});

function countReview() {
  let reviewCount = localStorage.getItem("reviewCounter") || 0;
      reviewCount = parseInt(reviewCount) + 1;

  localStorage.setItem("reviewCounter", reviewCount);

  console.log(reviewCount);

  let counter = document.getElementById("counter");
  counter.textContent = reviewCount;
};

countReview();