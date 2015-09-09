var React = require('react');
var _ = require('lodash');
var $ = require('jquery');


var SearchForm = require('./search-form.jsx');
var SearchResults = require('./results-list.jsx');
var LikedLocations = require('./like-list.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {results: []};
    },

    handleSearch: function (text){
        var name = text,
            self = this,
            filter = name ? '?name=' + name : '' ;
        var LOCATION_SERVICE_API = 'http://location-backend-service.herokuapp.com/locations';
        $.ajax({
            url: LOCATION_SERVICE_API + filter,
            success: function(datas){
                var renderData = _.map(datas, function(data){
                    data.status=false;
                    return data;
                });
                self.setState({results: renderData});
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