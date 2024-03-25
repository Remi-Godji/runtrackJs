function bisextile(annee) {
    // Vérifie si l'année est divisible par 4
    // Si oui, vérifie si elle n'est pas divisible par 100 ou si elle est divisible par 400
    // Si l'une des conditions est vraie, alors l'année est bissextile
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

// Tests de la fonction bisextile
console.log(bisextile(2000)); // true (bissextile)
console.log(bisextile(2004)); // true (bissextile)
console.log(bisextile(2100)); // false (non bissextile)
console.log(bisextile(1900)); // false (non bissextile)
