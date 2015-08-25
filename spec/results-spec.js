describe('results page', function () {
    'use strict';

    it('should render search results on page', function () {
        var fixture, results, data;
        data = [
            {
                description: 'This is description',
                name: 'Melbourne'
            }
        ];
        fixture = setFixtures('<div id="results"></div>');
        results = new Results();
        results.el = $('#results');
        results.renderView(data);
        expect(fixture.html()).toBe('<div id="results"><div class=' +
        '"panel large-12 columns"><h5>Melbourne</h5>' +
        '<h6>This is description</h6>' +
        '<a href="#" class="like button tiny right">Like</a>' +
        '</div></div>')
    });

    it('should response like event when click like button', function () {
        var fixture, results;
        fixture = setFixtures('<div id="results"><div class="like">' +
        '</div></div>');
        results = new Results($('#results'));
        spyOnEvent($(document), 'like');
        $('.like').click();
        expect('like').toHaveBeenTriggeredOn($(document));
    })
});