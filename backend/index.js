import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import dotenv from 'dotenv'
dotenv.config()

import userRoutes from './routes/users.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'PATCH', 'OPTIONS', 'HEAD'],
    credentials: true
}))
app.use(session({
    secret:process.env.SECRET,
    saveUninitialized: false,
    cookie:{ 
        maxAge: 86400000,
    },
    proxy:true,
    resave: false,
    store: MongoStore.create({
        mongoUrl: process.env.connection_URI,
        ttl: 14*24*60*60,
        autoRemove: 'native'
    })
}))
app.use(express.json())
app.use(express.static('build'))
app.use('/users', userRoutes)


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.connection_URI, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)   // avoid console warnings