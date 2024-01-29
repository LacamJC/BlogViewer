const Sequelize = require('sequelize');
const database = require('./conexao');

const bd_artigos = database.define('bd_artigos', {
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },

    autor: {
        type: Sequelize.STRING
    },

    titulo: {
        type: Sequelize.STRING
    },

    texto: {
        type : Sequelize.TEXT
    },
})

// bd_artigos.sync({force:true});

module.exports = bd_artigos