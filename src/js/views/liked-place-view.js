var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');

var template = require('../templates/liked-place.hbs');

module.exports = Backbone.View.extend({
    initialize: function(likedItemsModel) {
        this.model = likedItemsModel;
    },

    render: function() {
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this.$el;
    }
});