var React = require('react');
var _ = require('lodash');
var $ = require('jquery');

module.exports = React.createClass({
    getInitialState: function() {
        return {inputValue: ''};
    },

    handleChange: function(){
        this.search(this.state.inputValue);
        this.setState({inputValue: ''})
    },

    handleInput: function(){
        this.setState({inputValue: event.target.value});
    },

    search: function (text){
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
                self.props.parent.setState({results: renderData});
            },
            dataType: 'json'
        });
    },
    render: function(){
        return (
            <form>
                <div  className="large-9 medium-9 columns">
                    <input type="text" id="locationInput" value="" placeholder="Type a location name to search" value={this.state.inputValue} onChange={this.handleInput}/>
                </div>
                <div  className="large-3 medium-3 columns">
                    <input type="button" className="submit button tiny" id="searchButton" value="search" onClick={this.handleChange} />
                </div>
            </form>
        )
    }
});
