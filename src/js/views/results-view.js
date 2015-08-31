var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');

var SearchResultView = require('./result-view');

module.exports = Backbone.View.extend({
    initialize: function (resultsModel, likedItemsModel) {
        this.model = resultsModel;
        this.views = [];
        this.likedItemsModel = likedItemsModel;
        this.model.bind('change:results', _.bind(this.render, this));
    },

    events: {
        'click .like': 'toggleLike'
    },

    toggleLike: function (e) {
        e.preventDefault();
        var placeName = $('h5', $(e.currentTarget.parentElement)).text();
        var items = this.likedItemsModel.get('likedPlaces');
        var alreadyInLikedPlaces = _.findWhere(items, {"place":placeName});
        if (!alreadyInLikedPlaces) {
            items.push({"place":placeName});
            this.likedItemsModel.trigger('change:likedPlaces', items);
        }
    },

    createSubView: function (model) {
        return new SearchResultView(new Backbone.Model(model));
    },

    getDom: function (view) {
        return view.render();
    },

    el: '#results',
    render: function () {
        var results = this.model.get('results');
        this.views = _.map(results, _.bind(this.createSubView, this));
        this.$el.html(_.map(this.views, _.bind(this.getDom, this)));

        return this.$el;
    }
});

