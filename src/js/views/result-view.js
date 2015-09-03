var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../templates/search-result.hbs');

module.exports = Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
    },

    render: function() {
        var html = template(this.model.toJSON());

        return html;
    }
});
