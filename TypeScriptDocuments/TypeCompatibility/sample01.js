function greet(n) {
    console.log("Hello, " + n.name);
}
var x;
var y = { name: "Alice", location: "Seattle" };
x = y; // no error.
greet(y);
