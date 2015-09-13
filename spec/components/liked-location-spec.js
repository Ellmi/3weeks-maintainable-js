describe('LikedPlace', function(){
    "use strict";

    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var LikedItem = require('../../src/js/components/liked-location.jsx');

    it('#render', function(){
        var location = {name: 'Liked Location', description: "Liked Location description", status: true};

        var LikedLocation = TestUtils.renderIntoDocument(
            <LikedItem location={location} />
        );

        var likeClass = TestUtils.findRenderedDOMComponentWithClass(LikedLocation, 'like');

        expect(likeClass.getDOMNode().textContent).toEqual('Liked Location');

    });
});
