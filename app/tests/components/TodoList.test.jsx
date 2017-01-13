var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jQuery");

var TodoList = require("TodoApp");
var Todo = require("Todo");

describe("TodoList",()=>{
  it("should exits",()=>{
    expect(TodoList).toExist();
  })

  it("should render one component for each item",()=>{
    var todos = [
      {
        id:1,
        text:"do something"
      },
      {
        id:2,
        text:"do some more"
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
    var componentList = TestUtils.scryRenderedComponentsWithType(todoList,Todo);
    expect(componentList.length).toBe(todos.length);
  })
})
