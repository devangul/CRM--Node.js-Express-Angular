const express = require('express')

const app = express();


app.get('/', (req, res)=>{
    res.status(200).json({massage: 'Working'})
})



app.listen(5000, ()=>{
    console.log('Server start!')
})