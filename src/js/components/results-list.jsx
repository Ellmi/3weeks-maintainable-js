var React = require('react');
var _ = require('lodash');
var ResultItem = require('./result-item.jsx');

module.exports = React.createClass({
    render: function () {
        var searchResults = _.map(this.props.results, function(result){
            return <ResultItem result={result} />;
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