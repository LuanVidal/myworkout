const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // Verifique se o caminho está correto

// Rota para criar um novo usuário
router.post('/users', userController.createUser);

// Rota para buscar um usuário por ID
router.get('/users/:id', userController.getUser);

// Rota para atualizar um usuário por ID
router.put('/users/:id', userController.updateUser);  // Verifique se updateUser está corretamente importado

// Rota para excluir um usuário por ID
router.delete('/users/:id', userController.deleteUser);

// Exportando as rotas
module.exports = router;
