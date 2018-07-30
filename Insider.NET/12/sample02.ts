class Cat {
    length: number;
    weight: number;
    meow(): string {
        return "にゃーん";
    }
    eat() {
        this.length += 0.1;
        this.weight += 0.1;
    }
}

var myCat = new Cat();
myCat.length = 30.5;
myCat.weight = 2.5;
myCat.eat();
alert("私の猫は" + myCat.meow() + "と鳴き、\n体長は" + myCat.length + "cm、体重は" + myCat.weight + "kgです");
window.close();