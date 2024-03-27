// Code Konami: Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A
var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
var konamiCodePosition = 0;

document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === konamiCode[konamiCodePosition].toLowerCase()) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            applyLaPlateformeStyles();
            konamiCodePosition = 0; // Réinitialiser la position pour pouvoir réutiliser le code
        }
    } else {
        konamiCodePosition = 0; // Réinitialiser la position si une touche incorrecte est pressée
    }
});

function applyLaPlateformeStyles() {
    document.body.classList.add("plateforme-styling");
    var footer = document.querySelector("footer");
    footer.className = ""; // Effacer toutes les classes actuelles
    footer.classList.add("scroll-100"); // Appliquer la couleur finale du footer
}
