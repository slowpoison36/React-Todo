var React = require("react");

var TodoSearch = React.createClass({
  handleSearch:function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchtodo.value;
    this.props.onSearch(showCompleted,searchText);
  },
   render:function(){
     return(
       <div>
          <div>
            <input type="search" ref="searchtodo" onChange={this.handleSearch} placeholder="Search to do"/>
          </div>
          <div>
            <label>
                <input type="checkbox" ref="showCompleted" onChange ={this.handleSearch} />
                Show Completed Todos
            </label>
          </div>
       </div>
     )
   }
})

module.exports = TodoSearch;
