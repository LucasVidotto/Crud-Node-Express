const express = require('express');
const app = express()
const userRoute = require('./routes/userRoutes')
const port = 3030;
app.get('/',(req,res) =>{
    res.send('olá mundo')
})
app.listen(port, ()=> console.log('api rodando na porta 3030'))