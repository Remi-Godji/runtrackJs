document.addEventListener("scroll", function() {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    var footer = document.querySelector("footer");
    footer.className = ""; // Efface toutes les classes actuelles

    // Sélectionne la classe de scrolling appropriée en fonction du pourcentage de scrolling
    if (scrollPercentage <= 25) {
        footer.classList.add("scroll-0");
    } else if (scrollPercentage <= 50) {
        footer.classList.add("scroll-25");
    } else if (scrollPercentage <= 75) {
        footer.classList.add("scroll-50");
    } else if (scrollPercentage <= 100) {
        footer.classList.add("scroll-75");
    }
});
