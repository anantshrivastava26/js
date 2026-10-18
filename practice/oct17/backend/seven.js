let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];


const express = require('express');
const app = express();


app.get('/users',(req, res)=>{
    res.json(users)
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});