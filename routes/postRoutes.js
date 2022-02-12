"use strict";
var express = require('express')
var router = express.Router()

// Controllers
var post = require('../controllers/postController')

//Routes
router.put('/post/addlike', post.addLike)
router.put('/post/subtractlike', post.subtractLike)

router.post('/post', post.createPost)

router.get('/post', post.allPost)

//Export
module.exports = router
     