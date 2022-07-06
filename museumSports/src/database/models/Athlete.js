// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Athlete';
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

        alias : {
            type: dataTypes.STRING(45),
        },

        avatar : {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        categoryId : {
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
    const Athlete = sequelize.define(alias, cols, config);

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
   /*  Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            as : 'movies',
            foreignKey : 'genre_id'
        })
    } */

    return Athlete
};