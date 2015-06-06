/*
 * Our top-level Application view component
 */
'use strict';

var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <h1>This is the main app view</h1>
      </div>
    );
  }
});

module.exports = App;
