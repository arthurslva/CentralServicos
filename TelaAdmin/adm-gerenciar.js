document.addEventListener('DOMContentLoaded', () => {

    const botaoSair = document.getElementById('botaoSair');

    // Função que será chamada quando um botão de ação for clicado
    const gerenciarAcao = (evento) => {
        // Encontra o botão clicado
        const botao = evento.target;
        
        // Verifica se o elemento clicado tem a classe 'btn-acao'
        if (botao.classList.contains('btn-acao')) {
            // No futuro, você usaria o 'data-id' para saber qual OS alterar no backend
            // const osId = botao.closest('tr').querySelector('td').textContent; 

            if (botao.classList.contains('btn-atender')) {
                alert('Ação: Iniciar Atendimento. (Lógica do Backend aqui)');
                // Aqui, você faria uma chamada fetch para a API do Spring Boot
                // para mudar o status da OS para "Em Atendimento"
            } else if (botao.classList.contains('btn-cancelar')) {
                if (confirm('Tem certeza que deseja cancelar esta Ordem de Serviço?')) {
                    alert('Ação: OS Cancelada. (Lógica do Backend aqui)');
                    // Aqui, você faria uma chamada fetch para a API do Spring Boot
                    // para mudar o status da OS para "Cancelado"
                }
            }
        }
    };

    // Adiciona o ouvinte de evento à tabela (delegação de evento)
    // Usamos a tabela inteira como alvo para capturar cliques nos botões internos
    document.querySelector('.tabela-gerenciamento').addEventListener('click', gerenciarAcao);


    // Lógica de Logout
    botaoSair.addEventListener('click', (evento) => {
        evento.preventDefault();
        alert('Logout realizado. Redirecionando para a página de login...');
        window.location.href = 'login.html';
    });

    // Lógica para filtro e pesquisa (opcional, para ser implementada depois)
    const campoPesquisa = document.getElementById('campoPesquisa');
    campoPesquisa.addEventListener('input', () => {
        // Lógica do backend aqui:
        // Exemplo: fetch('/api/solicitacoes?q=' + campoPesquisa.value)
        console.log(`Pesquisando por: ${campoPesquisa.value}`);
    });
});