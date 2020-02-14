/**
 * Borrowed from Introduction to Human-Computer Interaction
 * Lab 2
 * --------------
 * Created by: Michael Bernstein
 * Last updated: December 2013
 */

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var sessions = require('./routes/sessions');
var event = require('./routes/event');
var add = require('./routes/add');

// Create the server instance
var app = express();

app.get('/', function(request, response){ response.sendfile('welcome.html'); });

// Print logs to the console and compress pages we send
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.json());
// Return all pages in the /static directory whenever they are requested at '/'
// e.g., http://localhost:3000/index.html maps to /static/index.html on this machine
app.use(express.static(__dirname + '/'));

// Start the server
app.set('port', process.env.PORT || 3000); // 80 for web, 3000 for development
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/sessions', sessions.view);
app.get('/event/:name', event.viewEvent);
app.get('/add',add.addEvent);

app.listen(app.get('port'), function() {
	console.log("Node.js server running on port %s", app.get('port'));
});
