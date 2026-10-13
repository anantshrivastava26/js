require('dotenv').config()
const express = require('express')

const app = express()

app.get('/login', (req,res) => {
    res.send('anant')
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})
