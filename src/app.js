const express = require('express');
const server = express();
const port = process.env.PORT || 2020;
const start = () =>console.log('Starting server...');
server.listen(port,start());

const {join} = require('path');  //construye la ruta en forma completa
const public = join (__dirname , '../public');
const statics= express.static (public);
server.use(statics);

server.get('/', function (req, res) {
    let file = join(__dirname, 'views','home.html') 
    return res.sendFile (file)
})

server.get('/register', function (req, res) {
    let file = join(__dirname, 'views','register.html') 
    return res.sendFile (file)
})

server.get('/login', function (req, res) {
    let file = join(__dirname, 'views','login.html') 
    return res.sendFile (file)
})