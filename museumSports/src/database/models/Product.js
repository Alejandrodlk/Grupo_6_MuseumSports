// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';

    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        title: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        
        description: {
            type: dataTypes.STRING(1000),
            allowNull: false
        },

        price : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },

        discount : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull : true
            //defaultValue : NULL//?????????'
        },

        categoryId : {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        athleteId : {
            type: dataTypes.INTEGER,
            allowNull: false
        }
       
    };

    let config = {
        timestamps: false,
       /*  createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false */
    }
    const Product = sequelize.define(alias, cols, config);

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    Product.associate = function(models){

        Product.hasMany(models.Image, {
            as : 'images' ,
            foreignKey : 'productId' ,
        })

    }


   /*  Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            as : 'movies',
            foreignKey : 'genre_id'
        })
    } */

    return Product
};