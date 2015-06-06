var io = require('socket.io-client');

var socket = io(location.href);
socket.on('connect', function () {
  console.log('Connected!');
});
