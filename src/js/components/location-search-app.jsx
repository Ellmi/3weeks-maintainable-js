var React = require('react');
var _ = require('lodash');

var SearchForm = require('./search-form.jsx');
var SearchResults = require('./results-list.jsx');
var LikedLocations = require('./like-list.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {results: []};
    },

    render: function(){
        return (
        <div>
        <div className="row">
            <div id="searchForm">
                <SearchForm parent={this}/>
            </div>
        </div>
        <div className="row">
            <hr className="large-12 columns" />
        </div>
        <div className="row">
            <div id="search-results">
                <SearchResults parent={this} results={this.state.results}/>
            </div>
            <div id="liked-places">
                <LikedLocations results={this.state.results}/>
            </div>
        </div>
        </div>
        )
    }
});