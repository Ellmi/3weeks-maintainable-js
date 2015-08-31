var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');

var LikedPlaceView = require('./liked-place-view');

module.exports = Backbone.View.extend({
    initialize: function(likedItemsModel) {
        this.model = likedItemsModel;
        this.views = [];
        this.model.bind('change:likedPlaces', _.bind(this.render, this));
    },

    createSubView: function (model) {
        return new LikedPlaceView(new Backbone.Model(model));
    },

    getDom: function (view) {
        return view.render();
    },

    el: '#liked-places nav ul',

    render: function() {
        var likedPlaces = this.model.get('likedPlaces');
        this.views = _.map(likedPlaces, _.bind(this.createSubView, this));
        this.$el.html(_.map(this.views, _.bind(this.getDom, this)));

        return this.$el;
    }
});