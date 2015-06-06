var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ port: 3000 });

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

server.start(function () {
  console.log('Server started');
});

module.exports = server;
