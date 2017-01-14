var $= require("jquery");
module.exports ={
  setTodos:function(todos) {
    if($.isArray(todos)){
    localStorage.setItem("todos",JSON.stringify(todos));
      return todos;
    }
  },
  getTodos:function(){
    var stringTodos = localStorage.getItem("todos");
    var todos = [];
    try{
    todos = JSON.parse(stringTodos);
    }catch(e){

    }
    return $.isArray(todos)?todos:[];

  },
  filteredTodos:function(todos,showCompleted,searchText){
    var filteredTodos = todos;
      filteredTodos = filteredTodos.filter((todo)=>{
        return !todo.completed||showCompleted;
      });

      //sort an array based on completed status
      filteredTodos.sort((a,b)=>{
          if(!a.completed && b.completed){
            return -1;
          } else if (a.completed && !b.completed) {
            return 1;
          } else{
            return 0;
          }
      })

      //filter by searchText
      filteredTodos =  filteredTodos.filter((todo)=>{
        var text = todo.text.toLowerCase();
       return searchText.length===0|| text.indexOf(searchText) >-1;

       })

    return filteredTodos;

  }

}
