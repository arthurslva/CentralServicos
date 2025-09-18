document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos de tela
    const telas = document.querySelectorAll('.tela-conteudo');
    const telaPadrao = document.getElementById('telaPadrao');
    const formularioSolicitacao = document.getElementById('formularioSolicitacao');
    const solicitacoesAbertas = document.getElementById('solicitacoesAbertas');
    const solicitacoesFechadas = document.getElementById('solicitacoesFechadas');

    // Seleciona os botões
    const novaSolicitacaoBtn = document.getElementById('novaSolicitacaoBtn');
    const solicitacoesAbertasBtn = document.getElementById('solicitacoesAbertasBtn');
    const solicitacoesFechadasBtn = document.getElementById('solicitacoesFechadasBtn');
    const botaoSair = document.getElementById('botaoSair');

    // Função para mostrar uma tela e esconder todas as outras
    const mostrarTela = (telaParaMostrar) => {
        telas.forEach(tela => {
            tela.classList.add('oculto');
        });
        telaParaMostrar.classList.remove('oculto');
    };

    // Adiciona os eventos de clique
    novaSolicitacaoBtn.addEventListener('click', () => {
        mostrarTela(formularioSolicitacao);
    });

    solicitacoesAbertasBtn.addEventListener('click', () => {
        mostrarTela(solicitacoesAbertas);
    });

    solicitacoesFechadasBtn.addEventListener('click', () => {
        mostrarTela(solicitacoesFechadas);
    });

    // Lógica para o formulário de solicitação
    const form = formularioSolicitacao.querySelector('form');
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        alert('Solicitação enviada! (Lógica do back-end a ser implementada)');
        form.reset();
        mostrarTela(telaPadrao); // Volta para a tela inicial
    });

    // Lógica para o botão de sair
    botaoSair.addEventListener('click', (evento) => {
        evento.preventDefault();
        alert('Logout realizado. Redirecionando para a página de login...');
        window.location.href = 'login.html';
    });

    // Garante que a tela padrão seja mostrada ao carregar
    mostrarTela(telaPadrao);
});