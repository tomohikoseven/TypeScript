let x = (a: number ) => 0;
let y = (b: number, s: string) => 0;

y = x; // compile ok.
x = y; // compile ng.
