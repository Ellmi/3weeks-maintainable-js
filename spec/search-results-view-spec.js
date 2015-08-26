describe('SearchResultsView', function(){
    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
        loadFixtures('search-results.html');
    });

    it('#initialize', function(){
        var searchResultsView = new SearchResultsView(new Backbone.Model());
        expect(searchResultsView).toBeDefined();
    });

    describe('#render', function() {
        it('#render', function() {
            var model = new Backbone.Model({results: []});
            var searchResultsView = new SearchResultsView(model);
            var html = searchResultsView.render();
            expect(html.find('h4')).toExist();
            expect(html.find('.panel')).not.toExist();
        });

        it('#render', function() {
            var model = new Backbone.Model({results: [
                {
                    description: 'This is description',
                    name: 'Melbourne'
                }
            ]});

            var searchResultsView = new SearchResultsView(model);
            var html = searchResultsView.render();
            expect(html.find('h4')).toExist();
            expect(html.find('.panel')).toExist();

            var first = html.find('.panel').first();
            expect(first.find('h5'))
                .toContainText('Melbourne');
        });
    });
});
