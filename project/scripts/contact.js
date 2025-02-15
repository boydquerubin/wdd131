document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

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