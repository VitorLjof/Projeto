const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(event) {
    if (!isValidEmail(emailInput.value)) {
        event.preventDefault(); // Impede o envio do formulário se o email não for válido
        emailError.textContent = 'Por favor, insira um email válido.';
    }
});

function isValidEmail(email) {
    // Expressão regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}