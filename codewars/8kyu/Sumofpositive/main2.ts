export function positiveSum(arr:number[]):number {
	if ( arr.length == 0 ) return 0;

  let ret: number = 0;
  for( let num of arr ){
    ret += ( num < 0 ) ? 0 : num;
  }
  return ret;
}

console.log( positiveSum( [0, -1, 1] ) );
console.log( positiveSum( [] ) );
