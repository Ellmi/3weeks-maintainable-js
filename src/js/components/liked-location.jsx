var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
            <li class="like">{this.props.location.name}</li>
        );
    }
});
