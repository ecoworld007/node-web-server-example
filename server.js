const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send({
        name: 'Himanshu Negi',
        likes: [
            'singing',
            'drawing',
            'dancing',
            'gyming',
            'adventure'
        ]
    })
});

app.get('/about', (req, res) => {
    res.send('<h1>About ME Page</h1>');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'you hit the bad URL'
    })
});

app.listen(3000);