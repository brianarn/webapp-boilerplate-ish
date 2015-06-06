/*
 * A simple module to manage all of our socket events etc
 */
'use strict';

var io = require('socket.io-client');

var actions = require('./actions');

var socket = io(location.href);

socket.on('connect', function () {
  console.log('Connected!');

  socket.on('timestamp', function (timestamp) {
    console.log('Timestamp received: %s', timestamp);
    actions.timestamp(timestamp);
  });
});

module.exports = socket;
