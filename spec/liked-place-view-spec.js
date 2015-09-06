var Backbone = require('backbone');
var CustomMacthers = require('./custom-matchers');
var LikedPlaceView = require('../src/js/views/liked-place-view');

describe('LikedPlacesView', function(){
    'use strict';

    beforeEach(function() {
        jasmine.addMatchers(CustomMacthers);
    });

    it('#initialize', function(){
        var likedPlaceView = new LikedPlaceView(new Backbone.Model());
        expect(likedPlaceView).toBeDefined();
    });

    describe('#render', function() {

        it('single item', function() {
            var model = new Backbone.Model({'place':'Place'});

            var likedPlaceView = new LikedPlaceView(model);
            var html = likedPlaceView.render();
            expect(html.find('li')).toExist();

            expect(html.find('li').text()).toEqual('Place');
        });
    });
});
