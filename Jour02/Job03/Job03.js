function showhide() {
    var article = document.getElementById("article");
    
    // Vérifie si l'article existe déjà
    if (article) {
        // Si l'article existe, le supprime
        article.remove();
    } else {
        // Si l'article n'existe pas, le crée et l'ajoute à la page
        var newArticle = document.createElement("article");
        newArticle.id = "article";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}

// Ajout d'un écouteur d'événement au bouton
document.getElementById("button").addEventListener("click", showhide);
