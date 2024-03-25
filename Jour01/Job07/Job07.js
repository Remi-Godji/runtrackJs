function jourTravaille(date) {
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1; // Les mois commencent à partir de 0
    var jour = date.getDate();
    var joursFeries = ["2024-01-01", "2024-04-01", "2024-05-01", "2024-05-08", "2024-05-30", "2024-07-14", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"]; // Dates des jours fériés en 2024

    var dateStr = annee + '-' + mois.toString().padStart(2, '0') + '-' + jour.toString().padStart(2, '0');

    if (joursFeries.includes(dateStr)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié.");
    } else if (date.getDay() === 6) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un samedi.");
    } else {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour travaillé.");
    }
}

// Exemple d'utilisation de la fonction avec une date spécifique
var dateTest = new Date("2024-06-01");
jourTravaille(dateTest);
