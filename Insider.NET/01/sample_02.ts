var Message: string;
class Cat {
    age: number;
    weight: number;
}
var myCat = new Cat();
myCat.age = 3;
myCat.weight = 5.1;

Message = "�����̔L��" + myCat.age + "�΂ŁA�̏d��" + myCat.weight + "kg�ł�";

alert(Message);