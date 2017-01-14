var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");
var TodoAPI = require("TodoAPI");



var TodoApp = React.createClass({
  getInitialState:function() {
    return {
      showCompleted:false,
      searchText:"",
      todos:TodoAPI.getTodos()
    }
  },
  handleAddtodo:function(text){
    this.setState({
      todos:[...this.state.todos,
        {
          id:uuid(),
          text:text,
          completed:false,
          createAt:moment().unix(),
          completedAt:undefined
        }
      ]


    })
  },
  componentDidUpdate:function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleToggle:function(id){
   var updatedTodos= this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix():undefined;
      }
      return todo;
    })
    this.setState({todos:updatedTodos});
  },
  handleTodoSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    })
  },

  render:function(){
      var that = this;
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos = TodoAPI.filteredTodos(todos,showCompleted,searchText);
    return(
      <div className="row" className="main">
        <div className="columns small-centered medium-6 large-4">
        <TodoSearch onSearch={this.handleTodoSearch}/>
          <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
          <AddTodo renderTodo={this.handleAddtodo}/>
          </div>
      </div>
    )

  }

});

module.exports = TodoApp;
