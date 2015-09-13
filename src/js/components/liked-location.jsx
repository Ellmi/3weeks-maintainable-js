var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
            <li className="like">{this.props.location.name}</li>
        );
    }
});
