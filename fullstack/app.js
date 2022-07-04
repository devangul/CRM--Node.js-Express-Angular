const express = require('express')
const AuthRoutes = require('./routes/auth')

const app = express();


// use для добавления плагинов или роутов
app.use('/api/auth', AuthRoutes)

module.exports = app