var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');

module.exports = Backbone.View.extend({
    initialize: function(likedItemsModel) {
        this.model = likedItemsModel;
        this.model.bind('change:likedPlaces', _.bind(this.render, this));
        this.template = $('#liked-places-template').html();
    },

    el: '#liked-places',

    render: function() {
        var compiled = _.template(this.template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});