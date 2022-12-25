const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./routers/usersRouter')
const postsRouter = require('./routers/postsRouter')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/users', usersRouter)
app.use('/posts', postsRouter)


const CONNECTION_STRING = "mongodb+srv://Pupoq:Vasness06031412@deepscrap.j2foy3y.mongodb.net/test";

mongoose.connect(CONNECTION_STRING, function(err){
        if(err) return console.log(err);
        app.listen(8080, () => console.log("Сервер запущен"));
    }
);