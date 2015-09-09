var React = require('react');
var _ = require('lodash');
var LikedLocation = require('./liked-location.jsx');

module.exports = React.createClass({

    render: function () {
        var locations = _.where(this.props.results, {status:true});
        locations = _.map(locations, function(location){
            return <LikedLocation location={location} />;
        });
        return (
            <div id="likedPlaces"  className="large-4 medium-4 columns">
                <h4>Places I liked</h4>
                <nav>
                    <ul>
                        {locations}
                    </ul>
                </nav>
            </div>
        );
    }
});