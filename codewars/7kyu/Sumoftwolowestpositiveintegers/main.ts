export function sumTwoSmallestNumbers(numbers:number[]) {  
  //Code here
  let sortNumbers = numbers.sort( (a,b) => a - b  );	
  return sortNumbers[0] + sortNumbers[1];
};

console.log( sumTwoSmallestNumbers([19, 5, 42, 2, 77]) );
