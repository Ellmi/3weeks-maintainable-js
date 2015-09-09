var React = require('react');
var _ = require('lodash');


module.exports = React.createClass({

    render: function(){
        return (
            <div className="panel large-12 columns">
                <h5>PLACE DESCRIPTION</h5>
                <h6>LOCATION</h6>
                <a href="#" className="like button tiny right">Like</a>
            </div>
        )
    }
});
