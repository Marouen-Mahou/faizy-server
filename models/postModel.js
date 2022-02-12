const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema({
    postId: {
        type: String,
        unique: true,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
})

//below line will automatically generate createdAt & updatedAt fields
postSchema.set('timestamps', true);

module.exports = mongoose.model('Post',postSchema)