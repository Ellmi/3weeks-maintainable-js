describe('ResultsList', function(){
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var ResultsList = require('../../src/js/components/results-list.jsx');

    it('#render', function(){
        ResultsList.__set__('ResultItem', React.createClass({
            render: function(){
                return (<div className="fake-result-item"></div>)
            }
        }));

        var results = [
            {name: 'LocationA', description: "LocationA description", status: false},
            {name: 'LocationB', description: "LocationB description", status: true}
        ];

        var resultsList = TestUtils.renderIntoDocument(
            <ResultsList results={results}/>
        );

        expect(TestUtils.isCompositeComponent(resultsList)).toBeTruthy();

        var resultItems = TestUtils.scryRenderedDOMComponentsWithClass(resultsList, "fake-result-item");
        var h4 = TestUtils.findRenderedDOMComponentWithTag(resultsList, 'h4');

        expect(resultItems.length).toEqual(2);
        expect(h4.getDOMNode().textContent).toEqual('Search results');
    });
});
