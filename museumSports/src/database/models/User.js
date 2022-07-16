// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'User';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        activo: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(45),
        },
        preference: {
            type: dataTypes.STRING(45),
        },
        country: {
            type: dataTypes.STRING(45),
        },
        city: {
            type: dataTypes.STRING(45),
        },
        direcction: {
            type: dataTypes.STRING(45),
        },
        typeId: {
            type: dataTypes.INTEGER,
        },
    };

    let config = {
        timestamps: false,
       /*  createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false */
    }
    const User = sequelize.define(alias, cols, config)

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    User.associate = function(models){
        User.belongsTo(models.Type, {
            as : 'type',
            foreignKey : 'typeId'
        })
    }
    
    return User
};