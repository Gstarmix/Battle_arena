console.log("Fichier P5_progress-bars.js importé ✅");

const input = document.getElementById("input");
const progressBar = document.getElementById("progress");
const chiffre = document.getElementById("chiffre");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const value = input.value;
  progressBar.style.width = value + "%";
  chiffre.textContent = value + "%";
});
