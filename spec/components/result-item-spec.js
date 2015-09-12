describe('ResultItem', function(){
    "use strict";

    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var ResultItem = require('../../src/js/components/result-item.jsx');

    it('#render', function(){
        var result = {name: 'Location', description: "Location description", status: false};
        var changeStatus = jasmine.createSpy('changeStatus');

        var resultItem = TestUtils.renderIntoDocument(
            <ResultItem result={result} changeStatus={changeStatus}/>
        );

        var h6 = TestUtils.findRenderedDOMComponentWithTag(resultItem, 'h6');
        var h5 = TestUtils.findRenderedDOMComponentWithTag(resultItem, 'h5');
        var a =  TestUtils.findRenderedDOMComponentWithTag(resultItem, 'a');

        expect(h5.getDOMNode().textContent).toEqual('Location');
        expect(h6.getDOMNode().textContent).toEqual('Location description');
        expect(a.getDOMNode().textContent).toEqual('Like');

        TestUtils.Simulate.click(a);
        expect(changeStatus).toHaveBeenCalled();
    });
});
