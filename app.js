const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Importando as rotas
const userRoutes = require('./routes/userRoutes');  // Caminho correto para as rotas

const app = express();

// Middleware para analisar o corpo das requisições em JSON
app.use(bodyParser.json());

// Registrando as rotas com prefixo '/api'
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});