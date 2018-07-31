class Cat {
    private name: string;
    public setName(s: string) {
        this.name = s.slice(0, 8);
    }
    public getName(): string {
        return this.name;
    }
}

var myCat = new Cat();
myCat.setName("ああ");
alert("My cat name is " + myCat.getName() + ".");
window.close();