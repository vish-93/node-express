'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

require('./routes/index.js')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, err => {
    if (!!err) {
        console.log(`Error listening on port ${PORT} with ${process.env.NODE_ENV} environment`, err);
    } else {
        console.log(`Listening on port ${PORT} with ${process.env.NODE_ENV} environment`);
    }
});
