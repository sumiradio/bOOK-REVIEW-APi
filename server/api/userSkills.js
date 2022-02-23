const router = require('express').Router()
const {User, Skill} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await