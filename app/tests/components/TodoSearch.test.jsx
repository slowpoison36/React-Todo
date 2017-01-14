var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jQuery");

var TodoSearch = require("TodoSearch");

describe("TodoSearch",()=>{
  it("should exits",()=>{
    expect(TodoSearch).toExist();
  })
  it("should call on change when search text value change",()=>{
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    todoSearch.refs.searchtodo.value="dog";
    TestUtils.Simulate.change(todoSearch.refs.searchtodo);
    expect(spy).toHaveBeenCalledWith(false,"dog");
  });
  it("should call on change when checkbox status change",()=>{
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
      todoSearch.refs.showCompleted.checked=true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true,"");
  })
})
