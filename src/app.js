const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const routes = require('./routes/index');
const cors = require('cors');
// const notFound = require('./middlewares/notFound');

require('./db.js');

const server = express();

server.name = 'ticketera';


server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
// server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
const corsOptions = {origin: '*',}

server.use(cors(corsOptions));

server.disable('x-powered-by');

// server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// server.use(notFound)

module.exports = server;
