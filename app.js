const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const express = require('express');

const app = express();

// Configure o diretório de arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(__dirname)); // Isso permite que o Express sirva todos os arquivos estáticos na mesma pasta do servidor

const port = process.env.PORT || 3000; // Porta em que o servidor será executado

const connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'bc8800d416a597',
  password: '80cd619d',
  database: 'heroku_aca0f4254e3bd7d',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'ID.html'), 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erro interno do servidor');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});

app.post('/insert', (req, res) => {
  const { query, values } = req.body;

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados no MySQL:', err);
      res.status(500).json({ error: 'Erro interno no servidor ao inserir dados no MySQL' });
      return;
    }

    console.log('Sucesso ao inserir dados no MySQL!');
    res.json({ success: true });
  });
});

  
