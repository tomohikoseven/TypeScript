function* generator(age) {
    console.log("Hi");
    yield 1;
    console.log("My name is ");
    yield "hello";
    console.log("Tsuyoshi.");
    yield 2;
    console.log(`age ${age}`);
}
let g = generator(46);
for (let gen of g) {
    console.log(gen);
}
