const express = require('express');
const appRoutes = require('./routes/app.routes')
const app = express();


app.set('view engine', 'ejs');

// set view engine to ejs
app.use(express.static('assets'));


const port = process.env.port || 5000;

app.use(appRoutes);


app.listen(port);
console.log(`Listening at port ${port}`);