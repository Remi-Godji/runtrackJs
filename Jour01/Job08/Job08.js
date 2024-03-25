function estNombrePremier(nombre) {
    if (nombre <= 1) return false; // Les nombres inférieurs ou égaux à 1 ne sont pas premiers

    // Vérifie s'il existe un diviseur autre que 1 et lui-même
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Le nombre n'est pas premier s'il est divisible par un autre nombre
        }
    }
    return true; // Si aucun diviseur autre que 1 et lui-même n'a été trouvé, le nombre est premier
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

// Test de la fonction sommeNombresPremiers
var nombre1 = 7; // Nombre premier
var nombre2 = 11; // Nombre premier
var resultat = sommeNombresPremiers(nombre1, nombre2);
if (resultat !== false) {
    console.log("La somme des nombres premiers " + nombre1 + " et " + nombre2 + " est : " + resultat);
} else {
    console.log("Au moins l'un des nombres n'est pas premier.");
}
