export class G964 {
    
    public static accum(s: string):string {
        // your code
				let strList = s.split("").map( x => x.toUpperCase() );
				let ret: string = "";
				for( let i = 0; i < strList.length; i++ ){
					ret = ret + "-" +  strList[i] + strList[i].toLowerCase().repeat(i);
				} 
				return ret.slice(1);
    }
}

console.log( G964.accum("abcd") );
