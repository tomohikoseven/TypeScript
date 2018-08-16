var obj = ["A", "B", "C"];
var iterator = obj[Symbol.iterator]();
console.log(typeof iterator);
console.log(iterator.next());
