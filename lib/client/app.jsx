/*
 * Our top-level Application view component
 */
'use strict';

// Baseline dependencies
var bootstrap = require('bootstrap/dist/css/bootstrap.css');
var React = require('react');

var App = React.createClass({
  getInitialState: function () {
    return {
      title: 'Webpack Boilerplate',
      timestamp: (new Date()).toString()
    };
  },
  render: function () {
    return (
      <div class="container">
        <h1>{this.state.title}</h1>
        <p>Time: {this.state.time}</p>
      </div>
    );
  }
});

module.exports = App;
