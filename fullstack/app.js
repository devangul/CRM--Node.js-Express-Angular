const express = require('express')
const BodyParser = require('body-parser')
const AuthRoutes = require('./routes/auth')
const AnalyticsRoutes = require('./routes/analytics')
const OrderRoutes = require('./routes/order')
const CategoryRoutes = require('./routes/category')
const PositionRoutes = require('./routes/position')



const app = express();

//urlencoded необходим для обработки приходящих url (С клиента(Angular))
app.use(BodyParser.urlencoded({extended: true}))
//для граматного парсинга json
app.use(BodyParser.json())


// use для добавления плагинов или роутов
app.use('/api/auth', AuthRoutes)
app.use('/api/analytics', AnalyticsRoutes)
app.use('/api/category', CategoryRoutes)
app.use('/api/order', OrderRoutes)
app.use('/api/position', PositionRoutes)


module.exports = app