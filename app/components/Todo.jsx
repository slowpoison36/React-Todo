var React = require("react");
var moment = require("moment");
var Todo = React.createClass({
     render:function(){
       var {id,text,completed,createAt,completedAt} = this.props;
       var renderMoment = ()=>{
         var message = "Created ";
         var timeStamp = createAt;
         if(completed){
           message = "completed at";
           timeStamp = completedAt;
         }
         return message + moment.unix(timeStamp).format("MMMM Do,YYYY @ h:mm a");

       }
       return (
         <div onClick={ ()=>{
            this.props.onToggle(id);
         } } >
         <input type="checkbox" checked={completed}/>
         {text}
         <p>{renderMoment()}</p>
         </div>
       )
     }
})
module.exports= Todo;
