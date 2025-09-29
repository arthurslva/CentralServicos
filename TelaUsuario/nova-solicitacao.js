document.addEventListener('DOMContentLoaded', () => {
    const novaSolicitacaoForm = document.getElementById('novaSolicitacaoForm');

    novaSolicitacaoForm.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const prioridade = document.getElementById('prioridade').value;
        const setor = document.getElementById('setor').value;
        const equipamento = document.getElementById('equipamento').value;
        // O campo de imagem precisa de um tratamento especial, então vamos ignorá-lo por enquanto.

        // Lógica do backend aqui para enviar os dados
        console.log("Dados do formulário para o backend:", { titulo, descricao, prioridade, setor, equipamento });
        
        alert(`Solicitação de "${titulo}" enviada com sucesso!`);
        novaSolicitacaoForm.reset();
        
        // Em vez de voltar, você pode redirecionar para a tela inicial
        window.location.href = 'index.html'; 
    });
});