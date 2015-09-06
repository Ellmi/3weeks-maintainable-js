var Backbone = require('backbone');
var CustomMacthers = require('./custom-matchers');
var LikedPlacesView = require('../src/js/views/liked-places-view');

describe('LikedPlacesView', function(){
    'use strict';

    beforeEach(function() {
        jasmine.addMatchers(CustomMacthers);
    });

    it('#initialize', function(){
        var likedPlacesView = new LikedPlacesView(new Backbone.Model());
        expect(likedPlacesView).toBeDefined();
    });

    describe('#render', function() {
        it('0 items', function() {
            var model = new Backbone.Model({likedPlaces:[]});
            var likedPlacesView = new LikedPlacesView(model);
            var html = likedPlacesView.render();
            expect(html.find('li')).not.toExist();
        });

        it('1 items', function() {
            var model = new Backbone.Model({likedPlaces:[{'place':'Place'}]});

            var likedPlacesView = new LikedPlacesView(model);
            var html = likedPlacesView.render();
            expect(html.find('li')).toExist();

            expect(html.find('li'))
                .toContainText('Place');
        });
    });
});
