const express = require('express');

const server = express();

server.use(express.json())

server.listen(8080, () => {
    console.log('The server is listening @ PORT 8080')
});

server.get('/name', (req, res) => {
    res.json( {"firstname": "John", "lastname": "Doe"} )
})

server.post('/name', (req, res) => {
    const {firstname, lastname} = req.body
    const fullName = firstname + ' ' + lastname;
    res.json({ "fullName": fullName })
})

server.post('/age', (req, res) => {
    const {myAge} = (req.body)
    res.json( {"message": `You are ${myAge} years old`} )
})

server.post('/money', (req, res) => {
    const {checking, savings} = req.body;
    const totalAmt = checking + savings;
    res.json({ "message": `You have ${totalAmt} in your account.` })
})

server.get('/digital-crafts/cohort/:year', (req,res) => {
    console.log('year', req.params.year)
    res.json({"message": `I study at the DigitalCrafts ${req.params.year} cohort`})
});

server.get('/user/:user', (req,res) => {
    res.json({"message": `Hello ${req.params.user}`})
})