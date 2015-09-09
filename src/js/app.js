var $ = require('jquery');
var React = require('react');
var _ = require('lodash');

var LocationSearchApp = require('./components/location-search-app.jsx');

$(function() {

    React.render(<LocationSearchApp />, document.getElementById('container'));
});