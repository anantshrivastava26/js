const express = require('express')
const app = express()

let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

app.get('/users', (req, res) =>{
    res.json(users)
})


const port  = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
    
});

app.get('/', (req, res) => {
    res.redirect('/login')
    
})

app.get('/login', (req, res) =>{
    res.send("You are here for login")
})

app.use('/static', express.static('public'));

app.post('/posting', (req, res) => {
    res.send("Posting")
})
