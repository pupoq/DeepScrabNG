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

usersRouter.put('/sex', async (req, res) => {
    const {id, sex} = req.body
    const users = await models.User.findByIdAndUpdate(id, {$set: {sex: sex}})
    res.status(200).send(users)
})

usersRouter.put('/fullname', async (req, res) => {
    const {id, fullName} = req.body
    const users = await models.User.findByIdAndUpdate(id, {$set: {fullName: fullName}})
    res.status(200).send(users)
})

usersRouter.put('/description', async (req, res) => {
    const {id, description} = req.body
    const users = await models.User.findByIdAndUpdate(id, {$set: {description: description}})
    res.status(200).send(users)
})


usersRouter.post('/', async (req, res) => {
    const {fullName, login, password, img, posts, birth, events, followers, following, news} = req.body

    let check = await models.User.findOne({login: login})
    
    if(check){
        res.status(403).send('Логин занят')
    } else {
        let newUser = new models.User({fullName, login, password, img, posts, birth, events, followers, following, news})
        await newUser.save()
        res.status(200).send('User created')
    }  
})

usersRouter.post('/login', async (req, res) => {
    const {login, password} = req.body

    let user = await models.User.findOne({login: login})

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

usersRouter.post('/follow', async (req, res) => {
    const {ownerId, followingId} = req.body
    const ownerUser = await models.User.findById(ownerId)
    const followingUser = await models.User.findById(followingId)


    const message = {
        text: 'Send'
    }

    let userObj = {
        id: ownerUser._id,
        login: ownerUser.login,
        ava: ownerUser.img,
        type: 'friend'
    }

    let checking = true

    let check = followingUser.friends.includes(ownerId)
    for(let item of followingUser.events){
        if(ownerId == item.id){
            checking = false
            break
        }
    }


    if(check == true){
        res.status(200).send({text: 'Already friend'})
    } else if(checking == false){
        res.status(200).send({text: 'Already send'})
    } else {    
                followingUser.events.push(userObj)
                await followingUser.save()
                res.status(200).send(message)           
    }
    
})

usersRouter.post('/accept', async (req, res) => {
    const {id, myId} = req.body

    const user = await models.User.findById(id)
    const myProfile = await models.User.findById(myId)

    let array = myProfile.events

    for(let i = 0; i < array.length; i++){
        if(array[i].login == user.login){
            myProfile.events.splice(i, 1)
            break
        }
    }

    let obj = {
        type: 'message',
        login: myProfile.login
    }   

    user.events.push(obj)
    user.friends.push(myProfile._id)
    myProfile.friends.push(user._id)

    await user.save()
    await myProfile.save()

    let message = {
        text: 'Success'
    }

    res.status(200).send(message)
})


module.exports = usersRouter