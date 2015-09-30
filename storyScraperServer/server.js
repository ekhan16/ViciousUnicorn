var express = require('express'),
  app = express(),
  cors = require('cors'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  server = require('http').createServer(app);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));

require('./config/middleware.js')(app, express);

app.set('port', 3000);

server.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
});

module.exports = app;
