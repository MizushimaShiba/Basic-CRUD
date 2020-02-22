const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const index = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use('/', index)

app.listen(port, () => console.log(`${port} is displaying...`));