document.addEventListener('DOMContentLoaded', () => {

    const novaOSForm = document.getElementById('novaOSForm');

    novaOSForm.addEventListener('submit', (evento) => {
        evento.preventDefault();

        // 1. Coleta todos os dados do formulário
        const solicitante = document.getElementById('solicitante').value;
        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const prioridade = document.getElementById('prioridade').value;
        const setor = document.getElementById('setor').value;
        const equipamento = document.getElementById('equipamento').value;

        // Cria um objeto com os dados (pronto para ser enviado via JSON)
        const dadosOS = {
            solicitante: solicitante,
            titulo: titulo,
            descricao: descricao,
            prioridade: prioridade,
            setor: setor,
            equipamento: equipamento,
            // O backend irá adicionar o número da OS, data e status
        };

        // ----- AQUI VAI A LÓGICA DO BACKEND COM THYMELEAF -----
        // Neste ponto, você usaria o fetch para enviar 'dadosOS' para o seu Spring Boot

        console.log("OS criada pelo ADM - Dados enviados para o backend:", dadosOS);

        alert(`Ordem de Serviço criada com sucesso para ${solicitante}!`);

        novaOSForm.reset();

        // Redireciona para o dashboard após o envio
        window.location.href = 'adm-dashboard.html';
    });

    // Lógica de Logout (mantida para consistência)
    const botaoSair = document.getElementById('botaoSair');
    botaoSair.addEventListener('click', (evento) => {
        evento.preventDefault();
        alert('Logout realizado. Redirecionando para a página de login...');
        window.location.href = 'login.html';
    });
});