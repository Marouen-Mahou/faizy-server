"use strict";
var express = require('express')
var router = express.Router()

// Controllers
var contact = require('../controllers/contactController')

//Routes
router.post('/sendEmail', contact.sendEmail)

//Export
module.exports = router
     