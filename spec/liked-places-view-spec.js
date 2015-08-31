var Backbone = require('backbone');

var LikedPlacesView = require('../src/js/views/liked-places-view');

describe('LikedPlacesView', function(){
    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
        loadFixtures('liked-places.html');
    });

    it('#initialize', function(){
        var likedPlacesView = new LikedPlacesView(new Backbone.Model());
        expect(likedPlacesView).toBeDefined();
    });

    describe('#render', function() {
        it('#render', function() {
            var model = new Backbone.Model({likedPlaces:[]});
            var likedPlacesView = new LikedPlacesView(model);
            var html = likedPlacesView.render();
            expect(html.find('li')).not.toExist();
        });

        it('#render', function() {
            var model = new Backbone.Model({likedPlaces:['Place']});

            var likedPlacesView = new LikedPlacesView(model);
            var html = likedPlacesView.render();
            expect(html.find('li')).toExist();

            expect(html.find('li'))
                .toContainText('Place');
        });
    });
});
