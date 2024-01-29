// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('Blogin', 'ramajo', '',{
//     dialect: 'mysql',
//     host: 'localhost', 
//     port: 3306
// })

const Sequelize = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'd5D22ceECB1gBfhbaB1g3eFbdGh44gBD',{
    dialect: 'mysql',
    host: 'roundhouse.proxy.rlwy.net', 
    port: 26476
})

module.exports = sequelize

