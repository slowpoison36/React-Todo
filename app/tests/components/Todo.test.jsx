var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jQuery");

var Todo = require("Todo");

describe("TodoApp",()=>{
  it("should exits",()=>{
    expect(Todo).toExist();
  });
  it("should toggle with id when click handler called",()=>{
    var testData={
      id:100,
      text:"todo component",
      completed:true
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...testData} onToggle={spy}/>)
    todo.setState({todos:[testData]});
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(100);
  })
})
