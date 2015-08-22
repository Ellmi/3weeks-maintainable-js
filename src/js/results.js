function Results(el) {
    this.el = $(el);
    var that = this;
    this.renderView = function (data) {
        var resultTemplate = _.template('<div class="panel large-12 columns">' +
        '<h5><%= name %></h5>' +
        '<h6><%= description %></h6>' +
        '<a href="#" class="like button tiny right">Like</a>' +
        '</div>');
        var renderedResults = _.map(data, function (result) {
            return resultTemplate(result);
        });
        that.el.empty();
        that.el.append(renderedResults);
    };

    that.el.on('click', '.like', function () {
        $(document).trigger('like', $('h5', this.parentElement).text());
    });
}