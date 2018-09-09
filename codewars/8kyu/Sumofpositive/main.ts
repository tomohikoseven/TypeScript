export function positiveSum(arr:number[]):number {
	if ( arr.length == 0 ) return 0;

  let fil = arr.filter( x => x > 0 );
  if( fil.length == 0 ) return 0;

  return fil.reduce( (pre, cur) => pre+cur );
}

console.log( positiveSum( [0, -1, 1] ) );
console.log( positiveSum( [] ) );
