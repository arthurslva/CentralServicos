document.addEventListener('DOMContentLoaded', () => {

    // Encontra o botão de sair da página
    const botaoSair = document.getElementById('botaoSair');

    // Adiciona o evento de clique ao botão
    botaoSair.addEventListener('click', (evento) => {
        evento.preventDefault();
        alert('Logout realizado. Redirecionando para a página de login...');

        // Redireciona para a tela de login
        window.location.href = '../../telaLogin/LoginTela.html';
    });
});