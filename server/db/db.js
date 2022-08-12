// Imports
const Sequelize = require('sequelize')

const pkg = require('../../package.json')

// Initializations
const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')
let config

if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
} else {
  config = {logging: false}
}

const db = new Sequelize(
  process.env.DATABASE_URL || `p