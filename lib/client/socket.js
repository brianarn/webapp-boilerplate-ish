/*
 * A simple module to manage all of our socket events etc
 */
'use strict';

var io = require('socket.io-client');

var socket = io(location.href);
socket.on('connect', function () {
  console.log('Connected!');
});

module.exports = socket;
