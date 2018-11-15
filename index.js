const express = require('express');
const bodyParser =  require('body-parser');

const app = express();
app.use(bodyParser({limit: '75mb'}));
app.use(bodyParser.json());

require('./routes/thaiYumRoutes')(app);