var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jQuery");

var Todo = require("Todo");

describe("TodoApp",()=>{
  it("should exits",()=>{
    expect(Todo).toExist();
  })
})
