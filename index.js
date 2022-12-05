require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api/index')
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    return res.status(200).send("<hr><h1 style='padding:250px'>Notification Service Provider </h1><hr>");
});
app.use('/service/api/',routes)
module.exports = app;