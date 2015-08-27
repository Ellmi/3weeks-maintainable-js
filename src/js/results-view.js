var SearchResultsView = Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
        this.model.bind('change:results', _.bind(this.render, this));
        this.template = $('#search-results-template').html();
    },
    el: '#search-results',

    render: function() {
        var compiled = _.template(this.template);
        var html = compiled(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});