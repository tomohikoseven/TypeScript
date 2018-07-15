var Message: string;
class Cat {
    age: number;
    weight: number;
}

var myCat = new Cat();
myCat.age = 3;
myCat.weight = 4.1;
Message = "My Cat's age is " + myCat.age + ", weight is " + myCat.weight;
alert(Message);