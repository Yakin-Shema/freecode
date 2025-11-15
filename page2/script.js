document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("showContentBtn");
  const content = document.getElementById("hiddenContent");

  button.addEventListener("click", () => {
    content.classList.remove("hidden");
    button.style.display = "none"; // Optionnel : cacher le bouton après le clic
  });
});
