interface Named {
  name: string;
}

function greet(n: Named) {
  console.log( "Hello, " + n.name);
}

let x :Named;
let y = { name: "Alice", location: "Seattle" };
x = y; // no error.


greet(y);
