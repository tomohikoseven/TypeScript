export class G964 {
    
    public static accum(s: string):string {
        // your code
      return s.split("").map( (c,i) => c.toUpperCase() + c.toLowerCase().repeat(i) ).join("-");
    }
}

console.log( G964.accum("abcd") );
