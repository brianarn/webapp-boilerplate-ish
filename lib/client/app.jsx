/*
 * Our top-level Application view component
 */
'use strict';

// Baseline dependencies
var bootstrap = require('bootstrap/dist/css/bootstrap.css');
var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>This is the main app view</h1>
      </div>
    );
  }
});

module.exports = App;
