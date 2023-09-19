
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (nameInput.value.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Por favor, ingresa tu email.');
        return;
    }

    if (messageInput.value.trim() === '') {
        alert('Por favor, ingresa un mensaje.');
        return;
    }

    alert('Formulario enviado con éxito.');
});
