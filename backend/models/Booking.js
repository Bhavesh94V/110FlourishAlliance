const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Booking = sequelize.define('Booking', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    service: DataTypes.STRING,
    message: DataTypes.TEXT
});
module.exports = Booking;