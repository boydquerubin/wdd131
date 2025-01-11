const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = new Date().getFullYear();

function displayLastModified() {
  const lastModified = new Date(document.lastModified);
  const formattedDate = lastModified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate}`;
}

const pattern = /last_modif\s*=\s*([^;]*)/;

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname}`;
  alert("This page has changed!");
}

displayLastModified();