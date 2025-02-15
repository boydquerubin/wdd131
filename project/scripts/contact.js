document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", () => {
      let messageCount = localStorage.getItem("messageCounter") || 0;
      messageCount = parseInt(messageCount) + 1;
      localStorage.setItem("messageCounter", messageCount);
    });
  }
});