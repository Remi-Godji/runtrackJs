document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nomInput = document.querySelector('input[name="nom"]');
    const prenomInput = document.querySelector('input[name="prenom"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const adresseInput = document.querySelector('input[name="adresse"]');
    const codePostalInput = document.querySelector('input[name="code_postal"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        if (nomInput.value === '') {
            displayErrorMessage(nomInput, 'Veuillez saisir votre nom.');
            return false;
        }
        if (prenomInput.value === '') {
            displayErrorMessage(prenomInput, 'Veuillez saisir votre prénom.');
            return false;
        }
        if (emailInput.value === '') {
            displayErrorMessage(emailInput, 'Veuillez saisir votre adresse email.');
            return false;
        }
        if (!isValidEmail(emailInput.value)) {
            displayErrorMessage(emailInput, 'Adresse email invalide.');
            return false;
        }
        if (passwordInput.value === '') {
            displayErrorMessage(passwordInput, 'Veuillez saisir votre mot de passe.');
            return false;
        }
        if (adresseInput.value === '') {
            displayErrorMessage(adresseInput, 'Veuillez saisir votre adresse.');
            return false;
        }
        if (codePostalInput.value === '') {
            displayErrorMessage(codePostalInput, 'Veuillez saisir votre code postal.');
            return false;
        }
        return true;
    }

    function displayErrorMessage(input, message) {
        const errorMessage = input.nextElementSibling;
        if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.textContent = message;
        } else {
            const newErrorMessage = document.createElement('div');
            newErrorMessage.className = 'error-message';
            newErrorMessage.textContent = message;
            input.parentNode.insertBefore(newErrorMessage, input.nextSibling);
        }
    }

    function isValidEmail(email) {
        // Fonction de validation d'email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
