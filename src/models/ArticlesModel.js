const Sequelize = require('sequelize');
const connection = require('../database/connection');
const { STRING } = require('sequelize');

const articlesModel = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body : {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

articlesModel.sync({force: false}).then(()=>{
    console.log('Created Table: Articles');
});

module.exports = articlesModel;