// Sélection du bouton et du paragraphe
var afficherButton = document.getElementById("afficherTexte");
var cacherButton = document.getElementById("cacherElement");
var texteVisible = document.getElementById("texteVisible");

// Écouteurs d'événements pour les clics sur les boutons
afficherButton.addEventListener("click", function() {
    // Affiche le texte dans le paragraphe
    texteVisible.textContent = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.";
});

cacherButton.addEventListener("click", function() {
    // Cache l'élément paragraphe
    texteVisible.textContent = ""; // Efface le contenu du paragraphe
});
