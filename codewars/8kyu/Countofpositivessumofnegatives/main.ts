export function countPositivesSumNegatives(input: any) {
  if ( input == null ) return [];
  if ( input.length == 0 ) return [];
  let cntPos = input.reduce( (p: number,c: number) => c>0 ? p+1:p, 0 );
  let sumNeg = input.reduce( (p: number,c: number) => c<0 ? p+c:p, 0 );
  return [ cntPos, sumNeg ];
}

console.log( countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] ) );
