class Component {
    constructor(name) {
        this.name = name;
    }
}
class Frame {
    constructor(name, components) {
        this.name = name;
        this.components = components;
        this.pointer = 0;
    }
    next() {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: undefined
            };
        }
    }
}
let frame = new Frame("Door", [new Component("top"),
    new Component("bottom"),
    new Component("left"),
    new Component("right")
]);
let iteratorResult1 = frame.next();
let iteratorResult2 = frame.next();
let iteratorResult3 = frame.next();
let iteratorResult4 = frame.next();
let iteratorResult5 = frame.next();
console.log(iteratorResult1.value.name);
