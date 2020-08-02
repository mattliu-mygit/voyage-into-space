const express = require('express');
const app = express();
const api = require('./api');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 8081;
app.set('port', process.env.PORT || 8081);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'client', 'build')));

// global.bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({
//   extended: true,
//   limit: '50mb',
//   parameterLimit: 100000
// }))
// app.use(bodyParser.json({
//   limit: '50mb',
//   parameterLimit: 100000
// }))

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://Admin:voyage420@voyage-into-space.je1sn.mongodb.net/voyageintospace?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
  app.listen(port /*app.get('port')*/, function () {
    console.log(
      'API Server Listening on port ' + port /*app.get('port')*/ + '!'
    );
  });
});
