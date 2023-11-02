// funcao para gerar id aleatorio
function gerarID() {
    const id = Math.floor(Math.random() * 9000) + 1000;

    // atualiza a senha
    const passwordElement = document.getElementById('password');
    passwordElement.textContent = id;

    // exibe a senha no tooltip
    const containerPassword = document.querySelector('.container-password');
    containerPassword.classList.remove('hide');

    // desativa o botao
    const button = document.getElementById('button');
    button.disabled = true;
    button.classList.add('disabled-button');
}

//funcao que copia o id gerado
function copiarID() {
    const button = document.getElementById('button');
    
    // so funciona se o botao tiver sido desabilitado
    if (button.disabled) {
        const passwordElement = document.getElementById('password');
        const idToCopy = passwordElement.textContent;

        // cria um input pra poder copiar o id
        const input = document.createElement('input');
        input.value = idToCopy;

        // adiciona o elemento input criado
        document.body.appendChild(input);

        // seleciona o texto desse input no caso o id
        input.select();
        input.setSelectionRange(0, 99999);

        // copia o valor pra area de transferencia
        document.execCommand('copy');

        // remove o elemento do documento
        document.body.removeChild(input);

        // colcoa um texto no hover do tooltip
        const tooltip = document.querySelector('.tooltip');
        tooltip.textContent = 'Código copiado!';
    }
}
