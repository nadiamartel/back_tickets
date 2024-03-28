const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("event", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //CUIT/CUIL identificacion tributaria
        code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        //subtitulo esta coomo NO necesario
        subtitle: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        detail: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        place: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // authorized: {
            // a que se refiere con personas autorizadas a la venta? o mejor dicho, que tipo de dato recibiria este campo?      
        // },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture:{
            type: DataTypes.STRING(1000),
            allowNull: true
        }
    });
}

//pedir a Fer los campos