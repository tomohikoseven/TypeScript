export function sumTriangularNumbers(n:number) {
	if( Number(n) <= 0 ) return 0;
	let numList: number[] = [];
	for( let i = 1; i <= n; i++ ){
		numList.push( (i*(i+1)) / 2 );
	}
  return numList.reduce( (sum ,x) => sum + x, 0 );
}

console.log( sumTriangularNumbers(4) );
