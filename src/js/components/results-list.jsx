var React = require('react');
var _ = require('lodash');
var ResultItem = require('./result-item.jsx');

module.exports = React.createClass({

    changeStatus: function(name){
        var locations = this.props.results;
        var location = _.first(_.where(locations, {name: name}));
        location.status = !location.status;

        this.props.parent.setState({results:locations});
    },

    render: function () {
        var self = this;
        var searchResults = _.map(this.props.results, function(result){
            return <ResultItem result={result} changeStatus={self.changeStatus}/>;
        });
        return (
            <div id="searchResults" className="large-8 medium-8 columns">
                <h4>Search results</h4>

                <div id="results">
                    {searchResults}
                </div>
            </div>
        );
    }
});