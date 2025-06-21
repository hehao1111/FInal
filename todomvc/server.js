'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
var learnJson = require('./learn.json');

var app = module.exports = express();
var favicon = require('serve-favicon');

app.use(express.static(__dirname));
app.use(favicon(path.join(__dirname, 'site-assets', 'favicon.ico')));

// Serve the main index.html file
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

Object.defineProperty(module.exports, 'learnJson', {
	set: function (backend) {
		learnJson.backend = backend;
		fs.writeFile(require.resolve('./learn.json'), JSON.stringify(learnJson, null, 2), function (err) {
			if (err) {
				throw err;
			}
		});
	}
});

// Define the port
var PORT = 8081;

// Start the server
app.listen(PORT, function() {
  console.log('Server is running on port', PORT);
});
