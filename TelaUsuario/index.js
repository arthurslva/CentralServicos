document.addEventListener('DOMContentLoaded', () => {
    const botaoSair = document.getElementById('botaoSair');

    botaoSair.addEventListener('click', (evento) => {
        evento.preventDefault();
        alert('Logout realizado.');
        window.location.href = 'login.html';
    });
});