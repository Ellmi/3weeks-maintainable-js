describe('ResultsList', function(){
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var LikeList = require('../../src/js/components/like-list.jsx');

    it('#render', function(){
        LikeList.__set__('LikedLocation', React.createClass({
            render: function(){
                return (<div className="fake-liked-location"></div>)
            }
        }));

        var results = [
            {name: 'LocationA', description: "LocationA description", status: false},
            {name: 'LocationB', description: "LocationB description", status: true}
        ];

        var like = TestUtils.renderIntoDocument(
            <LikeList results={results}/>
        );

        expect(TestUtils.isCompositeComponent(like)).toBeTruthy();

        var locations = TestUtils.scryRenderedDOMComponentsWithClass(like, "fake-liked-location");
        var h4 = TestUtils.findRenderedDOMComponentWithTag(like, 'h4');

        expect(locations.length).toEqual(1);
        expect(h4.getDOMNode().textContent).toEqual('Places I liked');
    });
});
