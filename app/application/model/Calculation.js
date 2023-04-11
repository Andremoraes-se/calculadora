const sequelize = require ('sequelize')
const database = require('../../config/database.js');


const Calculation = database.define("calculation",{
    id: {
        type: sequelize.UUID,
        defaultValue:sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull:false,
    },
    values: {
        type: sequelize.STRING,
        allowNull:false,
    },
    result: {
        type: sequelize.FLOAT,
        allowNull:false,
    },
});

module.exports = Calculation;

