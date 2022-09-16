const express = require('express')
const colors= require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} =  require('./middleware/errorMiddleware')
const port = process.env.PORT || 8000
const connectDB = require('./config/db')

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/courses', require('./routes/courseRoutes'))
app.use('/api/students', require('./routes/studentRoutes'))
app.use('/api/topics', require('./routes/topicRoutes'))


app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})
