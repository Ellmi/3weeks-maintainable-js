describe('location search test', function () {
    'use strict';
    var locationSearch, request;
    var onSuccess;
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
    beforeEach(function () {
        jasmine.Ajax.install();

        onSuccess = jasmine.createSpy('onSuccess');

        locationSearch = new LocationSearch();

        locationSearch.search('mel', onSuccess);

        request = jasmine.Ajax.requests.mostRecent();
        expect(request.url).toBe('http://location-backend-service.' +
        'herokuapp.com/locations?name=mel');
        expect(request.method).toBe('GET');
    });

    describe('on success', function () {
        beforeEach(function () {
            request.respondWith(TestResponses.search.success);
        });

        it('calls onSuccess with an array of Locations', function () {
            expect(onSuccess).toHaveBeenCalled();
            var response = request.response;
            expect(response[0].name).toEqual('Melbourne');
        });
    });
});
