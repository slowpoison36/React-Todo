var personA = ["Andrew",25];
var personB = ["jen",32];

function getNameAndAge(name,age){
  return "hi " +  name + " you are "+ age;
}

console.log(getNameAndAge(...personA));
