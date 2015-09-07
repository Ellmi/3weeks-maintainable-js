var Backbone = require('backbone');
var $ = require('jquery');
var SearchResultsView = require('../src/js/views/results-view');
var CustomMacthers = require('./custom-matchers');

describe('SearchResultsView', function(){
    'use strict';

    beforeEach(function() {
        jasmine.addMatchers(CustomMacthers);
    });

    it('#initialize', function(){
        var searchResultsView = new SearchResultsView(new Backbone.Model());
        expect(searchResultsView).toBeDefined();
    });

    describe('#render', function() {
        it('no items', function() {
            var model = new Backbone.Model({results: []});
            var searchResultsView = new SearchResultsView(model);
            var html = searchResultsView.render();
            expect(html.find('.panel')).not.toExist();
        });

        it('1 items', function() {
            var model = new Backbone.Model({results: [
                {
                    description: 'This is description',
                    name: 'Melbourne'
                }
            ]});

            var searchResultsView = new SearchResultsView(model);
            var html = searchResultsView.render();
            expect(html.find('.panel')).toExist();

            var first = html.find('.panel').first();
            expect(first.find('h5'))
                .toContainText('Melbourne');
        });

        it('toggle like', function() {
            var model = new Backbone.Model({results: [
                {
                    description: 'This is description',
                    name: 'Melbourne'
                }
            ]});
            var likedModel = new Backbone.Model({'likedPlaces': []});
            var searchResultsView = new SearchResultsView(model,likedModel);
            var html = searchResultsView.render();
            expect($.trim(html.find('a').text())).toEqual('Like');

            html.find('a').trigger('click');
            expect($.trim(html.find('a').text())).toEqual('Liked');

            html.find('a').trigger('click');
            expect($.trim(html.find('a').text())).toEqual('Like');
        });
    });
});
