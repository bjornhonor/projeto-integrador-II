// Função para gerar um número de identificação aleatório
function gerarID() {
    // Gere um número de identificação aleatório, por exemplo, entre 1000 e 9999
    const id = Math.floor(Math.random() * 9000) + 1000;

    // Atualize o elemento de senha com o número gerado
    const passwordElement = document.getElementById('password');
    passwordElement.textContent = id;

    // Exiba a div .container-password
    const containerPassword = document.querySelector('.container-password');
    containerPassword.classList.remove('hide');

    // Desative o botão
    const button = document.getElementById('button');
    button.disabled = true;
    button.classList.add('disabled-button');
}

function copiarID() {
    const button = document.getElementById('button');
    
    // Verifique se o botão está desabilitado
    if (button.disabled) {
        const passwordElement = document.getElementById('password');
        const idToCopy = passwordElement.textContent;

        // Crie um elemento de input para copiar o texto
        const input = document.createElement('input');
        input.value = idToCopy;

        // Anexa o elemento de input ao corpo do documento
        document.body.appendChild(input);

        // Seleciona o texto no input
        input.select();
        input.setSelectionRange(0, 99999);

        // Copia o texto selecionado para a área de transferência
        document.execCommand('copy');

        // Remove o elemento de input
        document.body.removeChild(input);

        // Mostra uma mensagem de feedback
        const tooltip = document.querySelector('.tooltip');
        tooltip.textContent = 'Código copiado!';
    }
}
