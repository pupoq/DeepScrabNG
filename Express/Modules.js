const schemas = require('./Schemas')
const mongoose = require('mongoose')

const User = new mongoose.model("User", schemas.userSchema)
const Post = new mongoose.model("Post", schemas.postSchema)

module.exports = {
    User,Post
}