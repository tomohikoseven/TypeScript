export function repeatStr (n:number, s:String):String {
  let ret: string = "";
  for( let i = 0; i < n; i++ ){
    ret += s;
  }
  return ret;
}

console.log( repeatStr( 5, "Hello") );


