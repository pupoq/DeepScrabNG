const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: String,
    login: String,
    password: String,
    birth: String,
    posts: Array,
    likes: Array,
    img: String,
    followers: Array,
    events: Array,
    news: Array
})

const postSchema = new Schema({
    img: String,
    description: String,
    owner: String,
    likes: Array,
    createdAt: String,
    comments: Array
})

module.exports = {
    userSchema, 
    postSchema
}