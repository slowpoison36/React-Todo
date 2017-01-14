var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jQuery");

var TodoApp = require("TodoApp");

describe("TodoApp",()=>{
  it("should exits",()=>{
    expect(TodoApp).toExist();
  });
  it("should call onhandletoadd when value entered",()=>{
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[]});
      todoApp.handleAddtodo("dog");
    expect(todoApp.state.todos[0].text).toBe("dog");
    //expect createAt to be a number
    expect(todoApp.state.todos[0].createAt).toBeA("number");
  })
  it("should change the completed value when handleToggle called",()=>{
    var testData ={
      id:11,
      text:"test features",
      completed:false,
      createAt:0,
      completedAt:undefined
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos:[testData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA("number");




  })
  it("should remove completedAt when completed is false",()=>{
    var testData ={
      id:11,
      text:"test features",
      completed:true,
      createAt:0,
      completedAt:2
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos:[testData]});
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);




  })
})
