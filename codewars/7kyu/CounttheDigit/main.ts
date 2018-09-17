export class G964 {
    public static nbDig(n:number, d:number) {
      let dStr = d.toString();
			let count: number = 0;
			for( let i = 0; i <= n; i++ ){
				count += (i*i).toString().split(dStr).length -1;
			}
			return count;
    }
}

console.log( G964.nbDig(10,1) );
