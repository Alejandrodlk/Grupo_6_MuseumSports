// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';

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
        primary: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        productId: {
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
    const Image = sequelize.define(alias, cols, config)

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    Image.associate = function(models){

        Image.belongsTo(models.Product, {
            as : 'product' ,
            foreignKey : 'productId' ,
        })

    }

   /*  Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            as : 'movies',
            foreignKey : 'genre_id'
        })
    } */

    return Image
};