export class Kata {
	static squareDigits( num: number ) {
		let strNumList = String( num ).split("");
    let squareStrNum = strNumList.map( function( value ) { 
        return Number(value) ** 2;
    });
    return Number(squareStrNum.join(""));
	}
}

console.log( Kata.squareDigits( 91 ) );
