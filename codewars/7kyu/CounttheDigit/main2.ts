export class G964 {
    public static nbDig(n:number, d:number) {
			let squareList: number[] = [];
			for( let i = 0; i <= n; i++ ){
				squareList.push( Math.pow(i,2) ); 
			}
			let count: number = 0;
			for( let i = 0; i < squareList.length; i++ ){
				count += squareList[i].toString().split(d.toString()).length -1;
			}
			return count;
    }
}

console.log( G964.nbDig(10,1) );
