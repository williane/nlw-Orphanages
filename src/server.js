const express = require('express');
const path = require('path');
const pages = require('./pages.js');
const server = express();

server
// utilizar obody no req
    .use(express.urlencoded({extended:true}))
// utilizando os arquivos staticos
    .use(express.static('public'))
//configurando a tempate engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
//rotas da aplicação
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage);

server.listen(5500);