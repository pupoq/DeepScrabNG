const express = require('express')
const models = require('../Modules')
const usersRouter = express.Router()

usersRouter.get('/', async (req, res) => {
    const users = await models.User.find({})
    res.status(200).send(users)
})

usersRouter.post('/filter', async (req, res) => {
    const users = await models.User.find({fullName: req.body.fullName})
    res.status(200).send(users)
})

usersRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    const users = await models.User.findById(id)
    res.status(200).send(users)
})


usersRouter.put('/', async (req, res) => {
    const {login, fullName} = req.body
    const users = await models.User.findByIdAndUpdate({login: login}, {$set: {fullName: fullName}})
    res.status(200).send(users)
})

usersRouter.put('/ava', async (req, res) => {
    const {id, img} = req.body
    const users = await models.User.findByIdAndUpdate(id, {$set: {img: img}})
    res.status(200).send(users)
})

usersRouter.post('/', async (req, res) => {
    const {fullName, login, password, img, posts, birth, events, followers, news} = req.body

    let check = await models.User.findOne({login: login})
    
    if(check){
        res.status(403).send('Логин занят')
    } else {
        let newUser = new models.User({fullName, login, password, img, posts, birth, events, followers, likes, news})
        await newUser.save()
        res.status(200).send('User created')
    }  
})

usersRouter.post('/login', async (req, res) => {
    const {login, password} = req.body

    let user = await models.User.findOne({login: login})

    console.log(user)
    if(user !== null){
        if(user.password == password){
            res.status(200).send(user)
        } else {
            res.status(400).send('Неверный пароль')
        }
    } else {
        res.status(401).send('Пользователь не найден')
    }
})

module.exports = usersRouter