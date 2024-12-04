const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Conexão com banco de dados

const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    registDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Sincronizar o modelo com o banco de dados
sequelize.sync();

module.exports = User;
