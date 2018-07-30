class Cat {
    lenght: number;
    weight: number;
    name: string;
    constructor() {
        this.name = "名無し";
    }
}

var myCat = new Cat();
alert("名前は" + myCat.name + "です");
window.close();