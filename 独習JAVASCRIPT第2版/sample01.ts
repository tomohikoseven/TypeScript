  function closureOuter(){
    var i = 0;
    function f() {
      i++ ;
      return i;
    };
    return f;
  }
  var closure = closureOuter();
  console.log('１回目：' + closure());
  console.log('２回目：' + closure());