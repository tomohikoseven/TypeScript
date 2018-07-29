function getSerialNumber() {
    var origin = 0;
    function countUp(delta: number): number {
        return origin += delta;
    }
    return countUp;
}
var inside = getSerialNumber();
alert(inside(2));
alert(inside(3));
window.close();