const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

// NOTE on methods
// app.use works for all HTTP requests.
// app.get only filters for incoming GET requests.
// app.post only filter for incoming POST requests.
// other options: app.delete, app.patch, app.put

app.use(bodyParser.urlencoded({ extended: false })); //used to parse incoming request bodies
app.use(express.static(path.join(__dirname, 'public'))); //necessary, to serve static files (read access ONLY)

app.use('/', (req, res, next) => {
    console.log("This always runs");
    next()
});

// '/admin' path filter, for all routes in adminRoutes
// admin.js routes registered. ORDER MATTERS.
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

const server = http.createServer(app);

server.listen(3000);
