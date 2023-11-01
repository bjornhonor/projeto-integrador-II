
const oracledb = require('oracledb');

const dbConfig = {
  user: 'bd150923148',
  password: 'Ybiar8',
  connectString: 'BD-ACD'
};

function gerarIDNumerico() {s
  const charset = '0123456789'; 
  let senha = '';

  for (let i = 0; i < 8; i++) { 
    const indiceAleatorio = Math.floor(Math.random() * charset.length);
    senha += charset.charAt(indiceAleatorio);
  }

  return senha;const oracledb = require('oracledb');
  const dbConfig = {
    user: 'bd150923148',
    password: 'Ybiar8',
    connectString: 'BD-ACD'
  };
  
  function gerarIDNumerico() {
    const charset = '0123456789'; 
    let senha = '';
  
    for (let i = 0; i < 8; i++) { 
      const indiceAleatorio = Math.floor(Math.random() * charset.length);
      senha += charset.charAt(indiceAleatorio);
    }
  
    return senha;
  }
  
  function gerarID() {
    const senhaGerada = gerarIDNumerico();
    const containerPassword = document.getElementById("container-password");
    const passwordElement = document.getElementById("password");
  
    passwordElement.textContent = senhaGerada;
    containerPassword.classList.remove("hide");
  }
  
  function copiarID() {
    const senhaGerada = document.getElementById("password").textContent;
    navigator.clipboard.writeText(senhaGerada).then(function() {
      alert("ID copiada com sucesso!");
    });
  }
  
  function verificarExistenciaDoCliente(clienteId) {
    return new Promise((resolve, reject) => {
      oracledb.getConnection(dbConfig, (err, connection) => {
        if (err) {
          console.error(err.message);
          reject("Erro na conexão com o banco de dados.");
          return;
        }
  
        connection.execute(
          "SELECT * FROM cliente WHERE id = :clienteId",
          [clienteId],
          (err, result) => {
            if (err) {
              console.error(err.message);
              connection.close();
              reject("Erro na consulta ao banco de dados.");
              return;
            }
  
            if (result.rows.length > 0) {
              resolve(); // O cliente com o ID existe
            } else {
              reject(`Cliente com ID ${clienteId} não encontrado`);
            }
  
            connection.close();
          }
        );
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const botoesAdicionarServico = document.querySelectorAll(".adicionar-servico-btn");
  
    botoesAdicionarServico.forEach(function (botao, index) {
      botao.addEventListener("click", function () {
        const clienteIdInput = document.getElementById(`cliente-id-${index + 1}`);
        const clienteId = clienteIdInput.value;
  
        verificarExistenciaDoCliente(clienteId)
          .then(() => {
            alert(`Serviço adicionado à conta do cliente com ID: ${clienteId}`);
            clienteIdInput.value = ""; // Limpar o campo de entrada após a adição do serviço
          })
          .catch((error) => {
            alert(error);
          });
      });
    });
  });
  
}

function gerarID() {
  const senhaGerada = gerarIDNumerico();
  const containerPassword = document.getElementById("container-password");
  const passwordElement = document.getElementById("password");

  passwordElement.textContent = senhaGerada;
  containerPassword.classList.remove("hide");
}

function copiarID() {
  const senhaGerada = document.getElementById("password").textContent;
  navigator.clipboard.writeText(senhaGerada).then(function() {
    alert("ID copiada com sucesso!");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const botoesAdicionarServico = document.querySelectorAll(".adicionar-servico-btn");

  botoesAdicionarServico.forEach(function (botao, index) {
    botao.addEventListener("click", function () {
      const clienteIdInput = document.getElementById(`cliente-id-${index + 1}`);
      const clienteId = clienteIdInput.value;

      // Aqui você pode usar a conexão ao banco de dados para verificar se o ID é existente
      oracledb.getConnection(dbConfig, (err, connection) => {
        if (err) {
          console.error(err.message);
          return;
        }

        connection.execute(
          "SELECT * FROM cliente WHERE id = :clienteId",
          [clienteId],
          (err, result) => {
            if (err) {
              console.error(err.message);
              connection.close();
              return;
            }
            
            if (result.rows.length > 0) {
              alert(`Serviço adicionado à conta do cliente com ID: ${clienteId}`);
            } else {
              alert(`Cliente com ID ${clienteId} não encontrado`);
            }

            connection.close();
          }
        );
      });

      // Limpar o campo de entrada após a adição do serviço
      clienteIdInput.value = "";
    });
  });
});


connection.execute(
  "INSERT INTO  (id) VALUES (:id)",
  [senhaGerada],
  (err, result) => {
    if (err) {
      console.error(err.message);
      connection.close();
      return;
    }

    console.log("ID inserido no banco de dados com sucesso.");
    connection.close();
  }
);

