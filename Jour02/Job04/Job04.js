// Sélection de l'élément textarea
var textarea = document.getElementById("keylogger");

// Ajout d'un écouteur d'événement pour chaque touche pressée
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase(); // Récupère la touche pressée en minuscule

    // Vérifie si la touche pressée est une lettre de l'alphabet (a-z)
    if (/^[a-z]$/.test(keyPressed)) {
        // Ajoute la lettre une ou deux fois selon si le textarea a le focus ou non
        if (document.activeElement === textarea) {
            textarea.value += keyPressed + keyPressed;
        } else {
            textarea.value += keyPressed;
        }
    }
});
