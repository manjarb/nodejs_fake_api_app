const express = require('express');
const bodyParser =  require('body-parser');

const app = express();
app.use(bodyParser({limit: '75mb'}));
app.use(bodyParser.json());

require('./routes/thaiYumRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express wil serve up production assets
    // like main.js, main.css
    app.use(express.static('client/dist'));

    // Express will serve up the index.hml file
    // if does not recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);