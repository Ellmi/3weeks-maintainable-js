var SearchResultsView = Backbone.View.extend({
    initialize: function(resultsModel,likedItemsModel) {
        this.model = resultsModel;
        this.likedItemsModel = likedItemsModel;
        this.model.bind('change:results', _.bind(this.render, this));
        this.template = $('#search-results-template').html();
    },
    events: {
        'click .like': 'toggleLike'
    },

    toggleLike: function(e) {
        e.preventDefault();
        var placeName = $('h5', $(e.currentTarget.parentElement)).text();
        var items = this.likedItemsModel.get('likedItems');
        var alreadyInLikedPlaces = _.findWhere(items, placeName);
        if(!alreadyInLikedPlaces){
        items.push(placeName);
        this.likedItemsModel.trigger('change:likedItems', items);
        }
    },
    el: '#search-results',

    render: function() {
        var compiled = _.template(this.template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});