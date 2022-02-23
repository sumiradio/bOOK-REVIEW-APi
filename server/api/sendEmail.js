const router = require('express').Router()
const nodeMailer = require('nodemailer')

module.exports = router

router.post('/', (req, res, next) => {
  const {email, targetId, skillId, currUserId, currUserName} = req.body
  try {
    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'elevate.app.info@gmail.com',
        pass: 'elevateapp123'
      }
    })

    const mailOptions = {
      from: 'elevate.