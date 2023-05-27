// res.setHeader('Access-Control-Allow-Origin', '*');
const {getCharById} = require('../Controllers/getCharById.js');
const {getCharDetail} = require('../Controllers/getCharDetail.js');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/rickandmorty/character/:id',(req, res)=>{
    getCharById(req, res);
})

app.get('/rickandmorty/detail/:id', (req, res)=>{
    getCharDetail(req, res);
})

app.listen(3001,()=>{console.log('Listening on port: 3001')})