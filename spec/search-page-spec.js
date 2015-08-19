describe('search page', function(){
    'use strict';
    it('should get correct user input and ' +
    'do search when user click search button', function(){
        var searchPage,search,fixture;
        fixture = setFixtures('<input value="mel" ' +
        'id="locationInput"/>');
        search = jasmine.createSpy('search');

        searchPage = new SearchPage();
        searchPage.searchButtonHandler(search);

        expect(searchPage.searchValue).toBe('mel');
        expect(search).toHaveBeenCalled();

    });
});