function jourTravaille(date) {
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    var jour = date.getDate();
    var joursFeries = [
        "2024-01-01", // Nouvel An
        "2024-04-01", // Fête du Travail
        "2024-05-08", // Victoire des Alliés
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    var jourSemaine = date.getDay(); // 0 pour Dimanche, 1 pour Lundi, ..., 6 pour Samedi

    var dateStr = date.toISOString().slice(0,10);

    if (joursFeries.includes(dateStr)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié");
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end");
    } else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé");
    }
}

// Exemple d'utilisation de la fonction jourTravaille
var dateTest = new Date("2024-04-01"); // 1er avril 2024
jourTravaille(dateTest);
