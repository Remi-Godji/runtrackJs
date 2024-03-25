function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b; // Trie dans l'ordre croissant
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a; // Trie dans l'ordre décroissant
        });
    } else {
        console.log("Le paramètre 'order' doit être 'asc' pour un tri ascendant ou 'desc' pour un tri descendant.");
        return;
    }
    return numbers;
}

// Exemples d'utilisation de la fonction tri
var tableauAscendant = [3, 1, 5, 2, 4];
var tableauDescendant = [7, 10, 2, 4, 6];

console.log("Tri ascendant:", tri(tableauAscendant, "asc")); // Tri ascendant
console.log("Tri descendant:", tri(tableauDescendant, "desc")); // Tri descendant
