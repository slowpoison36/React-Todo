var React = require("react");
var TodoList = require("TodoList");

var TodoApp = React.createClass({
  getInitialState:function() {
    return {
      todos:[
        {
          id:1,
          text:"Work on react project"
        },
        {
          id:2,
          text:"Next is Angular project"
        }
      ]
    }
  },
  render:function(){
    var {todos} = this.state;
    return(
        <TodoList todos={todos} />
    )

  }

});

module.exports = TodoApp;
