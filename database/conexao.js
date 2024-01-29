// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('Blogin', 'ramajo', '',{
//     dialect: 'mysql',
//     host: 'localhost', 
//     port: 3306
// })

const Sequelize = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'hcDHBABhcFE-B3-G1eAEHfd1dH-aghGg',{
    dialect: 'mysql',
    host: 'roundhouse.proxy.rlwy.net', 
    port: 19983
})

module.exports = sequelize

