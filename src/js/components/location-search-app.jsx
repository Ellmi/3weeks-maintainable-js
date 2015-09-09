var React = require('react');
var _ = require('lodash');
var $ = require('jquery');


var SearchForm = require('./search-form.jsx');
var SearchResults = require('./results-list.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {results: [],likedPlaces:[]};
    },

    handleSearch: function (text){
        var name = text,
            self = this,
            filter = name ? '?name=' + name : '' ;
        var LOCATION_SERVICE_API = 'http://location-backend-service.herokuapp.com/locations';
        $.ajax({
            url: LOCATION_SERVICE_API + filter,
            success: function(data){
                self.state.results = data;
            },
            dataType: 'json'
        });
    },

    render: function(){
        return (
        <div>
        <div className="row">
            <div id="searchForm">
                <SearchForm onSearch={this.handleSearch}/>
            </div>
        </div>
        <div className="row">
            <hr className="large-12 columns" />
        </div>
        <div className="row">
            <div id="search-results">
                <div id="searchResults" className="large-8 medium-8 columns">
                    <h4>Search results</h4>
                    <div id="results">
                        <SearchResults />
                    </div>
                </div>
            </div>
            <div id="liked-places">
                <div id="likedPlaces"  className="large-4 medium-4 columns">
                    <h4>Places I liked</h4>
                    <nav>
                        <ul>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        </div>
        )
    }
});