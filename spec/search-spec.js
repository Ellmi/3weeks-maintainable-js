describe('location search test', function () {
    'use strict';
    var search, request, fixture;
    var TestResponses = {
        search: {
            success: {
                status: 200,
                responseText: [
                    {
                        description: 'Second largest city ' +
                        '(by population) of Australia,a trendy' +
                        ' metropolis with everything you expect' +
                        ' from a big city.',
                        name: 'Melbourne'
                    }
                ]
            }
        }
    };
    it('send ajax request after click search button', function () {
        jasmine.Ajax.install();
        spyOnEvent($(document), 'renderResults');
        fixture = setFixtures('<input type="text" id="locationInput" ' +
        'value="mel"/><div id="searchButton"></div>');
        search = new Search($('#searchButton'));
        search.el.click();
        request = jasmine.Ajax.requests.mostRecent();
        request.respondWith(TestResponses.search.success);
        expect(request.url).toBe('http://location-backend-service.' +
        'herokuapp.com/locations?name=mel');
        expect(request.method).toBe('GET');
        expect('renderResults').toHaveBeenTriggeredOn($(document));
    });

});
