// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
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
       
    };
    let config = {
        timestamps: false,
       /*  createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false */
    }
    const Category = sequelize.define(alias, cols, config);

    
    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    Category.associate = function(models){

        Category.hasMany(models.Product, {
            as : 'products' ,
            foreignKey : 'categoryId' ,
        })

        Category.hasMany(models.Athlete , {
            as : 'athletes',
            foreignKey : 'categoryId'
        })
    }

    return Category
};