class Rhino {
  aa : string;
}
class Elephant {
  bb : number;
}
class Snake {
  cc : string;
}

let zoo = [ new Rhino(), new Elephant(), new Snake() ];
zoo[0].aa = "1";  // error TS2339: Property 'aa' does not exist on type 'Rhino | Elephant | Snake'.

