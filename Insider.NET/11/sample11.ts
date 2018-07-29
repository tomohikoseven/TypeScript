var countUp = function () {
    var origin = 0;
    return function (delta: number) {
        return origin += delta;
    };
}();
alert(countUp(2));
alert(countUp(3));
window.close();