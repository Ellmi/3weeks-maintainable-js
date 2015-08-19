describe('search page', function () {
    'use strict';
    it('should get correct user input and ' +
    'do search when user click search button', function () {
        var searchPage, search, fixture;
        fixture = setFixtures('<input value="mel" ' +
        'id="locationInput"/>');

        searchPage = new SearchPage();
        searchPage.searcher = jasmine.createSpy('searcher');
        search = jasmine.createSpy('search');
        searchPage.searcher.search = search;
        searchPage.searchButtonHandler();

        expect(searchPage.searchValue).toBe('mel');
        expect(search).toHaveBeenCalled();
    });
    it('should render search results on page', function () {
        var fixture, searchPage, data;
        data = [
            {
                description: 'This is description',
                name: 'Melbourne'
            }
        ];
        fixture = setFixtures('<div id="results"></div>');
        searchPage = new SearchPage();
        searchPage.renderView(data);
        expect(fixture.html()).toBe('<div id="results"><div class=' +
        '"panel large-12 columns"><h5>Melbourne</h5>'+
        '<h6>This is description</h6>'+
        '<a href="#" class="like button tiny right">Like</a>'+
        '</div></div>')})
});