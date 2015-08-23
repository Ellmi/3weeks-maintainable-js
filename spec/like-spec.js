describe('item like test', function () {
    'use strict';

    it('should render liked item on page', function () {
        var fixture, itemLike, data;
        data = 'Liked Location';
        fixture = setFixtures('<div id="likedPlaces"><ul></ul></div>');
        itemLike = new Like($('#likedPlaces'));
        itemLike.addPlace(data);
        expect(fixture.html()).toBe('<div id="likedPlaces"><ul>' +
        '<li class="like">Liked Location</li></ul></div>')
    })
});
