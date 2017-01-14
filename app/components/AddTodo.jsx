var React = require("react");

var AddTodo = React.createClass({
 handleTodo:function(e){
      e.preventDefault();
      var todoItem = this.refs.addtodo.value;
      if(todoItem.length>0){
        this.refs.addtodo.value = "";
        this.props.renderTodo(todoItem);
      } else {
        this.refs.addtodo.focus();
      }
},
  render:function(){
    return(
      <div>
        <form  onSubmit={this.handleTodo}>
            <input type="text" ref="addtodo" placeholder="add todos"/>
            <input type="submit" value="AddTodo" className="button expanded"/>
        </form>
      </div>
    )
  }
})

module.exports=AddTodo;
