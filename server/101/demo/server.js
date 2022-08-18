const express = require('express');

const server = express();

server.get('/', (req,res) => {
    res.json( { message: "Hello Worlds"} );
    // res.send('Hello Universe.');
})

server.listen(8080, () => {
    console.log('The server is running on Port 8080')
})