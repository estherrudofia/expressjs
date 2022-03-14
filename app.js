const express = require('express');

// load express
const app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

const port = process.env.port || 8000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
    // Without ejs
    // res.sendFile(__dirname + '/peace.html');
    res.render('app');
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port);
console.log('Listening on port 8000...');