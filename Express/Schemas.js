const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: String,
    login: String,
    password: String,
    posts: Array,
    img: String,
    friends: Array,
    events: Array,
    news: Array,
    description: String,
    sex: Boolean
})

const postSchema = new Schema({
    img: String,
    description: String,
    owner: String,
    fullName: String,
    createdAt: String,
})


module.exports = {
    userSchema, 
    postSchema,
}