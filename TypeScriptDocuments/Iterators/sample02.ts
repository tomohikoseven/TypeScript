var obj= {};
obj[Symbol.iterator] = function(){
  var iterator = {};
  var count = 1;
  iterator.next = function(){
    var iteratorResult = ( count <= 10 )
      ? { value: count++, done:false }
      : { value:undefined, done:true }
    return iteratorResult;
  };
  return iterator;
};

var iterator = obj[Symbol.iterator]();
var iteratorResult;
while(true){
  iteratorResult = iterator.next();
  if(iteratorResult.done) break;
  console.log(iteratorResult.value);
}
