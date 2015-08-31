var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');

var template = require('../templates/liked-places.hbs');

module.exports = Backbone.View.extend({
    initialize: function(likedItemsModel) {
        this.model = likedItemsModel;
        this.model.bind('change:likedPlaces', _.bind(this.render, this));
    },

    el: '#liked-places nav ul',

    render: function() {
        var html = template(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});