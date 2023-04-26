const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Ideia = db.define('Ideia', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  }
})

Ideia.belongsTo(User)
User.hasMany(Ideia)

module.exports = Ideia