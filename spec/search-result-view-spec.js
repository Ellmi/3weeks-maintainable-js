var Backbone = require('backbone');

var SearchResultView = require('../src/js/views/result-view');

describe('SearchResultView', function() {
    'use strict';
    it('#initialize', function() {
        var searchResultView = new SearchResultView(new Backbone.Model());
        expect(searchResultView).toBeDefined();
    });
});