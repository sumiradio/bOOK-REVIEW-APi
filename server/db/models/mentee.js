
const Sequelize = require('sequelize')
const db = require('../db')

const Mentee = db.define('mentee', {
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    validate: {
      [Sequelize.Op.any]: ['Female', 'Non-binary']
    }