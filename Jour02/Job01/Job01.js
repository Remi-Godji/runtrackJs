function citation() {
    var citationElement = document.getElementById("citation");
    var citationText = citationElement.textContent.trim();
    console.log(citationText);
}

// Écouteur d'événement pour le clic sur le bouton
document.getElementById("button").addEventListener("click", citation);
