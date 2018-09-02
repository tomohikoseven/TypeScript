export const minValue = ( values: number[] ) : number => {
	let fil = values.filter( function( x, i, self ){
							return self.indexOf(x) === i;
						} );
  let filSort = fil.sort();
	return Number(filSort.join(""));
}
