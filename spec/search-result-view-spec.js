var $ = require('jquery');
var Backbone = require('backbone');
var SearchResultView = require('../src/js/views/result-view');

describe('SearchResultView', function() {
    'use strict';
    it('#initialize', function() {
        var searchResultView = new SearchResultView(new Backbone.Model());
        expect(searchResultView).toBeDefined();
    });

    describe('#render', function() {
        var data;
        beforeEach(function () {
            data = {
                'description': 'A place description',
                'name': 'Searched Place'
            };
        });

        it('single item', function () {
            var searchResultView =
                new SearchResultView(new Backbone.Model(data));
            var html = searchResultView.render();

            expect($(html).find('h5').text()).toEqual('Searched Place');
            expect($(html).find('h6').text()).toEqual('A place description');
        });
    });
});