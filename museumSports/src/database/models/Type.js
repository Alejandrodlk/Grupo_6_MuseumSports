// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Type';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        type: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
    };

    let config = {
        timestamps: false,
       /*  createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false */
    }
    const Type = sequelize.define(alias, cols, config)

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    Type.associate = function(models){
        Type.hasMany(models.User, {
            as : 'users',
            foreignKey : 'typeId'
        })
    }
    
    return Type
};