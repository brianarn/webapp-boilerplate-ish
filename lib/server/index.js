/*
 * server/index.js
 *
 * The starting point for our web server, yay
 */
'use strict';

var Hapi = require('hapi');

// Create a server instance, which we'll be exporting
var server = new Hapi.Server();
server.connection({ port: 3000 });

// Routing!
// Static files route
server.route({
  method: 'GET',
  path: '/{static*}',
  handler: {
    directory: {
      path: 'public'
    }
  }
});

// Wire socket.io into the server
var io = require('socket.io')(server.listener);

// Handle socket.io connections
io.on('connection', function (socket) {
  console.log('Socket connected');

  var timer = setInterval(function () {
    var timestamp = (new Date()).toString();
    socket.emit('timestamp', timestamp);
  }, 1000);

  socket.on('disconnect', function () {
    console.log('Socket disconnected');
    clearInterval(timer);
  });
});

// Actually spin up the server now
server.start(function () {
  console.log('Server started');
});

// Make sure we hand the instance back
// (used by grunt-hapi)
module.exports = server;
