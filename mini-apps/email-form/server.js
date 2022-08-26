require('dotenv').config();

const express = require ('express');
const path = require ('path');
const sendMail = require('./mail');

const server = express();

process.env.HTTPS = true

server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.resolve(`${__dirname}/public`)))
server.use(express.json());

server.get('/', (req, res) => {
    res.sendFile('./index.html');
});

server.post('/contact', (req,res) => {
    sendMail(req.body, (err, data) => {
        if (err) {
            return res.status(500).json ({ message: err.message || 'Internal server error'})
        }
        return res.json( {message: 'Message sucessfully sent'} )
    });
})

server.listen(8080, () => {
    console.log('The server is running on port 8080.');
});