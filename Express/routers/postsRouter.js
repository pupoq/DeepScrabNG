const express = require('express')
const models = require('../Modules')
const postsRouter = express.Router()

postsRouter.get('/', async (req, res) => {
    const courses = await models.Post.find({})
    res.status(200).send(courses)
})


postsRouter.post('/', async (req,res) => {
    let {description, owner, img, fullName, createdAt} = req.body

    let newPost = new models.Post({
        img, 
        description, 
        owner, 
        fullName,
        createdAt,
    })

    const user = await models.User.findById({_id: owner})

    for(let item of user.friends){
        const friend = await models.User.findById({_id: item})
        friend.news.push(newPost._id)
        await friend.save()
    }

    newPost.save()

    res.status(200).send(newPost)
})

postsRouter.get('/:id', async (req, res) => {
    const owner = req.params.id
    const posts = await models.Post.find({owner: owner})

    res.status(200).send(posts)
})

postsRouter.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    const deletedPost = await models.Post.deleteOne({"_id": id})
    console.log(deletedPost)

    res.status(200).send(deletedPost)
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