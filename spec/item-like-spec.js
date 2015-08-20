describe('item like test', function () {
    'use strict';

    it('should responce correctly when user click like button', function () {
        var fixture, itemLike, renderView;
        fixture = setFixtures('<div id="results"><h5>Place</h5>' +
        '<a href="#">Like</a></div>>');

        itemLike = new ItemLike();
        itemLike.items = [];
        renderView = jasmine.createSpy('renderView');
        itemLike.renderView=renderView;
        $('#results a').click();

        expect(itemLike.items.length).toBe(1);
        expect(itemLike.items[0]).toBe('Place');
        expect($('#results a').text()).toBe('Liked');
        expect(renderView).toHaveBeenCalled();

        $('#results a').click();
        expect(itemLike.items.length).toBe(0);
        expect($('#results a').text()).toBe('Like');
        expect(renderView).toHaveBeenCalled();
    });
    it('should render liked item on page', function () {
        var fixture, itemLike, data;
        data = ['Liked Location'];
        fixture = setFixtures('<div id="likedPlaces"><ul></ul></div>');
        itemLike = new ItemLike();
        itemLike.items = data;
        itemLike.renderView();
        expect(fixture.html()).toBe('<div id="likedPlaces"><ul>' +
        '<li class="like">Liked Location</li></ul></div>')
    })
});
