const express = require('express')
    
const app = express()

const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})

app.post('/users', (req, res) =>{
    const user = req.body

    res.status(201).json({
        message: 'User Created',
        user
    })
})

app.get('/', (req, res) =>{
    res.send("Server is online")
})