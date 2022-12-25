const express = require('express')
const models = require('../Modules')
const postsRouter = express.Router()

postsRouter.get('/', async (req, res) => {
    const courses = await models.Post.find({})
    res.status(200).send(courses)
})


postsRouter.post('/', async (req,res) => {
    let {description, owner, img} = req.body

    let currentDate = new Date()
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()
    let createdAt = `${day}/${month}/${year}`

    let newPost = new models.Post({
        img, 
        description, 
        owner, 
        createdAt,
        likes: [],
        comments: []
    })

    newPost.save()

    res.status(200).send("Post created")
})

postsRouter.get('/:id', async (req, res) => {
    const owner = req.params.id
    const posts = await models.Post.find({owner: owner})

    res.status(200).send(posts)
})

postsRouter.post('/enroll', async (req, res) => {
    const { userId, courseId } = req.body;

    let car = await models.Car.findById(courseId);

    let user = await models.User.findById(userId);
    user.cars.push(car);

    await models.User.findByIdAndUpdate(userId, user);
    res.send("car added");
});

module.exports = postsRouter