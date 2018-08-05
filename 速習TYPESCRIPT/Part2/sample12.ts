let triangle: (base: number, height: number) => number = function (base: number, height: number): number {
    return base * height / 2;
}
alert( triangle(10, 5) );
window.close();