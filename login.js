
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso.');
    } else {
        alert('Inicio de sesión fallido. Verifica tus credenciales.');
    }
});
