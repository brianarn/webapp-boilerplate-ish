'use strict';

var socket = require('./socket');

var React = require('react');
var App = require('./app.jsx');

React.render(
  <App />,
  document.getElementById('app')
);
