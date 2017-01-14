var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jQuery");

var AddTodo = require("AddTodo");

describe("AddTodo",()=>{
  it("should exits",()=>{
    expect(AddTodo).toExist();
  });
  it("should check for the correct inputs",()=>{
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo renderTodo={spy}/>);
    addTodo.refs.addtodo.value = "surath";
    var $el = $(ReactDOM.findDOMNode(addTodo));
    TestUtils.Simulate.submit($el.find("form")[0])
    expect(spy).toHaveBeenCalledWith("surath");

  });

})
