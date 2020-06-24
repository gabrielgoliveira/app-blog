const Sequelize = require('sequelize');
const connection = require('../database/connection');

const categoriesModel = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    //slug é o titulo formatado sem espaços para entrar na url
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

categoriesModel.sync({force: false}).then(()=>{
    console.log('Created Table: Categories');
});

module.exports = categoriesModel;