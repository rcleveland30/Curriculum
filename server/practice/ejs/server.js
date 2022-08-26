const express = require('express');
const server = express();

server.use(express.json());
server.use('/css', express.static(__dirname + "/css"))
server.use('/js', express.static(__dirname + "/js"))
server.set('view engine', 'ejs');

const navs = ['About','Contact','Gallery'];

server.get('/', (req,res) => {
    res.render('pages', {template: 'landing', isAuthenticated: false, navs});
})

server.post('/login', (req,res) => {
    res.json({redirectURL: '/welcome'})
})

server.get('/logout', (req,res) => {
    res.json({redirectURL: '/'})
})

server.listen(8080, () => {
    console.log('The server is running on Port 8080')
})

server.get('/welcome', (req,res) => {
    res.render('pages', {template: 'gallery', isAuthenticated: true, navs})
})

server.get('/about', (req,res) => {
    res.render('pages', {template: 'about', isAuthenticated: true, navs})
})

server.get('/contact', (req,res) => {
    res.render('pages', {template: 'contact', isAuthenticated: true, navs})
})

server.get('/gallery', (req,res) => {
    res.render('pages', {template: 'gallery', isAuthenticated: true, navs})
})
