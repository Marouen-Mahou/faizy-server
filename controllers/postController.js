"use strict";
var mongoose = require("mongoose");
const Post = mongoose.model('Post');

exports.addLike = async function (req, res){
    try {
      const post = await Post.findOne({postId: req.body.postId})

      if(post) {
        const updatedPost = await Post.findOneAndUpdate({postId: req.body.postId}, {likes: post.likes + 1}, {new: true})
        return res.status(200).json(updatedPost)
      } else {
        return res.status(408).send('PostId not found');
      }
    } catch (error) {
      return res.status(500).send(error);
    }
}

exports.subtractLike = async function (req, res){
  try {
    const post = await Post.findOne({postId: req.body.postId})

    if(post) {
      const updatedPost = await Post.findOneAndUpdate({postId: req.body.postId}, {likes: post.likes - 1}, {new: true})
      return res.status(200).json(updatedPost)
    } else {
      return res.status(408).send('PostId not found');
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}

exports.createPost = async function (req, res) {

  try {
    const newPost = new Post({
      postId: req.body.postId
    })

    newPost.save()
    return res.status(200).json(newPost)
  } catch (error) {
    return res.status(500).send(error);
  }
}

exports.allPost = async function (req, res) {
  try {
    const posts = await Post.find({})
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).send(error);
  }
}

