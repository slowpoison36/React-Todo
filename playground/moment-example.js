var moment = require("moment");

var now = moment();
var currentTime = now.unix();//
console.log(currentTime);
var current = moment.unix(currentTime);
var formatedTime = current.format("MM D, YY @ h:mm a");
console.log(formatedTime);
var formatedTime = current.format("MMMM Do, YYYY @ h:mm A");
console.log(formatedTime);
