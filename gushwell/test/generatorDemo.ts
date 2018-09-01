function* generator(i:number) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

for( let g of gen )
{
    console.log(g);
}

//console.log(gen.next().value);

//console.log(gen.next().value);
