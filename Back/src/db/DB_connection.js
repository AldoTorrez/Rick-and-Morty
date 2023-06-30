require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('../models/Favorite.js');
const UserModel = require('../models/User.js');

const sequelize = new Sequelize('rickandmorty', 'postgres', '/Barcoder123',
   { 
      host: 'localhost',
      dialect: 'postgres',
      logging: false,
      native: false 
   }
);

FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, {through: 'user_favorite'});
Favorite.belongsToMany(User, {through: 'user_favorite'});

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
