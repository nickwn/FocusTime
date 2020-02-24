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
var calendar = require('./routes/calendar');
var delet = require('./routes/delete');
var welcome = require('./routes/welcome');
// Create the server instance
var app = express();


// Print logs to the console and compress pages we send
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.json());

// Start the server
app.set('port', process.env.PORT || 3000); // 80 for web, 3000 for development
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/', welcome.view);
app.get('/calendar', calendar.view);
app.get('/sessions', sessions.view);
app.get('/sessions/:id', sessions.view);
app.get('/event/:name', event.viewEvent);
app.get('/add',add.addEvent);
app.get('/delete',delet.deleteEvent);
app.get('/finished', function(request, response){ response.sendfile('finished.html'); });
//app.get('/timer', timer.view);

// Return all pages in the /static directory whenever they are requested at '/'
// e.g., http://localhost:3000/index.html maps to /static/index.html on this machine
app.use(express.static(__dirname + '/'));

app.listen(app.get('port'), function() {
	console.log("Node.js server running on port %s", app.get('port'));
});
