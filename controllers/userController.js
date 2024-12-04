const User = require('../models/userModel');  // Certifique-se de que o caminho está correto

exports.createUser = async (req, res) => {
    try {
        // Verifique se os dados necessários estão presentes
        const { userName, password, email, birthDate, gender, registDate, nome, weight } = req.body;

        if (!userName || !password || !email || !birthDate || !gender || !registDate || !nome || !weight) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
        }

        const newUser = {
            userName,
            password,
            email,
            birthDate,
            gender,
            registDate,
            nome,
            weight
        };

        const user = await User.create(newUser);  // Presume que você tem uma função 'create' no modelo User
        res.status(201).json(user);  // Retorna o usuário criado com status 201
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });  // Retorna erro 400 em caso de falha
    }
};
